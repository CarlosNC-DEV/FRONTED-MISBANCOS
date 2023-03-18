import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import '../components/components.css'

const LoginAsesores = () => {

    const URL = "http://localhost:3000/usuarios";

    const [form, setForm] = useState({
        nombreCliente: "",
        identidadCliente: "",
        tipoConsulta: ""
    });

    const handleInput = async ({ target }) => {
        setForm({ ...form, [target.name]: target.value });
    }

    const submitForm = async(e)=>{
        e.preventDefault();
        try {
            const resultado = await axios.post(URL, form);
            console.log(resultado)
            if(resultado.status === 200 && resultado.data){
                Swal.fire({
                    icon: 'success',
                    title: '¡Bienvenido!',
                    text: `${resultado.data}`,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/";
                }});
            }
        } catch (error) {
            if(error.response.status === 400){
                Swal.fire({
                    title: 'Error',
                    text: error.response.data,
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                });
            }
        }
    }

    return (
        <>
            <div className="modal fade" id="modalCliente" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Atencion al cliente MisBancos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={submitForm}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                                    <input type="text" name='nombreCliente' className="form-control" placeholder="Ingresa tu Nombre" aria-describedby="basic-addon1" onChange={handleInput}></input>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">Identidad</span>
                                    <input type="number" name='identidadCliente' className="form-control" placeholder="Número de identidad" aria-describedby="basic-addon1" onChange={handleInput}></input>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="offcanvas-body">
                                        <p className="fw-bold">Seleccione el tipo de atención que requiere</p>
                                        <select name='tipoConsulta' className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={handleInput}>
                                            <option value="">Todas</option>
                                            <option value="caja">Caja</option>
                                            <option value="asesoria">Asesoria</option>
                                        </select>
                                    </div>

                                </div>

                                <button type='submit' className='btn btn-primary'>
                                    Enviar Datos
                                </button>
                            </form>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginAsesores;
