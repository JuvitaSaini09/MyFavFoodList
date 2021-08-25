import "./styles.css";
import { useState } from "react";
//DATABASE FOR PUNJABI FOOD LIST
var Punjabi = [
  { dish: "Makky ky Roti and sarso ka saag", stars: "⭐ ⭐ ⭐ ⭐" },
  { dish: "Chole Bhatoorey", stars: "⭐ ⭐ ⭐ ⭐ ⭐" },
  { dish: "Lassi", stars: "⭐ ⭐ ⭐" }
];
//DATABASE FOR SOUTHINDIAN FOOD LIST
var SouthIndian = [
  { dish: "Dosa", stars: " ⭐ ⭐ ⭐ ⭐ ⭐" },
  { dish: "Idli", stars: " ⭐ ⭐ ⭐ ⭐" },
  { dish: "vada Sambar", stars: "⭐ ⭐ ⭐" }
];
//DATABASE FOR GUJARATI FOOD LIST
var Gujarati = [
  { dish: "Dhokla", stars: "⭐ ⭐ ⭐ ⭐ ⭐" },
  { dish: "Thepla", stars: "⭐ ⭐ ⭐" },
  { dish: "Jalebi Fafra", stars: "⭐ ⭐ ⭐ ⭐ ⭐" }
];

export default function App() {
  // useState for Updating the databse name by taking on button click
  const [presentList, newList] = useState(Punjabi);
  //Function:button click handeler -Punjabi cuisine-
  function btn1Handler(event) {
    newList(Punjabi);
    //Function:button click handeler -SouthIndian cuisine-
  }
  function btn2Handler(event) {
    newList(SouthIndian);
  }
  //Function:button click handeler -Gujarati cuisine-
  function btn3Handler(event) {
    newList(Gujarati);
  }
  return (
    <div className="App">
      <h1>🍔 Tasty Food</h1>
      <p>
        Checkout list of my favourite food items.Select a cuisine and see the
        list of my favourite dishes.
        {/* -----Buttons ----*/}
      </p>
      <button onClick={btn1Handler}>Punjabi</button>
      <button onClick={btn2Handler}>South Indian</button>
      <button onClick={btn3Handler}>Gujarati</button>
      <hr />
      {/* Map function return database(presentList)values-dish and stars  which is clicked by user */}
      <ul>
        {presentList.map((object, index) => {
          return (
            <span key={index}>
              <div class="listOfFood">
                <li>{object.dish}</li>
                <li>{object.stars}</li>
              </div>{" "}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
