import { useEffect, useState } from "react";
import CodemanImage from "./assets/coding.png";
const App = () => {
  const URL = "https://sv443.net/jokeapi/v2/joke/Programming?type=single";
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fetch the joke");
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error.message);
      setJoke("Failed to fetch a joke. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="wrapper">
      <div className="codeman-image">
        <img src={CodemanImage} alt="CodemanImage" width={120} />
      </div>
      <p className="joke-text">{loading ? "Loading..." : joke}</p>
      <button className="btn" onClick={getJoke} disabled={loading}>
        {loading ? "Loading..." : "Get Another Joke"}
      </button>
    </div>
  );
};

export default App;
