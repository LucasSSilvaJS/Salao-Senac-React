import { FaRegPlusSquare, FaSearch, FaTrash } from "react-icons/fa";
import Header4 from "../../components/Header4";
import { IoPrintOutline } from "react-icons/io5";
import { FaArrowsRotate, FaPencil } from "react-icons/fa6";
import { useState } from "react";
import { funcoesSalao } from "../../utility/dados.salao";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { toast } from "react-toastify";

import equipeImg from "../../assets/equipe.png";

function Team() {
    //telas
    const [telaAtivos, setAtivos] = useState(true);
    const [telaInativos, setInativos] = useState(false);
    const [activeEdit, setActiveEdit] = useState(false);

    //campos
    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const [indexGlobal, setIndexGlobal] = useState(0);

    //lista
    const [trabalhadoresAtivos, setTrabalhadoresAtivos] = useState([]);
    const [trabalhadoresInativos, setTrabalhadoresInativos] = useState([]);


    const handleAtivos = () => {
        setAtivos(true);
        setInativos(false);
    }

    const handleInativos = () => {
        setInativos(true);
        setAtivos(false);
    }

    const limparCampos = () => {
        setNome('');
        setFuncao('');
        setDisponibilidade('');
        setTelefone('');
        setEmail('');
        setObservacoes('');
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (nome && funcao && disponibilidade && telefone && email && observacoes) {
            setTrabalhadoresAtivos([...trabalhadoresAtivos, {
                nome, funcao, disponibilidade, telefone, email, observacoes
            }])
            limparCampos();
            toast.success('Funcionário cadastrado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    }

    const handleDeleteAtivos = (index) => {
        const { nome, funcao, disponibilidade, telefone, email, observacoes } = trabalhadoresAtivos[index];
    
        // Cria uma cópia do array trabalhadoresInativos
        const updatedInativos = [...trabalhadoresInativos, {
            nome, funcao, disponibilidade, telefone, email, observacoes
        }];
    
        // Cria uma cópia do array trabalhadoresAtivos e remove o item
        const updatedAtivos = [...trabalhadoresAtivos];
        updatedAtivos.splice(index, 1);
    
        // Atualiza os estados com os arrays modificados
        setTrabalhadoresAtivos(updatedAtivos);
        setTrabalhadoresInativos(updatedInativos);
    }

    const handleEditAtivos = (index) => {
        setIndexGlobal(index);
        setNome(trabalhadoresAtivos[index].nome);
        setFuncao(trabalhadoresAtivos[index].funcao);
        setDisponibilidade(trabalhadoresAtivos[index].disponibilidade);
        setTelefone(trabalhadoresAtivos[index].telefone);
        setEmail(trabalhadoresAtivos[index].email);
        setObservacoes(trabalhadoresAtivos[index].observacoes);
        setActiveEdit(true);
    }

    const handleSubmitEditAtivos = (e) => {
        e.preventDefault();
        if (nome && funcao && disponibilidade && telefone && email && observacoes) {
            const updatedTrabalhadores = [...trabalhadoresAtivos];
            updatedTrabalhadores[indexGlobal] = {
                nome, funcao, disponibilidade, telefone, email, observacoes
            };

            setTrabalhadoresAtivos(updatedTrabalhadores);
            limparCampos();
            toast.success('Funcionário editado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    };

    const handleRollbackAtivos = (index) => {
        const { nome, funcao, disponibilidade, telefone, email, observacoes } = trabalhadoresInativos[index];
    
        // Cria uma cópia do array trabalhadoresAtivos e adiciona o item de volta
        const updatedAtivos = [...trabalhadoresAtivos, {
            nome, funcao, disponibilidade, telefone, email, observacoes
        }];
    
        // Cria uma cópia do array trabalhadoresInativos e remove o item
        const updatedInativos = [...trabalhadoresInativos];
        updatedInativos.splice(index, 1);
    
        // Atualiza os estados com os arrays modificados
        setTrabalhadoresAtivos(updatedAtivos); // Atualiza os trabalhadores ativos
        setTrabalhadoresInativos(updatedInativos); // Atualiza os trabalhadores inativos
    };
    

    const handleEditInativos = (index) => {
        setIndexGlobal(index);
        setNome(trabalhadoresInativos[index].nome);
        setFuncao(trabalhadoresInativos[index].funcao);
        setDisponibilidade(trabalhadoresInativos[index].disponibilidade);
        setTelefone(trabalhadoresInativos[index].telefone);
        setEmail(trabalhadoresInativos[index].email);
        setObservacoes(trabalhadoresInativos[index].observacoes);
        setActiveEdit(true);
    }

    const handleSubmitEditInativos = (e) => {
        e.preventDefault();
        if (nome && funcao && disponibilidade && telefone && email && observacoes) {
            const updatedTrabalhadores = [...trabalhadoresInativos];
            updatedTrabalhadores[indexGlobal] = {
                nome, funcao, disponibilidade, telefone, email, observacoes
            };

            setTrabalhadoresInativos(updatedTrabalhadores);
            limparCampos();
            toast.success('Funcionário editado com sucesso!');
        } else {
            toast.error('Preencha todos os campos!');
        }
    };

    return (
        <>
            <Header4 imgMenu={equipeImg} tituloMenu="Equipe">
                <button type="button" className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Cadastrar<br />funcionário
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
                        <button class={`btn border active flex-grow-1 rounded-0 ${telaAtivos && 'custom-button active'}`} onClick={handleAtivos}>Ativos</button>
                        <button class={`btn border active flex-grow-1 rounded-0 ${telaInativos && ' custom-button active'}`} onClick={handleInativos}>Inativos</button>
                    </div>
                    <div className="table-responsive">
                        <table className="table mt-3 table-light table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center">Nome</th>
                                    <th className="text-center">Disponibilidade</th>
                                    <th className="text-center">Funcao</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {telaAtivos && trabalhadoresAtivos.length > 0 &&
                                    trabalhadoresAtivos.map((t, index) => (
                                        <tr key={index}>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.nome}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.disponibilidade}</td>
                                            <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.funcao}</td>
                                            <td className="text-center">
                                                <button className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditAtivos(index)}>
                                                    <FaPencil color="white" />
                                                </button>
                                                <button className="btn btn-success bg-danger ms-1" onClick={() => handleDeleteAtivos(index)}>
                                                    <FaTrash color="white" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                {telaInativos && trabalhadoresInativos.length > 0 && trabalhadoresInativos.map((t, index) => (
                                    <tr key={index}>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.nome}</td>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.disponibilidade}</td>
                                        <td className="text-center" style={{ verticalAlign: 'middle' }}>{t.funcao}</td>
                                        <td className="text-center">
                                            <button className="btn btn-success bg-orange" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEditInativos(index)}>
                                                <FaPencil color="white" />
                                            </button>
                                            <button className="btn btn-success bg-success ms-1" onClick={() => {handleRollbackAtivos(index)}}>
                                                <BsArrowCounterclockwise color="white" />
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
                                <h5 className="modal-title" id="dateModalLabel" style={{ color: 'var(--color-navy-blue)' }}>Agendamento</h5>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                setActiveEdit(false)
                            }}></button>
                        </div>
                        <div className="modal-body container">
                            <form className="row" onSubmit={handleForm}>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Nome</label>
                                    <input type="text" className="form-control" placeholder="Digite o nome do funcionário" value={nome} onChange={e => setNome(e.target.value)} />
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">Função</label>
                                    <select className="form-select" value={funcao} onChange={e => setFuncao(e.target.value)}>
                                        <option value="" selected disabled>Selecione uma função</option>
                                        {funcoesSalao.map((f, index) => (
                                            <option value={f} key={index}>{f}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">Disponibilidade</label>
                                    <select className="form-select" value={disponibilidade} onChange={e => setDisponibilidade(e.target.value)}>
                                        <option value="" selected disabled>Selecione uma disponibilidade</option>
                                        <option value="30 horas semanais">30 horas semanais</option>
                                        <option value="40 horas semanais">40 horas semanais</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">Telefone</label>
                                    <input type="tel" className="form-control" placeholder="Digite o telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
                                </div>
                                <div className="mb-3 col-lg-6 col-12">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" className="form-control" placeholder="Digite o e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Observações</label>
                                    <textarea style={{ height: '150px', resize: 'none' }} className="form-control" placeholder="Digite uma observação" value={observacoes} onChange={e => setObservacoes(e.target.value)}></textarea>
                                </div>
                                {activeEdit ?
                                    <button type="button" className="btn btn-success col-12" onClick={telaAtivos ? handleSubmitEditAtivos : handleSubmitEditInativos}>Editar</button>
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

export default Team;