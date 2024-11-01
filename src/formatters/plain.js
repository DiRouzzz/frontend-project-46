import _ from 'lodash';

const checkValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (value === '') {
    return "''";
  }
  if (Number.isNaN(Number(value))) {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (node, path) => {
    const result = node
      .filter((nnode) => nnode.type !== 'unchanged')
      .map((n) => {
        const newProperty = _.trim(`${path}.${n.name}`, '.');

        switch (n.type) {
          case 'changed':
            return `Property '${newProperty}' was updated. From ${checkValue(n.oldValue)} to ${checkValue(n.newValue)}`;
          case 'added':
            return `Property '${newProperty}' was added with value: ${checkValue(n.value)}`;
          case 'removed':
            return `Property '${newProperty}' was removed`;
          case 'nested':
            return iter(n.children, newProperty);
          default:
            throw new Error(`Unknown node status! ${node.type} is wrong!`);
        }
      });
    return result.join('\n');
  };
  return iter(tree, '');
};

export default plain;
