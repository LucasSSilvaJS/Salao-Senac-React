import { FaInfoCircle, FaRegPlusSquare, FaSearch, FaTrash } from "react-icons/fa";
import Header4 from "../../components/Header4";
import { IoPrintOutline } from "react-icons/io5";
import { FaArrowsRotate, FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";

import servicosImg from "../../assets/servicos.png";

import { equipamentosSalao, produtosConsumiveis, categoriasDoSalao, listaDuracaoSalao, diasDaSemana } from "../../utility/dados.salao";

function CreateService() {
    //telas
    const [activeEdit, setActiveEdit] = useState(false);

    //campos
    const [servico, setServico] = useState(''); //ok
    const [preco, setPreco] = useState(''); //ok
    const [comissao, setComissao] = useState(''); //ok
    const [duracao, setDuracao] = useState(''); //ok
    const [categoria, setCategoria] = useState(''); //ok
    const [qtdProfissionais, setQtdProfissionais] = useState(''); //ok
    const [descricao, setDescricao] = useState(''); //ok
    const [produtosUtilizados, setProdutosUtilizados] = useState([]);
    const [equipamentos, setEquipamentos] = useState([]);
    const [disponibilidadeAgendamento, setDisponibilidadeAgendamento] = useState([]);

    const [indexGlobal, setIndexGlobal] = useState(0);

    //lista
    const [servicosDisponiveis, setServicosDisponiveis] = useState([]);

    const limparCampos = () => {
        setServico('');
        setProdutosUtilizados([]);
        setPreco('');
        setComissao('');
        setCategoria('');
        setQtdProfissionais('');
        setDisponibilidadeAgendamento([]);
        setDuracao('');
        setEquipamentos([]);
        setDescricao('');
    }

    const handleChangeProdutos = (event) => {
        const selected = Array.from(event.target.selectedOptions).map(option => option.value);
        setProdutosUtilizados(selected);
    };

    const handleChangeDisponibilidade = (event) => {
        const selected = Array.from(event.target.selectedOptions).map(option => option.value);
        setDisponibilidadeAgendamento(selected);
    };

    const handleChangeEquipamentos = (event) => {
        const selected = Array.from(event.target.selectedOptions).map(option => option.value);
        setEquipamentos(selected);
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (servico && produtosUtilizados.length > 0 && preco && comissao && categoria && qtdProfissionais && disponibilidadeAgendamento.length > 0 && duracao && equipamentos.length > 0 && descricao) {
            setServicosDisponiveis([...servicosDisponiveis, {
                servico, produtosUtilizados, preco, comissao, categoria, qtdProfissionais, disponibilidadeAgendamento, duracao, equipamentos, descricao
            }])
            limparCampos();
            toast.success('Serviço cadastrado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    const handleDelete = (index) => {
        const updatedServicos = [...servicosDisponiveis];
        updatedServicos.splice(index, 1);
        setServicosDisponiveis(updatedServicos);
    }

    const handleEdit = (index) => {
        setIndexGlobal(index);
        setServico(servicosDisponiveis[index].servico);
        setProdutosUtilizados(servicosDisponiveis[index].produtosUtilizados);
        setPreco(servicosDisponiveis[index].preco);
        setComissao(servicosDisponiveis[index].comissao);
        setCategoria(servicosDisponiveis[index].categoria);
        setQtdProfissionais(servicosDisponiveis[index].qtdProfissionais);
        setDisponibilidadeAgendamento(servicosDisponiveis[index].disponibilidadeAgendamento);
        setDuracao(servicosDisponiveis[index].duracao);
        setEquipamentos(servicosDisponiveis[index].equipamentos);
        setDescricao(servicosDisponiveis[index].descricao);
        setActiveEdit(true);
    }

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        if (servico && produtosUtilizados.length > 0 && preco && comissao && categoria && qtdProfissionais && disponibilidadeAgendamento.length > 0 && duracao && equipamentos.length > 0 && descricao) {
            const updatedTrabalhadores = [...servicosDisponiveis];
            updatedTrabalhadores[indexGlobal] = {
                servico, produtosUtilizados, preco, comissao, categoria, qtdProfissionais, disponibilidadeAgendamento, duracao, equipamentos, descricao
            };

            setServicosDisponiveis(updatedTrabalhadores);
            limparCampos();
            toast.success('Serviço editado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    };

    return (
        <>
            <Header4 imgMenu={servicosImg} tituloMenu="Serviços">
                <button type="button" className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Cadastrar<br />serviço
                </button>
                <div className="position-relative">
                    <FaSearch size={20} color='var(--color-navy-blue)' className="position-absolute top-50 translate-middle-y" style={{ left: '10px' }} />
                    <input type="text" className="form-control rounded-5" style={{ paddingLeft: '40px' }} />
                </div>
                <div className="d-flex position-absolute" style={{ top: '-12.5px', right: '0px' }}>
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
                        <button class="btn border active flex-grow-1 rounded-0 custom-button active">Serviços</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table mt-3 table-light table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Serviço</th>
                                    <th className="text-center">Valor</th>
                                    <th className="text-center">Tempo de duração</th>
                                    <th className="text-center">Descrição</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {servicosDisponiveis.length > 0 &&
                                    servicosDisponiveis.map((s, index) => (
                                        <tr key={index}>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{s.servico}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{s.preco}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{s.duracao}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{s.descricao}</td>
                                            <td className="text-center">
                                                <button className="btn btn-success bg-light me-1">
                                                    <FaInfoCircle color="var(--color-navy-blue)" />
                                                </button>
                                                <button className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(index)}>
                                                    <FaPencil color="white" />
                                                </button>
                                                <button className="btn btn-success bg-danger ms-1" onClick={() => handleDelete(index)}>
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
                                <h5 className="modal-title" id="dateModalLabel" style={{ color: 'var(--color-navy-blue)' }}>Serviço</h5>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setActiveEdit(false)
                            }}></button>
                        </div>
                        <div className="modal-body container">
                            <form className="row" onSubmit={handleForm}>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Serviço</label>
                                    <input type="text" className="form-control" placeholder="Digite o nome do serviço" value={servico} onChange={e => setServico(e.target.value)} />
                                </div>
                                <div className="mb-3 col-lg-4 col-12">
                                    <label className="form-label">Preço</label>
                                    <input type="text" className="form-control" placeholder="Digite um preço" value={preco} onChange={e => setPreco(e.target.value)} />
                                </div>
                                <div className="mb-3 col-lg-4 col-12">
                                    <label className="form-label">Comissão</label>
                                    <input type="text" className="form-control" placeholder="Digite uma comissão" value={comissao} onChange={e => setComissao(e.target.value)} />
                                </div>
                                <div className="mb-3 col-lg-4 col-12">
                                    <label className="form-label">Duração</label>
                                    <select className="form-select" value={duracao} onChange={e => setDuracao(e.target.value)}>
                                        <option value="" selected disabled>Selecione uma duração estimado</option>
                                        {listaDuracaoSalao.map((t, index) => (
                                            <option value={t} key={index}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">Categoria</label>
                                    <select className="form-select" value={categoria} onChange={e => setCategoria(e.target.value)}>
                                        <option value="" selected disabled>Selecione uma categoria</option>
                                        {categoriasDoSalao.map((c, index) => (
                                            <option value={c} key={index}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">Quantidade de profissionais</label>
                                    <input type="number" className="form-control" value={qtdProfissionais} onChange={e => setQtdProfissionais(e.target.value)} placeholder="Digite a quantidade de profissionais"/>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Descrição</label>
                                    <textarea className="form-control" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Digite uma descrição" style={{resize: 'none', height: '150px'}}></textarea>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Produtos</label>
                                    <select className="form-select" value={produtosUtilizados} onChange={handleChangeProdutos} multiple>
                                        <option value="" selected disabled>Selecione um ou mais produto (pressione ctrl)</option>
                                        {produtosConsumiveis.map((p, index) => (
                                            <option value={p.nome} key={index}>{p.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Equipamentos</label>
                                    <select className="form-select" value={equipamentos} onChange={handleChangeEquipamentos} multiple>
                                        <option value="" selected disabled>Selecione um ou mais equipamento (pressione ctrl)</option>
                                        {equipamentosSalao.map((e, index) => (
                                            <option value={e.nome} key={index}>{e.nome}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Disponibilidade de agendamento</label>
                                    <select className="form-select" value={disponibilidadeAgendamento} onChange={handleChangeDisponibilidade} multiple>
                                        <option value="" selected disabled>Selecione uma ou mais disponibilidade (pressione ctrl)</option>
                                        {diasDaSemana.map((d, index) => (
                                            <option value={d} key={index}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                                {activeEdit ?
                                    <button type="button" className="btn btn-success col-12" onClick={handleSubmitEdit}>Editar</button>
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

export default CreateService;