/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}./img/white_logo.png`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Welcome </Button>
            <Button href={docUrl('welcome')}>Documentation</Button>
            <Button href={docUrl('accesibility-suite')}>OTTAA Accessibility Suite</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
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
    );



    const OurVision = () => {

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Our Vision</h2>
          <p>Be a global one-stop solution for technological solutions for people with disabilities. With innovation, affordability and empathy as key motivators and guidelines. </p>
        </div>
      );
    };

    const OurMision = () => {

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Our Mission</h2>
          <p>Everyday we work to improve people with disabilities lifestyle by returning the voice to all those who have lost it; we are sure that technology can empower people with disabilities. </p>
        </div>
      );
    };

    const OurComunity = () =>{
      return (
        <div className ="productShowcaseSection paddingBottom">
          <h2>Our Community</h2>
          <p align ="justify">Our community is a crucible of experiences and capabilities, from software developers, biomedical engineers, speech therapists, families, and people with disabilities. We treat ourselves as equals with respect and empathy         
        </p>
        </div>
      );
    }

    const LeaderShipGovernance = () =>{
      return (
        <div className ="productShowcaseSection paddingBottom">
          <h2>Leadership and Governance</h2>
          <p align =" justify" >As with any large software development, we have to analyze, review and approve any change made to the software to be consistent and respectful of our users, most importantly with those that are not used to or have a hard time facing changes. 
            <br></br>Nevertheless we would love to hear your suggestions, improvements or crazy new ideas.
            <br></br>For your contribution to be seamless and enjoyable, we suggest you to start with our bite-size "Good first contributions", up until you feel confident enough to face the big features.
          </p>
        </div>
      );
    }



    
    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}./img/tutorial01.jpg`,
            imageAlign: 'right',
            title: 'How it works',
          },
        ]}
      </Block>
    );

    const TutorialDescription1 = () =>(
      <Block background="dark">
        {[
          {
            content:
              'Touch one or more pictograms to create a sentence as long as you want. The pictograms are automatically related and you will always have one more pictogram to add.',
            image: `${baseUrl}./img/tutorial01.jpg`,
            imageAlign: 'right',
            title: 'Create your phrases',
          },
        ]}
      </Block>
    );

    const TutorialDescription2 = () =>(
      <Block background="light">
        {[
          {
            content:
              'Once the phrase is created, touch the OTTAA logo to speak aloud or using the share icon, you can send your phrase through the most used social networks.',
            image: `${baseUrl}./img/tutorial02.jpg`,
            imageAlign: 'left',
            title: 'Talk to the world',
          },
        ]}
      </Block>
    );

    const TutorialDescription3 = () => (
      <Block background="dark">
        {[
          {
            content:
              'In OTTAA you have access to thousands of pictograms to talk about whatever you want, find the Picto Gallery in the lower left corner of the main screen.',
            image: `${baseUrl}./img/tutorial03.jpg`,
            imageAlign: 'right',
            title: 'Access thousands of pictograms',
          },
        ]}
      </Block>
    );

    const TutorialDescription4 = () => (
      <Block background="light">
        {[
          {
            content:
              'Enter the games section to learn by playing. OTTAA has didactic games to learn vocabulary, concepts and much more. Also, more games will be available soon!',
            image: `${baseUrl}./img/tutorial04.jpg`,
            imageAlign: 'left',
            title: 'Play and Learn',
          },
        ]}
      </Block>
    );



    const FirstDescription = () => (
      <Block layout="fourColumn">
        {[
          {
            button:`watch the video`+`uri:http://www.youtube.com/watch?v=zAL7yWxc-gU`,
            image: 'http://img.youtube.com/vi/zAL7yWxc-gU/0.jpg',
            imageAlign: 'bottom',
          },
        
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    const Center = () =>{
      return (
        <table>
          <tr><td><OurVision/></td><td><OurMision/></td><td><OurComunity/></td></tr>
        </table>
      );      
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FirstDescription />
          <Center/>
          <LeaderShipGovernance/> 
          <TutorialDescription1 />
          <TutorialDescription2 />
          <TutorialDescription3 />
          <TutorialDescription4 />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
