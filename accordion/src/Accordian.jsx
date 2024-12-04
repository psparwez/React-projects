import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Accordian = () => {
  const accordiansData = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days from the date of delivery for a full refund. The product must be unused and in its original packaging. For any items that are damaged or defective, we will cover the return shipping cost. Please visit our returns page for more information and instructions on how to process your return.",
    },
    {
      question: "How do I track my order?",
      answer:
        "After your order is shipped, you will receive an email containing tracking information. You can use this information to track the status of your delivery via the carrier's website. If you have an account with us, you can also log in to your account and check the order status directly from your dashboard. If you encounter any issues or delays, feel free to reach out to our customer support team for assistance.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to over 50 countries worldwide, including the UK, Canada, Australia, and many countries in Europe, Asia, and South America. Shipping rates will vary based on the destination and weight of the items. You can view the exact shipping cost during checkout, and international customers are responsible for any customs duties or taxes incurred upon delivery.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team by emailing us at support@company.com. We aim to respond to all inquiries within 24 hours. Alternatively, you can contact us by phone at 123-456-7890 between 9 AM and 6 PM, Monday through Friday. If you prefer live chat, you can use the chat feature on our website during business hours. We are here to help with any questions or issues you may have!",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods to make your shopping experience as convenient as possible. You can pay using major credit and debit cards including Visa, MasterCard, American Express, and Discover. Additionally, we accept PayPal, Apple Pay, Google Pay, and other online payment options. All payments are processed securely, and we do not store any of your sensitive financial information.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordian-container">
      <ul>
        {accordiansData.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            key={index}
            className={`accordian-list ${
              openIndex === index ? "expanded" : ""
            }`}
          >
            <div className="question">
              <h2 onClick={() => handleClick(index)}>{item.question}</h2>
              <button>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
            {openIndex === index && <p>{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordian;
