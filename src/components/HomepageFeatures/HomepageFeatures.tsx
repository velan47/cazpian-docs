import React, { useState, ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

type FeatureItem = {
  id: string;
  title: string;
  icon: string;
  description: ReactNode;
  imageUrl: string;
};

const FeatureList: FeatureItem[] = [
  {
    id: 'lakehouse',
    title: 'Managed Lakehouse',
    icon: '💎',
    description: (
      <>
        Built on Apache Iceberg, offering ACID transactions, time travel, and
        seamless schema evolution for your AWS storage layer.
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'compute',
    title: 'High-Speed Compute',
    icon: '⚡',
    description: (
      <>
        Varying scale computing with optimized Apache Spark engines, delivering
        massive performance for petabyte-level data processing.
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'ai-studio',
    title: 'AI Data Studio',
    icon: '🧠',
    description: (
      <>
        Build and deploy intelligent AI agents that interact directly with your
        Lakehouse data to automate complex business workflows.
      </>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function HomepageFeatures(): ReactNode {
  const [activeTab, setActiveTab] = useState<FeatureItem>(FeatureList[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (feature: FeatureItem) => {
    if (feature.id === activeTab.id) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(feature);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="features-container">
          <div className="feature-tabs">
            {FeatureList.map((feature) => (
              <div
                key={feature.id}
                className={clsx('feature-tab-item', { active: activeTab.id === feature.id })}
                onClick={() => handleTabChange(feature)}
              >
                <div className="tab-header">
                  <span className="tab-icon">{feature.icon}</span>
                  <Heading as="h3" className="tab-title">
                    {feature.title}
                  </Heading>
                </div>
                <div className="tab-description">
                  {feature.description}
                  <div className="learn-more-link">
                    Learn more <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="feature-display">
            <img
              src={activeTab.imageUrl}
              alt={activeTab.title}
              className={clsx('display-image', isTransitioning ? 'image-enter' : 'image-active')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
