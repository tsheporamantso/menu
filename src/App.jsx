import { useState } from "react";
import data from "./data";
import Menu from "./components/Menu";
import Title from "./components/Title";

function App() {
  const [menu, setMenu] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Menu menu={menu} />
      </section>
    </main>
  );
}

export default App;
