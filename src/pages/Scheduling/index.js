import Header3 from "../../components/Header3";
import atendimentoImg from '../../assets/atendimento.png';
import { useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import { BsPlusSquare } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

function Scheduling() {
    const servicosSenac = [
        {
            categoria: "Cabelos",
            servicos: [
                "Corte (masculino, feminino e infantil)",
                "Coloração (tintura, mechas, reflexos, ombré hair, luzes)",
                "Hidratação (simples ou profunda)",
                "Reconstrução capilar",
                "Progressiva ou selagem térmica",
                "Penteados (simples, para eventos e ocasiões especiais)",
                "Alisamentos (com produtos químicos ou térmicos)",
                "Relaxamento ou texturização",
                "Tratamentos específicos (antiqueda, anti-frizz, entre outros)"
            ]
        },
        {
            categoria: "Estética Facial",
            servicos: [
                "Limpeza de pele (básica ou profunda)",
                "Hidratação facial",
                "Peeling facial (químico ou mecânico)",
                "Tratamentos antiacne",
                "Massagem facial relaxante",
                "Design de sobrancelhas (com pinça, linha ou henna)",
                "Depilação facial (com cera ou linha)"
            ]
        },
        {
            categoria: "Estética Corporal",
            servicos: [
                "Massagens relaxantes e terapêuticas",
                "Drenagem linfática",
                "Esfoliação corporal",
                "Tratamentos redutores de medidas",
                "Tratamentos para celulite e flacidez",
                "Banhos de ofurô ou aromaterapia (em algumas unidades)"
            ]
        },
        {
            categoria: "Maquiagem",
            servicos: [
                "Maquiagem social",
                "Maquiagem para eventos (festas, formaturas, casamentos)",
                "Maquiagem artística (em unidades com cursos especializados)"
            ]
        },
        {
            categoria: "Mãos e Pés",
            servicos: [
                "Manicure e pedicure",
                "Esmaltação simples e decorada",
                "Spa para pés e mãos (hidratação e esfoliação)",
                "Aplicação de unhas postiças ou alongamento"
            ]
        },
        {
            categoria: "Depilação",
            servicos: [
                "Depilação corporal e facial (cera quente ou fria)",
                "Depilação com linha"
            ]
        },
        {
            categoria: "Barbearia",
            servicos: [
                "Corte masculino",
                "Aparar e modelar barba",
                "Hidratação e tratamento para barba e cabelos masculinos"
            ]
        },
        {
            categoria: "Cursos e Consultorias",
            servicos: [
                "Consultorias personalizadas sobre cuidados de beleza",
                "Atendimento especializado para análise capilar, de pele ou estética"
            ]
        }
    ];

    const servicos = servicosSenac.map(s => s.servicos).reduce((acc, sArray) => acc.concat(...sArray), []);

    const dates = {
        '24/11/2024': 'bg-success text-white',
        '25/11/2024': 'bg-success text-white',
        '26/11/2024': 'bg-danger text-white',
        '27/11/2024': 'bg-success text-white',
    };

    const horarios = [
        "8:00 - 9:00",
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "12:00 - 13:00",
        "13:00 - 14:00",
        "14:00 - 15:00",
        "15:00 - 16:00",
        "16:00 - 17:00",
        "17:00 - 18:00"
    ]

    const listaDuracao = [
        "30 minutos",
        "45 minutos",
        "60 minutos",
        "75 minutos",
        "90 minutos",
        "105 minutos",
        "120 minutos",
        "135 minutos",
        "150 minutos",
        "165 minutos"
    ]

    const profissionais = [
        "Ana (Cabelereira - Corte e Coloração)",
        "Carlos (Barbeiro - Corte masculino e modelagem de barba)",
        "Mariana (Esteticista - Limpeza de pele e tratamentos antiacne)",
        "José (Massoterapeuta - Massagens relaxantes e terapêuticas)",
        "Lúcia (Manicure - Manicure, pedicure e spa para mãos e pés)",
        "Fernanda (Maquiadora - Maquiagem social e artística)",
        "Rafael (Cabelereiro - Penteados e tratamentos capilares)",
        "Clara (Esteticista - Tratamentos faciais e corporais)",
        "Paulo (Barbeiro - Corte masculino e tratamentos para barba)"
    ];
    

    const [schedulePage, setSchedulePage] = useState(false);
    const [servico, setServico] = useState('');
    const [selectDate, setSelectDate] = useState(new Date());
    const [horario, setHorario] = useState('');
    const [duracao, setDuracao] = useState('');
    const [profissional, setProfissional] = useState('');
    const [observacao, setObservacao] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        toast.success('Agendado com sucesso!');
        setSchedulePage(false);
    }

    return (
        <>
            <Header3 imgMenu={atendimentoImg} tituloMenu='Atendimento'>
                <div>
                    <label className="form-label text-white">Serviços:</label>
                    <select value={servico} onChange={e => setServico(e.target.value)} className="form-select" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        <option value="" disabled>Selecione um serviço</option>
                        {servicos.map((servico, index) => (
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
                                    <select className="form-select" value={horario} onChange={e => setHorario(e.target.value)}>
                                        <option value="" disabled>Selecione um horário</option>
                                        {horarios.map((hr, index) => (
                                            <option value={hr} key={index}>{hr}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-12 col-md-4 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Duração</label>
                                    <select className="form-select" value={duracao} onChange={e => setDuracao(e.target.value)}>
                                        <option value="" disabled>Selecione o tempo estimado</option>
                                        {listaDuracao.map((d, index) => (
                                            <option value={d} key={index}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 col-12 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Serviço</label>
                                    <select className="form-select" value={servico} onChange={e => setServico(e.target.value)}>
                                        <option value="" disabled>Selecione o tempo estimado</option>
                                        {servicos.map((s, index) => (
                                            <option value={s} key={index}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 col-12 mb-2" style={{ color: 'var(--color-navy-blue)' }}>
                                    <label className="form-label mb-1">Profissional</label>
                                    <select className="form-select" value={profissional} onChange={e => setProfissional(e.target.value)}>
                                        <option value="" disabled>Selecione um profissional</option>
                                        {profissionais.map((p, index) => (
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