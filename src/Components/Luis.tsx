import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Luis.css";

interface Title {
  title: string;
  altTitle: string;
  path: string;
}

const initialTitles: Title[] = [
  { title: "Hello", altTitle: "About", path: "/about" },
  { title: "I am", altTitle: "Work", path: "/work" },
  { title: "Luis", altTitle: "Contact", path: "/contact" },
];

const Luis = () => {
  const [titles, setTitles] = useState<Title[]>(initialTitles);
  const navigate = useNavigate();

  const handleTitleHover = (index: number) => {
    const newTitles = [...titles];
    const { title, altTitle } = newTitles[index];
    if (title !== altTitle) {
      newTitles[index].title = altTitle;
      newTitles[index].altTitle = title;
      setTitles(newTitles);
    }
  };

  const handleTitleLeave = (index: number) => {
    const newTitles = [...titles];
    const { title, altTitle, path } = newTitles[index];
    if (title !== altTitle) {
      newTitles[index].altTitle = title;
      newTitles[index].title = altTitle;
      setTitles(newTitles);
    }
  };

  const handleTitleClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <div className="main">
        <div className="title">
          {titles.map((title, index) => (
            <div className="title_text" key={index}>
              <div
                onMouseEnter={() => handleTitleHover(index)}
                onMouseLeave={() => handleTitleLeave(index)}
                onClick={() => handleTitleClick(title.path)}>
                {title.title}
              </div>
            </div>
          ))}
        </div>
        <div className="photoBox">
          <div className="bg-image" />
        </div>
      </div>
    </>
  );
};

export default Luis;
