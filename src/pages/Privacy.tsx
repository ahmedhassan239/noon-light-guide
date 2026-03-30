import React from 'react';
import { useLang } from '@/contexts/LangContext';
import LegalPageLayout, { Section, BulletList } from '@/components/LegalPageLayout';

const Privacy: React.FC = () => {
  const { t } = useLang();

  return (
    <LegalPageLayout titleEn="Privacy Policy" titleAr="سياسة الخصوصية">
      {/* Last Updated */}
      <p className="text-noorly-text-3 text-xs text-center">
        {t('Last Updated: March 2026', 'آخر تحديث: مارس ٢٠٢٦')}
      </p>

      {/* Intro */}
      <Section titleEn="Welcome" titleAr="مرحبًا">
        <p>{t(
          'Welcome to Noorly. We respect your privacy and are committed to protecting your personal data.',
          'مرحبًا بك في Noorly. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك.'
        )}</p>
      </Section>

      {/* Data We Collect */}
      <Section titleEn="Data We Collect" titleAr="البيانات التي نجمعها">
        <BulletList items={t(
          'Name (optional),Email (if account is created),Onboarding answers,Device information,App usage (progress, streaks)',
          'الاسم (اختياري),البريد الإلكتروني (عند إنشاء حساب),إجابات onboarding,معلومات الجهاز,استخدام التطبيق (التقدم، streaks)'
        ).split(',')} />
      </Section>

      {/* How We Use Data */}
      <Section titleEn="How We Use Data" titleAr="كيف نستخدم البيانات">
        <BulletList items={t(
          'Personalize your experience,Save your progress,Send notifications (if enabled),Improve the app',
          'تخصيص تجربتك,حفظ تقدمك,إرسال التذكيرات (إذا وافقت),تحسين التطبيق'
        ).split(',')} />
      </Section>

      {/* Privacy Promise */}
      <Section titleEn="Privacy Promise" titleAr="تعهد الخصوصية">
        <p className="font-semibold text-noorly-gold">
          {t('We never sell your data.', 'لن نقوم أبدًا ببيع بياناتك.')}
        </p>
      </Section>

      {/* Islamic Values */}
      <Section titleEn="Islamic Values" titleAr="القيم الإسلامية">
        <p>{t(
          'We believe privacy is a trust. Your journey is respected and protected.',
          'نؤمن أن الخصوصية أمانة. ونحترم رحلتك مع الإسلام.'
        )}</p>
      </Section>

      {/* Data Sharing */}
      <Section titleEn="Data Sharing" titleAr="مشاركة البيانات">
        <p>{t('We only share minimal data with:', 'نشارك بيانات محدودة فقط مع:')}</p>
        <BulletList items={t(
          'Technical services (e.g. Firebase),Notification systems',
          'خدمات تقنية (مثل Firebase),خدمات الإشعارات'
        ).split(',')} />
      </Section>

      {/* Security */}
      <Section titleEn="Security" titleAr="الأمان">
        <p>{t(
          'We use reasonable security measures, but no system is 100% secure.',
          'نستخدم إجراءات أمان مناسبة، لكن لا يوجد نظام آمن 100%.'
        )}</p>
      </Section>

      {/* Your Rights */}
      <Section titleEn="Your Rights" titleAr="حقوقك">
        <BulletList items={t(
          'Delete your account,Edit your data,Disable notifications anytime',
          'حذف الحساب,تعديل البيانات,إيقاف الإشعارات'
        ).split(',')} />
      </Section>

      {/* Children */}
      <Section titleEn="Children" titleAr="الأطفال">
        <p>{t(
          'Not intended for children under 13 without parental supervision.',
          'غير مخصص لمن هم أقل من 13 سنة بدون إشراف.'
        )}</p>
      </Section>

      {/* Contact */}
      <Section titleEn="Contact" titleAr="التواصل">
        <a href="mailto:info@noorly.net" className="text-noorly-blue hover:underline">
          info@noorly.net
        </a>
      </Section>

      {/* Footer message */}
      <p className="text-center text-noorly-text-3 text-sm pt-4">
        {t('May this app benefit you 🤍', 'نسأل الله أن ينفعك بهذا التطبيق 🤍')}
      </p>
    </LegalPageLayout>
  );
};

export default Privacy;
