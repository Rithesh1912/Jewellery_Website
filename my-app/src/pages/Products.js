import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import earringImage from '../assets/earings.jpg';
import ringImage from '../assets/ring.jpg';
import necklaceImage from '../assets/necklace.jpg';
import braceletImage from '../assets/bracelets.jpg';
import { Link } from 'react-router-dom';    

const ProductPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Jewelry Collections</h1>
      <div className="row">
        {/* Earring Box */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img
              src={earringImage}
              className="card-img-top"
              alt="Earrings"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Earrings</h5>
              <p className="card-text">
                Explore our beautiful collection of earrings to add a touch of elegance to your look.
              </p>
              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Ring Box */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img
              src={ringImage}
              className="card-img-top"
              alt="Rings"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Rings</h5>
              <p className="card-text">
                Discover our stunning ring collection, perfect for all occasions.
              </p>
              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Necklace Box */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img
              src={necklaceImage}
              className="card-img-top"
              alt="Necklace"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Necklaces</h5>
              <p className="card-text">
                Browse our exquisite necklace designs to make a statement.
              </p>
              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Bracelet Box */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img
              src={braceletImage}
              className="card-img-top"
              alt="Bracelets"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">Bracelets</h5>
              <p className="card-text">
                Add the perfect finishing touch with our elegant bracelet collection.
              </p>
              <a href="#" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
