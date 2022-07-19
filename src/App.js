import "./App.css";
import "react-spinner-animated/dist/index.css";
import { HalfMalf } from "react-spinner-animated";
// import { pizzas, appetizers, asides } from "./Data";
import { useState, useEffect } from "react";
import { Pizza, Appetizer, Header } from "./components";
import { directus } from "./services/Directus";

function App() {
  const [pizzasList, setPizzasList] = useState([]);
  const [appetizersList, setAppetizersList] = useState([]);
  const [asidesList, setAsidesList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async (setList, type) => {
      const response = await directus.items(type).readByQuery({ limit: -1 });
      setList(response?.data);
      setLoading(false);
    };
    fetchItems(setPizzasList, "pizzas");
    fetchItems(setAppetizersList, "appetizers");
    fetchItems(setAsidesList, "asides");
  }, []);

  return (
    <div className="App-header">
      {loading ? (
        <HalfMalf text={"Chargement..."} center={true} width={"150px"} height={"150px"} />
      ) : (
        <div className="flex flex-col items-center w-full">
          <header className="w-full">
            <div className="flex items-center justify-start w-full">
              <div className="absolute ml-20 text-5xl sm:ml-24 sm:text-8xl">
                <div className=" text-gray-100 font-['Dancing_Script']">Divi</div>
                <div className="absolute italic uppercase -rotate-12 top-6 sm:top-10 font-head">
                  Artisan
                  <br />
                  Pizzeria
                </div>
              </div>
              <img src="./hero-header.jpeg" alt="Hero header pizza" className="w-full" />
            </div>
          </header>
          <main className="w-full max-w-4xl">
            <div className="mt-8 mb-12 text-4xl italic font-bold text-center uppercase sm:mb-32 -rotate-12 font-head sm:text-7xl">Menu</div>
            <section>
              <Header>Apéritifs</Header>
              <div className="grid gap-4 px-4 py-6 mx-0 bg-white sm:grid-cols-3 lg:mx-0 sm:mx-4">
                {appetizersList?.map((itm) => {
                  return <Appetizer key={`ape-${itm.id}`} title={itm.title} desc={itm.desc} price={itm.price} />;
                })}
              </div>
            </section>
            <section>
              <Header>Pizzas Classiques</Header>
              <div className="grid gap-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:mx-0">
                {pizzasList?.map((itm) => {
                  return <Pizza key={`pizz-${itm.id}`} img={itm.img} title={itm.title} price={itm.price} desc={itm.desc} />;
                })}
              </div>
            </section>
            <section>
              <Header>à Côté</Header>
              <div className="flex flex-col items-center w-full gap-4 px-4 py-6 mx-0 bg-white lg:mx-0 sm:mx-4">
                {asidesList?.map((itm) => {
                  return <Appetizer className={"items-center w-full sm:w-1/2"} key={`asid-${itm.id}`} title={itm.title} price={itm.price} desc={itm.desc} />;
                })}
              </div>
            </section>
          </main>
          <footer className="flex flex-col items-center w-full px-4 pb-4 mt-16 bg-gray-900 sm:pb-16">
            <div className="w-full max-w-4xl">
              <Header>Commandez chez nous</Header>
              <div className="flex flex-col items-center w-full text-lg">
                <div>Adress Line 1</div>
                <div>Adress Line 2</div>
                <a href="tel:+330123456789" className="font-bold">
                  0123456789
                </a>
              </div>
              <div className="mt-8">
                Réalisé par{" "}
                <a className="font-bold" href="//benoit.fage.fr" alt="lien vers le site web de Benoît Fage" target="_blank" rel="noreferrer">
                  Benoît Fage
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
