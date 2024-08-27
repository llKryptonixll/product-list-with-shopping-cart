import { useState, useEffect } from "react"
import { CartItemsProvider } from "./context/CartItemsContext.jsx";
import ProductItem from "./components/ProductItem.jsx"
import ShoppingCart from "./components/ShoppingCart.jsx"
import SummaryPopUp from "./components/Summary_popUp/SummaryPopUp.jsx";
import SpinnerLoader from "./components/SpinnerLoader.jsx"

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popUpIsOpen, setPopUpIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./data/data.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-rose50 font-red_hat_text min-h-screen gap-8 flex md:flex-row flex-col lg:px-padding_x_large px-padding_x_small sm:py-padding_y py-padding_y_small">
      <CartItemsProvider>
        <main className="flex-1 grid">
          <header>
            <h1 className="text-4xl text-rose900 font-bold">Desserts</h1>
          </header>
          {loading ?
            <div className="text-center h-full">
              <SpinnerLoader 
                message="Preparing your Dessert Product List..."
                ariaLabel="Loading Dessert Product List"
              />
              <h2 className="text-rose900 font-bold text-2xl mt-4">Loading...</h2>
              <p className="text-rose500 text-lg">
                Sweet moments are on their way!
              </p>
            </div>
            :
            <ul className="grid gap-x-4 gap-y-8 xl:grid-cols-3 md:grid-cols-2 pt-8">
              {data.map((productItem) => (
                <ProductItem
                  key={productItem.id}
                  productItem={productItem}
                />
              ))}
            </ul>
          }
        </main>

        <ShoppingCart
          setPopUpIsOpen={setPopUpIsOpen}
        />
        <SummaryPopUp
          popUpIsOpen={popUpIsOpen}
          setPopUpIsOpen={setPopUpIsOpen}
        />
      </CartItemsProvider>
    </div>
  )
}

export default App