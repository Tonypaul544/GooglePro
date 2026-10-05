import { useState } from 'react';

export default function Payment({ formData, onConfirm, onCopy }) {
  const [copyState, setCopyState] = useState('Copy details');

  const copyTextToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '-9999px';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    let copied = false;

    try {
      copied = document.execCommand('copy');
    } catch (error) {
      copied = false;
    } finally {
      document.body.removeChild(textArea);
    }

    return copied;
  };

  const handleCopy = async () => {
    const text = [
      'Google Pro Access',
      'Amount: ₦5,800',
      `Name: ${formData.name || '[NAME]'}`,
      `Email: ${formData.email || '[email]'}`,
      `Phone: ${formData.phone || '[phone]'}`,
      'Duration: 1 Year + 6 Months',
    ].join('\n');

    try {
      const copied = await copyTextToClipboard(text);

      if (copied) {
        setCopyState('Copied');
        onCopy?.(text);
      } else {
        setCopyState('Copy unavailable');
      }

      window.setTimeout(() => setCopyState('Copy details'), 1400);
    } catch (error) {
      setCopyState('Copy unavailable');
      window.setTimeout(() => setCopyState('Copy details'), 1400);
    }
  };

  return (
    <section className="payment-panel container reveal slide-up">
      <div className="payment-copy">
        <p className="pill-label">Payment</p>
        <h3>Google Pro Access</h3>
        <div className="price-box">
          <span>Amount</span>
          <strong>₦5,800</strong>
        </div>
        <p className="duration-text">Duration: 1 Year + 6 Months</p>
      </div>

      <div className="payment-actions">
        <button type="button" className="ghost-button" onClick={handleCopy}>
          {copyState}
        </button>
        <button type="button" className="primary-button" onClick={onConfirm}>
          I have paid
        </button>
      </div>
    </section>
  );
}
