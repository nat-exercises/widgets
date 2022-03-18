import React, { useState } from "react";
import Accordion from "./components/accordion/Accordion";
import Search from "./components/search/Search";
import Dropdown from "./components/dropdown/Dropdown";
import Translate from "./components/translate/Translate";
import Route from "./components/route/Route";
import Header from "./components/header/Header";
import { options } from "./components/options/Options";
import { items } from "./components/items/Items";

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
