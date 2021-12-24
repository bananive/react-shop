
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Shoplist } from "./components/Shoplist";
import * as Scroll from 'react-scroll';


export const ShopContext = React.createContext();

const App = () => {

  const [cart, setCart] = useState([]);
  let Element   = Scroll.Element;

  const addProduct = (el) => {
    setCart([...cart, el]);
  }

  return (
    <ShopContext.Provider value={{
      cart,
      addProduct
    }}>
      <div className="wrapper">
        <Header />
        
        <Element name="shoplist" className="element section0">
          <Shoplist />
        </Element>
        <Element name="about" className="element section1">
          <div className="container">
            <h2>About section</h2>
          </div>
        </Element>
        <Element name="contact" className="element section2">
          <div className="container">
            <h2>Contact section</h2>
          </div>
        </Element>
      </div>
    </ShopContext.Provider>
  );
}

export default App;
