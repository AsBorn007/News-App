import React from "react";
import Wrapper from "../Wrapper/Wrapper";

const Card = ({ details }) => {
  if(!details.urlToImage) return null;
  const articleURl = () => {
    window.open(details.url);
  };
  return (
    <>
      <div className="card bg-base-100 flex flex-col gap-2 shadow-sm border border-base-300 overflow-hidden group h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <figure className="aspect-video overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={details?.urlToImage}
            alt={details?.title}
          />
        </figure>
        <div className="card-body p-5 gap-3">
          <h2 className="card-title text-lg leading-snug line-clamp-2">
            {details?.title}
          </h2>
          <p className="text-sm opacity-80 line-clamp-3">
            {details?.description}
          </p>
          <div className="card-actions justify-between flex-nowrap mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              {details?.source?.name}
            </span>
            <button
              onClick={articleURl}
              className="btn btn-primary btn-sm rounded-full px-5"
            >
              Learn More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
