#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import _ from 'lodash';

function genDiff(filepath1, filepath2) {
	const file1 = JSON.parse(
		fs.readFileSync(path.resolve(filepath1 || `${cwd()}/${filepath1}`), {
			encoding: 'utf-8',
		})
	)
	const file2 = JSON.parse(
		fs.readFileSync(path.resolve(filepath2 || `${cwd()}/${filepath2}`), {
			encoding: 'utf-8',
		})
	)

	const f1 = Object.entries(file1);
	const f2 = Object.entries(file2);
	const files = _.union(f1, f2).sort();

	let result = '';

	for (const [key, value] of files) {
		if (!Object.hasOwn(file1, key)) {
			result += `+ ${key}: ${value}`;
		} else if (!Object.hasOwn(file2, key)) {
			result += `- ${key}: ${value}\n`;
		} else if (
			Object.hasOwn(file1, key) === Object.hasOwn(file2, key) &&
			file1[key] !== file2[key]
		) {
			if (
				!result.includes(`- ${key}: ${file1[key]}\n`) &&
				!result.includes(`+ ${key}: ${file2[key]}\n`)
			) {
				result += `- ${key}: ${file1[key]}\n`;
				result += `+ ${key}: ${file2[key]}\n`;
			}
		} else if (!result.includes(`  ${key}: ${value}, \n`)) {
			result += `  ${key}: ${value}, \n`;
		}
	}

	return result;
}

export default genDiff;
