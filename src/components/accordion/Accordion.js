import React from "react";

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active"></div>
        <p>{item.content}</p>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      <h1>{renderedItems}</h1>
    </div>
  );
};

export default Accordion;
