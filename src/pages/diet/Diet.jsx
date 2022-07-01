import React from 'react';

import image from '../../images/diet-1.png'

import './Diet.css';

function Diet() {
    return (
        <main>
            <div className="diet__container">
                <div className="diet__container__text-box">
                    <h2>Como fazer uma dieta equilibrada</h2>
                    <div className="diet__text-box__topics">
                        <h3>Invista em vegetais</h3>
                        <p>
                            Os vegetais são a base dessa dieta, seja ela vegetariana ou não. Segundo a especialista, o motivo para isso é o fato de que esses alimentos são ricos em fibras que saciam a fome. “Assim, eles melhoram o funcionamento do intestino e ativam nosso metabolismo”, explica.
                        </p>
                        <p>
                            Por esse motivo, não deixe de consumir legumes, frutas, verduras e cereais diariamente. Tanto na dieta balanceada para emagrecer quanto na de quem quer começar a comer de forma mais saudável, esses itens são capazes de proporcionar benefícios para a nossa saúde.
                        </p>

                        <h3>Substitua alguns alimentos</h3>
                        <p>
                            Outra dica é substituir alimentos tradicionais por opções mais saudáveis. “O pão pode ser substituído por pães da linha integral que melhora o funcionamento do intestino. Vale também optar por um alimento rico em proteína, como por exemplo, o omelete de queijo ou ovo cozido”, conclui Simone.    
                        </p>
                        <p>
                            O açúcar branco pode ser substituído por demerara e mascavo, que são opções mais nutritivas. No entanto, é preciso ficar atento aos exageros no consumo, já que eles contêm a mesma quantidade de calorias. Sua dieta balanceada também pode contar com adoçantes naturais, como estévia, xilitol e eritritol.
                        </p>
                    </div>
                </div>

                <img src={image} />
            </div>
        </main>
    );
}

export default Diet;