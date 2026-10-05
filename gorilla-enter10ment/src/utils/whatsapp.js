export const WHATSAPP_NUMBER = '2348100732708';

export const PAYMENT_DETAILS = {
  amount: '₦5,800',
  offer: 'Google Pro Access',
  duration: '1 Year + 6 Months',
};

export const buildPaymentProofMessage = ({
  name = '[NAME]',
  amount = PAYMENT_DETAILS.amount,
  offer = PAYMENT_DETAILS.offer,
  duration = PAYMENT_DETAILS.duration,
} = {}) => {
  return [
    'Hello Courage, I have completed my payment for Google Pro Access.',
    `Name: ${name}`,
    `Amount: ${amount}`,
    `Offer: ${offer}`,
    `Duration: ${duration}`,
    'I am sending my payment screenshot/payment proof now.',
    'Please attach the payment proof in this chat.',
  ].join('\n');
};

export const buildWhatsAppLink = (message) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
