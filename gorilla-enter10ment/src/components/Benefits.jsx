const benefits = [
  'Google AI Pro access for your workflow',
  'Flow and Veo capabilities included',
  'Advanced AI tools with premium productivity',
  'Fast setup and easy onboarding',
];

export default function Benefits() {
  return (
    <section id="benefits" className="benefits-section container reveal slide-up">
      <div className="benefits-header">
        <div className="benefits-mark">★</div>
        <div>
          <h2>Why choose this access?</h2>
        </div>
      </div>
      <ul className="benefits-list">
        {benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
    </section>
  );
}
