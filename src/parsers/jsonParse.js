import fs from 'node:fs';
import { cwd } from 'node:process';
import path from 'node:path';

function jsonParse(filepath) {
  return JSON.parse(
    fs.readFileSync(path.resolve(filepath || `${cwd()}/${filepath}`), {
      encoding: 'utf-8',
    }),
  );
}

export default jsonParse;
