import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Card } from '../Card';

import { ContainerApp, HeaderApp, MainApp } from './styles';

export function Application() {

    const [infoApi, setInfoApi] = useState([])
    const [page, setPage] = useState(1)
    const [numPerson, setNumPerson] = useState('')

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(response => {

            const arrayDeInfos = [...infoApi, ...response.data.results]
            setInfoApi(arrayDeInfos)

            setNumPerson(response.data.info.count)
        })

    }, [page])




    return (
        <ContainerApp>
            <HeaderApp>
                <h1>Consumo de API</h1>
                <span>Nº DE PERSONAGENS:{numPerson}</span>
            </HeaderApp>
            
            <MainApp>
                <div>
                    {
                        infoApi && infoApi.map(({ image, name, gender, species }, i) => {

                            return (<Card
                                image={image}
                                name={name}
                                gender={gender}
                                species={species}
                            />
                            )
                        })
                    }
                </div>
                {!(page === 42) && < button onClick={() => { setPage(page + 1) }}>Carregar mais</button>}
            </MainApp>
        </ContainerApp >
    );
}

