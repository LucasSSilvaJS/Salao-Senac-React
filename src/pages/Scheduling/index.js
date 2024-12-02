import Header3 from "../../components/Header3";
import atendimentoImg from '../../assets/atendimento.png';
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

import {servicosSenac} from '../../utility/dados.salao';

function Scheduling() {

    const listaServicos = listarServicosPorNome();

    const dates = {
        '24/11/2024': 'bg-success text-white',
        '25/11/2024': 'bg-success text-white',
        '26/11/2024': 'bg-danger text-white',
        '27/11/2024': 'bg-success text-white',
    };

    const [schedulePage, setSchedulePage] = useState(false);
    const [selectDate, setSelectDate] = useState(new Date());

    //campos
    const [servico, setServico] = useState('');
    const [horario, setHorario] = useState('');
    const [duracao, setDuracao] = useState('');
    const [profissional, setProfissional] = useState('');
    const [observacao, setObservacao] = useState('');

    //listas
    const [profissionais, setProfissionais] = useState([]);
    const [horarios, setHorarios] = useState([]);

    function resetarCampos(){
        setServico('');
        setHorario('');
        setDuracao('');
        setProfissional('');
        setObservacao('');
        setProfissionais([]);
        setHorarios([]);
    }

    function handleSubmit(e){
        e.preventDefault();
        toast.success('Agendado com sucesso!');
        resetarCampos();
        setSchedulePage(false);
    }

    function listarServicosPorNome() {
        return servicosSenac.flatMap(categoria =>
            categoria.servicos.map(servico => servico.nome)
        );
    }

    useEffect(() => {
        function buscarHorarios() {
            if (servico && profissional) {
                const categoria = servicosSenac.find(categoria =>
                    categoria.servicos.some(s => s.nome === servico)
                );
                if (categoria) {
                    const servicoSelecionado = categoria.servicos.find(s => s.nome === servico);
                    if (servicoSelecionado && servicoSelecionado.profissionais) {
                        const horarios = servicoSelecionado.profissionais[profissional];
                        if (Array.isArray(horarios)) {
                            setHorarios(horarios);
                        } else {
                            setHorarios([]); // Garantir que não fique com valores inválidos
                        }
                    }
                }
            }
        }
    
        buscarHorarios();
    }, [servico, profissional]);
    
    // Quando o serviço é alterado, configure o único profissional automaticamente
    useEffect(() => {
        if (servico) {
            const categoria = servicosSenac.find(categoria =>
                categoria.servicos.some(s => s.nome === servico)
            );
            if (categoria) {
                const servicoSelecionado = categoria.servicos.find(s => s.nome === servico);
                if (servicoSelecionado && servicoSelecionado.profissionais) {
                    const profissionaisDisponiveis = Object.keys(servicoSelecionado.profissionais);
                    setProfissionais(profissionaisDisponiveis);
                    setDuracao(servicoSelecionado.duracao);
                    
                    // Configurar automaticamente o único profissional, se houver só um
                    if (profissionaisDisponiveis.length === 1) {
                        setProfissional(profissionaisDisponiveis[0]);
                    } else {
                        setProfissional(''); // Limpa o profissional selecionado
                    }
                }
            }
        }
    }, [servico]);

    useEffect(() => {
        function definirHorarios() {
            if(profissionais){
                const horarios = servicosSenac.flatMap(categoria =>
                    categoria.servicos.flatMap(servico => 
                        servico.profissionais
                    )
                );

                const objHorarios = Object.assign({}, ...horarios)
                setHorarios(objHorarios[profissional])
            }
        }
        definirHorarios();
    }, [profissionais, profissional])

    return (
        <>
            <Header3 imgMenu={atendimentoImg} tituloMenu='Atendimento'>
                <div>
                    <label className="form-label text-white">Serviços:</label>
                    <select value={servico} onChange={e => setServico(e.target.value)} className="form-select" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <option value="" disabled>Selecione um serviço</option>
                        {listaServicos && listaServicos.length > 0 && listaServicos.map((servico, index) => (
                            <option value={servico} key={index}>{servico}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-success bg-orange">
                    Buscar
                </button>
                <button className="btn btn-success bg-orange" onClick={() => setSchedulePage(false)}>
                    <FaRegCalendarAlt size={25} color="white"/>
                </button>
            </Header3>
            <main>
                <section className="container p-3">
                    {!schedulePage ? (
                        <>
                            <Calendar
                                className='w-100'
                                onChange={setSelectDate}
                                value={selectDate}
                                onClickDay={(value, event) => {
                                    const listDates = Object.keys(dates);
                                    const formattedDate = value.toLocaleDateString();
                                    if (listDates.includes(formattedDate)) {
                                        if (dates[formattedDate] === 'bg-success text-white') {
                                            setSchedulePage(true);
                                        } else {
                                            toast.error('Não há reserva disponível 😔');
                                        }
                                    }
                                }}
                                tileClassName={({ date, view }) => {
                                    const formattedDate = date.toLocaleDateString();

                                    if (dates[formattedDate]) {
                                        return dates[formattedDate];
                                    }

                                    return null;
                                }}
                            />
                            <article className="mx-auto mt-2 d-flex gap-3 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <div className="rounded-1 me-2" style={{width: '15px', height: '15px', backgroundColor: 'yellow'}}></div>
                                    <span>Data atual</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="rounded-1 me-2" style={{width: '15px', height: '15px', backgroundColor: 'blue'}}></div>
                                    <span>Data selecionada</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="rounded-1 me-2" style={{width: '15px', height: '15px', backgroundColor: 'green'}}></div>
                                    <span>Agendamento disponível</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="rounded-1 me-2" style={{width: '15px', height: '15px', backgroundColor: 'red'}}></div>
                                    <span>Agendamento indisponível</span>
                                </div>
                            </article>
                        </>
                    ) : (
                        <>
                            <header className="w-100 d-flex align-items-center p-2 mb-2" style={{ color: 'var(--color-navy-blue)', borderBottom: '2px solid var(--color-navy-blue)' }}>
                                <BsPlusSquare size={30} className="me-2" />
                                <h2 className="h4">Agendamento</h2>
                            </header>
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-12 col-md-4 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Dia</label>
                                    <input type="date" className="form-control" disabled value={selectDate.toISOString().split('T')[0]} />
                                </div>
                                <div className="col-12 col-md-4 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Horario</label>
                                    <select className="form-select" value={horario} onChange={e => setHorario(e.target.value)} disabled={!profissional ? true : false} style={{ cursor: profissional ? 'default' : 'not-allowed' }}>
                                        <option value="" disabled>Selecione um horário</option>
                                        {horarios && horarios.length > 0 && horarios.map((hr, index) => (
                                            <option value={hr} key={index}>{hr}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12 col-md-4 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Duração</label>
                                    <select className="form-select" value={duracao} onChange={e => setDuracao(e.target.value)}>
                                        <option value="" disabled>Selecione o tempo estimado</option>
                                        {duracao &&
                                            <option value={duracao} selected>{duracao}</option>
                                        }
                                    </select>
                                </div>
                                <div className="col-md-6 col-12 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Serviço</label>
                                    <select className="form-select" value={servico} onChange={e => setServico(e.target.value)}>
                                        <option value="" disabled>Selecione um serviço</option>
                                        {listaServicos && listaServicos.length > 0 && listaServicos.map((s, index) => (
                                            <option value={s} key={index}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 col-12 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Profissional</label>
                                    <select className="form-select" value={profissional} onChange={e => setProfissional(e.target.value)} disabled={!servico ? true : false} style={{ cursor: servico ? 'default' : 'not-allowed' }}>
                                        <option value="" disabled>Selecione um profissional</option>
                                        {profissionais && profissionais.length > 0 && profissionais.map((p, index) => (
                                            <option value={p} key={index}>{p}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12 mb-4" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Observação</label>
                                    <input type="text" className="form-control" value={observacao} onChange={e => setObservacao(e.target.value)} placeholder="Faça um comentário"/>
                                </div>
                                <input type="submit" className="col-12 btn btn-success"/>
                            </form>
                        </>
                    )}
                </section>
            </main>
        </>
    );
}

export default Scheduling;