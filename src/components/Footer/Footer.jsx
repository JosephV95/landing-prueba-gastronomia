export default function Footer() {
  return (
    <div className=" mx-auto bg-black/80 py-7 px-2">
      <div className="text-white text-center  flex flex-col gap-3">
        <h1 className="text-orange-500 text-4xl font-bold font-Satisfy tracking-widest">Delicious</h1>
        <p className="tracking-tight leading-snug">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

        <div className="redesLinks flex flex-row gap-4 justify-center">
          <a href="https://es-la.facebook.com"  target="_blank" rel="noopener noreferrer" ><box-icon type='logo' name='facebook' color='#f8f8f8' size='md'></box-icon></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><box-icon type='logo' name='instagram' color='#f8f8f8' size='md'></box-icon></a>
          <a href="" target="_blank" rel="noopener noreferrer" ><box-icon type='logo' name='whatsapp' color='#f8f8f8' size='md'></box-icon></a>
          <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer" ><box-icon type='logo' name='twitter' color='#f8f8f8' size='md'></box-icon></a>
        </div>

        <p>© Copyright Delicious. All Rights Reserved</p>
        <p>Diseñado por <span className="text-orange-500"><a href="https://viltejosedev.netlify.app" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold underline underline-offset-2">José Vilte</a></span></p>
      </div>
      
    </div>
  )
}
