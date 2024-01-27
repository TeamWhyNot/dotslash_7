import React from "react";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Category from "../screens/Category";
import PageNotFound from "../screens/PageNotFound";
import Analytics from "../screens/Analytics";
import ShopDet from "../screens/ShopDet";
import ProductUser from "../screens/ProductUser";
import Option from "../screens/Option";
import InfoTwo from "../screens/InfoTwo";
import MyShop from "../screens/MyShop";
import Test from "../screens/Test";
import ChatBot from "../screens/ChatBot";
import Orders from "../screens/Orders";
import UserHome from "../screens/UserHome";
import ShopKeeperOrderPage from "../screens/ShopKeeperOrderPage";

const routes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: '/productsUser',
    element: <ProductUser />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/switch",
    element: <PageNotFound />,
  },
  {
    path: "/shopDet",
    element: <ShopDet />,
  },
  {
    path: "/options",
    element: <Option />,
  },
  {
    path: "/infotwo",
    element: <InfoTwo />,
  },
  {
    path: "/myShop",
    element: <MyShop />,
  },
  {
    path: "/chatbot",
    element: <ChatBot />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/userhome",
    element:<UserHome/>,
  },
  {
    path: "/shopkeeperorderpage",
    element:<ShopKeeperOrderPage/>,
  },
];

export default routes;
