import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './layouts.css'

const socket = io("http://localhost:3000");

const Turnos = () => {

    const [atendiendoCaja, setAtendiendoCaja] = useState([]);
    const [atendiendoAsesoria, setAtendiendoAsesoria] = useState([]);

    useEffect(() => {
        socket.emit("atendiendo");

        socket.on('ticket-atendiendo-caja', (data) => {
            setAtendiendoCaja(data)
        })

        socket.on('ticket-atendiendo-asesor', (data) => {
            setAtendiendoAsesoria(data)
        })

    }, [atendiendoCaja, atendiendoAsesoria])

    return (
        <>
            <div className='container-fluid my-2'>
                <div className='d-flex gap-3'>
                    <div className='w-100 turno-container'>
                        <p className='fs-3'>Turno CAJA</p>
                        <table className='table text-white'>
                            <thead>
                                <tr>
                                    <th>
                                        <p className='fs-4 font-monospace'>N° Ticket</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {atendiendoCaja.map((atendiendoCaja) => (
                                    <tr key={atendiendoCaja._id}>
                                        <td className='font-monospace'>{atendiendoCaja.codigoTiket}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-100 turno-container'>
                        <p className='fs-3'>Turno ASESORIA</p>
                        <table className='table text-white'>
                            <thead>
                                <tr>
                                    <th>
                                        <p className='fs-4 font-monospace'>N° Ticket</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {atendiendoAsesoria.map((atendiendoAsesoria) => (
                                    <tr key={atendiendoAsesoria._id}>
                                        <td className='font-monospace'>{atendiendoAsesoria.codigoTiket}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Turnos;
