import type { AxiosError } from 'axios';

export const KEY = 'isAxiosError';

const isAxiosError = <T extends object = { message: string }>(
  error: unknown
): error is AxiosError<T> => {
  return error instanceof Error && KEY in error && (error as AxiosError)[KEY];
};

export default isAxiosError;
