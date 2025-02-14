import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import FindTutors from "../Pages/FindTutors/FindTutors";
import TutorsDetails from "../Pages/TutorsDetails/TutorsDetails";
import AddTutorials from "../Pages/AddTutorials/AddTutorials";
import UpdateTutorial from "../Pages/UpdateTutorial/UpdateTutorial";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyTutorials from "../Pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors/MyBookedTutors";
import StudentBooked from "../Pages/StudentBooked/StudentBooked";
import ReviewsComment from "../Pages/MyBookedTutors/ReviewsComment";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/add_tutorials',
          element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
          path: '/profile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: '/student_booked/:id',
          element: <PrivateRoute><StudentBooked></StudentBooked></PrivateRoute>,
          loader: ({params}) => fetch(`https://language-exchange-server-mu.vercel.app/api/tutorials/${params.id}`)
        },
        
        {
          path: '/my_tutorials',
          element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>,
          
        },
        {
          path: '/my_booked',
          element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>,
          
        },
       
        {
          path: '/reviews_comments/:id',
          element: <PrivateRoute><ReviewsComment></ReviewsComment></PrivateRoute>
          
        },
        {
          path: '/update_tutorial/:id',
          element: <PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>,
          loader: ({params}) => fetch(`https://language-exchange-server-mu.vercel.app/api/tutorials/${params.id}`)

        },
        {
          path: '/find_tutors/:category',
          element: <FindTutors></FindTutors>,
          loader: ({params}) => fetch(`https://language-exchange-server-mu.vercel.app/api/tutorials`)
          
        },
        {
          path: '/tutor_details/:id',
          element: <TutorsDetails></TutorsDetails>,
          loader: ({params}) => fetch(`https://language-exchange-server-mu.vercel.app/api/tutorials/${params.id}`)
        },
        
      ]
    },
  ]);
  
  export default router;