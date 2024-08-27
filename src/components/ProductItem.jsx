import { useContext, useState } from "react";
import CartItemsContext from "../context/CartItemsContext";
import SpinnerLoader from "./SpinnerLoader";

const ProduktItem = ({ productItem }) => {
  const { image, name, category, price } = productItem
  const { mobile, tablet, desktop } = image;
  const [imageLoading, setImageLoading] = useState(false);

  const mainBtnStyles = "absolute flex -bottom-5 w-[65%] py-2 rounded-full items-center";
  const quantityBtnStyles = "border-[1px] rounded-full w-[20px] h-[20px] grid place-items-center hover:bg-white group transition-colors";
  const svgHoverStyles = "group-hover:fill-main_red transition:colors";

  const { addItemsToCart, cartItems, incrementQuantity, decrementQuantity } = useContext(CartItemsContext);

  // Check if the item is already in the cart
  const isInCart = cartItems.find((item) => item.id === productItem.id);
  
  return (
    <li className="grid items-center gap-8">
      {!imageLoading &&
        <SpinnerLoader
          message="Product image is loading..."
          ariaLabel="Loading image"
        />
      }
      <div className="relative">
        <picture>
          <source srcSet={desktop} media="(min-width: 1024px)" />
          <source srcSet={tablet} media="(min-width: 768px)" />
          <img
            className={`${isInCart && "border-2 border-main_red"} w-full rounded-main_rounded`}
            src={mobile}
            alt={name}
            loading="lazy"
            onLoad={() => setImageLoading(true)}
          />
        </picture>

        <div className={`${!imageLoading ? "hidden" : "flex"} justify-center`}>
          {isInCart ? (
            <div className={`${mainBtnStyles} bg-main_red justify-between px-4 animate-wiggleScaleIn`}>
              <button
                className={quantityBtnStyles}
                aria-label="decrement product quantity"
                onClick={() => decrementQuantity(productItem.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                  <path className={svgHoverStyles} fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                </svg>
              </button>
              <p className="text-white">{isInCart.quantity}</p>
              <button
                className={quantityBtnStyles}
                aria-label="increment product quantity"
                onClick={() => incrementQuantity(productItem.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path className={svgHoverStyles} fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItemsToCart(productItem)}
              className={`${mainBtnStyles} bg-white justify-center border-[1px] text-rose900 space-x-2 border-rose500 hover:border-main_red hover:text-main_red transition-colors`}
            >
              <img src="./assets/images/icon-add-to-cart.svg" alt="A shopping cart" />
              <span className="font-semibold">Add to Cart</span>
            </button>
          )}
        </div>
      </div>

      <div className={`${!imageLoading ? "hidden" : "block"}`}>
        <p className="text-rose500 text-sm">{category}</p>
        <p className="text-rose900 font-medium">{productItem.name}</p>
        <p className="text-main_red font-semibold">${price.toFixed(2)}</p>
      </div>
    </li>
  );
};

export default ProduktItem;