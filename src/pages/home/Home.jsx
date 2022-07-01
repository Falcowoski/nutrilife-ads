import React from 'react';
import { Link } from 'react-router-dom';

import firstImage from '../../images/home-1.png';
import secondImage from '../../images/home-2.png';

import './Home.css';

function Home() {
    return (
        <main id="home">
            <p className="home__title">
                Bem vindo ao NutriLife, aqui você encontrará informações sobre nutrição, 
                como calcular  IMC e se você desejar, encontrar um caminho para a vida saudável
            </p>
            <div className="home__images">
                <Link to="/diet">
                    <img src={firstImage} />
                </Link>
                <Link to="/terms">
                    <img src={secondImage} />
                </Link>
            </div>
        </main>
    )
}

export default Home;