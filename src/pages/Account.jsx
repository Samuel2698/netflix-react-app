import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/421eb204-167a-4e06-b20c-bf9d55d06bb3/FR-fr-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Plusieurs petites images de films de Netflix"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Mes films préférés</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
