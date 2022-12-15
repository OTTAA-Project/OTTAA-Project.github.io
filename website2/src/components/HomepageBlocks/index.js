import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';




const myBlockList = [
  { 
    value : '/img/tutorial01.jpg',
    title:'Create your phrases',
    description:(<>Touch one or more pictograms to create a sentence as long as you want. The pictograms are automatically related and you will always have one more pictogram to add.</>),
  },
  {
    value:'/img/tutorial02.jpg',
    title:'Talk to the world',
    description:(<>Once the phrase is created, touch the OTTAA logo to speak aloud or using the share icon, you can send your phrase through the most used social networks.</>)
  },
  {
    value:'/img/tutorial03.jpg',
    title:'Access thousands of pictograms',
    description:(<>In OTTAA you have access to thousands of pictograms to talk about whatever you want, find the Picto Gallery in the lower left corner of the main screen.</>)
  },
  {
    value:'/img/tutorial04.jpg',
    title:'Play and Learn',
    description:(<>Enter the games section to learn by playing. OTTAA has didactic games to learn vocabulary, concepts and much more. Also, more games will be available soon!</>)
  },
];

function Feature({value,title, description}) {
  return (
    <div className={styles.featureLeft}>
    <div > 
      <h2  className={styles.FeatureTitle}>{title}</h2>
      <p  className={styles.featureText}>{description}</p>
     </div>
     <div className={styles.featureRight}> 
    <img  className={styles.featureImage}src={value}/>
  </div></div>
    
  );
}

export default function HomepageBlocks() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {myBlockList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}


