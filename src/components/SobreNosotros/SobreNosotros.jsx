import './SobreNosotros.css'

export default function SobreNosotros() {
  return (
    <section className="w-full h-auto flex flex-wrap py-16  bg-orange-50/70" id='sobreNosotros'>
      <div className="w-[100vw] lg:w-5/12 min-h-[300px]  bg-[url('../img/events/about.jpg')] bg-cover" >
        {/* <img src="../img/about.jpg" alt="imgAbout" className="object-cover" /> */}
      </div>
      <div className="w-[100vw] lg:w-7/12 px-4 lg:px-16 lg:py-3  space-y-4 ">
        <h1 className="text-3xl aboutTitulo font-Dancing tracking-wide font-bold">Somos Delicious, tu mejor experiencia culinearia</h1>
        <p className='aboutTexto'>
          Contamos con más de 5 años de experiencia en el rubro gastronomico y estamos posicionados entre los mejores lugares de mendoza 
          en donde podras disfutar platillos de gran calidad y sabor.
        </p>
        <p className='aboutTexto'>
          También somos el lugar favorito de nuestros clientes para realizar sus reuniones familiares o juntadas con amigos
        </p>
        <ul className="space-y-2  ps-6">
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Contamos con un equipo altamente calificado.</li>
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Cumplimos con todas las normas de sanidad e higiene.</li>
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Disponemos de estacionamiento propio y seguridad privada.</li>
        </ul>

        <p className='aboutTexto'>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>

    </section>
  );
}
