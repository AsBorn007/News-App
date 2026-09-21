import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import logo from '../../../public/newsapp-logo.png'
import { UseMyNewsContext } from "../../ContextAPI/NewsContext";

const Navbar = ({className}) => {
  const {setNews , fetchNewsData} = UseMyNewsContext();
  let timer = null;
   function SearchHandle(e){
    const searchValue  =  e.target.value;
    if(!searchValue) return nulll
    clearTimeout(timer);
    timer = setTimeout(async ()=>{
       const data = await fetchNewsData(`/everything/?q=${searchValue}`);
       setNews(data.articles);
    },1000)
  
  }
  return (
    <>
    <section className={`Header_section bg-[#fefefe] shadow-sm ${className}`}>
    <Wrapper>
      <div className="navbar px-2 sm:px-4">
        <div className="flex-1 flex justify-start">
          <a className="btn btn-ghost text-xl w-32 sm:w-40 md:w-50 p-1">
            <img className="w-full h-auto" src={logo} alt={logo}/>
          </a>
        </div>

        <div className="flex gap-2">
          <input
            onChange={SearchHandle}
            type="text"
            placeholder="Search"
            className="input w-20 sm:w-32 md:w-auto"
            />
        </div>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              aria-label="Notifications"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </Wrapper>
    </section>
    </>
  );
};

export default Navbar;