// third-party
import { ChevronRight } from "lucide-react";

// components
import { products } from "../constant";

const Products = () => {
  return (
    <div>
      {" "}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Popular Products</h2>
          <a href="#" className="view-all">
            View all <ChevronRight size={16} />
          </a>
        </div>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-info">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                <div>
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </div>
              <div className="product-price">
                <div className="price-info">
                  <p className="current-price">{product.price}</p>
                  <p className="original-price">{product.originalPrice}</p>
                </div>
                <ChevronRight size={20} color="#a0aec0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
