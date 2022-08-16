import Logo from '../assets/Logo.png';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios';

export default function LoginPage() {
    const { setUserData, setToken} = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    useEffect(() => {
        if(localStorage.getItem("userdata") !== null){
            const userlogin = JSON.parse(localStorage.getItem("userdata"));
            const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', userlogin);
            promise.then(res =>{
                setUserData(res.data);
                setToken(res.data.token);
               if (res.data.membership === null) {
                navigate('/subscriptions');
               }
               else {
                navigate('/home');
               }
            })
        }
    },[])
    
    function FazerLogin (e) {
        e.preventDefault();

        const body = {
            email: email,
            password: password
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', body);

        promise.then(res => {
            setUserData(res.data);
            setToken(res.data.token);
           localStorage.setItem("userdata", JSON.stringify(body));

           if (res.data.membership === null) {
            navigate('/subscriptions');
           }
           else {
            navigate('/home');
           }
        })

        promise.catch(err => 
            {alert('Não foi possível efetuar o login! Verifique se os dados estão corretos e tente novamente');
            setEmail('');
            setPassword('');
        })

    }
    
    return (
        <Page>
            <img src={Logo} />
            <form onSubmit={FazerLogin}>
                <Input type='email' value={email} placeholder='E-mail' onChange={e=> setEmail(e.target.value)} required/>
                <Input type='password' value={password} placeholder='Senha' onChange={e => setPassword(e.target.value)} required/>
                <Button type='submit'>ENTRAR</Button>
            </form>
            <Link to='/sign-up'><p>Não possui conta? Cadastre-se!</p></Link>
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

    img {
        width: 299px;
        height: 49px;
        margin-top: 134px;
        margin-bottom: 100px;  
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: #FFFFFF;
        margin-top: 24px;
    }
`

const Input = styled.input`
    width: 80vw;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    font-size: 14px;
    padding-left: 14px;
    margin-bottom: 16px;
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