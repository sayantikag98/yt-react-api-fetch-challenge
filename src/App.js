import Button from "./Components/Button";
import PrintItem from "./Components/PrintItem";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/";

  const HandlerOnClick = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Data not fetched");
      const fetchData = await response.json(); // await needed here
      setData(fetchData);
    } catch (err) {
      console.log(err.message);
    }
  };

  /* 
  As because data is an array of objects so ele is an object and that is 
  why direct use of object as React child is not allowed and here 
  JSON.stringify(ele) required.
  */

  return (
    <>
      <section className="App">
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={`${URL}users`}
          text="Users"
        />
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={`${URL}posts`}
          text="Posts"
        />
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={`${URL}comments`}
          text="Comments"
        />
      </section>

      <table id="table-item">
        <PrintItem data={data} />
      </table>
    </>
  );
}
