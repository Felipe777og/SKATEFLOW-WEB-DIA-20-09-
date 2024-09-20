import React from 'react';
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements';
import styled from 'styled-components';

const StyledButton = styled.a`
    background: #000; /* Fundo preto */
    color: #fff; /* Texto branco */
    padding: 12px 30px;
    font-size: 16px;
    border: none;
    border-radius: 25px; /* Bordas arredondadas */
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: #c0c0c0; /* Fundo branco ao passar o mouse */
        color: #000; /* Texto preto ao passar o mouse */
    }
`;

const InfoSection = ({ 
    id, 
    lightBg,
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <StyledButton 
                                    to="/map"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >
                                    {buttonLabel}
                                </StyledButton>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
