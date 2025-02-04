import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contactus.css";
const ContactForm = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   phoneNumber: '',
   howDidYouKnow: 'Select',
   subject: '',
   detail: '',
   consent: false,
 });

 const handleInputChange = (e) => {
   const { name, value, type, checked } = e.target;
   const updatedValue = type === 'checkbox' ? checked : value;
   setFormData((prevData) => ({
     ...prevData,
     [name]: updatedValue,
   }));
 };

 const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phoneNumber,
        how_did_you_know: formData.howDidYouKnow,
        subject: formData.subject,
        message: formData.detail,
      };

    // Send email using emailjs-com
    emailjs.send('service_oilldem', 'template_3nc360o', templateParams, '4z5c9qcOp7BVn3lxU')
      .then(() => {
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          howDidYouKnow: 'Select',
          subject: '',
          detail: '',
          consent: false,
        });
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      });
 };

 return (
    <div className="main-container">
   <div className="contact-form-container">
     <h2 className="contact-form-title">Leave us a message</h2>
     <form className="contact-form" onSubmit={handleSubmit}>
       <div className="form-row">
         <div className="form-group">
           <label htmlFor="name">Name *</label>
           <input
             type="text"
             id="name"
             name="name"
             value={formData.name}
             onChange={handleInputChange}
             required
           />
         </div>
         <div className="form-group">
           <label htmlFor="email">Email *</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
             required
           />
         </div>
       </div>
       <div className="form-row">
       <div className="form-group">
         <label htmlFor="phoneNumber">Phone Number *</label>
         <input
           type="tel"
           id="phoneNumber"
           name="phoneNumber"
           value={formData.phoneNumber}
           onChange={handleInputChange}
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="howDidYouKnow">How did you know us *</label>
         <select
           id="howDidYouKnow"
           name="howDidYouKnow"
           value={formData.howDidYouKnow}
           onChange={handleInputChange}
           required
         >
           <option value="Select">Select</option>
           <option value="Referral">Referral</option>
           <option value="Advertisement">Advertisement</option>
           <option value="Search Engine">Search Engine</option>
           <option value="Other">Other</option>
         </select>
       </div>
       </div>
       <div className="form-group">
         <label htmlFor="subject">Subject *</label>
         <input
           type="text"
           id="subject"
           name="subject"
           value={formData.subject}
           onChange={handleInputChange}
           required
         />
       </div>
       <div className="form-group">
         <label htmlFor="detail">Detail</label>
         <textarea
           id="detail"
           name="detail"
           value={formData.detail}
           onChange={handleInputChange}
         />
       </div>
       <div className="form-group consent">
         <label htmlFor="consent">
           <input
             type="checkbox"
             id="consent"
             name="consent"
             checked={formData.consent}
             onChange={handleInputChange}
           />
           I give consent that the company will process my personal data.
         </label>
       </div>
       <button type="submit" className="submit-button">
         Submit
       </button>
     </form>
   </div>
   </div>
 );
};

export default ContactForm;
