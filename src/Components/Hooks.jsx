import { useEffect, useState } from "react";

function sample() {
  const [posts, setPosts] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  async function placeHolder() {
    try {
      const nem = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!nem.ok) {
        throw new Error("ErroR");
      } else {
        const mem = await nem.json();
        setPosts(mem);
        setloading(false);
      }
    } catch (error) {
      setError(error.message);
      setloading(false);
    }
  }

  useEffect(() => {
    placeHolder();
  }, []);

  return (
    <>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading ...</h3>}
      {posts &&
        posts.map((evo) => {
          return <h3 key={evo.id}>{evo.title}</h3>;
        })}
    </>
  );
}

export default sample;
