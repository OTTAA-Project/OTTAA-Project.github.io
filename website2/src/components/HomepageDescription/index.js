import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Our Vision',
    description: (
      <>
        Be a global one-stop solution for technological solutions for people with disabilities. With innovation, affordability and empathy as key motivators and guidelines.
      </>
    ),

  },
  {
    title: 'Our Mission',
    description: (
      <>
        Everyday we work to improve people with disabilities lifestyle by returning the voice to all those who have lost it; we are sure that technology can empower people with disabilities.
      </>
    ),
  },
  {
    title: 'Our Community',
    description: (
      <>
        Our community is a crucible of experiences and capabilities, from software developers, biomedical engineers, speech therapists, families, and people with disabilities. We treat ourselves as equals with respect and empathy
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p align =" justify">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageDescription() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


