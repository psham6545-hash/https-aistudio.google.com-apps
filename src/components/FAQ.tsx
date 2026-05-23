import { motion } from "motion/react";

const faqs = [
  {
    question: "Do I need experience?",
    answer: "No, complete beginner training is provided. We teach you everything you need to know from the ground up."
  },
  {
    question: "Is this work from home?",
    answer: "Yes, completely online and flexible. You use your own device and work wherever you have internet."
  },
  {
    question: "Can students join?",
    answer: "Yes, students 18+ can join and easily fit this around their schedule."
  },
  {
    question: "How do I apply?",
    answer: "Simply fill out the registration form in the contact section below to start today."
  }
];

export function FAQ() {
  return (
    <div id="faq" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
          <h2 className="text-2xl sm:text-3xl font-display font-bold leading-10 tracking-tight text-slate-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <motion.div 
                key={faq.question} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="pt-6"
              >
                <dt>
                  <span className="text-lg font-semibold leading-7 text-slate-900 flex items-start gap-4">
                    <span className="text-indigo-600 font-display">Q.</span>
                    {faq.question}
                  </span>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base leading-7 text-slate-600 ml-8">{faq.answer}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
