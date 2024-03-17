import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cuadratica = () => {

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');

    const handleChangeA = (event) => {
        setA(event.target.value);
    };

    const handleChangeB = (event) => {
        setB(event.target.value);
    };

    const handleChangeC = (event) => {
        setC(event.target.value);
    };

    const Calcular = () => {
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            Swal.fire('Raíces', `Las raíces son: ${root1} y ${root2}`, 'success');
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            Swal.fire('Raíz Doble', `La raíz doble es: ${root}`, 'success');
        } else {
            Swal.fire('No hay raíces reales', 'La ecuación no tiene raíces reales', 'error');
        }
    };

    const LimpiarCampos = () => {
        setA('');
        setB('');
        setC('');
    };

    return (
        <>
            <div className="container mt-5">
                <h1>Calculadora de Fórmula Cuadrática</h1>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <label htmlFor="a">a:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="a"
                            value={a}
                            onChange={handleChangeA}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="b">b:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="b"
                            value={b}
                            onChange={handleChangeB}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="c">c:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="c"
                            value={c}
                            onChange={handleChangeC}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <button className="btn btn-primary" onClick={Calcular}>
                            Calcular
                        </button>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={LimpiarCampos}>
                            Limpiar Campos
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
