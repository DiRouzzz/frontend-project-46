import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (fileName) => path.resolve(`${__dirname}/__fixtures__/`, fileName);
const result = fs.readFileSync(
  path.resolve(__dirname, './__fixtures__/result.txt'),
  'utf8',
);
test('jsonTest', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(result);
});

test('yamlTest', () => {
  expect(
    genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml')),
  ).toEqual(result);
});
