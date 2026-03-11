import LandingPage from "@/components/LandingPage";
import { dictionaries } from "@/i18n/dictionaries";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang as keyof typeof dictionaries] || dictionaries.en;
  return <LandingPage dict={dict} />;
}
