export const compute = (strands) => {
  const len1 = strands[0].length;
  const len2 = strands[1].length;

  if (!len1 && len2) {
    throw new Error('left strand must not be empty');
  }

  if (len1 && !len2) {
    throw new Error('right strand must not be empty');
  }

  if (len1 !== len2) {
    throw new Error('left and right strands must be of equal length');
  }

  return [...strands[0]].filter((element, index) => element !== strands[1][index]).length;
};
