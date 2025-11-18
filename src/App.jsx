import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pros from './components/Pros';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pros />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App