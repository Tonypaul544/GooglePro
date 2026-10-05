export default function OrderConfirmation({ onContinue }) {
  return (
    <section className="confirmation-card container reveal fade-in">
      <div className="confirmation-icon">✓</div>
      <div>
        <h3>Your order is ready</h3>
        <p>Proceed to payment to complete your Google Pro Access purchase.</p>
      </div>
      <button type="button" className="secondary-button" onClick={onContinue}>
        Continue to payment
      </button>
    </section>
  );
}
