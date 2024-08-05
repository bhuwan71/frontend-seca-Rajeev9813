import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Layout from "../admin_dashboard/layout";

const FAQ = () => {
  const [open, setOpen] = React.useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What languages can I learn on My Learning?",
      answer:
        "My Learning is currently offering a variety of languages courses of English and Hindi. Soon it will add many languages including Spanish, French, Mandarin, German, and more. We're constantly updating our offerings, so check back regularly for new languages!",
    },
    {
      id: 2,
      question:
        "How does My Learning personalize my language learning experience?",
      answer:
        "We use a combination of AI technology and input from your learning preferences to tailor lessons and activities to your needs. This ensures that you progress at your own pace and focus on areas that require improvement.",
    },
    {
      id: 3,
      question: "What type of support is available if I get stuck?",
      answer:
        "We offer 24/7 chat support with language experts. Additionally, you can access forums and peer support groups to connect with other learners. You can also download your favourite courses with the iOS, Android, or Windows. Use downloads to watch while you're on the go and without an internet connection.",
    },
    {
      id: 4,
      question: "How do I track my progress?",
      answer:
        "My Learning provides a detailed dashboard that tracks your progress in real-time. You can see your improvements in various skills like reading, writing, speaking, and listening.",
    },
    {
      id: 5,
      question:
        "What makes My Learning different from other language learning platforms?",
      answer:
        "Unlike traditional one-size-fits-all approaches, My Learning focuses on a personalized learning experience. Our platform adapts to your individual learning style and pace, providing unique, context-based learning scenarios that make language learning fun and effective.",
    },
    {
      id: 6,
      question: "Can I learn more than one language at a time?",
      answer:
        "Absolutely! My Learning supports multi-language learning. You can enroll in multiple courses simultaneously and switch between them as per your interest and schedule.",
    },
  ];

  return (
    <>
      <Layout>
        <div className="faq max-w-3xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={faq.id}
                className="bg-white border border-gray-300 rounded-lg shadow-md"
              >
                <div
                  className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium text-gray-700">
                    {faq.question}
                  </span>
                  {open === index ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </div>
                {open === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default FAQ;
