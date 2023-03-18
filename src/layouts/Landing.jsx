import React from 'react';
import LoginAsesores from '../components/LoginAsesores';
import AtencionCliente from '../components/AtencionCliente';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>

            <div className='container my-5 d-flex gap-2'>
                <div>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalCliente">Atencion MisBancos</button>
                </div>

                <div>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modalLoginAsesores">Ir como asesor</button>
                </div>

                <div>
                    <Link to={'/turnos'} className='btn btn-primary'>Ver turnos</Link>
                </div>

            </div>

            <div>
                <LoginAsesores></LoginAsesores>
            </div>

            <div>
                <AtencionCliente></AtencionCliente>
            </div>

        </div>
    );
}

export default Landing;
