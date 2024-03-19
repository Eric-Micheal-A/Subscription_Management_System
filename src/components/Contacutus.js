import React from 'react'
import '../styles/contact.css'


const Contacutus = () => {
    const send=()=>
    {
        alert('Thanks for Your Response:)')
    }
  return (
    <div className='full2'>
       <div className="contact-container">
          <h1>Contact Us</h1>

          <div className="contact-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="queries">Queries:</label>
        <textarea id="queries" name="queries" rows="4"></textarea>

        <button className="send-btn" onClick={send}>Send</button>
        </div>

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Contacutus
