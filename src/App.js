import { useState } from "react";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { MealsSummary } from "./components/meals-summary/MealsSummary";
import { Meals } from "./components/meals/Meals";
import { CardProvider } from "./store/card-context";



function App() {
  const [toggle,setToggle]=useState(false)

  const toogleHandler = ()=>{
    setToggle((prev) => !prev)
  }
 
  return (
    <CardProvider>
      <Header onToggle={toogleHandler} />
      <MealsSummary />
      <Meals />
      {toggle && <Basket onToggle={toogleHandler} />}
      
    </CardProvider>
  );
}

export default App;
