import styled from "styled-components";
import UserImg from '../assets/User.png';
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
    const {userData, token} = useContext(UserContext);
    const navigate = useNavigate();

    function CancelPlan() {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config);
        promise.then(res => navigate('/subscriptions'));
        promise.catch(err => alert('Ocorreu algum erro!Tente Novamente!'))
    }

    return (
        <Page>
            <PlanLogo src={userData.membership.image} />
            <UserLogo src={UserImg} />
            <Title>Olá, {userData.name}</Title>
            {userData.membership.perks.map((perk, index) =>
                <ButtonPink key={index}>
                    <a href={perk.link}>{perk.title}</a>
                </ButtonPink>
            )}
            <FooterBox>
                <button onClick={() => navigate('/subscriptions')}>Mudar Plano</button>
                <button onClick={CancelPlan}>Cancelar Plano</button>
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

    a {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        text-decoration: none;
    }
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