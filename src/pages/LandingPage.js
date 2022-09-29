import React from 'react'
import About from '../components/About';
import Actualites from '../components/Actualites';
import BlockOne from '../components/BlockOne';
import Confiance from '../components/Confiance';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NosTechnologies from '../components/NosTechnologies';
import Services from '../components/Services';
import SolutionsInnovantes from '../components/SolutionsInnovantes';
import WorkProcess from '../components/WorkProcess';


const LandingPage = () => {
  return (
    <div>
        <Header />
        <BlockOne />
        <About />
        <Services />
        <WorkProcess />
        <SolutionsInnovantes />
        <Confiance />
        <NosTechnologies />
        <Actualites />
        <Footer />
    </div>
  )
}

export default LandingPage;
