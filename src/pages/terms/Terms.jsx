import React from 'react';

import image from '../../images/terms.png'

import '../diet/Diet.css'; // Same style

function Terms() {
    return (
        <main>
            <div className="diet__container">
                <div className="diet__container__text-box">
                    <h2>Termos da Nutrição</h2>
                    <div className="diet__text-box__topics">
                        <p>Aditivos: Produtos adicionados nos alimentos que auxiliam no processo de fabricação e preservação dos mesmos e/ou podem melhorar o paladar e aparência.</p>
                        <p>Aferventar: Cozinhar rapidamente na água de ebulição.</p>
                        <p>Alimentação: Ato de alimentar-se. Conjunto de refeições ingeridas durante um período.</p>
                        <p>Alimento contaminado: Alimento que apresenta micro-organismos prejudiciais à saúde, mas apresenta características sensoriais normais (cheiro, aparência e gosto).</p>
                        <p>Alimento estragado: Alimento que estava contaminado, mas no qual, com o passar do tempo, os micro-organismos presentes se multiplicaram, mudando suas características sensoriais (cheiro, aparência e gosto).</p>
                        <p>Alimentos funcionais: Alimentos trazem benefícios de saúde específicos, incluindo a prevenção e o tratamento de doenças.</p>
                        <p>Banhar: Colocar gordura ou molho sobre a carne que está assando.</p>
                    </div>
                </div>

                <img src={image} />
            </div>
        </main>
    );
}

export default Terms;