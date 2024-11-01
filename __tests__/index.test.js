import path from 'node:path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';
import { describe, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (fileName) => path.resolve(`${__dirname}/__fixtures__/`, fileName);
describe('gendiffFlat', () => {
  const result = fs.readFileSync(path.resolve(__dirname, './__fixtures__/result.txt'), 'utf8');

  test('gendiffFlat1(file1.json & file2.json)', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(result);
  });

  test('gendiffFlat2(file1.yaml & file2.yaml)', () => {
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(result);
  });

  test('gendiffFlat3(file1.yaml & file2.json)', () => {
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.json'))).toEqual(result);
  });
});

describe('gendiffNested', () => {
  const result = fs.readFileSync(path.resolve(__dirname, './__fixtures__/result2.txt'), 'utf8');

  test('gendiffNested1(file3.json & file4.json)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'))).toEqual(result);
  });

  test('gendiffNested2(file3.yaml & file4.yaml)', () => {
    expect(genDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yaml'))).toEqual(result);
  });

  test('gendiffNested3(file3.json & file4.yaml)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.yaml'))).toEqual(result);
  });
});

describe('gendiffPlain', () => {
  const result = fs.readFileSync(path.resolve(__dirname, './__fixtures__/resultPlain.txt'), 'utf8');

  test('gendiffPlain1(file3.json & file4.json)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'plain')).toEqual(result);
  });

  test('gendiffPlain2(file3.yaml & file4.yaml)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.yaml'), 'plain')).toEqual(result);
  });

  test('gendiffPlain3(file3.yaml & file4.json)', () => {
    expect(genDiff(getFixturePath('file3.yaml'), getFixturePath('file4.json'), 'plain')).toEqual(result);
  });
});

describe('gendiffJson', () => {
  const result = fs.readFileSync(path.resolve(__dirname, './__fixtures__/resultJson.txt'), 'utf8');

  test('gendiffJson1(file3.json & file4.json)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.json'), 'json')).toEqual(result);
  });

  test('gendiffJson2(file3.yaml & file4.yaml)', () => {
    expect(genDiff(getFixturePath('file3.yaml'), getFixturePath('file4.yaml'), 'json')).toEqual(result);
  });

  test('gendiffJson3(file3.json & file4.yaml)', () => {
    expect(genDiff(getFixturePath('file3.json'), getFixturePath('file4.yaml'), 'json')).toEqual(result);
  });
});
