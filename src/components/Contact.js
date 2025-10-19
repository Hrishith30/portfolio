import React, { useState, useMemo, useEffect, useRef } from 'react';
import './Contact.css';
import { countries } from 'countries-list';

const ErrorNotification = ({ message, onClose }) => (
  <div 
    className="error-notification"
  >
    <div className="error-content">
      <i className="fas fa-exclamation-circle"></i>
      <span>{message}</span>
    </div>
  </div>
);

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'US',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [showError, setShowError] = useState(false);

  const countriesList = useMemo(() => {
    return Object.entries(countries)
      .map(([code, data]) => ({
        code,
        ...data,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 10) {
      const formattedPhone = formatPhoneNumber(digits);
      handleInputChange({
        target: {
          name: 'phone',
          value: formattedPhone
        }
      });
      setErrors(prev => ({
        ...prev,
        phone: ''
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate this field on change
    setErrors(prev => ({
      ...prev,
      [name]: '' // Clear error for this field as user types
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email validation (must be a valid Gmail)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Please enter a valid Gmail address.";
    }

    // Phone validation (must be 10 digits)
    const digits = formData.phone.replace(/\D/g, '');
    if (!digits) {
      newErrors.phone = "Phone number is required.";
    } else if (digits.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    // Get the API URL based on environment
    const API_URL = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:5000'
      : 'https://email-api-iahy.onrender.com';

    try {
      const selectedCountry = countriesList.find(c => c.code === formData.countryCode);
      
      const requestData = {
        name: formData.name,
        email: formData.email,
        country: selectedCountry.name,
        phone: `+${selectedCountry.phone} ${formData.phone}`,
        message: formData.message
      };

      console.log('Sending request to:', `${API_URL}/api/contact`);
      console.log('Request data:', requestData);

      // First, test the API connection
      try {
        const testResponse = await fetch(`${API_URL}/api/test`);
        console.log('API test response:', await testResponse.json());
      } catch (testError) {
        console.error('API test failed:', testError);
      }

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(requestData)
      });

      console.log('Response status:', response.status);
      
      let data;
      const textData = await response.text();
      console.log('Raw response:', textData);
      
      try {
        data = JSON.parse(textData);
      } catch (err) {
        console.error('Error parsing response:', err);
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        countryCode: 'US',
        phone: '',
        message: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error details:', error);
      setServerError(error.message || 'Failed to send message. Please try again.');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setServerError('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // This component will be observed by the scroll animation system
    // The ref is attached to the main section element
  }, []);

  return (
    <section className="contact section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title">
          Get In Touch
        </h2>
        <div className="contact-content">
          {/* Error Notification */}
          {showError && serverError && (
            <ErrorNotification 
              message={serverError} 
              onClose={() => {
                setShowError(false);
                setServerError('');
              }}
            />
          )}

          {/* Contact Form */}
          <div className="contact-form-container">
            {showSuccess ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form 
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="contact-row">
                  <div className="form-group country-code-group">
                    <label htmlFor="countryCode">Country</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                    >
                      {countriesList.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group phone-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone-input-wrapper">
                      <div className="country-code-display">
                        +{countries[formData.countryCode]?.phone}
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="123-456-7890"
                      />
                    </div>
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                {errors.submit && <div className="error-message submit-error">{errors.submit}</div>}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>Send Message <i className="fas fa-paper-plane"></i></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 