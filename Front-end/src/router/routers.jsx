import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
//main page
import Login from "../page/Login/Login";
import Home from '../page/Home/Home';
import RoomCon from "../page/Room/RoomCon";
// dynamic page 
import RoomRes from "../page/Room/RoomRes";
import User from "../page/User/User";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout Element={Home} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: '/roomsearch',
    element: <Layout Element={RoomRes}/>
  },   
  {
    path: '/roomcontroler',
    element: <Layout Element={RoomCon}/>
  },  
  {
    path:'/User',
    element: <Layout Element={User}/>
  } 
]);

export default router;
