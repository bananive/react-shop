
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Shoplist } from "./components/Shoplist";


export const ShopContext = React.createContext();

const App = () => {

  const [cart, setCart] = useState([]);

  const addProduct = (el) => {
    setCart([...cart, el]);
  }

  return (
    <ShopContext.Provider value={{
      cart,
      addProduct
    }}>
      <div className="App">
        <Header />
        <Shoplist />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
