import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../product'; // Check this import
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Product</h1>
      <Row>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} sm={12} md={3} lg={3} xl={3}>
              {product ? (
                <Product product={product} />
              ) : (
                <p>Product data is unavailable.</p>
              )}
            </Col>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </Row>
    </div>
  );
};

export default HomeScreen;
