import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate()

  //? Estado para aplicar estilos a un link activo 
  const [linkActive, setLinkActive] = React.useState("inicio")

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    const selectNav = document.getElementById('navMio')

    //! funcion para oscurecer el bg del nav al hacer cierta cantidad de scroll hacia abajo 
    const scrolled = ()=>{
      if (window.scrollY > 100) {
        selectNav.classList.add('bg-black/70')
        selectNav.classList.remove('bg-transparent')
      } else {
          selectNav.classList.remove('bg-black/70')
      }
    }
    
     window.addEventListener('scroll', scrolled)
  }, []);
  
  //? Efecto para oscurecer el bg en mobile, se suma al efecto del scroll anterior
  React.useEffect(()=>{
    const selectNav = document.getElementById('navMio');
    if(openNav && window.screen.width < 960){
      selectNav.classList.remove('bg-transparent')
      selectNav.classList.add('bg-black/80')

    } else {
      selectNav.classList.remove('bg-black/80')
    }
  })

  
  const navList = (
    <ul className="t-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 items-center">
      <li>
        <a href="#inicio" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "inicio"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("inicio"); navigate("/")}} >
          Inicio
        </a>
      </li>

      <li>
        <a href="#catalogo" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "contacto"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("contacto"); navigate("/catalogo")}} >
          Catalogo
        </a>
      </li>
      <li>
        <a href="#contacto" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "contacto"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("contacto"); navigate("/contacto")}} >
          Contacto
        </a>
      </li>
    </ul>
  );

  return (
    <Navbar id="navMio" className="fixed top-0 z-[100] h-max max-w-full rounded-b-xl rounded-t-none border-none py-2 px-8 lg:px-28 bg-transparent" 
    style={{backdropFilter: "none", boxShadow:"none"}}>
      
      <div className="flex items-center justify-between text-gray-200">
        <Typography
          as="a"
          href="#"
          onClick={()=>{navigate("/")}}
          className="mr-4 cursor-pointer py-1.5 text-3xl font-bold font-Dancing tracking-widest" //? fuentes agregadas de Google Fonts y se agrego letter spacing
          data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="linear" data-aos-delay="1800"
        >
          GastronoPage
        </Typography>
        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
         
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
      </Collapse>
    </Navbar>
  );
}
