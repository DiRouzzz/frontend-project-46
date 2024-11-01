import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import genDiff from '../src/index.js';

const extention = ['json', 'yaml'];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('gendiff', () => {
  const recurciveResult = fs.readFileSync(path.resolve(__dirname, './__fixtures__/result2.txt'), 'utf8');
  const plainResult = fs.readFileSync(path.resolve(__dirname, './__fixtures__/resultPlain.txt'), 'utf8');
  const jsonResult = fs.readFileSync(path.resolve(__dirname, './__fixtures__/resultJson.txt'), 'utf8');

  describe.each(extention)('compare two %s files', (ext) => {
    const before = path.resolve(__dirname, `./__fixtures__/file3.${ext}`);
    const after = path.resolve(__dirname, `./__fixtures__/file4.${ext}`);
    const expected = genDiff(before, after);

    test('stylish', () => {
      expect(expected).toEqual(recurciveResult);
    });

    test('plain', () => {
      expect(genDiff(before, after, 'plain')).toEqual(plainResult);
    });

    test('tree', () => {
      expect(genDiff(before, after, 'json')).toEqual(jsonResult);
    });
  });
});
