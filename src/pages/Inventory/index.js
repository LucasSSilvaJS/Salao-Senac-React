import { FaRegPlusSquare, FaSearch, FaTrash } from "react-icons/fa";
import Header4 from "../../components/Header4";
import { IoPrintOutline } from "react-icons/io5";
import { FaArrowsRotate, FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { categoriasDoSalao } from "../../utility/dados.salao";
import { toast } from "react-toastify";

import estoqueImg from "../../assets/estoque.png";

function Inventory() {
    //telas
    const [telaProdutos, setTelaProdutos] = useState(true);
    const [telaFornecedores, setTelaFornecedores] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);

    //campos (produtos)
    const [produtoNome, setProdutoNome] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [valor, setValor] = useState('');
    const [marca, setMarca] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [limiteMinimo, setLimiteMinimo] = useState('');
    const [categoriaRevenda, setCategoriaRevenda] = useState('');
    const [valorRevenda, setValorRevenda] = useState('');
    const [codigoDeBarras, setCodigoDeBarras] = useState('');

    //campos (fornecedor)
    const [nomeFornecedor, setNomeFornecedor] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const [indexGlobal, setIndexGlobal] = useState(0);

    //lista
    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaFornecedores, setListaFornecedores] = useState([]);


    const handleProdutos = () => {
        setTelaProdutos(true);
        setTelaFornecedores(false);
    }

    const handleFornecedores = () => {
        setTelaFornecedores(true);
        setTelaProdutos(false);
    }

    const limparCampos = () => {
        setProdutoNome('');
        setFornecedor('');
        setValor('');
        setMarca('');
        setQuantidade('');
        setLimiteMinimo('');
        setCategoriaRevenda('');
        setValorRevenda('');
        setCodigoDeBarras('');

        setNomeFornecedor('');
        setCnpj('');
        setRazaoSocial('');
        setTelefone('');
        setCep('');
        setEmail('');
        setEndereco('');
        setEstado('');
        setCidade('');
        setNumero('');
        setComplemento('');
    }

    const handleFormProdutos = (e) => {
        e.preventDefault();
        if (produtoNome && fornecedor && valor && marca && quantidade && limiteMinimo && categoriaRevenda && valorRevenda && codigoDeBarras) {
            setListaProdutos([...listaProdutos, {
                produtoNome, fornecedor, valor, marca, quantidade, limiteMinimo, categoriaRevenda, valorRevenda, codigoDeBarras
            }])
            limparCampos();
            toast.success('Produto cadastrado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    const handleFormFornecedores = (e) => {
        e.preventDefault();
        if (nomeFornecedor && cnpj && razaoSocial && telefone && cep && email && endereco && estado && cidade && numero && complemento) {
            setListaFornecedores([...listaProdutos, {
                nomeFornecedor, cnpj, razaoSocial, telefone, cep, email, endereco, estado, cidade, numero, complemento
            }])
            limparCampos();
            toast.success('Fornecedor cadastrado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    const handleDeleteProdutos = (index) => {
        const updatedProdutos = [...listaProdutos];
        updatedProdutos.splice(index, 1);

        setListaProdutos(updatedProdutos);
    }

    const handleDeleteFornecedores = (index) => {
        const updatedFornecedores = [...listaFornecedores];
        updatedFornecedores.splice(index, 1);

        setListaFornecedores(updatedFornecedores);
    };

    const handleEditProdutos = (index) => {
        setIndexGlobal(index);
        setProdutoNome(listaProdutos[index].produtoNome);
        setFornecedor(listaProdutos[index].fornecedor);
        setValor(listaProdutos[index].valor);
        setMarca(listaProdutos[index].marca);
        setQuantidade(listaProdutos[index].quantidade);
        setLimiteMinimo(listaProdutos[index].limiteMinimo);
        setCategoriaRevenda(listaProdutos[index].categoriaRevenda);
        setValorRevenda(listaProdutos[index].valorRevenda);
        setCodigoDeBarras(listaProdutos[index].codigoDeBarras);
        setActiveEdit(true);
    }

    const handleEditFornecedores = (index) => {
        setIndexGlobal(index);
        setNomeFornecedor(listaFornecedores[index].nomeFornecedor);
        setCnpj(listaFornecedores[index].cnpj);
        setRazaoSocial(listaFornecedores[index].razaoSocial);
        setTelefone(listaFornecedores[index].telefone);
        setCep(listaFornecedores[index].cep);
        setEmail(listaFornecedores[index].email);
        setEndereco(listaFornecedores[index].endereco);
        setEstado(listaFornecedores[index].estado);
        setCidade(listaFornecedores[index].cidade);
        setNumero(listaFornecedores[index].numero);
        setComplemento(listaFornecedores[index].complemento);
        setActiveEdit(true);
    }

    const handleSubmitEditProdutos = (e) => {
        e.preventDefault();
        if (produtoNome && fornecedor && valor && marca && quantidade && limiteMinimo && categoriaRevenda && valorRevenda && codigoDeBarras) {
            const updatedProdutos = [...listaProdutos];
            updatedProdutos[indexGlobal] = {
                produtoNome, fornecedor, valor, marca, quantidade, limiteMinimo, categoriaRevenda, valorRevenda, codigoDeBarras
            };

            setListaProdutos(updatedProdutos);
            limparCampos();
            toast.success('Produto editado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    };



    const handleSubmitEditFornecedores = (e) => {
        e.preventDefault();
        if (nomeFornecedor && cnpj && razaoSocial && telefone && cep && email && endereco && estado && cidade && numero && complemento) {
            const updatedFornecedores = [...listaFornecedores];
            updatedFornecedores[indexGlobal] = {
                nomeFornecedor, cnpj, razaoSocial, telefone, cep, email, endereco, estado, cidade, numero, complemento
            };

            setListaFornecedores(updatedFornecedores);
            limparCampos();
            toast.success('Fornecedor editado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    };

    return (
        <>
            <Header4 imgMenu={estoqueImg} tituloMenu="Estoque">
                <button type="button" className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {telaProdutos ? 'Cadastrar produto' : 'Cadastrar fornecedor'}
                </button>
                <div className="position-relative">
                    <FaSearch size={20} color='var(--color-navy-blue)' className="position-absolute top-50 translate-middle-y" style={{ left: '10px' }} />
                    <input type="text" className="form-control rounded-5" style={{ paddingLeft: '40px' }} />
                </div>
                <div className="d-flex position-absolute" style={{ top: '-32.5px', right: '0px' }}>
                    <button className="btn">
                        <IoPrintOutline color="white" />
                    </button>
                    <button className="btn">
                        <FaArrowsRotate color="white" />
                    </button>
                </div>
            </Header4>
            <main>
                <section className="container p-3">
                    <div class="d-flex border">
                        <button class={`btn border active flex-grow-1 rounded-0 ${telaProdutos && 'custom-button active'}`} onClick={handleProdutos}>Produtos</button>
                        <button class={`btn border active flex-grow-1 rounded-0 ${telaFornecedores && ' custom-button active'}`} onClick={handleFornecedores}>Fornecedores</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table mt-3 table-light table-striped table-hover table-bordered">
                            <thead>
                                {telaProdutos &&
                                    <tr>
                                        <th className="text-center">Produto</th>
                                        <th className="text-center">Valor</th>
                                        <th className="text-center">Quantidade</th>
                                        <th className="text-center">Fornecedor</th>
                                        <th className="text-center">Limite mínimo</th>
                                        <th className="text-center"></th>
                                    </tr>
                                }
                                {telaFornecedores &&
                                    <tr>
                                        <th className="text-center">Fornecedor</th>
                                        <th className="text-center">CNPJ</th>
                                        <th className="text-center">Endereço</th>
                                        <th className="text-center"></th>
                                    </tr>
                                }
                            </thead>
                            <tbody>
                                {telaProdutos && listaProdutos.length > 0 &&
                                    listaProdutos.map((t, index) => (
                                        <tr key={index}>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.produtoNome}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.valor}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.quantidade}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.fornecedor}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.limiteMinimo}</td>
                                            <td className="text-center">
                                                <button className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditProdutos(index)}>
                                                    <FaPencil color="white" />
                                                </button>
                                                <button className="btn btn-success bg-danger ms-1" onClick={() => handleDeleteProdutos(index)}>
                                                    <FaTrash color="white" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                {telaFornecedores && listaFornecedores.length > 0 && listaFornecedores.map((t, index) => (
                                    <tr key={index}>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.nomeFornecedor}</td>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.cnpj}</td>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.endereco}</td>
                                        <td className="text-center">
                                            <button className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditFornecedores(index)}>
                                                <FaPencil color="white" />
                                            </button>
                                            <button className="btn btn-success bg-danger ms-1" onClick={() => handleDeleteFornecedores(index)}>
                                                <FaTrash color="white" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header container">
                            <div className="d-flex align-items-center">
                                <FaRegPlusSquare className="me-1" size={20} style={{ color: 'var(--color-navy-blue)' }} />
                                <h5 className="modal-title" id="dateModalLabel" style={{ color: 'var(--color-navy-blue)' }}>{telaProdutos ? 'Cadastro produto' : 'Cadastro fornecedor'}</h5>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setActiveEdit(false)
                            }}></button>
                        </div>
                        <div className="modal-body container">
                            <form className="row" onSubmit={telaProdutos ? handleFormProdutos : handleFormFornecedores}>
                                {telaProdutos &&
                                    <>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Nome</label>
                                            <input type="text" className="form-control" placeholder="Digite o nome do produto" value={produtoNome} onChange={e => setProdutoNome(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Fornecedor</label>
                                            <input type="text" className="form-control" placeholder="Digite o nome do fornecedor" value={fornecedor} onChange={e => setFornecedor(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">Valor</label>
                                            <input type="text" className="form-control" placeholder="Digite um valor" value={valor} onChange={e => setValor(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">Marca</label>
                                            <input type="text" className="form-control" placeholder="Digite uma marca" value={marca} onChange={e => setMarca(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">Quantidade</label>
                                            <input type="number" className="form-control" placeholder="Digite uma quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Limite mínimo no estoque</label>
                                            <input type="number" className="form-control" placeholder="Digite uma quantidade" value={limiteMinimo} onChange={e => setLimiteMinimo(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Categoria da revenda</label>
                                            <select className="form-select" value={categoriaRevenda} onChange={e => setCategoriaRevenda(e.target.value)}>
                                                <option value="" selected disabled>Selecione uma categoria</option>
                                                {categoriasDoSalao.map((s, index) => (
                                                    <option value={s} key={index}>{s}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Valor de revenda</label>
                                            <input type="text" className="form-control" placeholder="Digite um valor" value={valorRevenda} onChange={e => setValorRevenda(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Código de barras</label>
                                            <input type="text" className="form-control" placeholder="Digite um código de barras" value={codigoDeBarras} onChange={e => setCodigoDeBarras(e.target.value)} />
                                        </div>
                                    </>
                                }
                                {telaFornecedores &&
                                    <>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Nome</label>
                                            <input type="text" className="form-control" placeholder="Digite o nome do fornecedor" value={nomeFornecedor} onChange={e => setNomeFornecedor(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">CNPJ</label>
                                            <input type="text" className="form-control" placeholder="Digite o CNPJ" value={cnpj} onChange={e => setCnpj(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">Razão Social</label>
                                            <input type="text" className="form-control" placeholder="Digite a Razão Social" value={razaoSocial} onChange={e => setRazaoSocial(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">Telefone</label>
                                            <input type="tel" className="form-control" placeholder="Digite o telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-4 col-12">
                                            <label className="form-label">CEP</label>
                                            <input type="text" className="form-control" placeholder="Digite o CEP" value={cep} onChange={e => setCep(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">E-mail</label>
                                            <input type="email" className="form-control" placeholder="Digite o E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-6 col-12">
                                            <label className="form-label">Endereço</label>
                                            <input type="text" className="form-control" placeholder="Digite o endereço" value={endereco} onChange={e => setEndereco(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-3 col-12">
                                            <label className="form-label">Estado</label>
                                            <input type="text" className="form-control" placeholder="Digite o Estado" value={estado} onChange={e => setEstado(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-3 col-12">
                                            <label className="form-label">Cidade</label>
                                            <input type="text" className="form-control" placeholder="Digite a cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-3 col-12">
                                            <label className="form-label">Número</label>
                                            <input type="text" className="form-control" placeholder="Digite o número" value={numero} onChange={e => setNumero(e.target.value)} />
                                        </div>
                                        <div className="mb-3 col-lg-3 col-12">
                                            <label className="form-label">Complemento</label>
                                            <input type="text" className="form-control" placeholder="Digite um complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
                                        </div>
                                    </>
                                }
                                {activeEdit ?
                                    <button type="button" className="btn btn-success col-12" onClick={telaProdutos ? handleSubmitEditProdutos : handleSubmitEditFornecedores}>Editar</button>
                                    :
                                    <button type="submit" className="btn btn-success col-12">Cadastrar</button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inventory;