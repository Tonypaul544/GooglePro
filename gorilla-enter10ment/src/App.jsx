import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import VeoSection from './components/VeoSection.jsx';
import Benefits from './components/Benefits.jsx';
import Pricing from './components/Pricing.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import Payment from './components/Payment.jsx';
import PaymentConfirmation from './components/PaymentConfirmation.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { buildPaymentProofMessage, buildWhatsAppLink } from './utils/whatsapp.js';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    agree: false,
  });

  const handleNavClick = () => setIsMenuOpen(false);

  const handleOrderSubmit = (data) => {
    setFormData(data);
    setOrderConfirmed(true);
    setPaymentConfirmed(false);
  };

  const handleContinueToPayment = () => {
    document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePaymentConfirmed = () => {
    setPaymentConfirmed(true);

    const message = buildPaymentProofMessage({
      name: formData.name || '[NAME]',
      amount: '₦5,800',
      offer: 'Google Pro Access',
      duration: '1 Year + 6 Months',
    });

    const link = buildWhatsAppLink(message);

    if (typeof window !== 'undefined') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="page-shell">
      <Navbar
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
        onNavClick={handleNavClick}
      />

      <main>
        <Hero />
        <Features />
        <VeoSection />
        <Benefits />
        <Pricing />

        <OrderForm onOrderSubmit={handleOrderSubmit} orderConfirmed={orderConfirmed} />

        {orderConfirmed && (
          <OrderConfirmation onContinue={handleContinueToPayment} />
        )}

        {orderConfirmed && (
          <section id="payment" className="payment-wrapper">
            <Payment formData={formData} onConfirm={handlePaymentConfirmed} />
          </section>
        )}

        {paymentConfirmed && <PaymentConfirmation formData={formData} />}

        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
