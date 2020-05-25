import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { setSourceCoordinates } from "../context/actions";

// TODO: should not re-render on submit
export const SearchContainer = () => {
  const { state, dispatch } = useContext(Context);

  const onSearchHandler = (event) => {
    if (state.services.maps === null) {
      return;
    }
    dispatch(setSourceCoordinates(event.target.value));
  };

  return (
    <>
    <form className="search-form" onSubmit={onSearchHandler}>
      <SearchBox label={"From A"} />
      <SearchBox label={"From B"} />
      <input type="submit" value="where2meet" />
    </form>
    </>
  );
};

// TODO: refactor
export const SearchBox = ({ label }) => (
  <div className="search-box">
    <label className="search-box__label">{label}</label>
    <input type="text" className="search-box__input"></input>
  </div>
);
