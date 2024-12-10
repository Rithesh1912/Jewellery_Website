import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../assets/about.jpg'; // Import the image

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center text-muted">
        <em>Discover the Essence of Elegance</em>
      </p>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img
            src={aboutImage} // Use the imported image
            alt="Jewelry"
            className="img-fluid rounded mb-4"
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <p>
            Welcome to <strong>RR Jewelry Shop</strong>, where elegance meets
            craftsmanship. At RR Jewelry Shop, we are committed to creating
            timeless pieces that celebrate life's most precious moments. Every
            jewel we offer is a symbol of quality, beauty, and sophistication.
          </p>
          <p>
            Our team of expert artisans meticulously crafts each piece using
            the finest materials, ensuring it stands the test of time. Whether
            you are looking for a unique engagement ring, a dazzling necklace,
            or a meaningful gift, we have something special for you.
          </p>
          <p>
            Explore our exquisite collections and let us help you shine on your
            most cherished occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
