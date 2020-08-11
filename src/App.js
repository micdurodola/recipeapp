import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from "./container/Layout";
import Searchbar from "./component/searchbar";
import RecipeList from "./container/recipeList.js";
//import { Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <CustomLayout className="layout">
          <Searchbar />

          <RecipeList />

      </CustomLayout>
      
    
      
    </div>
  );
}

export default App;
