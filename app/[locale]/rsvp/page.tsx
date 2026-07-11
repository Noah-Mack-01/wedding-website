import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import PageHeader from '@/components/PageHeader';
import CodeEntry from '@/components/CodeEntry';
import RsvpForm from '@/components/RsvpForm';
import { getInviteByCode } from '@/lib/rsvp';

interface Props {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ invite?: string }>;
}

export default async function RsvpPage({ params, searchParams }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('rsvp');
  const { invite: code } = await searchParams;

  const result = code ? await getInviteByCode(code) : null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      {result ? (
        <RsvpForm invite={result.invite} attendees={result.attendees} />
      ) : (
        <CodeEntry invalid={Boolean(code)} />
      )}
    </div>
  );
}
