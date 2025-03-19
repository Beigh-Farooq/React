// import React from "react";
// import useFetch from "./hook/useFetch";

// function App() {
//   const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

//   return (
//     <>
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>User List</h1>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {data && (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {data.map((user) => (
//             <li key={user.id} style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px" }}>
//               <strong>{user.name}</strong> - {user.email}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import useFetch from "./customhooks/useFetch";

const App = ()=>{
  const data = useFetch(`https://jsonplaceholder.typicode.com/users`)
  return (
    <>
      {data.map((res) => {
        return(
          <h4 key={res.id}>
              {res.id}.  {res.name}
          </h4>
        )
      })}
    </>
  )
}
export default App
