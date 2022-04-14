import "./App.css";

const Pizza = ({ img, title, price }) => {
  return (
    <div>
      <img src={img} alt={title} />
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
      <div className="my-2 text-lg text-gray-700">{desc}</div>
      <div className="text-lg font-bold text-gray-700">{price}</div>
    </div>
  );
};

const Header = ({ children }) => {
  return <div className="mt-24 mb-6 text-4xl uppercase">{children}</div>;
};

const appetizers = [
  {
    id: 1,
    title: "Lorem",
    desc: "Ut cillum incididunt est veniam esse nulla do in non reprehenderit adipisicing consequat qui eiusmod.",
    price: 8,
  },
  {
    id: 2,
    title: "Ipsum",
    desc: "Excepteur nulla mollit fugiat consectetur consequat incididunt.",
    price: 4,
  },
  {
    id: 3,
    title: "Lorem",
    desc: "Magna velit irure eu laborum nulla ipsum reprehenderit pariatur cillum.",
    price: 8,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Voluptate reprehenderit veniam magna aute irure.",
    price: 4,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Officia ad magna elit culpa.",
    price: 4,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Enim ipsum exercitation laboris minim culpa anim.",
    price: 4,
  },
];

const pizzas = [
  {
    id: 1,
    title: "Magherita",
    img: "./pizzas/FR_PMAR_all_menu_9627.webp",
    price: 15,
    desc: "Sauce tomate bio, mozarella",
  },
  {
    id: 2,
    title: "Bellacho",
    img: "./pizzas/FR_PBEL_fr_menu_9314.webp",
    price: 11,
    desc: "Sauce tomate bio, mozzarella, chorizo français, merguez, duo de poivrons.",
  },
  {
    id: 3,
    title: "Chorrizzo",
    img: "./pizzas/FR_PCHO_fr_menu_9314.webp",
    price: 12,
    desc: "Sauce tomate bio, mozzarella, chorizo français, chèvre, olives Kalamata bio.",
  },
  {
    id: 4,
    title: "Raclette",
    img: "./pizzas/FR_PRAC_all_menu_9653.webp",
    price: 14,
    desc: "Crème fraîche légère française, mozzarella, bacon, pommes de terre françaises sautées, oignons, raclette française.",
  },
  {
    id: 5,
    title: "Gamberetti",
    img: "./pizzas/FR_PSGA_fr_menu_9172.webp",
    price: 12,
    desc: "Crème fraîche légère française, mozzarella, gambas, oignons, courgettes marinées, tomates cerises marinées, persillade, quartiers de citron vert.",
  },
  {
    id: 6,
    title: "vegan peppina",
    img: "./pizzas/FR_PVPE_all_menu_9436.webp",
    price: 11,
    desc: "Sauce tomate bio, râpé vegan, champignons, oignons, duo de poivrons, olives Kalamata Bio dénoyautées, tomates fraîches, origan.",
  },
  {
    id: 7,
    title: "Chicken Delight",
    img: "./pizzas/FR_PCHD_all_menu_9525.webp",
    price: 10,
    desc: "Sauce tomate bio, mozzarella, champignons de Paris, poulet rôti, duo de poivrons, tomates fraîches, oignons, origan. Nutri-Score A déterminé sur la base d'une Taille Medium Pâte Fine",
  },
  {
    id: 8,
    title: "Chèvre-Miel",
    img: "./pizzas/FR_PCMI_fr_menu_9172.webp",
    price: 15,
    desc: "Crème fraîche légère française, mozzarella, chèvre, miel français.",
  },
];
// Generate data for asides
const asides = [
  {
    id: 1,
    title: "Lorem",
    desc: "Ut cillum incididunt est veniam esse nulla do in non reprehenderit adipisicing consequat qui eiusmod.",
    price: 8,
  },
  {
    id: 2,
    title: "Ipsum",
    desc: "Excepteur nulla mollit fugiat consectetur consequat incididunt.",
    price: 4,
  },
  {
    id: 3,
    title: "Lorem",
    desc: "Magna velit irure eu laborum nulla ipsum reprehenderit pariatur cillum.",
    price: 8,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Voluptate reprehenderit veniam magna aute irure.",
    price: 4,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Officia ad magna elit culpa.",
    price: 4,
  },
  {
    id: 4,
    title: "Ipsum",
    desc: "Enim ipsum exercitation laboris minim culpa anim.",
    price: 4,
  },
];

function App() {
  return (
    <div className="App-header">
      <header className="w-full">
        <div className="flex items-center justify-start w-full">
          <div className="absolute ml-24 text-8xl">
            <div className=" text-gray-400 font-['Dancing_Script']">Divi</div>
            <div className="absolute italic uppercase -rotate-12 top-10 font-head">
              Artisan
              <br />
              Pizzeria
            </div>
          </div>
          <img src="./hero-header.jpeg" alt="Hero header pizza" className="w-full" />
        </div>
      </header>
      <main className="w-full max-w-4xl ">
        <div className="mt-8 mb-32 italic font-bold text-center uppercase -rotate-12 font-head text-7xl">Menu</div>
        <section>
          <Header>Apéritifs</Header>
          <div className="grid grid-cols-3 gap-4 px-4 py-6 bg-white">
            {appetizers.map((itm) => {
              return <Appetizer key={`ape-${itm.id}`} title={itm.title} desc={itm.desc} price={itm.price} />;
            })}
          </div>
        </section>
        <section>
          <Header>Pizzas Classiques</Header>
          <div className="grid grid-cols-3 gap-8">
            {pizzas.map((itm) => {
              return <Pizza key={`pizz-${itm.id}`} img={itm.img} title={itm.title} price={itm.price} />;
            })}
          </div>
        </section>
        <section>
          <Header>à Côté</Header>
          <div className="flex flex-col items-center w-full gap-4 px-4 py-6 bg-white">
            {asides.map((itm) => {
              return <Appetizer className={"items-center w-1/2"} key={`asid-${itm.id}`} title={itm.title} price={itm.price} desc={itm.desc} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
