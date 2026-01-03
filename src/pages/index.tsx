import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures/HomepageFeatures';
import CTASection from '@site/src/components/CTASection/CTASection';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import React, { useEffect, useRef } from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const heroRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    let frameId: number;
    const updatePosition = () => {
      if (heroRef.current) {
        // Smoothing factor (0.1 = very smooth/slow, 0.2 = responsive but smooth)
        currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
        currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;

        heroRef.current.style.setProperty('--mouse-x', `${currentPos.current.x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${currentPos.current.y}px`);
      }
      frameId = requestAnimationFrame(updatePosition);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      frameId = requestAnimationFrame(updatePosition);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} ref={heroRef}>
      <div className="container hero-container-custom">
        <div className="hero-logo-container">
          <img src="img/cazpian_logo.svg" alt="Cazpian Logo" className="hero-logo-img" />
        </div>
        <Heading as="h1" className="hero__title hero__title_custom">
          Documentation <span className="hero__title_blue">& Blog</span>
        </Heading>
        <p className="hero__subtitle">
          Master the open data stack with Apache Iceberg and Spark.
          Everything you need to build, scale, and automate your data platform.
        </p>
        <div className={styles.buttons}>
          <Link
            className="btn-primary"
            to="/docs/intro"
            style={{ marginRight: '1rem' }}>
            Get started
          </Link>
          <Link
            className="btn-secondary"
            to="/blog">
            Read the blog
          </Link>
        </div>
      </div>
      <div className="interactive-glow"></div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Cazpian Docs"
      description="AWS-first Lakehouse platform for Apache Iceberg & Spark">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CTASection />
      </main>
    </Layout>
  );
}
