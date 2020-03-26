import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import './styles.css';
import LogoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewCase(e){
        e.preventDefault();

        const data ={
            title,
            description,
            value
        };
        try{
            await api.post('incidents',data, { headers:{Authorization: ongId} });
            alert('Caso Cadastrado Com Sucesso!');
            history.push('/profile');
        }
        catch(err){
            alert('Erro no cadastro!');
        } 
    }

    return(
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Heroe"/>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#e02041"/> Voltar</Link>
                </section>
                <form onSubmit={handleNewCase}>
                    <input type="text" placeholder="Titulo do Caso" value={title} onChange={e => setTitle(e.target.value)}/>
                    <textarea type="email" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <input type="text" placeholder="Valor em Reais" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}