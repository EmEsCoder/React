import { use } from "react";

// const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (evo) => {
//     if (!evo.ok) {
//       throw new Error("FAiled To Fetch");
//     }
//     return evo.json();
//   },
// );

async function getPost() {
   const met =   await fetch("https://jsonplaceholder.typicode.com/posts/");
   return met.json()
}

const fetchPosts = getPost();

function PostLists() {
  const posts = use(fetchPosts);

  return (
    <ul>
      {posts.map((evo) => {
        return <h3 key={evo.id}>{evo.title}</h3>;
      })}
    </ul>
  );
}
export default PostLists;
