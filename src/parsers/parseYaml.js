import yaml from 'js-yaml';
import fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

function yamlParse(filepath) {
  return yaml.load(
    fs.readFileSync(path.resolve(filepath || `${cwd()}/${filepath}`), {
      encoding: 'utf-8',
    }),
  );
}

export default yamlParse;
