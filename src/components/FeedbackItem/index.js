import { BsLightbulb, BsScissors } from "react-icons/bs";
import { FaHourglassHalf, FaRegStar, FaStar } from "react-icons/fa";
import { PiHandshake, PiSprayBottleFill } from "react-icons/pi";

function FeedbackItem({ call, text, starNumber, satisfacao, cortesia, limpeza, eficiencia, orientacao }) {

    const CountStars = () => {
        const starList = [];

        for (let i = 0; i < starNumber; i++) {
            starList.push(<FaStar size={20} color="white"/>);
        }

        for (let i = 0; i < 5 - starNumber; i++) {
            starList.push(<FaRegStar size={20} color="white"/>);
        }

        return <div>{starList}</div>;
    };


    return (
        <article className="row p-3 text-white bg-light-blue" style={{ borderRadius: '20px 0 20px 0' }}>
            <div className="d-flex flex-column col-12 col-lg-8">
                <h3>{call}</h3>
                <p>{text}</p>
            </div>
            <div className="d-flex flex-column col-12 col-lg-4 align-items-lg-center align-items-start gap-3">
                <div className="d-flex">
                    <CountStars/>
                </div>
                <div className="d-flex flex-wrap gap-2">
                    {satisfacao && <BsScissors size={30} color="var(--color-navy-blue)" />}
                    {cortesia &&  <PiHandshake size={30} color="var(--color-navy-blue)" />}
                    {limpeza && <PiSprayBottleFill size={30} color="var(--color-navy-blue)" />}
                    {eficiencia && <FaHourglassHalf size={30} color="var(--color-navy-blue)" />}
                    {orientacao && <BsLightbulb size={30} color="var(--color-navy-blue)" />}
                </div>
            </div>
        </article>
    );
}

export default FeedbackItem;