import React from 'react';
import { useLang } from '@/contexts/LangContext';
import LegalPageLayout, { Section, BulletList } from '@/components/LegalPageLayout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqEn = [
  { q: 'Where do I start?', a: 'Start with Day 1 in the 60-day journey.' },
  { q: 'What if I miss a day?', a: 'You can continue anytime. Progress is not a race.' },
  { q: "I don't know how to pray", a: 'You will learn step by step inside the journey.' },
  { q: 'I feel doubts or struggling', a: 'Go to "If You Need Help Now".' },
  { q: 'Do I need to complete 60 days continuously?', a: 'No, go at your own pace.' },
];

const faqAr = [
  { q: 'من أين أبدأ؟', a: 'ابدأ من اليوم الأول في رحلة الـ 60 يوم.' },
  { q: 'ماذا لو فاتني يوم؟', a: 'يمكنك المتابعة في أي وقت.' },
  { q: 'لا أعرف كيف أصلي', a: 'ستتعلم خطوة بخطوة داخل التطبيق.' },
  { q: 'أشعر بصعوبة أو شكوك', a: 'اذهب إلى "If You Need Help Now".' },
  { q: 'هل يجب إكمال 60 يوم متواصل؟', a: 'لا، تعلم بالسرعة التي تناسبك.' },
];

const Support: React.FC = () => {
  const { t, lang } = useLang();
  const faq = lang === 'en' ? faqEn : faqAr;

  return (
    <LegalPageLayout titleEn="Help & Support" titleAr="المساعدة والدعم">
      {/* Intro */}
      <Section titleEn="We're Here for You" titleAr="نحن هنا لمساعدتك">
        <p>{t(
          'We are here for you. If you are a new Muslim, you are not alone.',
          'نحن هنا لمساعدتك. إذا كنت مسلمًا جديدًا، فأنت لست وحدك.'
        )}</p>
      </Section>

      {/* FAQ */}
      <div className="rounded-2xl border border-border bg-noorly-surface p-5 space-y-3">
        <h2 className="text-noorly-gold font-semibold text-lg">
          {t('Frequently Asked Questions', 'الأسئلة الشائعة')}
        </h2>
        <Accordion type="single" collapsible className="space-y-1">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
              <AccordionTrigger className="text-sm text-noorly-text-2 hover:text-foreground hover:no-underline py-3">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-noorly-text-3">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Technical Help */}
      <Section titleEn="Technical Help" titleAr="الدعم الفني">
        <BulletList items={t(
          'Restart the app,Update the app,Check internet connection',
          'أعد تشغيل التطبيق,حدّث التطبيق,تحقق من الإنترنت'
        ).split(',')} />
      </Section>

      {/* Tips */}
      <Section titleEn="Tips" titleAr="نصائح">
        <BulletList items={t(
          'Take it step by step,Don\'t overwhelm yourself,Consistency > perfection',
          'خذ الأمور بالتدريج,لا تضغط على نفسك,الاستمرارية أهم من الكمال'
        ).split(',')} />
      </Section>

      {/* Contact */}
      <Section titleEn="Support Contact" titleAr="التواصل">
        <a href="mailto:info@noorly.net" className="text-noorly-blue hover:underline">
          info@noorly.net
        </a>
      </Section>

      {/* Closing */}
      <p className="text-center text-noorly-text-3 text-sm pt-4">
        {t(
          'Your journey is beautiful, even if it feels hard sometimes. 🤍',
          'رحلتك جميلة، حتى لو كانت صعبة أحيانًا 🤍'
        )}
      </p>
    </LegalPageLayout>
  );
};

export default Support;
