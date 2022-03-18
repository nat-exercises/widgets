import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import { options } from "./Options";
import Convert from "../convert/Convert";
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert />
    </>
  );
};

export default Translate;

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
