import { ref, push, set } from 'firebase/database';
import React, { useState } from 'react';
// import { database } from './firebase';
import { useTranslation } from 'react-i18next';

// interface ContactMessage {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
//   createdAt: Date;
//   isNew: boolean;
// }

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { t, i18n } = useTranslation();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const message: ContactMessage = {
  //     ...formData,
  //     createdAt: new Date(),
  //     isNew: true,
  //   };
  //   try {
  //     // Tạo một tham chiếu (reference) tới "messages"
  //     // const messagesRef = ref(database, 'messages');
  //     // Thêm tài liệu mới
  //     const newMessageRef = push(messagesRef);
  //     await set(newMessageRef, message);
  //     alert('Message sent successfully!');
  //   } catch (error) {
  //     console.log('Error sending message:', error);
  //     alert('Failed to send message');
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div
        className="relative flex h-[200px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/api/placeholder/1920/200")',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{t('contact_us.title')}</h1>
          <div className="mt-2 flex items-center gap-2 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>›</span>
            <span>Contact us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-8 text-2xl font-bold text-gray-700">
              {t('contact_us.contact_form.title')}
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact_us.contact_form.name_label')}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact_us.contact_form.email_label')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder={t('contact_us.contact_form.subject_label')}
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder={t('contact_us.contact_form.message_label')}
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center rounded bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
              >
                {t('contact_us.contact_form.submit_button')}
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="">
            <h2 className="mb-8 text-2xl font-bold text-gray-700">
              {t('contact_us.contact_info.title')}
            </h2>
            <div className="space-y-6 rounded-lg bg-blue-600 p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>{t('contact_us.contact_info.address')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:info@hopphatlog.com" className="hover:underline">
                    {t('contact_us.contact_info.email')}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p>{t('contact_us.contact_info.phone_1')}</p>
                    <p>{t('contact_us.contact_info.phone_2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 h-[400px] w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9315374971557!2d106.65315267480437!3d10.743412089403357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e5e883ee1ab%3A0x3d7b26441508751!2zQ8OUTkcgVFkgVE5ISCBI4buiUCBQSMOBVCBMT0dJU1RJQ1M!5e1!3m2!1svi!2s!4v1735533947510!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
