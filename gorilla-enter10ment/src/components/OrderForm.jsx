import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  country: 'Nigeria',
  agree: false,
};

export default function OrderForm({ onOrderSubmit, orderConfirmed }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.agree) {
      nextErrors.agree = 'Please confirm your order.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      onOrderSubmit(formData);
    }
  };

  return (
    <section id="order" className="order-section container reveal slide-up">
      <div className="order-header">
        <h2>Get your access</h2>
        <p>Complete the form to reserve your plan.</p>
      </div>

      <form className="order-form" onSubmit={handleSubmit} noValidate>
        <div className="field-row">
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <small>{errors.name}</small>}
          </label>

          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <small>{errors.email}</small>}
          </label>
        </div>

        <div className="field-row">
          <label>
            <span>Phone number</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234..."
            />
            {errors.phone && <small>{errors.phone}</small>}
          </label>

          <label>
            <span>Country</span>
            <select name="country" value={formData.country} onChange={handleChange}>
              <option>Nigeria</option>
              <option>Ghana</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="checkbox-row">
          <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
          <span>I confirm I am ordering Google Pro Access for the stated duration.</span>
        </label>
        {errors.agree && <small className="checkbox-error">{errors.agree}</small>}

        <button type="submit" className="primary-button" disabled={orderConfirmed}>
          {orderConfirmed ? 'Order placed' : 'Reserve my access'}
        </button>
      </form>
    </section>
  );
}
