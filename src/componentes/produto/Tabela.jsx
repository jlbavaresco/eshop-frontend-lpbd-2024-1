import { useContext } from 'react'
import ProdutoContext from './ProdutoContext';
import Alerta from '../Alerta';

function Tabela() {

    const { listaObjetos, alerta, remover } = useContext(ProdutoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Produtos</h1>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h1>Nenhum produto encontrada</h1>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">Código</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Estoque</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Data Cadastro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <button className="btn btn-info">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => remover(objeto)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <th scope="row">{objeto.codigo}</th>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.quantidade_estoque}</td>
                                    <td>{objeto.valor}</td>
                                    <td>{objeto.data_cadastro}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Tabela;