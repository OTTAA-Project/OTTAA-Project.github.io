import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageDescription';
import HomepageBlocks from '@site/src/components/HomepageBlocks';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header >
      <div className={styles.container}>
      <div></div>
        <div className={styles.blockSize}>
          <h1 className={styles.customTitle}>{siteConfig.title}</h1>
          <div className={styles.mainTitle}>
            <div className={styles.buttons}>
              <Link
                className={styles.buttonOTTAA}
                to="/docs/">
                 DOCUMENTATION
               </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={styles.buttonOTTAA}
                to="/docs/Accesibility/accesibility-suite">
                OTTAA ACCESSIBILITY SUITE
              </Link>
            </div>
          </div>
        </div>
        <div></div>
        <div className={styles.blockSize2}>
          <img src={"/img/white_logo.png"} className={styles.customTitleImage}/>
        </div>
      </div>
      

    </header>
  );
}

function HomepageImage(){
  return(
    <div className={styles.view}>
      <a href={"https://www.youtube.com/watch?v=zAL7yWxc-gU"}><img src="img/ottaa_project/usar_ottaa_2.gif" className={styles.customImage}></img></a>
    </div>
  );
}



function LeaderShipGovernance() {
  return (
    <div className ={clsx('col col--4')}>
      <h2>Leadership and Governance</h2>
      <p align ="justify">As with any large software development, we have to analyze, review and approve any change made to the software to be consistent and respectful of our users, most importantly with those that are not used to or have a hard time facing changes. 
        <br></br>Nevertheless we would love to hear your suggestions, improvements or crazy new ideas.
        <br></br>For your contribution to be seamless and enjoyable, we suggest you to start with our bite-size "Good first contributions", up until you feel confident enough to face the big features.
      </p>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <HomepageImage />

      <main>
        <HomepageFeatures />
      <center>
        <LeaderShipGovernance/>
      </center>
        <center>
          <HomepageBlocks/>
        </center>
      </main>
    </Layout>
  );
}
