import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "What is FASTag?",
    answer:
      "FASTag is a prepaid tag fixed on your vehicle’s windscreen that enables automatic toll payment at toll plazas using RFID technology.",
  },
  {
    question: "How can I recharge my FASTag on Logiclead?",
    answer:
      "You can recharge your FASTag easily by logging into your account, entering your vehicle details, selecting the amount, and completing payment securely.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major payment methods including UPI, debit/credit cards, and net banking for your convenience.",
  },
  {
    question: "Is there any minimum recharge amount?",
    answer:
      "Yes, the minimum recharge amount depends on your issuing bank, but typically starts at ₹100.",
  },
  {
    question: "How long does it take for the recharge to reflect?",
    answer:
      "Recharge typically reflects instantly, but in rare cases, it might take up to 5 minutes depending on network conditions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left hover:cursor-pointer"
            >
              <span className="text-base font-semibold text-gray-800">
                {faq.question}
              </span>
              <span className="text-gray-700">
                {openIndex === index ? <FiX size={18} /> : <FiPlus size={18} />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600 text-sm border-t border-gray-100">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
