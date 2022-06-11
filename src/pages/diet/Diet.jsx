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
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            A ea iste vel necessitatibus corporis animi, eaque nostrum ipsa temporibus dicta!
                        </p>
                    </div>
                </div>

                <img src={image} />
            </div>
        </main>
    );
}

export default Diet;