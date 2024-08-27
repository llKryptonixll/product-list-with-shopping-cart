import { useContext } from "react";
import CartItemsContext from "../context/CartItemsContext";
import CartItem from "./CartItem"
import Button from "./Button"

const ShoppingCart = ({ setPopUpIsOpen }) => {

  const { cartItems, calculateTotalPrice, calcTotalQuantity } = useContext(CartItemsContext);

  return (
    <aside className="md:w-[35%] h-fit rounded-main_rounded bg-white p-5">
      <p className="text-3xl font-bold text-main_red mb-10">Your Cart <span>({calcTotalQuantity()})</span></p>

      {cartItems.length === 0 ? (
        <div className="grid place-items-center">
          <img aria-hidden="true" src="./assets/images/illustration-empty-cart.svg" alt="A choclate cake" />
          <p className="text-rose500 font-medium">Your added items will apear here</p>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => {
              const { id, name, price, quantity, subTotalPrice } = item
              return (
                <CartItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  subTotalPrice={subTotalPrice}
                />
              )
            })}
          </ul>
          <div className="grid gap-6">
            <div className="flex justify-between pt-10">
              <p className="text-rose900">Order Total</p>
              <p className="font-bold text-rose900 text-2xl">${calculateTotalPrice()}</p>
            </div>
            <div className="flex space-x-2 justify-center items-center bg-rose-100 bg-opacity-30 py-4 rounded-main_rounded">
              <img src="./assets/images/icon-carbon-neutral.svg" alt="A green tree icon" />
              <p className="text-rose900">
                This is a <span className="font-semibold">carbon-neutral</span> delivery
              </p>
            </div>
            <Button
              textContent="Confirm Order"
              onClick={() => setPopUpIsOpen(true)}
            />
          </div>
        </div>
      )}

    </aside>
  )
}

export default ShoppingCart