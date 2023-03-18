import axios from 'axios';
import React, { useState, useEffect } from 'react';

const LoginAsesores = () => {

    const URL = "http://localhost:3000/auch/asesores";

    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const iniciarSesion = async (e) => {
        try {
            e.preventDefault()
            const respuesta = await axios.post(URL, { correo: correo, password: password });
            localStorage.setItem("JWT_ASESOR", respuesta.data);

            window.history.pushState(null, null, "/asesor");
            window.location.reload();
        } catch (error) {
            console.log(error);
            window.history.pushState(null, null, "/");
            window.location.reload();
        }
    }

    return (
        <>
            <div className="modal fade" id="modalLoginAsesores" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Asesores</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={iniciarSesion}>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">📩</span>
                                <input type="mail" className="form-control" placeholder="Ingrese su correo" aria-describedby="basic-addon1" value={correo} onChange={(e)=> setCorreo(e.target.value)}></input>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">🔒</span>
                                <input type="password" className="form-control" placeholder="Ingrese su contraseña" aria-describedby="basic-addon1" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                            </div>

                            <button type="submit" className="btn btn-primary">Iniciar sesión</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginAsesores;
