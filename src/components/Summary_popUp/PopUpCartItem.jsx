const PopUpCartItem = ({ itemData }) => {
  const { name, quantity, price, image, subTotalPrice } = itemData

  return (
    <li className="flex justify-between items-center border-b-[1px] pb-4">
      <div className="flex items-center space-x-3">
        <img className="rounded-md max-w-[50px] max-h-[50px]" src={image.thumbnail} alt={`Thumbnail of ${name}`} />
        <div className="grid ">
          <p className="text-rose900 font-semibold">{name}</p>
          <div className="flex space-x-3">
            <p className="font-semibold text-main_red">{quantity}x</p>
            <p className="text-rose500">@ ${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <p className="text-rose900 font-semibold">${subTotalPrice.toFixed(2)}</p>
    </li>
  )
}

export default PopUpCartItem