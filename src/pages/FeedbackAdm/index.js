import Header4 from "../../components/Header4";
import feedbackAdmImg from "../../assets/feedback.adm.png";
import { IoPrintOutline } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import FeedbackItem from "../../components/FeedbackItem";
import { useState } from "react";

function FeedbackAdm() {
    const [option, setOption] = useState('Funcinário');

    return (
        <>
            <Header4 imgMenu={feedbackAdmImg} tituloMenu="Feedback">
                <select value={option} onChange={e => setOption(e.target.value)} className="form-select bg-light-blue text-white" style={{ width: 'auto' }}>
                    <option value="Funcinário" selected>Funcinário</option>
                    <option value="Serviço">Serviço</option>
                </select>
                <input type="date" className="form-control bg-light-blue text-white" style={{ width: 'auto' }} />
                <div className="d-flex gap-1">
                    <button className="btn bg-light-blue">
                        <IoPrintOutline color="white" />
                    </button>
                    <button className="btn bg-light-blue">
                        <FaArrowsRotate color="white" />
                    </button>
                </div>
            </Header4>
            <main>
                <section className="container p-3 d-flex flex-column gap-4">
                    {option === 'Funcinário' &&
                        <>
                            <FeedbackItem
                                call="Funcionário 1"
                                starNumber={3}
                                text="Cillum qui nulla sit reprehenderit. Culpa magna est voluptate officia qui aute sunt labore laboris. Aute ea magna esse qui. Anim in labore sunt aute incididunt ullamco eu sunt minim ullamco eiusmod Lorem magna ea. Cupidatat reprehenderit in ut consequat id et. Irure consectetur nisi pariatur sint ex fugiat fugiat non ullamco cillum amet."
                                cortesia={true}
                                limpeza={true}
                            />
                            <FeedbackItem
                                call="Funcionário 2"
                                starNumber={3}
                                text="Cillum qui nulla sit reprehenderit. Culpa magna est voluptate officia qui aute sunt labore laboris. Aute ea magna esse qui. Anim in labore sunt aute incididunt ullamco eu sunt minim ullamco eiusmod Lorem magna ea. Cupidatat reprehenderit in ut consequat id et. Irure consectetur nisi pariatur sint ex fugiat fugiat non ullamco cillum amet."
                                satisfacao={true}
                                orientacao={true}
                                eficiencia={true}
                            />
                        </>
                    }
                    {option === 'Serviço' &&
                        <>
                            <FeedbackItem
                                call="Serviço 1"
                                starNumber={3}
                                text="Cillum qui nulla sit reprehenderit. Culpa magna est voluptate officia qui aute sunt labore laboris. Aute ea magna esse qui. Anim in labore sunt aute incididunt ullamco eu sunt minim ullamco eiusmod Lorem magna ea. Cupidatat reprehenderit in ut consequat id et. Irure consectetur nisi pariatur sint ex fugiat fugiat non ullamco cillum amet."
                                eficiencia={true}
                                cortesia={true}
                                limpeza={true}
                                orientacao={true}
                                satisfacao={true}
                            />
                            <FeedbackItem
                                call="Serviço 2"
                                starNumber={3}
                                text="Cillum qui nulla sit reprehenderit. Culpa magna est voluptate officia qui aute sunt labore laboris. Aute ea magna esse qui. Anim in labore sunt aute incididunt ullamco eu sunt minim ullamco eiusmod Lorem magna ea. Cupidatat reprehenderit in ut consequat id et. Irure consectetur nisi pariatur sint ex fugiat fugiat non ullamco cillum amet."
                                satisfacao={true}
                                eficiencia={true}
                            />
                        </>
                    }

                </section>
            </main>
        </>
    );
}

export default FeedbackAdm;