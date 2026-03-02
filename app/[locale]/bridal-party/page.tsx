import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/config';
import type { BridalPartyMember } from '@/data/types';
import PageHeader from '@/components/PageHeader';
import MemberCard from '@/components/MemberCard';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function BridalPartyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('bridalParty');
  const { bridalParty } = await import(`@/data/${locale}/bridal-party`);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bridalParty.map((member: BridalPartyMember) => (
          <MemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}
