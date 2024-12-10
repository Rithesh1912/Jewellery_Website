import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example data for rings
const rings = [
  { name: 'Gold Ring', price: '$120', image: '/assets/images/ring1.jpg' },
  { name: 'Silver Ring', price: '$100', image: '/assets/images/ring2.jpg' },
];

const RingsPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Rings Collection</h1>
      <div className="row">
        {rings.map((ring, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                src={ring.image}
                className="card-img-top"
                alt={ring.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{ring.name}</h5>
                <p className="card-text">{ring.price}</p>
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

export default RingsPage;
