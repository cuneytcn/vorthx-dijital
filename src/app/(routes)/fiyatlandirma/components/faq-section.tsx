interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    return (
        <div className="space-y-6">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                    <h3 className="mb-4 text-xl font-semibold text-white">
                        {faq.question}
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
}
