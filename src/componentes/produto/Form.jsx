import { useContext } from 'react'
import Alerta from '../Alerta';
import ProdutoContext from './ProdutoContext';

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(ProdutoContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Categoria</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtCodido" className="form-label">
                                    Código
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtCodido"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Preencha o campo nome
                                </div>
                                <div class="valid-feedback">
                                    Campo nome OK
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtDescricao"
                                    name="descricao"
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Preencha o campo descrição
                                </div>
                                <div class="valid-feedback">
                                    Campo descrição OK
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtEstoque" className="form-label">
                                    Estoque
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtEstoque"
                                    name="quantidade_estoque"
                                    value={objeto.quantidade_estoque}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Preencha o campo estoque
                                </div>
                                <div class="valid-feedback">
                                    Campo estoque OK
                                </div>                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtValor" className="form-label">
                                    Valor
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtValor"
                                    name="valor"
                                    value={objeto.valor}
                                    onChange={handleChange}
                                    required
                                />
                                <div class="invalid-feedback">
                                    Preencha o campo valor
                                </div>
                                <div class="valid-feedback">
                                    Campo valor OK
                                </div>                                 
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDataCadastro" className="form-label">
                                    Data de cadastro
                                </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="txtDataCadastro"
                                    name="data_cadastro"
                                    value={objeto.data_cadastro}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success" >
                                Salvar  <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Form;