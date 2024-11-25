import Header3 from "../../components/Header3";
import { BsLightbulb, BsScissors } from "react-icons/bs";
import { PiHandshake, PiSprayBottleFill } from "react-icons/pi";
import { FaHourglassHalf } from "react-icons/fa";
import { useState } from "react";
import Category from "../../components/Category";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";

import feedbackImg from "../../assets/feedback.png";

function Feedback() {
    const [satisfacao, setSatisfacao] = useState('');
    const [cortesia, setCortesia] = useState('');
    const [limpeza, setLimpeza] = useState('');
    const [eficiencia, setEficiencia] = useState('');
    const [orientacao, setOrientacao] = useState('');

    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    const handleSatisfacaoChange = (e) => setSatisfacao(e.target.checked ? 'Satisfeito com o resultado' : '');
    const handleOrientacaoChange = (e) => setOrientacao(e.target.checked ? 'Recebi orientação' : '');
    const handleLimpezaChange = (e) => setLimpeza(e.target.checked ? 'Ambiente limpo e organizado' : '');
    const handleCortesiaChange = (e) => setCortesia(e.target.checked ? 'Cortesia' : '');
    const handleEficienciaChange = (e) => setEficiencia(e.target.checked ? 'Rápido e eficiente' : '');

    function handleSubmit(e){
        e.preventDefault();
        toast.success('Avaliação realizada com sucesso!');
    }

    return (
        <>
            <Header3 tituloMenu='Feedback' imgMenu={feedbackImg}>
                <div className="btn btn-success bg-orange w-50 mx-auto" style={{ cursor: 'default' }}>Atendimento finalizado</div>
            </Header3>
            <main>
                <section className="container p-3">
                    <form onSubmit={handleSubmit}>

                        <div className="d-flex flex-wrap align-items-center justify-content-center w-100 gap-4 mx-auto mb-3" style={{ maxWidth: '500px' }}>

                            <Category id='satisfacao' value={satisfacao} setValue={handleSatisfacaoChange} texto='Satisfeito com o resultado' >
                                <BsScissors size={30} color="var(--color-navy-blue)" />
                            </Category>

                            <Category id='orientacao' value={orientacao} setValue={handleOrientacaoChange} texto='Recebi orientação' >
                                <BsLightbulb size={30} color="var(--color-navy-blue)" />
                            </Category>

                            <Category id='limpeza' value={limpeza} setValue={handleLimpezaChange} texto='Ambiente limpo e organizado' >
                                <PiSprayBottleFill size={30} color="var(--color-navy-blue)" />
                            </Category>

                            <Category id='cortesia' value={cortesia} setValue={handleCortesiaChange} texto='Cortesia' >
                                <PiHandshake size={30} color="var(--color-navy-blue)" />
                            </Category>

                            <Category id='eficiencia' value={eficiencia} setValue={handleEficienciaChange} texto='Rápido e eficiente' >
                                <FaHourglassHalf size={30} color="var(--color-navy-blue)" />
                            </Category>

                        </div>
                        <div className="d-flex justify-content-center align-items-center mx-auto">
                            <StarRatings
                                rating={rating}
                                starRatedColor="yellow"
                                starHoverColor="yellow"
                                starDimension="35px"
                                changeRating={changeRating}
                                numberOfStars={5}
                                name="rating"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="label-form fs-5" style={{color: 'var(--color-navy-blue)'}}>Comentário</label>
                            <textarea placeholder="Digite um comentário" className="form-control" style={{resize: 'none', height:'150px'}}>
                            </textarea>
                        </div>
                        <input type="submit" value="Enviar" className="w-100 btn btn-success"/>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Feedback;