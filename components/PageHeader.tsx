interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-display font-semibold tracking-tight text-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-body italic text-vibrant-coral">{subtitle}</p>
      )}
    </div>
  );
}
