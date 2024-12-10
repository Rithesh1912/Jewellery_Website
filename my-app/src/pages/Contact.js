import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa', // Light gray background color
        minHeight: '100vh', // Ensures it covers the entire viewport height
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="text-center text-muted">
          <em>We're Here to Help</em>
        </p>

        {/* Contact Information */}
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 text-center mb-3">
            <h5>Phone</h5>
            <p>+1 123-456-7890</p>
          </div>
          <div className="col-lg-4 col-md-6 text-center mb-3">
            <h5>Email</h5>
            <p>support@rrjewelryshop.com</p>
          </div>
          <div className="col-lg-4 col-md-12 text-center">
            <h5>Address</h5>
            <p>
              RR Jewelry Shop, <br />
              123 Elegance Street, <br />
              Diamond City, Jewel State, 456789
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-5">
          <h4 className="text-center">Visit Us</h4>
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2556350554073!2d80.21724077453182!3d12.826750687475446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525a688f3d32f1%3A0x769131751ee5a50e!2sChangepond%20Technologies!5e0!3m2!1sen!2sin!4v1733804175280!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="card p-4 shadow">
          <h4 className="mb-4">Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
