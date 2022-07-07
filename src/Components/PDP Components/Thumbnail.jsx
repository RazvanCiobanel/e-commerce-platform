import React, { PureComponent } from "react";
import "./Thumbnail.css";

export class Thumbnail extends PureComponent {
  render() {

    const { 
      gallery, 
      inStock, 
      product, 
      image, 
      setImage 
    } = this.props;

    const productObj = JSON.parse(product);

    const mappedGallery = gallery.map((item) => {
      return (
        <img
          className="thumbnail"
          src={item}
          key={item}
          alt={productObj?.id}
          height="80px"
          onError={(e) => (e.target.style.display = "none")}
          id={item}
          onClick={(e) => setImage(e)}
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
            alt={productObj?.id}
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
