import stylish from './stylish.js';

function render(tree, format) {
  switch (format) {
    case 'plain':
      return plain(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      return stylish(tree);
  }
}

export default render;
