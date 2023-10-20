import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast react pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price="10"
      />
      <Pizza
        name={pizzaData[1].name}
        photoName={pizzaData[1].photoName}
        ingredients={pizzaData[1].ingredients}
        price={pizzaData[1].price}
      />
      <Pizza
        name={pizzaData[2].name}
        photoName={pizzaData[2].photoName}
        ingredients={pizzaData[2].ingredients}
        price={pizzaData[2].price}
      />
      <Pizza
        name={pizzaData[3].name}
        photoName={pizzaData[3].photoName}
        ingredients={pizzaData[3].ingredients}
        price={pizzaData[3].price}
      />
      <Pizza
        name={pizzaData[4].name}
        photoName={pizzaData[4].photoName}
        ingredients={pizzaData[4].ingredients}
        price={pizzaData[4].price}
      />
      <Pizza
        name={pizzaData[5].name}
        photoName={pizzaData[5].photoName}
        ingredients={pizzaData[5].ingredients}
        price={pizzaData[5].price}
      />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour < closedHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
