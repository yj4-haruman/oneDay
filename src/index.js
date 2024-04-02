import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LogIn from "./routes/LogIn";
import SignUp from './routes/SignUp';
import Profile from "./routes/Profile";
import Kakao from './routes/Kakao';
const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/users",
    element:<Outlet/>,
    children:[
      {
        path:"login",
        element:<LogIn/>
      },
      {
        path:"signup",
        element:<SignUp/>
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "socials/kakao",
        element: <Kakao />,
      },
    ]
  }
])
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

