import React from "react";
export function FullSearch({searchImage}) {
  return (
  <div className="header-search">
    <button>
      <img src={searchImage} alt="Search Image" />
    </button>
    <input type="text" placeholder="Search for products..." />
  </div>
  );
}
  