import PageHeader from '@/components/PageHeader';
import MemberCard from '@/components/MemberCard';
import { bridalParty } from '@/data/bridal-party';

export default function BridalPartyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <PageHeader
        title="Bridal Party"
        subtitle="Meet the special people standing by our side"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bridalParty.map((member) => (
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
