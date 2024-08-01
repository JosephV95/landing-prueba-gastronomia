import React, { useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

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

  //!  Effect para lograr cambiar el active del nav durante el scroll
useEffect(()=>{
  //? Función para manejar el evento de desplazamiento
  const handleScroll= (containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      const rect = container.getBoundingClientRect(); //todo   Averiguar funcionamiento de getBoundingClientRect (que devuelve UN OBJETO con el tamaño del rectangulo del elemento con respecto a la pantalla o algo asi)
      const contenedorEsVisible = rect.top <= window.innerHeight / 4 && rect.bottom >= window.innerHeight / 2;
      if (contenedorEsVisible) {
        // console.log('El contenedor está a la mitad de la pantalla');
        setLinkActive(containerId)
      }
    }
  }

    const containerIds = ['inicio', 'sobreNosotros', 'menu', 'eventos', 'galeria', 'contacto'];

    const scrollHandlers = containerIds.map(id => () => handleScroll(id));

    //* Agregar un event listener al evento de desplazamiento
    scrollHandlers.forEach(handler => window.addEventListener('scroll', handler));

    //* Eliminar el event listener cuando el componente se desmonta
    return () => {
      scrollHandlers.forEach(handler => window.removeEventListener('scroll', handler));
    };
 }, [])

  const navList = (
    <ul className="t-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 items-center">
      <li>
        <a href="#inicio" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "inicio"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("inicio"); navigate("/")}} data-aos="fade-down" data-aos-duration="1100" data-aos-easing="linear" data-aos-once="true">
          Inicio
        </a>
      </li>
      <li>
        <a href="#sobreNosotros" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "sobreNosotros"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("sobreNosotros"); navigate("/#sobreNosotros")}} data-aos="fade-down" data-aos-duration="1100" data-aos-easing="linear" data-aos-delay="100" data-aos-once="true">
          Sobre Nosotros
        </a>
      </li>
      
      <li>
        <Menu allowHover>
          <MenuHandler >
            <a href="#menu" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "menu"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("menu")}} data-aos="fade-down" data-aos-duration="1100" data-aos-easing="linear" data-aos-delay="200" data-aos-once="true"
            >
              Menú {" "}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`ml-1 h-3.5 w-3.5 transition-transform hover:rotate-180`}
              />
            </a>
          </MenuHandler>
          <MenuList className="bg-black/80 border border-orange-300">
            <a href="#menu" className={`flex items-center py-1 px-3 font-semibold text-gray-100 text-base italic duration-300 hover:text-orange-500`} onClick={()=>{setLinkActive("menu"); navigate("/#menu")}}>
              Menú rápido
            </a>
            <a className={`flex items-center py-1 px-3 font-semibold text-gray-100 text-base italic duration-300 hover:text-orange-500 cursor-pointer`} onClick={()=>{setLinkActive("menu"); navigate("/menu-completo"); window.scrollTo(0, 10)}}>
              Menú completo
            </a>
          </MenuList>
        </Menu>
      </li>
      
      <li>
        <a href="#eventos" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "eventos"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("eventos"); navigate("/#eventos")}}  data-aos="fade-down" data-aos-duration="1100" data-aos-easing="linear" data-aos-delay="300" data-aos-once="true">
          Eventos
        </a>
      </li>
      <li>
        <a href="#galeria" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "galeria"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("galeria"); navigate("/#galeria")}}  data-aos="fade-down" data-aos-duration="1100" data-aos-easing="linear" data-aos-delay="400" data-aos-once="true">
          Galería
        </a>
      </li>

      <li>
        <a href="#contacto" className={`flex items-center  p-1 font-semibold text-base duration-300  ${linkActive == "contacto"? "text-[#ffb03b] underline underline-offset-2" :"text-gray-100"}`} onClick={()=>{setLinkActive("contacto"); navigate("/catalogo")}} >
          Contacto
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
    // class = bg-gradient-to-r from-teal-300 to-green-200
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
          {/* <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div> */}
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
        {/* <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
}
