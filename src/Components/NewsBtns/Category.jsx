import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import style from "/src/Css/button.module.css";
import { UseMyNewsContext } from "../../ContextAPI/NewsContext";

const Category = ({ className }) => {
  const Categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const { setNews, fetchNewsData } = UseMyNewsContext();

  const handleTagTabs = async (e) => {
    const CatValue =  e.target.value
    const data = await fetchNewsData(`/everything/?q=${CatValue}`);
    setNews(data.articles);
  };
  return (
    <div className={`${className} bg-[#fefefe]  pt-1 pb-1`}>
      <Wrapper>
        <div
          className={`tnsCollection mt-8 mb-6 w-full overflow-x-auto ${style.scrollBar_none}`}
        >
          <div className="flex w-max min-w-full justify-center gap-4 px-4">
            {Categories.map((CategoriesItem, CategoriesIndex) => {
              return (
                <button
                 value={CategoriesItem}
                  onClick={handleTagTabs}
                  key={CategoriesIndex}
                  className="btn btn-primary bg-[#1c2f49] shrink-0 whitespace-nowrap"
                >
                  {CategoriesItem.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
