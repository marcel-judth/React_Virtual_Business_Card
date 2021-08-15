import Footer from '../shared/Footer';
import Aboutus from './aboutus/Aboutus';
import Contact from './contact/Contact';
import Faq from './faq/Faq';
import Landing from './landing/Landing';
import Products from './products/Products';

function Home() {
  return (
    <>
      <Landing />
      <Aboutus />
      <Products />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
