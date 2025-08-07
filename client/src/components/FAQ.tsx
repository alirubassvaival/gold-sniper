import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is GoldSniper and how does it work?",
    answer: "GoldSniper is a professional gold trading signals app that provides real-time XAUUSD trading alerts with 93% accuracy. Our expert analysts analyze market conditions and send you precise buy/sell signals directly to your mobile device."
  },
  {
    question: "How accurate are your gold trading signals?",
    answer: "Our signals maintain a 93% success rate based on historical performance. Our team of experienced traders with 10+ years in the gold market carefully analyze every signal before delivery to ensure maximum profitability."
  },
  {
    question: "Is GoldSniper free to use?",
    answer: "Yes, GoldSniper offers free gold trading signals to help traders succeed in the XAUUSD market. Download our mobile app and start receiving professional trading alerts at no cost."
  },
  {
    question: "What platforms is GoldSniper available on?",
    answer: "GoldSniper is available on both iOS and Android platforms. You can download it from the App Store or Google Play Store and start receiving trading signals immediately."
  },
  {
    question: "How do I receive the trading signals?",
    answer: "Once you download the GoldSniper app, you'll receive real-time push notifications with detailed trading signals including entry points, stop loss, and take profit levels for XAUUSD trades."
  },
  {
    question: "Do I need trading experience to use GoldSniper?",
    answer: "No prior experience needed! Our signals come with clear instructions and our simple interface makes it easy for beginners to follow professional trading recommendations."
  },
  {
    question: "What timeframes do your signals cover?",
    answer: "Our signals are optimized for various timeframes including scalping, day trading, and swing trading. Each signal specifies the recommended timeframe for maximum effectiveness."
  },
  {
    question: "Can I use these signals with any broker?",
    answer: "Yes, our XAUUSD signals are universal and can be used with any forex broker that offers gold trading. The signals include standard entry/exit points that work across all platforms."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about GoldSniper trading signals
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[color:var(--brand-orange)]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[color:var(--brand-orange)]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}