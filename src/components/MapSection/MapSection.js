// MapSection.js
import React from 'react';
import styled from 'styled-components';
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
} from './HeroElements';  // Reaproveitando os estilos de HeroSection

// Você pode substituir essa URL pelo link do seu mapa ou imagem
const MapaBg = styled.div`
    background-image: url('https://via.placeholder.com/1200x800?text=Mapa+interativo+aqui');
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const MapSection = () => {
    return (
        <HeroContainer id="map">
            <HeroBg>
                <MapaBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>Encontre as Pistas</HeroH1>
                <HeroP>Explore os locais de pistas compartilhadas por outros usuários.</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default MapSection;
