import { compute } from './hamming';
const strands = require('./strands.json')

describe('Hamming', () => {
  it('should detect empty strands', () => {
    expect(compute(strands["should detect empty strands"])).toEqual(0);
  });

  it('should detect single letter identical strands', () => {
    expect(compute(strands["should detect single letter identical strands"])).toEqual(0);
  });

  it('should detect single letter different strands', () => {
    expect(compute(strands["should detect single letter different strands"])).toEqual(1);
  });

  it('should detect long identical strands', () => {
    expect(compute(strands["should detect long identical strands"])).toEqual(0);
  });

  it('should detect long different strands', () => {
    expect(compute(strands["should detect long different strands"])).toEqual(9);
  });

  it('should disallow first strand longer', () => {
    expect(() => compute(strands["should disallow first strand longer"])).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  it('should disallow second strand longer', () => {
    expect(() => compute(strands["should disallow second strand longer"])).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  it('should disallow left empty strand', () => {
    expect(() => compute(strands["should disallow left empty strand"])).toThrow(
      new Error('left strand must not be empty'),
    );
  });

  it('should disallow right empty strand', () => {
    expect(() => compute(strands["should disallow right empty strand"])).toThrow(
      new Error('right strand must not be empty'),
    );
  });
});
