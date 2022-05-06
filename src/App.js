import "./App.css";

import { pizzas, appetizers, asides } from "./Data";

const Pizza = ({ img, title, price, desc }) => {
  return (
    <div className="flex flex-col">
      <div className="relative cursor-pointer container-pizza grow">
        <img className="w-full image-pizza" src={img} alt={title} />
        <div className="absolute top-0 w-full h-full p-2 text-lg bg-gray-700 select-none desc-pizza grow sm:text-md">{desc}</div>
      </div>
      <div className="px-3 py-2 text-lg bg-gray-700">
        <div className="font-bold uppercase">{title}</div>
        <div className="text-orange-400 ">{price}</div>
      </div>
    </div>
  );
};

const Appetizer = ({ title, desc, price, className }) => {
  return (
    <div className={`flex flex-col text-black ${className}`}>
      <div className="text-lg font-bold uppercase">{title}</div>
      <div className="w-full my-2 text-lg text-gray-700">{desc}</div>
      <div className="text-lg font-bold text-gray-700">{price}</div>
    </div>
  );
};

const Header = ({ children }) => {
  return <div className="mt-10 mb-6 ml-4 text-3xl uppercase lg:ml-0 sm:mt-24 sm:text-4xl">{children}</div>;
};

function App() {
  return (
    <div className="App-header">
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
            {appetizers.map((itm) => {
              return <Appetizer key={`ape-${itm.id}`} title={itm.title} desc={itm.desc} price={itm.price} />;
            })}
          </div>
        </section>
        <section>
          <Header>Pizzas Classiques</Header>
          <div className="grid gap-8 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:mx-0">
            {pizzas.map((itm) => {
              return <Pizza key={`pizz-${itm.id}`} img={itm.img} title={itm.title} price={itm.price} desc={itm.desc} />;
            })}
          </div>
        </section>
        <section>
          <Header>à Côté</Header>
          <div className="flex flex-col items-center w-full gap-4 px-4 py-6 mx-0 bg-white lg:mx-0 sm:mx-4">
            {asides.map((itm) => {
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
  );
}

export default App;
