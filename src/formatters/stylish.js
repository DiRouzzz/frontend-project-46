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
      const lineSign = (sign, value = node.value) => `${indent(depth)}${sign}${node.name}: ${getValue(value, depth)}`;
      if (node.type === 'added') {
        return lineSign(plus);
      }

      if (node.type === 'removed') {
        return lineSign(minus);
      }

      if (node.type === 'unchanged') {
        return lineSign(nevtral);
      }

      if (node.type === 'changed') {
        return [
          lineSign(minus, node.oldValue),
          lineSign(plus, node.newValue),
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
