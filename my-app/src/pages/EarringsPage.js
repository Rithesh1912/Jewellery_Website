import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const earrings = [
  { name: 'Gold Earrings', price: '$100', image: '/assets/images/earring1.jpg' },
  { name: 'Silver Earrings', price: '$80', image: '/assets/images/earring2.jpg' },
  { name: 'Diamond Earrings', price: '$200', image: '/assets/images/earring3.jpg' },
];

const EarringsPage = () => {
  const navigate = useNavigate();

  const handleShopNowClick = (earring) => {
    navigate(`/earrings/${earring.name}`, { state: { earring } });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Earrings Collection</h1>
      <div className="row">
        {earrings.map((earring, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card">
              <img
                src={earring.image}
                className="card-img-top"
                alt={earring.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{earring.name}</h5>
                <p className="card-text">{earring.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleShopNowClick(earring)}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarringsPage;
