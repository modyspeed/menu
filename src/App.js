import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Data } from "./components/Data";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Category } from "./components/Category";
import { Cards } from "./components/Cards";
function App() {
  const [fullData, setFullData] = useState(Data);

  // make category button
  const CategoryData = [
    "الكل",
    ...new Set(
      Data.map((item) => {
        return item.Category;
      })
    ),
  ];
  // make filter by category
  const filterByCategory = (Category) => {
    if (Category === "الكل") {
      setFullData(Data);
    } else {
      const newArray = Data.filter((item) => item.Category === Category);
      setFullData(newArray);
    }
  };
  // make filter by search
  const filterBySearch = (word) => {
    if (word !== "") {

      const newArray = Data.filter((item) => item.title === word);
      setFullData(newArray);
    }
  };

  return (
    <Container>
      <NavBar filterBySearch={filterBySearch}/>
      <Header />
      <Category
        CategoryData={CategoryData}
        filterByCategory={filterByCategory}
      />
      <Cards fullData={fullData} />
    </Container>
  );
}

export default App;
