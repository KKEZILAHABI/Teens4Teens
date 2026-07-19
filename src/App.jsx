import React, { useState } from 'react';
import './App.css';

// Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import Introduction from './views/Introduction';
import Mission from './views/Mission';
import Activities from './views/Activities';
import Members from './views/Members';
import CallToAction from './views/CallToAction';
import Donate from './views/Donate';
import Conclusion from './views/Conclusion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('intro');

  // View router dictionary for clean O(1) modular switching
  const renderView = () => {
    switch (activeTab) {
      case 'intro':
        return <Introduction />;
      case 'mission':
        return <Mission />;
      case 'activities':
        return <Activities />;
      case 'members':
        return <Members />;
      case 'call':
        return <CallToAction />;
      case 'donate':
        return <Donate />;
      case 'conclusion':
        return <Conclusion />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="app-wrapper">
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;