import Header from './components/Header';
import Hero from './components/Hero';
import TabsFeatures from './components/TabsFeatures';
import Partners from './components/Partners';
import WideCTA from './components/WideCTA';
import TrustStats from './components/TrustStats';
import FAQ from './components/FAQ';
import ContactSummary from './components/ContactSummary';
import Pros from './components/Pros';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7ED' }}>
      <Header />
      <main>
        <Hero />
        <TabsFeatures />
        <Partners />
        <Pros />
        <TrustStats />
        <FAQ />
        <WideCTA />
        <ContactSummary />
      </main>
      <Footer />
    </div>
  )
}

export default App