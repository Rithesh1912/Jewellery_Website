import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example data for bracelets
const bracelets = [
  { name: 'Silver Bracelet', price: '$80', image: '/assets/images/bracelet1.jpg' },
  { name: 'Gold Bracelet', price: '$150', image: '/assets/images/bracelet2.jpg' },
];

const BraceletsPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Bracelets Collection</h1>
      <div className="row">
        {bracelets.map((bracelet, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                src={bracelet.image}
                className="card-img-top"
                alt={bracelet.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{bracelet.name}</h5>
                <p className="card-text">{bracelet.price}</p>
                <a href="#" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BraceletsPage;
