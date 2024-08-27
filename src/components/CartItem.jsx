import { useContext } from "react";
import CartItemsContext from "../context/CartItemsContext";

const CartItem = ({ id, name, price, quantity, subTotalPrice }) => {
    const { removeFromCart } = useContext(CartItemsContext);

    return (
        <li className="flex items-center relative justify-between border-b-[1px] py-4 animate-fade">
            <div>
                <p className="text-rose900 font-semibold">{name}</p>
                <div className="flex space-x-2">
                    <p className="font-semibold text-main_red">{quantity}x</p>
                    <p className="text-rose500">@ ${price.toFixed(2)}</p>
                    <p className="font-semibold text-rose500">${subTotalPrice.toFixed(2)}</p>
                </div>
            </div>
            <button onClick={() => removeFromCart(id)} className="border-[1px] rounded-full p-1 border-rose300 hover:border-rose900 group transition-colors" aria-label={`Remove ${name} from cart`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                    <path className="group-hover:fill-rose900 transition-colors" fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                </svg>
            </button>
        </li>
    )
}

export default CartItem