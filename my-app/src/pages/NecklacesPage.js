import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example data for necklaces
const necklaces = [
  { name: 'Gold Necklace', price: '$150', image: '/assets/images/necklace1.jpg' },
  { name: 'Diamond Necklace', price: '$250', image: '/assets/images/necklace2.jpg' },
];

const NecklacesPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Necklaces Collection</h1>
      <div className="row">
        {necklaces.map((necklace, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                src={necklace.image}
                className="card-img-top"
                alt={necklace.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{necklace.name}</h5>
                <p className="card-text">{necklace.price}</p>
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

export default NecklacesPage;
