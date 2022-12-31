import logo from './logo.svg';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import SearchWidget from './component/SearchWidget';
import CategoryWithFilter from './component/CategoryMenu/CategoryWithFilter';
import DisplayCategoryList from './component/CategoryMenu/DisplayCategoryList';
import { CssBaseline } from '@mui/material';
function App() {

  
  return (
    <>
    <CssBaseline/>
    <SearchWidget/>
    <CategoryWithFilter/>
    <DisplayCategoryList/>
    </>
  );
}

export default App;
