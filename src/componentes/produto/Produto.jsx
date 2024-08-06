import { useState, useEffect } from "react";
import ProdutoContext from "./ProdutoContext";
import Tabela from "./Tabela";

function Produto(){

    const [listaObjetos, setListaObjetos] = useState([]);
    const [alerta, setAlerta] = useState({ status: "" , message : ""});

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/produtos/${objeto.codigo}`,
                    { method: "DELETE" })
                    .then(response => response.json())
                    .then(json => setAlerta({ status: json.status, message: json.message }))
                recuperaProdutos();
            } catch (err) {
                console.log('Erro: ' + err)
            }
        }
    } 

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
        <ProdutoContext.Provider value={ { listaObjetos , alerta, remover } }>
           <Tabela/>     
        </ProdutoContext.Provider>
    )

}

export default Produto;