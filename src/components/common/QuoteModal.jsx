'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../public/assets/css/quoteModal.css';

const PRODUCT_OPTIONS = [
  'Optino - Wavefront Sensor',
  'O-Met - Laser Diode Metrology',
  'Sensoft - Wavefront Analysis Software',
  'Automotive Optics (HUD Metrology)',
  'Ophthalmic Lens Metrology',
  'Telescope Metrology Solutions',
  'Digital Camera Lens Metrology',
  'Custom Metrology System',
  'Other / General Technical Inquiry',
];

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: PRODUCT_OPTIONS[0],
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  // Open modal handler with optional initial product
  const openModal = useCallback((defaultProduct = '') => {
    if (defaultProduct && PRODUCT_OPTIONS.includes(defaultProduct)) {
      setFormData((prev) => ({ ...prev, product: defaultProduct }));
    }
    setStatus('idle');
    setErrorMessage('');
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // If URL has #quote, gently remove it without reload
    if (typeof window !== 'undefined' && window.location.hash === '#quote') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Listen for custom event & hash changes
  useEffect(() => {
    const handleCustomEvent = (e) => {
      const product = e?.detail?.product || '';
      openModal(product);
    };

    const handleHashChange = () => {
      if (window.location.hash === '#quote') {
        openModal();
      }
    };

    const handleDocumentClick = (e) => {
      const target = e.target.closest('a[href="#quote"], a[href$="#quote"], [data-trigger-quote]');
      if (target) {
        e.preventDefault();
        const prod = target.getAttribute('data-product') || '';
        openModal(prod);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    window.addEventListener('open-quote-modal', handleCustomEvent);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('keydown', handleKeyDown);

    // Initial hash check on page mount
    if (typeof window !== 'undefined' && window.location.hash === '#quote') {
      openModal();
    }

    return () => {
      window.removeEventListener('open-quote-modal', handleCustomEvent);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, closeModal, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and inquiry requirements.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit quote inquiry. Please try again.');
      }

      setStatus('success');
    } catch (err) {
      console.error('Quote submission error:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Connection error. You can also email us directly at contact@spot-optics.com'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: PRODUCT_OPTIONS[0],
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="quote-modal-root" id="quote-modal-portal">
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="quote-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          />

          {/* Centered Modal Container */}
          <div className="quote-modal-wrapper" onClick={closeModal}>
            {/* Modal Dialog — Slides from Right into Center */}
            <motion.div
              className="quote-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '80vw', opacity: 0, scale: 0.92 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: '80vw', opacity: 0, scale: 0.92 }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 260,
                mass: 0.85,
              }}
            >
              {/* Top Optical Wave Accent Line */}
              <div className="quote-modal-accent-bar" />

              {/* Close Button */}
              <button
                type="button"
                className="quote-modal-close-btn"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="quote-modal-header">
                <div className="d-flex align-items-center flex-wrap gap-2 mb-2 pe-5">
                  <div className="quote-target-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="2" />
                      <circle cx="12" cy="12" r="3" strokeWidth="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 1v3m0 16v3M1 12h3m16 0h3"
                      />
                    </svg>
                  </div>
                  <span className="quote-brand-title">
                    SPOT<span className="text-primary-blue">OPTICS</span>
                  </span>
                  <span className="quote-hq-badge">
                    🇮🇹 Padova HQ (Italy)
                  </span>
                </div>
                <h3 className="quote-modal-title">Request a Technical Quote</h3>
                <p className="quote-modal-subtitle">
                  Direct inquiry routed to SpotOptics Headquarters in Padova, Italy. Our metrology specialists will respond promptly.
                </p>
              </div>

              {/* Body */}
              <div className="quote-modal-body">
                {status === 'success' ? (
                  <motion.div
                    className="quote-success-state text-center py-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="quote-success-icon-wrap mb-3 mx-auto">
                      <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="quote-success-title mb-2">Thank You, {formData.name}!</h4>
                    <p className="quote-success-desc mb-3">
                      Your technical quotation inquiry has been successfully transmitted to SpotOptics Padova, Italy headquarters.
                    </p>
                    <div className="quote-target-info-card p-2 p-sm-3 mb-3 text-start">
                      <div className="text-muted mb-1" style={{ fontSize: '0.75rem' }}>Inquiry Destination:</div>
                      <div className="quote-target-email">
                        SpotOptics S.r.l. &middot; contact@spot-optics.com
                      </div>
                      <div className="text-muted mt-1" style={{ fontSize: '0.74rem' }}>
                        Via Turazza 48, 35128 Padova (PD), Italy
                      </div>
                    </div>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-custom px-3 py-1.5"
                        onClick={handleReset}
                      >
                        Send Another Inquiry
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary-custom px-3 py-1.5"
                        onClick={closeModal}
                      >
                        Done
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="quote-form">
                    {errorMessage && (
                      <div className="alert alert-danger py-2 px-3 small d-flex align-items-center gap-2 mb-3">
                        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                        </svg>
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="row g-3">
                      {/* Name */}
                      <div className="col-12 col-md-6">
                        <label className="form-label quote-label" htmlFor="quote-name">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text quote-input-icon">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            id="quote-name"
                            name="name"
                            className="form-control quote-input"
                            placeholder="e.g. Dr. Marco Rossi"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-12 col-md-6">
                        <label className="form-label quote-label" htmlFor="quote-email">
                          Work Email <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text quote-input-icon">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            id="quote-email"
                            name="email"
                            className="form-control quote-input"
                            placeholder="m.rossi@institute.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-12 col-md-6">
                        <label className="form-label quote-label" htmlFor="quote-phone">
                          Phone / WhatsApp <span className="text-muted small">(Optional)</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text quote-input-icon">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </span>
                          <input
                            type="tel"
                            id="quote-phone"
                            name="phone"
                            className="form-control quote-input"
                            placeholder="+39 049 8078529"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>

                      {/* Company / Lab */}
                      <div className="col-12 col-md-6">
                        <label className="form-label quote-label" htmlFor="quote-company">
                          Company / University <span className="text-muted small">(Optional)</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text quote-input-icon">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            id="quote-company"
                            name="company"
                            className="form-control quote-input"
                            placeholder="e.g. Optical Lab / Tech Corp"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>

                      {/* Product Selector */}
                      <div className="col-12">
                        <label className="form-label quote-label" htmlFor="quote-product">
                          Product / System of Interest
                        </label>
                        <select
                          id="quote-product"
                          name="product"
                          className="form-select quote-input"
                          value={formData.product}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        >
                          {PRODUCT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="col-12">
                        <label className="form-label quote-label" htmlFor="quote-message">
                          Your Technical Requirements / Inquiry <span className="text-danger">*</span>
                        </label>
                        <textarea
                          id="quote-message"
                          name="message"
                          rows="3"
                          className="form-control quote-input"
                          placeholder="Please describe your optical measurement requirements, wavelength range, pupil diameter, or customized application..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    {/* Footer Info & Actions */}
                    <div className="quote-form-footer mt-3 pt-3 border-top d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
                      

                      <div className="d-flex gap-2 w-100 w-sm-auto justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-custom px-3 py-1.5"
                          onClick={closeModal}
                          disabled={status === 'loading'}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary-custom px-3 py-1.5 d-inline-flex align-items-center justify-content-center gap-2"
                          disabled={status === 'loading'}
                        >
                          {status === 'loading' ? (
                            <>
                              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                              <span>Sending to Padova HQ...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Quote Request</span>
                              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
