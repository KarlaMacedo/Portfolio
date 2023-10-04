// ContactSection.tsx
import React from 'react';
import ContactInfo from './ContactInfo';

const ContactSection: React.FC = () => {
    return (
      <div className="section contact" id="contact">
        <div className="container">
          <div className="row">
            <ContactInfo />
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactSection;  