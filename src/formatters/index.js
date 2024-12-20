import stylish from './stylish.js';
import plain from './plain.js';

const render = (tree, format) => {
  switch (format) {
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      return stylish(tree);
  }
};

export default render;
