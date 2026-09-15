'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Mail, Sparkles, Code2, Rocket } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import styles from './Hero.module.css';
import { personalInfo } from '@/data/portfolioData';

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Next.js & React Engineer",
  "WebSockets & Real-Time Builder"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left: Text & CTAs */}
          <div className={styles.heroContent}>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>Available for New Roles & Projects</span>
            </div>

            <h1 className={styles.title}>
              Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className={styles.roleSubtitle}>
              <span>{displayedText}</span>
              <span className={styles.cursor}></span>
            </div>

            <p className={styles.description}>
              Crafting high-performance web applications with seamless frontend experiences 
              and robust backend architectures. Focused on the <strong>MERN stack</strong>, 
              <strong>Next.js</strong>, and scalable modern web solutions.
            </p>

            {/* Action Buttons */}
            <div className={styles.heroActions}>
              <Link href="#projects" className="btn btn-primary" id="hero-explore-btn">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </Link>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                id="hero-download-cv"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <Link href="#contact" className="btn btn-secondary" id="hero-contact-btn">
                <Mail size={18} />
                <span>Contact Info</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className={styles.socialRow}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="Ishant Ghawri GitHub Profile"
                id="hero-social-github"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIconBtn}
                aria-label="Ishant Ghawri LinkedIn Profile"
                id="hero-social-linkedin"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className={styles.socialIconBtn}
                aria-label="Send email to Ishant Ghawri"
                id="hero-social-email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right: Avatar Visual */}
          <div className={styles.visualWrapper}>
            <div className={styles.avatarGlowBackdrop}></div>

            {/* Floating Badges */}
            <div className={styles.floatingBadge1}>
              <Code2 size={18} color="#818cf8" />
              <span>Full Stack Engineering</span>
            </div>

            <div className={styles.avatarCard}>
              <div className={styles.avatarImgContainer}>
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  width={340}
                  height={380}
                  priority
                  className={styles.avatarImg}
                />
              </div>
            </div>

            <div className={styles.floatingBadge2}>
              <Rocket size={18} color="#38bdf8" />
              <span>MERN Stack Architecture</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className={styles.statsGrid}>
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
