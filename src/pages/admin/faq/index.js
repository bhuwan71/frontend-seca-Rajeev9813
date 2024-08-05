import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { FiTrash, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useMantineTheme } from "@mantine/core";
import Layout from "../admin_dashboard/layout";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework for styling.",
    },
    {
      id: 3,
      question: "How do I use hooks?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
  ]);

  const deleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  const theme = useMantineTheme();

  return (
    <>
      <Layout>
        <div className="max-w-3xl mx-auto p-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>
          <Accordion
            chevronPosition="left"
            chevron={<FiChevronDown className="text-gray-500" />}
            className="bg-gray-100"
          >
            {faqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id.toString()}
                className="bg-white border border-gray-300 rounded-lg mb-4 shadow-md"
              >
                <Accordion.Control className="flex justify-between items-center px-4 py-3 bg-gray-200 rounded-t-lg cursor-pointer hover:bg-gray-300 transition">
                  <span className="text-lg font-medium text-gray-700">
                    {faq.question}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the accordion from toggling
                      deleteFaq(faq.id);
                    }}
                    className="text-red-500 hover:text-red-700 transition"
                    aria-label="Delete FAQ"
                  >
                    <FiTrash />
                  </button>
                </Accordion.Control>
                <Accordion.Panel className="p-4 text-gray-600">
                  {faq.answer}
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Layout>
    </>
  );
};

export default FAQ;
