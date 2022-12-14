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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


function Block(props){
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
};

function LeftBlock(props){
  <Container 
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="left"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
};

function RightBlock(props){
  <Container 
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="left"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
};

function Description(){
  <Block background="dark">
    {[
      {
        content:
          'This is another description of how this project is useful',
        image: 'img/tutorial01.jpg',
        imageAlign: 'right',
        title: 'How it works',
      },
    ]}
  </Block>
};

const TutorialDescription1=()=>{
  <LeftBlock background="dark">
    {[
      {
        content:
          'Touch one or more pictograms to create a sentence as long as you want. The pictograms are automatically related and you will always have one more pictogram to add.',
        image: '/img/tutorial01.jpg',
        imageAlign: 'right',
        title: 'Create your phrases',
      },
    ]}
  </LeftBlock>
};

const TutorialDescription2 =()=>{
  <RightBlock background="light">
    {[
      {
        content:
          'Once the phrase is created, touch the OTTAA logo to speak aloud or using the share icon, you can send your phrase through the most used social networks.',
        image: 'img/tutorial02.jpg',
        imageAlign: 'left',
        title: 'Talk to the world',
      },
    ]}
  </RightBlock>
};

const TutorialDescription3 =()=>{
  <LeftBlock background="dark">
    {[
      {
        content:
          'In OTTAA you have access to thousands of pictograms to talk about whatever you want, find the Picto Gallery in the lower left corner of the main screen.',
        image: 'img/tutorial03.jpg',
        imageAlign: 'right',
        title: 'Access thousands of pictograms',
      },
    ]}
  </LeftBlock>
};

const TutorialDescription4=()=> {
  <RightBlock background="light">
    {[
      {
        content:
          'Enter the games section to learn by playing. OTTAA has didactic games to learn vocabulary, concepts and much more. Also, more games will be available soon!',
        image: 'img/tutorial04.jpg',
        imageAlign: 'left',
        title: 'Play and Learn',
      },
    ]}
  </RightBlock>
};



function FirstDescription(){
  <Block layout="fourColumn">
    {[
      {
        button:`watch the video`+`uri:http://www.youtube.com/watch?v=zAL7yWxc-gU`,
        image: 'http://img.youtube.com/vi/zAL7yWxc-gU/0.jpg',
        imageAlign: 'bottom',
      },
    
    ]}
  </Block>
};


function LeaderShipGovernance() {
  return (
    <div className ={clsx('col col--8')}>
      <h2>Leadership and Governance</h2>
      <p align =" justify" >As with any large software development, we have to analyze, review and approve any change made to the software to be consistent and respectful of our users, most importantly with those that are not used to or have a hard time facing changes. 
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
      <main>
        <HomepageFeatures />
      </main>
      <center>
      <HomepageBlocks/>
      </center>
          {/* 
          <TutorialDescription1 />
          <TutorialDescription2 />
          <TutorialDescription3 />
          <TutorialDescription4 /> */}
    </Layout>
  );
}
