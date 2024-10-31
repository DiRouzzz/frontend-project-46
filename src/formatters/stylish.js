import _ from 'lodash';

const indent = (depth) => '    '.repeat(depth);

const plus = '  + ';
const minus = '  - ';
const nevtral = '    ';

const getValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const keys = Object.keys(value);

  const formattedValue = keys.map((key) => `${indent(depth + 2)}${key}: ${getValue(value[key], depth + 1)}`);
  return `{\n${formattedValue.join('\n')}\n${indent(depth + 1)}}`;
};

export default (data) => {
  const iter = (innerData, depth = 0) => {
    const formattedData = innerData.flatMap((node) => {
      if (node.type === 'added') {
        return `${indent(depth)}${plus}${node.name}: ${getValue(node.value, depth)}`;
      }

      if (node.type === 'removed') {
        return `${indent(depth)}${minus}${node.name}: ${getValue(node.value, depth)}`;
      }

      if (node.type === 'unchanged') {
        return `${indent(depth)}${nevtral}${node.name}: ${getValue(node.value, depth)}`;
      }

      if (node.type === 'changed') {
        return [
          `${indent(depth)}${minus}${node.name}: ${getValue(node.oldValue, depth)}`,
          `${indent(depth)}${plus}${node.name}: ${getValue(node.newValue, depth)}`,
        ];
      }

      if (node.type === 'nested') {
        return `${indent(depth)}${nevtral}${node.name}: ${iter(node.children, depth + 1)}`;
      }

      throw new Error(`"${node.type}" type is not supported by the formatter`);
    });

    return `{\n${formattedData.join('\n')}\n${indent(depth)}}`;
  };
  return iter(data);
};
