import yaml from 'js-yaml';
import fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

export default (filepath) => {
  const pathFile = fs.readFileSync(path.resolve(filepath || `${cwd()}/${filepath}`), { encoding: 'utf-8' });
  if (path.extname(filepath) === '.json') {
    return JSON.parse(pathFile);
  }
  if (path.extname(filepath) === '.yaml' || path.extname(filepath) === '.yml') {
    return yaml.load(pathFile);
  }
  return '';
};
