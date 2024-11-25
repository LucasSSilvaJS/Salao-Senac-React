import Header3 from '../../components/Header3';
import lembreteImg from '../../assets/lembrete.png';
import { Link } from 'react-router-dom';
import { VscFeedback } from 'react-icons/vsc';

function Notification() {
    return (
        <>
            <Header3 tituloMenu='Lembrete' imgMenu={lembreteImg}></Header3>
            <main>
                <section className='container p-3'>
                    <table className='table table-light table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th className='text-center fs-5'>Serviço</th>
                                <th className='text-center fs-5'>Funcionário</th>
                                <th className='text-center fs-5'>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-center align-middle'>Serviço 1</td>
                                <td className='text-center align-middle'>Fulano Cabelereiro</td>
                                <td className='text-center'>
                                    <Link to='/feedback' className='btn btn-success bg-navy-blue text-white'>
                                        <VscFeedback size={25} color="var(--color-orange)" className="me-2"/>
                                        Feedback
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}

export default Notification;