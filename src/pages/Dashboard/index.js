import { Link } from "react-router-dom";
import Header4 from "../../components/Header4";
import logoSenac from "../../assets/logo.senac.svg";

import salao1 from "../../assets/salao1.png";
import salao2 from "../../assets/salao2.png";
import salao3 from "../../assets/salao3.png";
import salao4 from "../../assets/salao4.png";
import salao5 from "../../assets/salao5.png";
import salao6 from "../../assets/salao6.png";
import MenuItem from "../../components/MenuItem";
import { FaInfoCircle, FaPlusCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

function Dashboard() {
    const data = [
        { name: 'Alisamentos (com produtos químicos ou térmicos)', value: 746 },
        { name: 'Corte (masculino, feminino e infantil)', value: 1258 },
        { name: 'Design de sobrancelhas (com pinça, linha ou henna)', value: 607 },
        { name: 'Hidratação (simples ou profunda)', value: 994 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };

    const itemsCarousel = [
        {
            src: salao1,
            alt: ''
        },
        {
            src: salao2,
            alt: ''
        },
        {
            src: salao3,
            alt: ''
        },
        {
            src: salao4,
            alt: ''
        },
        {
            src: salao5,
            alt: ''
        },
        {
            src: salao6,
            alt: ''
        },
    ]

    return (
        <>
            <Header4 imgMenu={logoSenac}>
                <div className="dropdown show">
                    <Link
                        className="btn btn-secondary dropdown-toggle bg-orange"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Menu
                    </Link>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <Link className="dropdown-item" to="#">
                            Atendimento
                        </Link>
                        <Link className="dropdown-item" to="#">
                            Equipe
                        </Link>
                        <Link className="dropdown-item" to="#">
                            Serviços
                        </Link>
                        <Link className="dropdown-item" to="#">
                            Estoque
                        </Link>
                        <Link className="dropdown-item" to="#">
                            Feedback
                        </Link>
                    </div>
                </div>
            </Header4>
            <main>
                <section className="container p-3">
                    <div className="row">
                        <div id="carouselExampleAutoplaying" className="carousel slide col-12 col-lg-6" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {itemsCarousel.map((item, index) => (
                                    <div className={`carousel-item ${index === 0 && 'active'}`}>
                                        <img src={item.src} className="d-block w-100" alt={item.alt} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div class="row">
                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem ableText={true} mainText='Clientes' textOrange='41'>
                                        <FaPeopleGroup size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>

                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem mainText='Realizar agendamento'>
                                        <FaPlusCircle size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem mainText='Login' to='/menu'>
                                        <FiLogIn size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>
                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem mainText='Realizar cadastro'>
                                        <FaPlusCircle size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem mainText='Consultar Agendamento'>
                                        <FaInfoCircle size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>
                                <div class="col-md-6 col-12 d-flex justify-content-center align-items-center p-4" style={{ flex: '0 0 auto' }}>
                                    <MenuItem mainText='Feedback'>
                                        <FaPlusCircle size={25} color="var(--color-orange)" />
                                    </MenuItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container p-3">
                    <div className="row bg-navy-blue">
                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-center text-white fw-normal" style={{transform: 'translateY(75%)'}}>Serviços diários</h2>
                            <PieChart width={300} height={300}>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    fill="#8884d8"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between p-4 gap-1">
                            {COLORS.map((color, index) => (
                                <article key={index} className={`text-white w-100 d-flex justify-content-center align-items-center p-2`} style={{backgroundColor: color, height: '60px'}}>
                                    {data[index].name}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Dashboard;
