import React from 'react';
import { useLang } from '@/contexts/LangContext';
import LegalPageLayout, { Section, BulletList } from '@/components/LegalPageLayout';
import { Mail } from 'lucide-react';

const Feedback: React.FC = () => {
  const { t } = useLang();

  return (
    <LegalPageLayout titleEn="Send Feedback" titleAr="إرسال الملاحظات">
      {/* Intro */}
      <Section titleEn="Your Feedback Matters" titleAr="رأيك يهمنا">
        <p>{t(
          'Your feedback matters. Noorly grows with you.',
          'رأيك يهمنا. Noorly يتحسن بفضلك.'
        )}</p>
      </Section>

      {/* What you can send */}
      <Section titleEn="What You Can Send" titleAr="ما يمكنك إرساله">
        <BulletList items={t(
          'Suggestions,Bugs,Content feedback,Feature ideas',
          'اقتراحات,مشاكل,ملاحظات على المحتوى,أفكار جديدة'
        ).split(',')} />
      </Section>

      {/* How to send */}
      <Section titleEn="How to Send" titleAr="طريقة الإرسال">
        <a
          href="mailto:info@noorly.net"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-noorly-orange text-noorly-navy-deep font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          info@noorly.net
        </a>
      </Section>

      {/* Before sending */}
      <Section titleEn="Before Sending" titleAr="قبل الإرسال">
        <BulletList items={t(
          'Describe the issue,When it happened,Your device (if possible)',
          'وضّح المشكلة,متى حدثت,نوع جهازك إن أمكن'
        ).split(',')} />
      </Section>

      {/* Closing */}
      <p className="text-center text-noorly-text-3 text-sm pt-4">
        {t(
          'Thank you for helping us improve Noorly 🤍',
          'شكرًا لمساعدتنا في تحسين Noorly 🤍'
        )}
      </p>
    </LegalPageLayout>
  );
};

export default Feedback;
