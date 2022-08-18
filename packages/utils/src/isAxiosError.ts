import type { AxiosError } from 'axios';

export default <T extends object = { message: string }>(
  error: unknown
): error is AxiosError<T> => {
  return (
    error instanceof Error &&
    'isAxiosError' in error &&
    (error as AxiosError).isAxiosError
  );
};
