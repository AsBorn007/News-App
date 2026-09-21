import { createContext, useContext, useState } from "react";
import Api from '../../src/Config/Axios.js'
const MyNewsContext = createContext();

const MyNewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loader , setLoader] = useState(false)
  const fetchNewsData = async (url="everything?q=india") => {
    setLoader(true)
    try {
      const apiKey = import.meta.env.VITE_NEWSAPI_KEY;
      const response = await Api(
        `https://newsapi.org/v2/${url}&apiKey=${apiKey}`,
      );
      
      setLoader(false)
      return response.data;
    } catch (error){
        console.log(error)
         setLoader(false)
    }
  };

  const Value = {
    news,
    setNews,
    fetchNewsData,
    loader,
  };

  return (
    <MyNewsContext.Provider value={Value}>{
        children}
    </MyNewsContext.Provider>
  );
};

const UseMyNewsContext = () => {
  return useContext(MyNewsContext);
};

export { UseMyNewsContext, MyNewsProvider };
