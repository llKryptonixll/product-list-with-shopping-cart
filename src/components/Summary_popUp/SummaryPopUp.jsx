import { useContext, useEffect } from "react";
import CartItemsContext from "../../context/CartItemsContext";
import PopUpCartItem from "./PopUpCartItem";
import Button from "../Button";

const SummaryPopUp = ({ popUpIsOpen, setPopUpIsOpen }) => {
    const { cartItems, setCartItems, calculateTotalPrice } = useContext(CartItemsContext);

    function handleClick() {
        // Close the popup and empty the cart
        setCartItems([]);
        setPopUpIsOpen(false);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.addEventListener("scroll", () => {
            if (popUpIsOpen && window.scrollY === 0) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popUpIsOpen]);

    return (
        <dialog
            aria-label="Order Confirmed: Your order has been successfully placed and the details are listed below."
            className={`${popUpIsOpen && "grid"} fixed bg-black bg-opacity-40 w-full h-full place-items-center top-0 left-0 sm:p-8 animate-fade overflow-y-auto`}
        >
            <div className="bg-white sm:max-w-[600px] w-full sm:mt-0 mt-24 p-8 grid gap-8 sm:self-auto self-end sm:rounded-main_rounded rounded-t-main_rounded animate-fade">
                <img src="./assets/images/icon-order-confirmed.svg" alt="Green checked icon" />
                <div className="grid gap-2">
                    <p className="text-rose900 font-bold text-4xl">Order Confirmed</p>
                    <p className="text-rose500">We Hope you enjoy your food!</p>
                </div>

                <div className="bg-rose50 grid gap-8 rounded-lg p-4">
                    <ul className="grid gap-4 rounded-md">
                        {cartItems.map((item) => (
                            <PopUpCartItem
                                key={item.id}
                                itemData={item}
                            />
                        ))}
                    </ul>
                    <div className="flex justify-between">
                        <p className="text-rose500 font-medium">Order Total</p>
                        <p className="text-rose900 font-bold text-2xl">${calculateTotalPrice()}</p>
                    </div>
                </div>
                <Button
                    textContent="Start New Order"
                    onClick={handleClick}
                />
            </div>
        </dialog>
    );
}

export default SummaryPopUp;
