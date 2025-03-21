import Item from "./components/Item"
import Cart from "./components/Cart"

function App() {
  

  return (
    <>
      <Item name="MacBook Pro" price="99899"/>
      <Item name="Pendrive" price="1500"/>
      <Item name="IPhone 14" price="65000"/>
      <Cart/>
    </>
  )
}

export default App
