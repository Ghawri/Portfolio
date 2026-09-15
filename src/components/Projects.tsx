'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Check, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import styles from './Projects.module.css';
import { projectsList, ProjectItem } from '@/data/portfolioData';

type FilterCategory = 'All' | 'Full Stack' | 'Frontend' | 'Utility';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter);

  const filters: FilterCategory[] = ['All', 'Full Stack', 'Frontend', 'Utility'];

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Featured Works</div>
          <h2 className="section-title">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            Explore recent web applications featuring real-time communication, modern state management, 
            and scalable full-stack architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterRow}>
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${activeFilter === category ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(category)}
              id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project: ProjectItem) => (
            <div key={project.id} className={styles.projectCard}>
              {/* Project Image Banner */}
              <div className={styles.imageContainer}>
                <span className={styles.categoryTag}>{project.category}</span>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={260}
                  className={styles.projectImg}
                />
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Key Highlights */}
                <ul className={styles.highlightsList}>
                  {project.highlights.slice(0, 3).map((item, hIdx) => (
                    <li key={hIdx} className={styles.highlightItem}>
                      <Check size={14} color="#10b981" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className={styles.techStackRow}>
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className={styles.techTag}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={styles.cardActions}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.actionBtnPrimary}`}
                    id={`live-demo-${project.id}`}
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.actionBtnOutline}`}
                    id={`github-repo-${project.id}`}
                  >
                    <GithubIcon size={15} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
