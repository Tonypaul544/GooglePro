export default function PaymentConfirmation({ formData }) {
  const displayName = formData.name?.trim() || '[NAME]';

  return (
    <section className="payment-confirmation container reveal fade-in">
      <div className="confirmation-badge">✓</div>
      <div>
        <h3>Payment confirmed</h3>
        <p>
          Hello {displayName}, you have confirmed payment and are being redirected to WhatsApp to provide your proof.
        </p>
      </div>
    </section>
  );
}
