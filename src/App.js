import './App.css';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import { RouterProvider } from 'react-router';
import router from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Register/>
        <HomePage/>
      </RouterProvider>
   </>  
  );
}

export default App;
