import React, { Component } from "react";
import "./Thumbnail.css";

export class Thumbnail extends Component {

  render() {
    
    const gallery = this.props.gallery;
    const inStock = this.props.inStock;
    const product = JSON.parse(this.props.product);
    const image = this.props.image;

    const mappedGallery = gallery.map((item) => {
      return (
        <img
          src={item}
          key={item}
          alt={product?.id}
          height="80px"
          onError={(e) => (e.target.style.display = "none")}
          id={item}
          onClick={(e) => this.props.setImage(e)}
        />
      );
    });

    return (
      <>
        <div className="pdp-pictures">
          {/* side images */}
          {gallery && mappedGallery}
        </div>

        {/* main image */}
        <div className="main-image">
          <img
            className="product-image"
            src={image}
            alt={product?.id}
            height="511px"
          />
          {!inStock && (
            <div className="image-text">OUT OF STOCK</div>
          )}
        </div>
      </>
    );
  }
}

export default Thumbnail;
