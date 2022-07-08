import React, { useState } from 'react';
import { Fragment } from 'react';

import './Imc.css';

function Imc() {
    const [imc, setImc] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const handleClick = () => {
        console.log({height})
        console.log({weight})
        setImc(Number(weight) / Math.pow(Number(height) / 100, 2));
    }

    return (
        <Fragment>
            <div className="imc_container">
                <div className="imc_container_text-box">
                    <h2>Calcule o seu IMC</h2>
                    <h4>IMC é a sigla para índice de Massa Corporal, parâmetro adotado pela Organização Mundial da saude para calcular o peso ideal de cada pessoa.</h4>
                    <p>Qual é a sua altura? (CM)</p>
                    <input type="number" style={{ border: '1px solid black' }} value={height} onChange={(event) => setHeight(event.target.value)} />
                    <p>Qual é o seu peso? (KG)</p>
                    <input type="number" style={{ border: '1px solid black' }} value={weight} onChange={(event) => setWeight(event.target.value)} />


                    <p>Seu IMC é: {parseInt(imc)}</p>
                </div>      
                    <button style={{ background: '#14cc52', color: 'white' }} onClick={handleClick}>Calcular</button>
            </div>

            <div className="imc_container_table">
                <div className="imc_container_text-box_table">
                    <h2>Veja a interpretação do seu IMC</h2>
                    <div className="imc_text-box_topics">
                        <div className="imc_text-box_imc">
                            <h3>IMC</h3>
                            <p>Menor que 18,5</p>
                            <p>Entre 18,5 e 24,9</p>
                            <p>Entre 25,0 e 29,9</p>
                            <p>Entre 30,0 e 39,9</p>
                            <p>Mais que 40,0</p>
                        </div>

                        <div className="imc_text-box_classNameification">
                            <h3>Classificação</h3>
                            <p>Magreza</p>
                            <p>Normal</p>
                            <p>Sobrepeso</p>
                            <p>Obesidade</p>
                            <p>Obesidade Grave</p>
                        </div>
                        
                        <div className="imc_text-box_obesity">
                            <h3>Obesidade</h3>
                            <p>Grau 0</p>
                            <p>Grau 0</p>
                            <p>Grau I</p>
                            <p>Grau II</p>
                            <p>Grau III</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Imc;