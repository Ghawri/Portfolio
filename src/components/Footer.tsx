'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import styles from './Footer.module.css';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="#home" className={styles.logo}>
              <span className={styles.logoCode}>&lt;</span>
              <span>{personalInfo.name}</span>
              <span className={styles.logoDot}></span>
              <span className={styles.logoCode}>/&gt;</span>
            </Link>
            <p className={styles.tagline}>
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <ul className={styles.footerLinks}>
            <li>
              <Link href="#about" className={styles.footerLink}>About</Link>
            </li>
            <li>
              <Link href="#skills" className={styles.footerLink}>Skills</Link>
            </li>
            <li>
              <Link href="#projects" className={styles.footerLink}>Projects</Link>
            </li>
            <li>
              <Link href="#contact" className={styles.footerLink}>Contact</Link>
            </li>
          </ul>

          {/* Social Icons & Back to top */}
          <div className={styles.socialAndTop}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={styles.socialBtn}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              className={styles.backToTopBtn}
              onClick={scrollToTop}
              title="Back to Top"
              aria-label="Back to top"
              id="back-to-top-btn"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className={styles.bottomRow}>
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Built with Next.js, React & modern CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
