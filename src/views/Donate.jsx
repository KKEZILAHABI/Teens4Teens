import React from 'react';

const Donate = () => (
  <div className="view-container">
    <section className="card">
      <h2>Support Our Cause</h2>
      <p>
        Dear Esteemed Well-Wishers, Fellow Environmentalists, and Philanthropists, the earth is our shared home, 
        yet today, it faces unprecedented threats from environmental degradation and the devastating effects of 
        climate change. At Teens For Teens Kenya, we are committed to empowering young people to lead the fight 
        against these challenges.
      </p>
      <p>Your contribution will directly fund:</p>
      <ul>
        <li>Tree-planting initiatives to restore our forests.</li>
        <li>Climate change education programs for schools and communities.</li>
        <li>Clean-up drives and sustainable waste management campaigns.</li>
        <li>Innovative solutions to reduce carbon footprints.</li>
      </ul>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 1rem 0' }}>Donation Channels</h3>
        <ul>
          <li><strong>PAYBILL:</strong> 880100</li>
          <li><strong>ACCOUNT NUMBER:</strong> 9676730018</li>
          <li><strong>BANK:</strong> NCBA BANK</li>
        </ul>
      </div>
      <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
        Every contribution, big or small, will make a difference. Join us in creating a legacy of environmental stewardship and resilience!
      </p>
    </section>
  </div>
);

export default Donate;