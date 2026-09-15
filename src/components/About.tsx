'use client';

import React from 'react';
import Image from 'next/image';
import { Briefcase, GraduationCap, CheckCircle2, Award, Zap, Code } from 'lucide-react';
import styles from './About.module.css';
import { personalInfo, educationList } from '@/data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-tag">Get To Know Me</div>
          <h2 className="section-title">
            About <span className="gradient-text">Myself</span>
          </h2>
          <p className="section-desc">
            Bridging academic excellence with practical full-stack engineering to build 
            impactful, interactive, and resilient digital solutions.
          </p>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left: About Picture & Badge */}
          <div className={styles.photoWrapper}>
            <div className={styles.photoGlow}></div>
            <div className={styles.photoFrame}>
              <Image
                src={personalInfo.aboutImage}
                alt={`${personalInfo.name} working on development`}
                width={360}
                height={420}
                className={styles.aboutImg}
              />
            </div>

            {/* Experience Floating Badge */}
            <div className={styles.floatingExperienceCard}>
              <div className={styles.badgeIcon}>
                <Award size={22} />
              </div>
              <div>
                <div className={styles.badgeNumber}>2+ Years</div>
                <div className={styles.badgeText}>Web Dev Experience</div>
              </div>
            </div>
          </div>

          {/* Right: Info Cards & Narrative */}
          <div className={styles.detailsCol}>
            {/* Top Cards: Experience & Education */}
            <div className={styles.cardsRow}>
              {/* Experience Card */}
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <Briefcase size={22} />
                </div>
                <h3 className={styles.cardTitle}>Professional Experience</h3>
                <p className={styles.cardSubtitle}>
                  <strong>2+ Years</strong> in Full-Stack Web Development, building dynamic single-page applications and REST APIs.
                </p>
              </div>

              {/* Education Card */}
              <div className={styles.infoCard}>
                <div className={styles.cardIcon}>
                  <GraduationCap size={22} />
                </div>
                <h3 className={styles.cardTitle}>Academic Background</h3>
                <p className={styles.cardSubtitle}>
                  <strong>BCA Graduate</strong> & currently pursuing <strong>MCA Master’s Degree</strong> in Computer Applications.
                </p>
              </div>
            </div>

            {/* Narrative text */}
            <div className={styles.storyText}>
              <p>
                As a dedicated web developer with a robust background in both frontend and backend technologies, 
                I possess a proven track record of creating dynamic, user-centric web applications. 
                Equipped with a <strong>Bachelor of Computer Applications (BCA)</strong> and actively pursuing my 
                <strong> Master of Computer Applications (MCA)</strong>, I leverage strong computer science foundations 
                to resolve complex engineering challenges.
              </p>
              <p>
                Specializing in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, and Node.js) along with 
                modern frameworks like <strong>Next.js</strong>, I excel at crafting interactive user interfaces, 
                optimizing frontend workflows, and architecting resilient backend microservices and databases.
              </p>
            </div>

            {/* Quick Core Strengths */}
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Clean & Scalable Code</span>
              </div>
              <div className={styles.highlightItem}>
                <Zap size={18} color="#38bdf8" />
                <span>Fast & Responsive UX</span>
              </div>
              <div className={styles.highlightItem}>
                <Code size={18} color="#a855f7" />
                <span>REST & Real-Time APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
