import React, { useState } from "react";
import "./app.css";
import MainComponent from "./main/MainComponent";
import AboutComponent from "./AboutComponent";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./FooterComponent";

const date = new Date().toLocaleDateString("en-US", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});
const recipess = [
  {
    img:
      "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg",
    alt: "bla",
    title: "1",
    date: date.toString(),
    viewers: 0,
  },
  {
    img:
      "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg",
    title: "2",
    alt: "bla",
    date: date.toString(),
    viewers: 0,
  },
  {
    img:
      "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg",
    title: "3",
    date: date.toString(),
    alt: "bla",
    viewers: 0,
  },
  {
    img:
      "https://parsefiles.back4app.com/Ubmbhqz8eIdPXGrtk00xDzb9xm9nJHfkf8mtsGyZ/85f9780c8cdd1788d6395c8e66a66e37_NaN.jpeg",
    title: "4",
    date: date.toString(),
    alt: "bla",
    viewers: 0,
  },
];

//Overall layouting
//Here we have the header, footer and anything else which is site-wide
function App() {
  const [users, setUsers] = useState(null);
  const [recipes, setRecipes] = useState(recipess);
  const [showSignInFrom, setShowSignInFrom] = useState(false);

  const toggleSignInFrom = () => {
    setShowSignInFrom(!showSignInFrom);
  };

  const signInHandler = () => {
    /*TODO sign in */
    setShowSignInFrom(false);
  };

  return (
    <div className="container-fluid">
      <HeaderComponent showSignInForm={toggleSignInFrom} />
      {showSignInFrom && (
        <div className="signInForm">
          <div className="signInInputLabel">E-mail</div>
          <input type="email" id="email" className="signInInput" />
          <div className="signInInputLabel">Password</div>
          <input type="password" id="password" className="signInInput" />
          <div>
            <button class="btn btn-primary button" onClick={signInHandler}>
              Sign In
            </button>
            <button class="btn btn-primary button" onClick={toggleSignInFrom}>
              Close
            </button>
          </div>
        </div>
      )}
      <MainComponent recipes={recipes} setRecipes={setRecipes} />
      {/* <FooterComponent />*/}
    </div>
  );
}

export default App;
