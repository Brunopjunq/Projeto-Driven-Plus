import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoWhite from '../assets/LogoWhite.png';
import UserContext from "../context/UserContext";
import axios from "axios";

export default function SubscriptionPage() {
    const token = useContext(UserContext);
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate;

    useEffect (() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', token);
        promise.then(res => setPlans(res.data))
    }, []);

    function ChoosePlan(id) {
        navigate(`/subscriptions/${id}`)
    }

    return (
        <Page>
            <Title>Escolha seu Plano</Title>
            <PlanBox>
                <img src={LogoWhite} />
                <p>R$39,90</p>
            </PlanBox>
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

const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 29px;
    margin-bottom: 24px;
`

const PlanBox = styled.div`
    width: 78vw;
    height: 180px;
    background-color: #0E0E13;
    border-radius: 10px;
    border: 2px solid #7E7E7E;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    
    p {    
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    }
`