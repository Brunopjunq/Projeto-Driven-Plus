import styled from "styled-components";
import UserImg from '../assets/User.png';
import LogoWhite from '../assets/LogoWhite.png';

export default function HomePage() {
    return (
        <Page>
            <PlanLogo src={LogoWhite} />
            <UserLogo src={UserImg} />
            <Title>Olá, Fulano</Title>
            <ButtonPink>Solicitar Brindes</ButtonPink>
            <ButtonPink>Materiais Bônus</ButtonPink>
            <FooterBox>
                <button>Mudar Plano</button>
                <button>Cancelar Plano</button>
            </FooterBox>
        </Page>
    )
    
}

const Page = styled.article`
    background-color: #0E0E13;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

`

const UserLogo = styled.img`
    position:absolute;
    top: 22px;
    right: 22px;
`

const PlanLogo = styled.img`
    position: absolute;
    top: 32px;
    left: 38px;
    width: 75px;
`

const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin-top: 95px;
    margin-bottom: 53px;
`

const ButtonPink = styled.button`
    width: 85vw;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 8px;
`

const FooterBox = styled.div`
    position: absolute;
    bottom: 0;

    button {
        width: 85vw;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 8px;

    &:last-child {
        background-color: #FF4747;
        margin-bottom: 12px;
    }

    }
`