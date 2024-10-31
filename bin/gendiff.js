#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';
import parseFile from '../src/parsers/parseFile.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('filepath1 filepath2')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(parseFile(filepath1), parseFile(filepath2)));
  })
  .parse(process.argv);
