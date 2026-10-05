const features = [
  'Advanced AI Tools',
  'More Storage',
  'Premium Features',
];

export default function Features() {
  return (
    <section className="features-strip container reveal slide-up">
      {features.map((feature, index) => (
        <div className="feature-item" key={feature}>
          <div className="feature-icon">{['★', '☁', '👑'][index]}</div>
          <div>
            <h3>{feature}</h3>
            <p>
              {index === 0 && 'Work smarter, faster'}
              {index === 1 && 'Keep your files safe'}
              {index === 2 && 'Unlock your full potential'}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
