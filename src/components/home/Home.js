import { useEffect } from 'react';
import Footer from '../shared/Footer';
import Aboutus from './aboutus/Aboutus';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
import Intro from './intro/Intro';
import Landing from './landing/Landing';
import Products from './products/Products';

function Home({ theme, setTheme }) {
  useEffect(() => {}, []);
  return (
    <>
      <Landing theme={theme} setTheme={setTheme} />
      <Intro theme={theme} setTheme={setTheme} />
      <Aboutus />
      <Products />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
