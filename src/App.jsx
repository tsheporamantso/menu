import { useState } from "react";
import data from "./data";
import Menu from "./components/Menu";
import Title from "./components/Title";
import Categories from "./components/Categories";

function App() {
  const [menu, setMenu] = useState(data);

  const uniqueCategories = [
    "all",
    ...new Set(data.map((item) => item.category)),
  ];

  const filteredItem = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItem = data.filter((item) => {
      return item.category === category;
    });
    setMenu(newItem);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          uniqueCategories={uniqueCategories}
          filteredItem={filteredItem}
        />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
