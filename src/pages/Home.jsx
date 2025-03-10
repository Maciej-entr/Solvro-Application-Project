
import '../App.css';
import Navbar from '../components/navbar/Navbar.jsx';
import React from 'react';
import Header from '../components/header/Header.jsx';
import MainSection from '../components/main/Main.jsx';
import Foter from '../components/footer/Foter.jsx';
import Explore from '../components/explore/Explore.jsx';
import { useEffect, useState, useMemo } from 'react';
function Home() {
  const [category, setCategory] = useState("all");
  const [cocktail, setCoctail] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://cocktails.solvro.pl/api/v1/cocktails?perPage=133")
        .then((res) => res.json())
        .then((data) => setCoctail(data))
        .catch((error) => console.error(error));
}, []);

const filteredCoctail = useMemo(() => {
  return cocktail.cocktail?.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [cocktail, searchTerm]);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Explore setCategory={setCategory} />
      <MainSection category={category} />
      <Foter />
    </div>
  );
}

export default Home;
