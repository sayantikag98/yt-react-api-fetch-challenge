import Button from "./Components/Button";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const USERS_URL = "https://jsonplaceholder.typicode.com/users",
    POSTS_URL = "https://jsonplaceholder.typicode.com/posts",
    COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

  const HandlerOnClick = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Data not fetched");
      const fetchData = await response.json();
      setData(fetchData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const PrintList = () => {
    return data.map((ele, ind) => <li key={ind + 1}>{JSON.stringify(ele)}</li>);
  };

  return (
    <>
      <section className="App">
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={USERS_URL}
          text="Users"
        />
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={POSTS_URL}
          text="Posts"
        />
        <Button
          HandlerOnClick={HandlerOnClick}
          API_URL={COMMENTS_URL}
          text="Comments"
        />
      </section>

      <ul id="ul-item">
        <PrintList />
      </ul>
    </>
  );
}
