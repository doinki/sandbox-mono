import type { AxiosError } from 'axios';

import isAxiosError, { KEY } from '../isAxiosError';

describe('isAxiosError', () => {
  test('string', () => {
    expect(isAxiosError(KEY)).toBe(false);
  });

  test('number', () => {
    expect(isAxiosError(1)).toBe(false);
    expect(isAxiosError(1.1)).toBe(false);
  });

  test('boolean', () => {
    expect(isAxiosError(false)).toBe(false);
    expect(isAxiosError(true)).toBe(false);
  });

  test('nil', () => {
    expect(isAxiosError(null)).toBe(false);
    expect(isAxiosError(undefined)).toBe(false);
  });

  test('object', () => {
    expect(isAxiosError({})).toBe(false);
    expect(isAxiosError([])).toBe(false);
    expect(isAxiosError(() => {})).toBe(false);
  });

  test('Error', () => {
    const error = new Error(KEY);

    expect(isAxiosError(error)).toBe(false);
  });

  test('Axios Error', () => {
    const error = new Error(KEY) as AxiosError;

    expect(isAxiosError(error)).toBe(false);

    error.isAxiosError = true;

    expect(isAxiosError(error)).toBe(true);
  });
});
