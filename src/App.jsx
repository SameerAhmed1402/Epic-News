import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  // -------------------------------------------------------------------
  // ***************** FETCHING NEWS ARTICLES  *****************
  // -------------------------------------------------------------------
  const apiKey = "aa3aee0634fc497a830366c52cb6674d";

  useEffect(() => {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const existedArticles = data.articles.filter(
          (item) => item.content !== "[Removed]",
        );
        console.log(data.articles);
        setNewsArticles(existedArticles);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => {
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [category, apiKey]);

  console.log(newsArticles);
  console.log(loading);

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} newsArticles={newsArticles} />
      <Footer />
    </div>
  );
}

export default App;