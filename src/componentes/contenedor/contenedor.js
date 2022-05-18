import React, {useEffect, useState} from "react";
import Articulos from "./articulos";
import {datosArticulos} from "./info_articulos"
import "./estilos-contenedor.css"
export default function Contenedor() {
    //console.log(datosArticulos)
    //https://newsapi.org/v2/top-headlines?country=co&apiKey=661ad647db6d43e29c9c0c21ae9e0ac2


 const [post, setPost]=useState([])   
 // funcion para obtener los post

 const obtenerDatos = async ()=>{
   
     try {
        let  url =  'https://newsapi.org/v2/top-headlines?country=co&apiKey=8e550213116f48d6822c681631152098'
        const respuesta = await fetch(url)  
        const datos = await respuesta.json();
        console.log(datos)
        setPost(datos.articles)
        return datos.articles
     } catch (error) {
         console.log("error")
     }

 }

 useEffect(()=>{
  
    obtenerDatos()

 },[])
 

    return(
        <div className="w3-row-padding">
            {
                datosArticulos.map((art, index)=>{
                    return <Articulos 
                    
                    key={index} 
                    titulo={art.title}
                    descripcion ={art.description}
                    imagen = {art.urlToimage}
                    fecha = {art.publishedAt}
                    
                    />
                })
            }
            <di className="paginacion">
             <button className="atras">
                 cargar menos
                

             </button>
             <span>1</span>
             <button className="adelnate">
                 cargar mas

             </button>

            </di>
        </div>
    );
}