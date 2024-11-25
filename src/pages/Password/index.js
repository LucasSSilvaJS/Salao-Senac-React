import { Link } from "react-router-dom";
import Header2 from "../../components/Header2";
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast } from "react-toastify";

function Password() {
    function takeBackPassword(e){
        e.preventDefault();
        toast.success('Senha enviada para o email');        
    }

    return ( 
        <>
            <Header2/>
            <main className="bg-navy-blue">
                <div className="container position-relative d-flex justify-content-center align-items-center" style={{minHeight: 'calc(100dvh - 102.47px)', padding: '72px 10px 10px 10px'}}>
                    <Link to='/login' className="p-2 rounded-3 position-absolute" style={{border: '2px solid var(--color-orange)', top: '15px', right: '15px'}}>
                        <RiArrowGoBackFill size={20} color="var(--color-orange)"/>
                    </Link>
                    <div className="bg-fundo-1 w-100" style={{maxWidth: '600px', minHeight: '300px'}} onSubmit={takeBackPassword}>
                        <form className="position-absolute z-3 text-white d-flex flex-column justify-content-center align-items-center h-100 w-100 p-4">
                            <label className="form-label align-self-start">E-mail cadastrado</label>
                            <input type="text" className="bg-orange form-control" placeholder="E-mail"/>
                            <button className="btn btn-success bg-medium-blue mt-4 w-100" type="submit">Recuperar senha</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
     );
}

export default Password;