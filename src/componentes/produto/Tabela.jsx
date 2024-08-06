import { useContext } from "react";
import ProdutoContext from "./ProdutoContext";

function Tabela(){

    const { listaObjetos } = useContext(ProdutoContext);

    return (
        <div>
            <h1>Produtos</h1>
            {JSON.stringify(listaObjetos)}
        </div>
    )
}

export default Tabela;