#!/usr/bin/env node
import _ from 'lodash';
import parseFile from './parsers/parseFile.js';
import render from './formatters/index.js';

function genDiffBuild(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        name: key, type: 'added', value: obj2[key],
      };
    }

    if (!_.has(obj2, key)) {
      return {
        name: key, type: 'removed', value: obj1[key],
      };
    }

    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        name: key, type: 'nested', children: genDiffBuild(obj1[key], obj2[key]),
      };
    }

    if (obj1[key] !== obj2[key]) {
      return {
        name: key, type: 'changed', oldValue: obj1[key], newValue: obj2[key],
      };
    }

    return {
      name: key, type: 'unchanged', value: obj1[key],
    };
  });

  return result;
}

function genDiff(filepath1, filepath2, format) {
  const parseFile1 = parseFile(filepath1);
  const parseFile2 = parseFile(filepath2);

  const diff = genDiffBuild(parseFile1, parseFile2);
  const result = render(diff, format);

  return result;
}

export default genDiff;
