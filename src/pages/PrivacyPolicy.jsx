import React from 'react';
import './PrivacyPolicy.css';
import Navbar from '../components/navbar/Navbar';
import Foter from '../components/footer/Foter';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy-container">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.</p>
        <h2>Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and usage data when you use our services.</p>
        <h2>How We Use Your Information</h2>
        <p>Your information may be used to improve our services, communicate with you, and comply with legal obligations.</p>
        <h2>Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access and disclosure.</p>
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at support@example.com.</p>
      </div>
      <Foter />
    </div>
  );
}

export default PrivacyPolicy;