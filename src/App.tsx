import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import ResumeSection from './components/ResumeSection'
import StatsSection from './components/StatsSection'
import AvailabilitySection from './components/AvailabilitySection'
import ContactSection from './components/ContactSection'


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container-fluid">
        <About />
        <AvailabilitySection />
        <ResumeSection />
        <StatsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
