import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name)
            alert(`Bem vinda ao Be The Hero ${response.data.ong.name}!`);
            history.push('profile');
        }
        catch(err){
            alert('Falha no login, tente novamente.');
            setId('');
            document.getElementById('inputId').focus();
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Heroe"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça Seu Logon</h1>
                    <input id="inputId" type="text" placeholder="Sua Id" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02041"/> Não Tenho Cadatro</Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes"/>
        </div>
    );
}