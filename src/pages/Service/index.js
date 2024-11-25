import { IoPrintOutline } from "react-icons/io5";
import Header4 from "../../components/Header4";
import { FaArrowsRotate } from "react-icons/fa6";

import atendimento from "../../assets/atendimento.png";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useEffect, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";

import { servicosSenac } from '../../utility/dados.salao'
import { toast } from "react-toastify";

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

function Service() {

    //Verificador de modais
    const [telaAgendar, setTelaAgendar] = useState(true);
    const [telaBloquear, setTelaBloquear] = useState(false);
    const [telaDesbloquear, setTelaDesbloquear] = useState(false);

    //Campos (Tela agendar)
    const [profissional, setProfissional] = useState('');
    const [horario, setHorario] = useState('');
    const [duracao, setDuracao] = useState('');
    const [servico, setServico] = useState('');
    const [cliente, setCliente] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [feedback, setFeedback] = useState('');

    //Listas (Tela agendar)
    const [profissionais, setProfissionais] = useState([]);
    const [horarios, setHorarios] = useState([]);

    //Campos (Tela bloquear)
    const [motivo, setMotivo] = useState('');

    //Captar data ao clicar no dia
    const [selectedDate, setSelectedDate] = useState(null);

    //Inicializar data e alterar por mes e ano
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataAgendada, setDataAgendada] = useState(new Date());

    const events = [
        { title: 'Evento 1', start: new Date(), end: new Date() },
    ];

    const messages = {
        allDay: 'Dia inteiro',
        previous: 'Anterior',
        next: 'Próximo',
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        agenda: 'Agenda',
        date: 'Data',
        time: 'Hora',
        event: 'Evento',
        noEventsInRange: 'Nenhum evento nesse período.',
    };

    // const profissionaisDoSalao = [
    //     "Ana (Cabelereira - Corte e Coloração)",
    //     "Carlos (Barbeiro - Corte masculino e modelagem de barba)",
    //     "Mariana (Esteticista - Limpeza de pele e tratamentos antiacne)",
    //     "José (Massoterapeuta - Massagens relaxantes e terapêuticas)",
    //     "Lúcia (Manicure - Manicure, pedicure e spa para mãos e pés)",
    //     "Fernanda (Maquiadora - Maquiagem social e artística)",
    //     "Rafael (Cabelereiro - Penteados e tratamentos capilares)",
    //     "Clara (Esteticista - Tratamentos faciais e corporais)",
    //     "Paulo (Barbeiro - Corte masculino e tratamentos para barba)"
    // ];

    // const horariosLista = [
    //     "8:00 - 9:00",
    //     "9:00 - 10:00",
    //     "10:00 - 11:00",
    //     "11:00 - 12:00",
    //     "12:00 - 13:00",
    //     "13:00 - 14:00",
    //     "14:00 - 15:00",
    //     "15:00 - 16:00",
    //     "16:00 - 17:00",
    //     "17:00 - 18:00"
    // ]

    // const listaDuracaoSalao = [
    //     "30 minutos",
    //     "45 minutos",
    //     "60 minutos",
    //     "75 minutos",
    //     "90 minutos",
    //     "105 minutos",
    //     "120 minutos",
    //     "135 minutos",
    //     "150 minutos",
    //     "165 minutos"
    // ];

    const listaServicos = listarServicosPorNome();

    const handleDateClick = (slotInfo) => {
        const dayOfWeek = slotInfo.start.getDay();

        if(dayOfWeek === 0 || dayOfWeek === 6){
            toast.error('O salão senac não funciona aos finais de semana! 😔');
            return;
        }

        setSelectedDate(slotInfo.start);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    function listarServicosPorNome() {
        return servicosSenac.flatMap(categoria =>
            categoria.servicos.map(servico => servico.nome)
        );
    }

    function listarProfissionaisPorNome() {
        const profissionais = servicosSenac.flatMap(categoria =>
            categoria.servicos.flatMap(servico => 
                servico.profissionais ? Object.keys(servico.profissionais) : []
            )
        );
    
        return Array.from(new Set(profissionais)).sort();
    }

    useEffect(() => {
        function buscarHorarios() {
            if (servico && profissional && telaAgendar) {
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
    }, [servico, profissional, telaAgendar]);
    
    // Quando o serviço é alterado, configure o único profissional automaticamente
    useEffect(() => {
        if (servico && telaAgendar) {
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
    }, [servico, telaAgendar]);

    useEffect(() => {
        function definirHorarios() {
            if(profissionais && (telaBloquear || telaDesbloquear)){
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
    }, [profissionais, telaBloquear, profissional, telaDesbloquear])

    function resetarCampos(){
        setProfissional('');
        setHorario('');
        setServico('');
        setDuracao('');
        setObservacoes('');
        setCliente('');
        setFeedback('');
        setMotivo('');
        setProfissionais([]);
        setHorarios([]);
    }

    const handleAgendar = () => {
        setTelaDesbloquear(false);
        setTelaBloquear(false);
        setTelaAgendar(true);
        resetarCampos();
    }
    
    const handleBloquear = () => {
        setTelaBloquear(true);
        setTelaDesbloquear(false);
        setTelaAgendar(false);
        resetarCampos();

        setProfissionais(listarProfissionaisPorNome());
    }

    const handleDesbloquear = () => {
        setTelaDesbloquear(true);
        setTelaBloquear(false);
        setTelaAgendar(false);
        resetarCampos();

        setProfissionais(listarProfissionaisPorNome());
    }

    const handleSubmitAgenda = (e) => {
        e.preventDefault();
        if(horario && duracao && servico && profissional && cliente && observacoes && feedback){
            toast.success('Horário agendado com sucesso!');
        }else{
            toast.error('Preencha todos os campos');
        }
    }

    const handleSubmitBloquear = (e) => {
        e.preventDefault();
        if(profissional && motivo && horario && observacoes){
            toast.success('Horário bloqueado com sucesso!');
        }else{
            toast.error('Preencha todos os campos');
        }
    }

    const handleSubmitDesbloquear = (e) => {
        e.preventDefault();
        if(profissional && horario){
            toast.success('Horário desbloqueado com sucesso!');
        }else{
            toast.error('Preencha todos os campos');
        }
    }

    return (
        <>
            <Header4 tituloMenu='Atendimento' imgMenu={atendimento}>
                <div className="d-flex flex-column">
                    <span className="text-white">Profissionais</span>
                    <select disabled={profissional ? false : true} style={{ cursor: profissional ? 'default' : 'not-allowed' }} className="form-select bg-light-blue text-white" onChange={e => setProfissional(e.target.value)} value={profissional}>
                        <option value="" disabled>Selecione um profissional</option>
                        {profissionais && profissionais.map((p, index) => (
                            <option value={p} key={index}>{p}</option>
                        ))}
                    </select>
                </div>
                <input
                    className="btn btn-success bg-orange"
                    type="month"
                    onChange={e => {
                        const [year, month] = e.target.value.split('-');
                        setDataAgendada(new Date(year, month - 1)); // Garante o mês correto (0-based index)
                    }}
                    value={`${dataAgendada.getFullYear()}-${String(dataAgendada.getMonth() + 1).padStart(2, '0')}`} // Formata para YYYY-MM
                />
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
                    <Calendar
                        localizer={localizer}
                        messages={messages}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                        views={['day', 'week', 'month']}
                        date={dataAgendada}
                        onNavigate={(date) => setDataAgendada(date)}
                        onSelectSlot={handleDateClick}
                        selectable
                    />
                </section>
            </main>

            {isModalOpen && (
                <div className="modal fade show" id="dateModal" tabIndex="-1" aria-labelledby="dateModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header container">
                                <div className="d-flex align-items-center">
                                    <FaRegPlusSquare className="me-1" size={20} style={{ color: 'var(--color-navy-blue)' }} />
                                    <h5 className="modal-title" id="dateModalLabel" style={{ color: 'var(--color-navy-blue)' }}>Agendamento</h5>
                                </div>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Fechar"></button>
                            </div>
                            <div className="modal-body container">
                                {/* <p>Você clicou no dia: {selectedDate ? selectedDate.toLocaleDateString() : ''}</p> */}
                                <div class="d-flex border">
                                    <button class={`btn border active flex-grow-1 rounded-0 ${telaAgendar && 'custom-button active'}`} onClick={handleAgendar}>Agendar horário</button>
                                    <button class={`btn border active flex-grow-1 rounded-0 ${telaBloquear && ' custom-button active'}`} onClick={handleBloquear}>Bloquear horário</button>
                                    <button class={`btn border active flex-grow-1 rounded-0 ${telaDesbloquear && 'custom-button active'}`} onClick={handleDesbloquear}>Desbloquear horário</button>
                                </div>
                                {telaAgendar && 
                                <form className="row pt-3" style={{ color: 'var(--color-navy-blue)' }} onSubmit={handleSubmitAgenda}>
                                    <div className="mb-3 col-lg-4 col-12">
                                        <label className="form-label">Dia</label>
                                        <input type="date" style={{cursor: 'not-allowed'}} className="form-control" value={selectedDate.toISOString().split('T')[0]} disabled />
                                    </div>

                                    <div className="mb-3 col-lg-4 col-12">
                                        <label className="form-label">Horário</label>
                                        <select className="form-select" disabled={!profissional ? true : false} style={{ cursor: profissional ? 'default' : 'not-allowed' }} value={horario} onChange={e => setHorario(e.target.value)}>
                                            <option value="" selected disabled>Selecione um horário</option>
                                            {horarios && horarios.map((h, index) => (
                                                <option value={h} key={index}>{h}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-3 col-lg-4 col-12">
                                        <label className="form-label">Duração</label>
                                        <select className="form-select" disabled={!servico ? true : false} style={{ cursor: servico ? 'default' : 'not-allowed' }} value={duracao} onChange={e => setDuracao(e.target.value)}>
                                            <option value="" selected disabled>Selecione uma duração</option>
                                            {servico && <option value={duracao}>{duracao}</option>}
                                        </select>
                                    </div>

                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Serviços</label>
                                        <select className="form-select" value={servico} onChange={e => setServico(e.target.value)}>
                                            <option value="" selected disabled>Selecione um servico</option>
                                            {listaServicos.map((s, index) => (
                                                <option value={s} key={index}>{s}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Profissional</label>
                                        <select disabled={!servico ? true : false} style={{ cursor: servico ? 'default' : 'not-allowed' }} className="form-select" value={profissional} onChange={e => setProfissional(e.target.value)}>
                                            <option value="" selected disabled>Selecione um profissional</option>
                                            {profissionais && profissionais.map((p, index) => (
                                                <option value={p} key={index}>
                                                    {p}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Cliente</label>
                                        <input type="text" className="form-control" value={cliente} onChange={e => setCliente(e.target.value)} placeholder="Digite o nome do cliente"/>
                                    </div>
                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Observações</label>
                                        <input type="text" className="form-control" value={observacoes} onChange={e => setObservacoes(e.target.value)} placeholder="Digite uma observação"/>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Feedback</label>
                                        <input type="text" className="form-control" value={feedback} onChange={e => setFeedback(e.target.value)} placeholder="Digite um feedback"/>
                                    </div>
                                    <button className="btn btn-success w-100">
                                            Agendar
                                    </button>
                                </form>}
                                {telaBloquear &&
                                <form className="row pt-3" style={{ color: 'var(--color-navy-blue)' }} onSubmit={handleSubmitBloquear}>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Profissional</label>
                                        <select className="form-select" value={profissional} onChange={e => setProfissional(e.target.value)}>
                                            <option value="" selected disabled>Selecione um profissional</option>
                                            {profissionais && profissionais.map((p, index) => (
                                                <option value={p} key={index}>
                                                    {p}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Motivo</label>
                                        <input type="text" className="form-control" value={motivo} onChange={e => setMotivo(e.target.value)} placeholder="Digite um motivo"/>
                                    </div>
                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Dia</label>
                                        <input type="date" style={{cursor: 'not-allowed'}} className="form-control" value={selectedDate.toISOString().split('T')[0]} disabled />
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Horário</label>
                                        <select disabled={!profissional ? true : false} style={{ cursor: profissional ? 'default' : 'not-allowed' }} className="form-select" value={horario} onChange={e => setHorario(e.target.value)}>
                                            <option value="" selected disabled>Selecione um horário</option>
                                            {horarios && horarios.map((h, index) => (
                                                <option value={h} key={index}>
                                                    {h}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Observações</label>
                                        <textarea style={{resize: 'none', height: '150px'}} className="form-control" value={observacoes} onChange={e => setObservacoes(e.target.value)} placeholder="Digite uma motivação"></textarea>
                                    </div>
                                    <button className="btn btn-danger w-100">
                                            Bloquear
                                    </button>
                                </form>}
                                {telaDesbloquear &&
                                <form className="row pt-3" style={{ color: 'var(--color-navy-blue)' }} onSubmit={handleSubmitDesbloquear}>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Profissional</label>
                                        <select className="form-select" value={profissional} onChange={e => setProfissional(e.target.value)}>
                                            <option value="" selected disabled>Selecione um profissional</option>
                                            {profissionais && profissionais.map((p, index) => (
                                                <option value={p} key={index}>
                                                    {p}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Motivo</label>
                                        <input type="text" className="form-control" style={{cursor: 'not-allowed'}}  disabled value={motivo} onChange={e => setMotivo(e.target.value)} placeholder="Digite um motivo"/>
                                    </div>
                                    <div className="mb-3 col-lg-6 col-12">
                                        <label className="form-label">Dia</label>
                                        <input type="date" className="form-control" style={{cursor: 'not-allowed'}} value={selectedDate.toISOString().split('T')[0]} disabled />
                                    </div>
                                    <div className="mb-3 col-12 col-lg-6">
                                        <label className="form-label">Horário</label>
                                        <select disabled={!profissional ? true : false} style={{ cursor: profissional ? 'default' : 'not-allowed' }} className="form-select" value={horario} onChange={e => setHorario(e.target.value)}>
                                            <option value="" selected disabled>Selecione um horário</option>
                                            {horarios && horarios.map((h, index) => (
                                                <option value={h} key={index}>
                                                    {h}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="form-label">Observações</label>
                                        <textarea style={{resize: 'none', height: '150px', cursor: 'not-allowed'}} className="form-control" value={observacoes} onChange={e => setObservacoes(e.target.value)} placeholder="Digite uma motivação" disabled></textarea>
                                    </div>
                                    <button className="btn btn-danger w-100">
                                            Desbloquear
                                    </button>
                                </form>}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Service;