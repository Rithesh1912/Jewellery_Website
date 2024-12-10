import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const EarringsDetailsPage = () => {
  const { name } = useParams(); // Get the dynamic name from URL
  const location = useLocation(); // Access state passed during navigation
  const earring = location.state?.earring || { name, price: 'Price not available', image: '' };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">{earring.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <img
            src={earring.image}
            alt={earring.name}
            className="img-fluid rounded"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h2>Price: {earring.price}</h2>
          <p>
            This is a premium {earring.name} crafted with the finest materials to suit your
            style. Add it to your collection today!
          </p>
          <button className="btn btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default EarringsDetailsPage;
