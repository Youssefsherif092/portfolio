import './App.css';
import './Assets/css/all.css'
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';

const router =createBrowserRouter([
  {
    path:'',element:<MasterLayout/>,children:[
      {path:'',element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'portfolio',element:<Portfolio/>}
    ]
  }
  ])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
