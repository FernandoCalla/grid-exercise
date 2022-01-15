import { useState } from "react";

let stylesBlack={
    margin:'1px',
    width:'30px',
    height:'30px',
    backgroundColor: "black",
    borderColor:'#999'
};
let stylesGreen={
    margin:'1px',
    width:'30px',
    height:'30px',
    backgroundColor: "green",
    borderColor:'#999'
};
let stylesBlue={
    margin:'1px',
    width:'30px',
    height:'30px',
    backgroundColor: "blue",
    borderColor:'#999'
};
let stylesBox={
    display: 'flex',
    flexDirection: 'col',
};
const crearMatriz = (fila,columna) => {
    const matriz=[]
    for(let i=0;i<fila;i++){
        const subArreglo=[];
        for(let i=0;i<columna;i++){
            subArreglo.push(stylesBlack);
        }
        matriz.push(subArreglo);
    }
    return(matriz)
}

const Cuadricula=()=>{
    const [filas,setFilas]=useState(10);
    const [columnas,setColumnas]=useState(10);
    const [matriz,setMatriz]=useState(crearMatriz(filas,columnas));    
    const [color,setColor]= useState(stylesBlack)
    
    const cambiarColorCuadrilla=(index,subIndex)=>{        
        const numberColsCopy=[...matriz];
        numberColsCopy[index][subIndex]=color;
        setMatriz( numberColsCopy);
    }

      return(<>
      <div style={stylesBox}>
          <div>
      <h3 style={{margin:"1px"}}>Filas: </h3>
      <input
            style={{margin:"3px"}}
            type="number"
            value={filas}
            onChange={(e) => {
              setFilas(e.target?.value);
              setMatriz(crearMatriz(e.target.value,columnas))
            }}
          ></input></div>
          <div>
      <h3 style={{margin:"1px"}}>Columnas: </h3>
          <input
            style={{margin:"3px"}}
            type="number"
            value={columnas}
            onChange={(e) => {
              setColumnas(e.target?.value);
              setMatriz(crearMatriz(filas,e.target.value))
            }}
          ></input></div>
          </div>
     {matriz.map((value,index)=>(         
         <div style={stylesBox}>             
         {value.map((value2,subIndex)=>(
                <div style={value2} key={subIndex} onClick={()=>cambiarColorCuadrilla(index,subIndex)} >.</div>)             
         )}
         </div>
     ))}
     <h1>Seleccionar colores</h1>
        <div style={stylesBlack} onClick={()=>setColor(stylesBlack)}>.</div>
        <div style={stylesGreen} onClick={()=>setColor(stylesGreen)}>.</div>
        <div style={stylesBlue} onClick={()=>setColor(stylesBlue)}>.</div>
    <h3>Color actualmente seleccionado: {color=== stylesBlack && "Negro" }{color=== stylesGreen && "Verde" }{color=== stylesBlue && "Azul" }</h3>
    </>);

}
export default Cuadricula;