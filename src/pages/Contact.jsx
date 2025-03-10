import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Foter from '../components/footer/Foter';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('It is not a valid email');
      return;
    }
   
    console.log({ email, question, description });
    window.location.reload();
  };

  

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="question">Question:</label>
          <select
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          >
            <option value="">Select a question</option>
            <option value="question1">Co dzieje się z wódką, gdy zostanie po imprezie?</option>
            <option value="question2">Kto odpowiada za noszenie szkła?</option>
            <option value="question3">Czy dajecie rabaty dla nowych klientów?</option>
            <option value="question4">Czy są drinki dla dzieci i kobiet w ciąży?</option>
            <option value="question5">Czy wystawiacie fakture VAT?</option>
            <option value="question6">Ile drinków znajduje się w karcie koktajli?</option>
            <option value="question7">Gdzie znajdę wasz bar?</option>
            <option value="question8">Jakie są najpopularniejsze drinki?</option>
            <option value="question9">Jaki jest ulubiony drink klientów?</option>
            <option value="question10">Co to jest pokaz barański?</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Foter />
    </div>
  );
};

export default Contact;