import styled from "styled-components";
import Back from '../assets/Back.png';
import LogoWhite from '../assets/LogoWhite.png'
import Money from '../assets/Money.png';
import Board from '../assets/Board.png';

export default function PlanPage() {
    return (
        <Page>
            <BackImg src={Back} />
            <Logo src={LogoWhite} />
            <Title>Driven Plus</Title>
            <Box>
                <Descrition>
                    <img src={Board} />
                    <h1>Benefícios:</h1>
                </Descrition>
                <h2>1. Brindes exclusivos</h2>
                <h2>2. Materiais bônus de web</h2>
                <Descrition>
                    <img src={Money} />
                    <h1>Preços:</h1>
                </Descrition>
                <h2>R$ 39,99 cobrados mensalmente</h2>
            </Box>
            <form>
                <Input type='text' placeholder="Nome Impresso no cartão" required/>
                <Input type='number' placeholder="Dígitos do cartão" required/>
                <div>
                    <input type='number' placeholder="Código de Segurança" required/>
                    <input type='text' placeholder="Validade" required/>
                </div>
                <Button type="submit">ASSINAR</Button>
            </form>

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