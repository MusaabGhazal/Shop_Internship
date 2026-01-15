import React from "react";
export function SmallSearch({searchImage, onClick}) {
  return (
    <button className="small-search" onClick={onClick}>
      <img src={searchImage} alt="Search Image" />
    </button>
  );
}