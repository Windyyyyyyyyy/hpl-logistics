import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const FaqPage = () => {
  const { t } = useTranslation();
  const [faqItems, setFaqItems] = useState<{ id: number; question: string; answer: string; hasImage: boolean; }[]>([]);

  useEffect(() => {
    const questions = t('faq.questions', { returnObjects: true });
    const items = Object.keys(questions).map((key) => ({
      id: parseInt(key),
      question: t(`faq.questions.${key}.question`),
      answer: t(`faq.questions.${key}.answer`),
      hasImage: key === '8' // Assuming the shipping container image is for the last question
    }));
    setFaqItems(items);
  }, [t]);

  // Calculate number of items per column
  const midPoint = Math.ceil(faqItems.length / 2);
  const leftColumnItems = faqItems.slice(0, midPoint);
  const rightColumnItems = faqItems.slice(midPoint);

  const FaqColumn = ({ items }: { items: { id: number; question: string; answer: string; hasImage: boolean; }[] }) => (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.id} className="space-y-2">
          <h3 className="font-bold text-black">
            Q NO. {item.id}. {item.question}
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-gray-700">
              <span className="font-medium">A: </span>
              {item.answer}
            </p>
            {item.hasImage && (
              <div className="mt-4">
                <img 
                  src="src/images/faq_image.jpg" 
                  alt="Shipping containers" 
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[200px] flex items-center justify-between px-8 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/api/placeholder/1920/200")'
        }}
      >
        <h1 className="text-4xl text-white font-bold">{t('common.fqa')}</h1>
        <div className="text-white flex items-center gap-2">
          <a href="/" className="hover:underline">{t('common.home')}</a>
          <span>›</span>
          <span>{t('common.fqa')}</span>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">{t('common.frequently_asked_questions')}</h2>
        
        {/* Two-column grid for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <FaqColumn items={leftColumnItems} />
          <FaqColumn items={rightColumnItems} />
        </div>
      </div>
    </div>
  );
};

export default FaqPage;