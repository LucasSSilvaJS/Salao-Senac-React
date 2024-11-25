import { Link } from "react-router-dom";
import Header2 from "../../components/Header2";
import { RiArrowGoBackFill } from "react-icons/ri";

function Menu() {
    return ( 
        <>
            <Header2/>
            <main className="bg-navy-blue">
                <div className="container position-relative d-flex justify-content-center align-items-center" style={{minHeight: 'calc(100dvh - 102.47px)', padding: '72px 10px 10px 10px'}}>
                    <Link to='/' className="p-2 rounded-3 position-absolute" style={{border: '2px solid var(--color-orange)', top: '15px', right: '15px'}}>
                        <RiArrowGoBackFill size={20} color="var(--color-orange)"/>
                    </Link>
                    <div className="bg-fundo-1 w-100" style={{maxWidth: '600px', minHeight: '300px'}}>
                        <div className="position-absolute z-3 text-white d-flex flex-column justify-content-center align-items-center h-100 w-100 p-4">
                            <Link className="btn bg-orange btn-success text-white w-100">Funcionário</Link>
                            <Link to='/login' className="btn bg-orange btn-success text-white mt-2 w-100">Cliente</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
     );
}

export default Menu;