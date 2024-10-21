#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { cwd } from 'node:process'

// const a = fs.readFileSync('__fixtures__/file1.json', { encoding: 'utf-8' })
// console.log(a)
// const b = path.resolve('file2.json')
// console.log(b)

console.log(`dir: ${cwd()}`)
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
	return { file1, file2 }
}

export default genDiff

// console.log(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json'))
