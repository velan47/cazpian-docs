import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Cazpian Documentation <br />
          <span className="hero__title_blue">& Blog</span>
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
      </main>
    </Layout>
  );
}
