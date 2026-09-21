import React, {  useEffect } from "react";
import Card from "../NewsCard/Card";
import Wrapper from "../Wrapper/Wrapper";
import { UseMyNewsContext } from "../../ContextAPI/NewsContext.jsx";
import Loader from "../Loader.jsx";

const News = () => {
  const { news, setNews, fetchNewsData, loader } = UseMyNewsContext();


  useEffect(() => {
    (async () => {
      const data = await fetchNewsData();
      setNews(data.articles)
    })();
  }, []);

  if (loader) {
  return (
    <div className="flex items-center justify-center w-full min-h-[300px]">
      <Loader />
    </div>
  );
}
  return (
    <>
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
         {news.map((newsObj , id)=>(
          <Card details={newsObj} key={id}/>
         ))}
        </div>
      </Wrapper>
    </>
  );
};

export default News;
