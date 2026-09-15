'use client';

import React from 'react';
import { Layout, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';
import styles from './Skills.module.css';
import { skillCategories } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={22} />,
  Server: <Server size={22} />,
  Database: <Database size={22} />,
  Cpu: <Cpu size={22} />
};

export default function Skills() {
  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Advanced':
        return styles.levelAdvanced;
      case 'Proficient':
        return styles.levelProficient;
      case 'Intermediate':
      default:
        return styles.levelIntermediate;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Technical Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-desc">
            A comprehensive overview of my development stack, frameworks, database systems, 
            and engineering tools.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={styles.categoryCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  {iconMap[cat.iconName] || <Cpu size={22} />}
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className={styles.skillPill}>
                    <CheckCircle2 size={15} color="#6366f1" />
                    <span>{skill.name}</span>
                    <span className={`${styles.skillLevelBadge} ${getLevelClass(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
