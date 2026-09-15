'use client';
import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import styles from './Contact.module.css';
import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personalInfo.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.warn('Clipboard copy error, using fallback:', err);
      try {
        const textarea = document.createElement('textarea');
        textarea.value = personalInfo.email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      } catch (fallbackErr) {
        console.error('Copy fallback failed:', fallbackErr);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a static portfolio, we show a success feedback toast and open their default email client with the message
    setFormSubmitted(true);
    const mailtoSubject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Let&apos;s Connect</div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-desc">
            Have a project in mind, an opportunity to discuss, or just want to connect? 
            Feel free to drop a message!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Info Cards */}
          <div className={styles.contactInfoCol}>
            {/* Email Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Direct Email</div>
                  <div className={styles.cardValue}>{personalInfo.email}</div>
                </div>
              </div>

              <button
                type="button"
                className={`${styles.copyBtn} ${copiedEmail ? styles.copiedActive : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                id="copy-email-btn"
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Professional Network</div>
                  <div className={styles.cardValue}>LinkedIn Profile</div>
                </div>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLinkBtn}
                id="contact-linkedin-link"
              >
                <span>Connect</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className={styles.contactCard}>
              <div className={styles.cardLeft}>
                <div className={styles.iconBox}>
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div className={styles.cardLabel}>Source Code & Repos</div>
                  <div className={styles.cardValue}>github.com/Ghawri</div>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLinkBtn}
                id="contact-github-link"
              >
                <span>Visit</span>
              </a>
            </div>

            {/* Availability Notice */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="status-dot"></span>
                <strong style={{ fontSize: '0.95rem', color: '#f8fafc' }}>Open for Opportunities</strong>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
                Currently available for Full-Stack, Frontend, or Backend developer roles, contract work, and innovative tech collaborations.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <p className={styles.formSubtitle}>
              Fill in your details below and I&apos;ll get back to you as soon as possible.
            </p>

            {formSubmitted && (
              <div className={styles.successMessage}>
                <CheckCircle size={18} />
                <span>Thank you! Preparing your email client now...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-name" className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="contact-email" className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Project Collaboration / Job Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Describe your project or requirement..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                id="contact-submit-btn"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
