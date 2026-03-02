import { redirect } from '@/i18n/navigation';

export default function LocaleRootPage() {
  redirect({href:'/home', locale: 'en'});
}
