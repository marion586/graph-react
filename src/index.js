import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//https://rickandmortyapi.com/graphql
//mutations are ways to change our data
//query viewing data
//query update data
// mutation {
//   crete(record: {
//     name: "Hotdog",
//     supplierID:1,
//     categoryID: 1 ,
//     quantityPerUnit: "1"
//   }){
//     record {
//       name
//     }
//   }
// }

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
