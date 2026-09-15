'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Download, Menu, X, Terminal, ExternalLink } from 'lucide-react';
import styles from './Navbar.module.css';
import { personalInfo } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar} aria-label="Main Navigation">
        <Link href="#home" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoCode}>&lt;</span>
          <span>{personalInfo.name.split(' ')[0]}</span>
          <span className={styles.logoDot}></span>
          <span className={styles.logoCode}>/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link 
              href="#about" 
              className={`${styles.navLink} ${activeSection === 'about' ? styles.navLinkActive : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#skills" 
              className={`${styles.navLink} ${activeSection === 'skills' ? styles.navLinkActive : ''}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              href="#projects" 
              className={`${styles.navLink} ${activeSection === 'projects' ? styles.navLinkActive : ''}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className={`${styles.navLink} ${activeSection === 'contact' ? styles.navLinkActive : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className={styles.navActions}>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            id="nav-resume-btn"
          >
            <Download size={15} />
            <span>Resume</span>
          </a>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
        id="mobile-navigation-drawer"
      >
        <ul className={styles.mobileNavLinks}>
          <li>
            <Link href="#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={styles.mobileActions}>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
            onClick={closeMobileMenu}
          >
            <Download size={16} />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </header>
  );
}
