import { Link } from "react-router-dom";

function MenuItem({ children, ableText, textOrange, mainText, to }) {
    return ( 
        <Link to={to} className="row bg-navy-blue p-0 align-items-center text-decoration-none" 
              style={{ borderRadius: '0 20px 0 0', width: '200px', height: '72px', overflow: 'hidden', flex: '0 0 auto'}}>
            
            <div className="col-3 d-flex justify-content-center align-items-center">
                {children}
            </div>
            
            <div className="col-9 d-flex flex-column justify-content-center text-center">
                {ableText && <div className="fw-bold" style={{ color: 'var(--color-orange)' }}>{textOrange}</div>}
                <div className="text-white">{mainText}</div>
            </div>
        </Link>
    );
}

export default MenuItem;
