import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaWrapper}>
            <div className="container text--center">
                <h2 className={styles.ctaTitle}>Let's plan your first use case.</h2>
                <p className={styles.ctaSubtitle}>
                    Join forward-thinking teams who've already made the switch to faster, smarter, and more cost-effective data analytics.
                </p>
                <div className={styles.ctaButtons}>
                    <Link
                        className={styles.ctaButtonPrimary}
                        to="https://cazpian.ai/contact">
                        Book a Meeting <span className={styles.arrow}>→</span>
                    </Link>
                    <Link
                        className={styles.ctaButtonSecondary}
                        to="https://cazpian.ai/book-meeting">
                        Request a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
