import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé !');
  };

  return (
    <div className="contact-container">
      <h2>Contactez-moi!</h2>
   

      <form onSubmit={handleSubmit}>
        <div>
        
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom complet"
            required
          />
        </div>

        <div>
  
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre Adresse Email"
            required
          />
        </div>

        <div>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Votre Numéro de téléphone"
            required
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Entrez votre message"
            required
          ></textarea>
        </div>

        <button type="submit">Envoyer le message</button>
      
      </form>
  
     
    </div>
    
    
  );
  
};

export default Contact;
