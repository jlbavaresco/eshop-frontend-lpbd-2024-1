import { useState, useEffect } from "react";
import ProdutoContext from "./ProdutoContext";
import Tabela from "./Tabela";

function Produto(){

    const [listaObjetos, setListaObjetos] = useState([]);

    const recuperaProdutos = async () => {
        await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos`)
              .then(response => response.json())
              .then(json => setListaObjetos(json))
              .catch(err => console.log('Erro: ' + err))
    }

    useEffect(()=>{
        recuperaProdutos();
    },[]);

    return (
        <ProdutoContext.Provider value={ { listaObjetos } }>
           <Tabela/>     
        </ProdutoContext.Provider>
    )

}

export default Produto;