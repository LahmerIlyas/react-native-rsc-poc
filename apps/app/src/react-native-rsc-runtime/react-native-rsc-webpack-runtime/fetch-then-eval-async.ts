import { fetchAsync } from './fetch-async';

export async function fetchThenEvalAsync(url: string): Promise<void> {
  try {
    const response = await fetchAsync(url);
    if (response.status === 200) {
      // eslint-disable-next-line no-eval
      return eval(response.body);
    }

  } catch (e) {
    console.error(e);
  }
}
