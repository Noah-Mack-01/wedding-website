import type { Locale } from '@/i18n/config';

export async function getLocalizedData<T>(
  locale: Locale,
  dataFile: string
): Promise<T> {
  const data = await import(`./${locale}/${dataFile}`);
  return data.default ?? data;
}

// Re-export types for convenience
export * from './types';
