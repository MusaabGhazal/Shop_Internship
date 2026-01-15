import React from "react";
const imageSource = "/untitled-design.png"

import SignUpHeader from "./SignUpHeader";
import Header from "./Header";
import First from "./First";
import Brands from "./Brands";
import NewArrivals from "./NewArrivals";
import TopSelling from "./TopSelling";
import Categories from "./Categories";
import Reviews from "./Reviews";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

import axios from 'axios';
import { useState, useEffect } from 'react';
import Spinner from "./Spinner";

const tShirtImage = "/t-shirt.png";
export const items = [
  {
    "item": "item 1",
    "itemImagePath": tShirtImage,
    "rate": 4.5,
    "rateImagePath": "rateImagePath 1",
    "discount": .33,
    "sellCount": 14,
    "category": "category 1",
    "price": 12,
    "id": "1"
  },
  {
    "item": "item 2",
    "itemImagePath": tShirtImage,
    "rate": 4,
    "rateImagePath": "rateImagePath 1",
    "discount": .20,
    "sellCount": 1,
    "category": "category 1",
    "price": 132,
    "id": "2"
  },
  {
    "item": "item 3",
    "itemImagePath": tShirtImage,
    "rate": 5,
    "rateImagePath": "rateImagePath 1",
    "discount": 0,
    "sellCount": 4,
    "category": "category 1",
    "price": 32,
    "id": "3"
  },  
  {
    "item": "item 4",
    "itemImagePath": tShirtImage,
    "rate": 4.5,
    "rateImagePath": "rateImagePath 1",
    "discount": .9,
    "sellCount": 104,
    "category": "category 1",
    "price": 132,
    "id": "4"
  },
]


export function Shop() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("https://677f78fd0476123f76a69d5d.mockapi.io/api/items");
              setData(response.data);
          } catch (err) {
              setError(err.message);
          } finally {
              setLoading(false);
          }
      };
      fetchData();
  }, []);
  
  if (loading) return <Spinner>Loading...</Spinner>;
  if (error) return <p>Error: {error}</p>;

  return (<>      
      <SignUpHeader></SignUpHeader>
      <Header></Header>
      <First></First>
      <Brands></Brands>
      <NewArrivals data={data}></NewArrivals>
      <TopSelling data={data}></TopSelling>
      <Categories></Categories>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}
  