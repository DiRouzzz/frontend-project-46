import yaml from 'js-yaml';
import fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

export default (filepath) => {
  let file;
  if (path.extname(filepath) === '.json') {
    file = JSON.parse;
  }
  if (path.extname(filepath) === '.yaml' || path.extname(filepath) === '.yml') {
    file = yaml.load;
  }
  return file(
    fs.readFileSync(path.resolve(filepath || `${cwd()}/${filepath}`), {
      encoding: 'utf-8',
    }),
  );
};
