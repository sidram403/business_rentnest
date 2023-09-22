import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import styles from './styles';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import About from './components/About';
import Team from './components/Team';

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Testimonials />
          <Features />
          <Team />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
