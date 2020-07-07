import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs";

// Esto es un custom hook, que realizara el trabajo del fetch a la API
export const useFetchGifs = (category) =>{
  //Cargamos el hoook setState
  const [state, setState] = useState({
    data: [],
    loading: true
  })
  // Utilizamos el useEffect para prevenir el trigger de la API
  // por cada cambio de estado del componente

  useEffect(() => {
    // Utilizamos el helper de getGiff para llamar a la API le enviamos la categoria
    // Nos regresa una promesa la trabajos con el .then
    getGif(category)
      .then( imgs => {
        // Cambiamos el estado del hook inicial
        setState({
          data: imgs,
          loading: false
        })
      })
  }, [ category ])

  // Realizamos un return del estado
  return state;
}