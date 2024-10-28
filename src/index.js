#!/usr/bin/env node
/* eslint-disable no-tabs */
import path from 'node:path';
import _ from 'lodash';
import jsonParse from './parsers/jsonParse.js';
import yamlParse from './parsers/parseYaml.js';

function genDiff(filepath1, filepath2) {
  let file1;
  let file2;
  if ((path.extname(filepath1) && path.extname(filepath2)) === '.json') {
    file1 = jsonParse(filepath1);
    file2 = jsonParse(filepath2);
  } else if ((path.extname(filepath1) && path.extname(filepath2)) === '.yaml') {
    file1 = yamlParse(filepath1);
    file2 = yamlParse(filepath2);
  }

  const f1 = Object.entries(file1);
  const f2 = Object.entries(file2);
  const files = _.union(f1, f2).sort();

  let result = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of files) {
    if (!Object.hasOwn(file1, key)) {
      result += `  + ${key}: ${value}`;
    } else if (!Object.hasOwn(file2, key)) {
      result += `  - ${key}: ${value}\n`;
    } else if (
      Object.hasOwn(file1, key) === Object.hasOwn(file2, key)
			// eslint-disable-next-line no-tabs
			&& file1[key] !== file2[key]
    ) {
      if (
        !result.includes(`  - ${key}: ${file1[key]}\n`)
				&& !result.includes(`  + ${key}: ${file2[key]}\n`)
      ) {
        result += `  - ${key}: ${file1[key]}\n`;
        result += `  + ${key}: ${file2[key]}\n`;
      }
    } else if (!result.includes(`    ${key}: ${value}\n`)) {
      result += `    ${key}: ${value}\n`;
    }
  }

  return `{\n${result}\n}`;
}

export default genDiff;
