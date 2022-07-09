import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material'

import { AuthContext } from '../context';
import { useForm } from '../../BestCycling/hooks'
import { sendLogin } from '../../BestCycling/api/Api';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const { formState, handleInputChange } = useForm({ user: '', password: '' });
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();

        if (formState.user === '' || formState.password === '') {
            alert('Todos los campos son obligatorios');

        } else {
            
            sendLogin(formState)
                .then(res => {
                    if (res.data.status === 'ok') {
                        login(res.data.user);
                        navigate('/');
                    }

                    if (res.data.status === 'error') {
                        alert(res.data.msg);
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }

    return (
        <div className='l-container c-p'>
            <div className='l-box'>
                <span className='logo-animated' style={{ marginTop: '25px', paddingBottom: '1em' }}>
                    <img src='../../../assets/images/logo.png' alt='logo' />
                </span>
                <span style={{ fontSize: '3em', fontWeight: 'bold', paddingBottom: '1em' }}>Bienvenid@ !</span>

                <form onSubmit={onSubmit} style={{ width: '100%' }}>

                    <div style={{ paddingBottom: '1.5em' }}>
                        <TextField
                            fullWidth
                            label='Usuario'
                            name='user'
                            onChange={handleInputChange}
                            value={formState.user}
                        />
                    </div>


                    <div style={{ paddingBottom: '1.5em' }}>
                        <TextField
                            fullWidth
                            label='Password'
                            name='password'
                            onChange={handleInputChange}
                            type={'password'}
                            value={formState.password}
                        />
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            fullWidth
                            color='warning'
                            sx={{
                                color: '#fff',
                                background: '#ff7900',
                                fontWeight: 'bold',
                                fontSize: '1em',
                                marginBottom: '10em'
                            }}
                            type='submit'
                        >
                            Login
                        </Button>
                    </div>

                </form>

            </div>
        </div>
    );
};