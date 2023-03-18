import axios from 'axios';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3000");

const Asesor = () => {

    const URL = "http://localhost:3000/atender";
    const URL_TM = "http://localhost:3000/terminarAtencion";


    const [ticketCaja, setTiketCaja] = useState([]);
    const [ticketAsesoria, setAsesoria] = useState([]);

    useEffect(() => {
        socket.emit('asesor-tickest');

        socket.on('tickest-caja', (data) => {
            setTiketCaja(data)
            console.log(data)
        })

        socket.on('tickest-asesoria', (data) => {
            setAsesoria(data)
        })

    }, [ticketCaja, ticketAsesoria]);


    const atenderTicket = async (idA) => {
        await axios.put(`${URL}/${idA}`)
    }

    const terminarAtencion = async (idT) => {
        await axios.put(`${URL_TM}/${idT}`)
    }



    return (
        <>
            <div className='container-fluid d-flex gap-3'>
                <div className='w-100 mt-3 bg-light p-3'>
                    <p className='text-center fs-4'>Atencion para CAJA</p>
                    <table className='table border text-center'>
                        <thead>
                            <tr>
                                <th>CODIGO TICKET</th>
                                <th>NOMBRE</th>
                                <th>ATENDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketCaja.map((ticketCaja) => (
                                <tr key={ticketCaja._id}>
                                    <td>{ticketCaja.codigoTiket}</td>
                                    <td>{ticketCaja.nombreCliente}</td>
                                    <td>
                                        {ticketCaja.atendiendo ? (
                                            <button className='btn btn-success' onClick={() => terminarAtencion(ticketCaja._id)}>Terminar Atención</button>
                                        ) : (
                                            <button className='btn btn-primary' onClick={() => atenderTicket(ticketCaja._id)}>Atender</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='w-100 mt-3 bg-light p-3'>
                <p className='text-center fs-4'>Atencion para ASESORIA</p>
                    <table className='table border text-center'>
                        <thead>
                            <tr>
                                <th>CODIGO TICKET</th>
                                <th>NOMBRE</th>
                                <th>ATENDER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketAsesoria.map((ticketAsesoria) => (
                                <tr key={ticketAsesoria._id}>
                                    <td>{ticketAsesoria.codigoTiket}</td>
                                    <td>{ticketAsesoria.nombreCliente}</td>
                                    <td>
                                        {ticketAsesoria.atendiendo ? (
                                            <button className='btn btn-success' onClick={() => terminarAtencion(ticketAsesoria._id)}>Terminar Atención</button>
                                        ) : (
                                            <button className='btn btn-primary' onClick={() => atenderTicket(ticketAsesoria._id)}>Atender</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Asesor;
