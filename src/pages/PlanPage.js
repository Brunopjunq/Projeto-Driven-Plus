import styled from "styled-components";
import Back from '../assets/Back.png';
import Money from '../assets/Money.png';
import Board from '../assets/Board.png';
import Close from '../assets/Close.png';
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LogoWhite from '../assets/LogoWhite.png';

export default function PlanPage() {
    const ID_PLAN = useParams();
    const {userData, setUserData, token} = useContext(UserContext);
    const navigate = useNavigate();
    const [plan,setPlan] = useState(null);
    const [nameCard, setNameCard] = useState('');
    const [numbCard, setNumbCard] = useState('');
    const [cardCVV, setCardCVV] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${ID_PLAN.ID_PLAN}`, config)
        promise.then(res => setPlan(res.data));

    },[])

    function LoadPlan() {
        if(plan == null) {
            return (
                <h1>Carregando...</h1>
            )
        }
        else {
            return(
                <>
                <BackImg src={Back} onClick={() => navigate('/subscriptions')} />
                <Logo src={plan.image} />
                <Title>{plan.name}</Title>
                <Box>
                    <Descrition>
                        <img src={Board} />
                        <h1>Benefícios:</h1>
                    </Descrition>
                    {plan.perks.map((plan, index) => 
                    <h2>{index + 1}. {plan.title}</h2>
                    )}
                    <Descrition>
                        <img src={Money} />
                        <h1>Preços:</h1>
                    </Descrition>
                    <h2>R$ {plan.price} cobrados mensalmente</h2>
                </Box>
                <form onSubmit={AssinarPlano}>
                    <Input type='text' onChange={(e) => setNameCard(e.target.value)} value={nameCard} placeholder="Nome Impresso no cartão" required/>
                    <Input  onChange={(e)=> setNumbCard(e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
                        .substring(0, 19))} 
                        value={numbCard} placeholder="Dígitos do cartão" required/>
                    <div>
                        <input type='text' maxLength='3' minLength='3' onChange={(e) => setCardCVV(e.target.value)} value={cardCVV} placeholder="Código de Segurança" required/>
                        <input type='text' onChange={(e) => setCardDate(e.target.value)} value={cardDate} placeholder="Validade(DD/MM)" required/>
                    </div>
                    <Button type="submit">ASSINAR</Button>
                </form>
                </>
            )
        }

    }

    function LoadConfirmation() {
        if(isPopUpVisible === true) {
            return(
                <PopUp>
                <img src={Close} onClick={() => setIsPopUpVisible(false)}/>
                <PopUpBox>
                    <p>Tem certeza que deseja assinar o plano Driven Plus R$ {plan.price} ?</p>
                    <div>
                        <button onClick={() => setIsPopUpVisible(false)}>Não</button>
                        <button onClick={ConfirmarAssinatura}>SIM</button>
                    </div>
                </PopUpBox>
            </PopUp>
            )
        }
        else {
            return(
                <></>
            )
        }
    }

    function AssinarPlano(e) {
        e.preventDefault();
        setIsPopUpVisible(true);
    }

    function ConfirmarAssinatura() {
        const body = {
            membershipId: plan.id,
            cardName: nameCard,
            cardNumber: numbCard,
            securityNumber: cardCVV,
            expirationDate: cardDate
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', body, config)
        promise.then(res =>{
            const newUserData = {...userData, membership: plan}
            setUserData(newUserData);
            navigate('/home');
        })
        promise.catch(err => {
            setNameCard('');
            setNumbCard('');
            setCardCVV('');
            setCardDate('');
            setIsPopUpVisible(false);
            alert('Confira se os dados do cartão estão corretos e tente novamente!')
        })

        console.log(body);

    }

    const PageInfo = LoadPlan();
    const PopUpInfo = LoadConfirmation();

    return (
        <Page>
            {PageInfo}
            {PopUpInfo}
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

    form {
        margin-top: 45px;

        div {
            
            display:flex;
            justify-content: space-between;
        
            input {
            width: 37vw;
            height: 52px;
            background: #FFFFFF;
            border-radius: 8px;
            font-size: 14px;
            padding-left: 14px;
            margin-bottom: 5px;
            display: flex;
            justify-content: center;

    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
    }
        }
        }
    }
`

const BackImg = styled.img`
    position: absolute;
    top: 22px;
    left: 22px;
`

const Logo = styled.img`
    margin-top: 87px;
`

const Title = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 10px;
`

const Box = styled.div`
    width: 80vw;
    height: 110px;
    margin-top: 12px;

    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
    }
`

const Descrition = styled.div`
    display: flex;
    margin-bottom: 8px;
    margin-top: 10px;
    
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        margin-left: 4px;
    }
`

const Input = styled.input`
    width: 80vw;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 14px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;

    &::placeholder {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
    }
`

const Button = styled.button`
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
`

const PopUp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0px;
    /* visibility: ${props => props.isPopUpVisible}; */

    img {
        position: absolute;
        top: 25px;
        right: 30px;
        cursor: pointer;
    }
`

const PopUpBox = styled.div`
    width: 248px;
    height: 210px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background: #FFFFFF;
    border-radius: 12px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #000000;
        margin: 33px 0 47px;
    }

    button {
        width: 95px;
        height: 52px;
        background: #CECECE;
        border-radius: 8px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;

        &:last-child {
            background-color: #FF4791;

        }
    }

    div {
        display: flex;
        gap: 14px;
    }
`