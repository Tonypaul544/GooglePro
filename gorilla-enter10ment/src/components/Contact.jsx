export default function Contact() {
  return (
    <section id="contact" className="contact-section container reveal fade-in">
      <div className="contact-card">
        <div className="contact-icon">☎</div>
        <div className="contact-copy">
          <h2>GET IN TOUCH</h2>
          <div className="contact-row">
            <span>WhatsApp:</span>
            <a href="https://wa.me/2348100732708" target="_blank" rel="noreferrer">
              +2348100732708
            </a>
          </div>
          <div className="contact-row">
            <span>Email:</span>
            <a href="mailto:couragexbt@gmail.com">couragexbt@gmail.com</a>
          </div>
        </div>
        <div className="contact-buttons">
          <a href="https://wa.me/2348100732708" target="_blank" rel="noreferrer" className="primary-button">
            CHAT ON WHATSAPP
          </a>
          <a href="mailto:couragexbt@gmail.com" className="secondary-button">
            SEND EMAIL
          </a>
        </div>
      </div>
    </section>
  );
}
