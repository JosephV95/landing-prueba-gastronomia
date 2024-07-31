
export const traerComidas = async()=>{
    try {
        let comidas = []
        await fetch('src/utils/comidasApi.json')
        // await fetch('https://foodied-server-nacho-fernandezs-projects.vercel.app/comidas/all')
        .then((res)=> res.json())
        .then( res => comidas = res.comidas)

        return comidas

    } catch (error) {
        return []
    }
}