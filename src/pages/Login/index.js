import { Link, useNavigate } from "react-router-dom";
import Header2 from "../../components/Header2";
import { RiArrowGoBackFill } from "react-icons/ri";

function Login() {
    const navigate = useNavigate();
    
    function handleForm(e){
        e.preventDefault();
        navigate('/scheduling');
    }

    return ( 
        <>
            <Header2/>
            <main className="bg-navy-blue">
                <div className="container position-relative d-flex justify-content-center align-items-center" style={{minHeight: 'calc(100dvh - 102.47px)', padding: '72px 10px 10px 10px'}}>
                    <Link to='/menu' className="p-2 rounded-3 position-absolute" style={{border: '2px solid var(--color-orange)', top: '15px', right: '15px'}}>
                        <RiArrowGoBackFill size={20} color="var(--color-orange)"/>
                    </Link>
                    <div className="bg-fundo-2 w-100" style={{maxWidth: '600px', minHeight: '300px'}}>
                        <form className="position-absolute z-3 text-white d-flex flex-column w-100 p-4" onSubmit={handleForm}>
                            <label className="form-label">Login</label>
                            <input type="text" className="bg-orange form-control" placeholder="E-mail"/>
                            <label className="form-label mt-4">Senha</label>
                            <input type="text" className="bg-orange form-control" placeholder="Senha"/>
                            <button className="btn btn-success bg-medium-blue mt-4" type="submit">Entrar</button>
                            <Link to='/password' className="btn text-white mt-2">Esqueci a senha</Link>
                        </form>
                    </div>
                </div>
            </main>
        </>
     );
}

export default Login;