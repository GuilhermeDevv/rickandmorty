import React from 'react';
import { ContainerCard } from './styles';

export function Card({ image, name, gender, species }) {
    return (
        <ContainerCard>
            <div className="image">
                <img src={image} alt="char" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <ul>
                    <li>Gênero: {gender}</li>
                    <li>Espécie: {species}</li>
                </ul>
            </div>
        </ContainerCard>
    );
}

