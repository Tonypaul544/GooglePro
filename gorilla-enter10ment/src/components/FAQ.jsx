const faqs = [
  {
    q: 'What is Google AI Pro?',
    a: 'Google AI Pro is a premium access plan that gives users access to advanced Google AI features, productivity tools and enhanced capabilities in supported regions and accounts.',
  },
  {
    q: 'What is Google Flow?',
    a: 'Google Flow is a Google AI experience designed to help automate and accelerate creative and productivity tasks using AI-powered workflows.',
  },
  {
    q: 'What is Veo?',
    a: 'Veo is Google&apos;s AI video generation experience for creating visual content from prompts and instructions.',
  },
  {
    q: 'Can I create AI videos with Veo?',
    a: 'Yes, when available in your region and account, Veo can be used to generate AI-powered video content.',
  },
  {
    q: 'How long does the access last?',
    a: 'This offer includes 1 Year + 6 Months of access, depending on the current plan and availability at the time of activation.',
  },
  {
    q: 'Does the access last 1 year and 6 months?',
    a: 'Yes, the plan offered here is for 1 Year + 6 Months of access.',
  },
  {
    q: 'How do I pay?',
    a: 'You can complete the payment form on this page and proceed with the stated payment option for the Google Pro Access plan.',
  },
  {
    q: 'How do I send payment proof?',
    a: 'After confirming payment, you will be redirected to WhatsApp so you can send your payment screenshot or proof directly to the seller.',
  },
  {
    q: 'Can I use it on my phone?',
    a: 'Yes, access may be used on supported mobile devices, depending on your device, browser, app availability and account eligibility.',
  },
  {
    q: 'Can I use it on a computer?',
    a: 'Yes, access can typically be used on a compatible computer with a supported browser or app, subject to Google account and regional availability.',
  },
  {
    q: 'Are all features available in every country?',
    a: 'No. Google feature availability, usage limits and eligibility can vary by country, account type and rollout status. Some tools may not be accessible in every region.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq-section container reveal slide-up">
      <div className="section-heading">
        <h2>FAQ</h2>
      </div>
      <div className="faq-list">
        {faqs.map(({ q, a }) => (
          <details key={q} className="faq-item" open={q === 'What is Google AI Pro?'}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
