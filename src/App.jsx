import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import Home from "./pages/Home"
import MenuCompleto from "./pages/MenuCompleto";

//! Importaciones para el funcionamiento de AOS 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const router = createBrowserRouter ([
  {path:'/', element: <LayoutPrincipal />, children:[
    {path: '/', element: <Home /> },
    {path:'/menu-completo', element: <MenuCompleto/>}
  ]}
])

function App() {
  //! Se inicializa AOS para que funcione en todos los componentes 
  AOS.init();
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
