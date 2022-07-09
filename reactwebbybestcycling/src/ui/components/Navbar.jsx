import { useContext } from 'react';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import {Duration} from 'luxon';
import LoginOutlined from '@mui/icons-material/LoginOutlined';

import { AuthContext } from '../../auth/context';
import { ButtonSubNav } from './ButtonSubNav';
import { useInterval } from '../../BestCycling/hooks/useInterval';

export const Navbar = () => {

    const { logout, authState, decrementTime } = useContext(AuthContext);
    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    };
    
    useInterval(() => {
        decrementTime();

    }, authState.user.subscription !== null ? 1000 : null)

    //TODO: PREGUNTAR A ROMAN LA MEJOR FORMA DE HACER ESTO -->
    const component = () => {

        if (authState.user.subscription !== null) return <span style={{fontWeight: 'bold'}}> SUSCRIPCIÓN {Duration.fromMillis(authState.user.subscription).toFormat("mm.ss")}</span>
        if (authState.user.typeSubscription !== null) return <ButtonSubNav text={'Renovación pendiente'} />

        return <ButtonSubNav text={'SUSCRIPCIÓN'} />
    }

    console.log(authState.user);

    return (
        <AppBar position="fixed" style={{ background: '#000' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink
                    className="nav-logo"
                    to="/"
                >
                    <img src={'../../assets/images/logo.png'} alt='logo' />
                </NavLink>

                <div>
                    {component()}

                    <IconButton
                        size='large'
                        aria-label="logout"
                        sx={{ color: '#fff' }}
                        onClick={onLogout}
                    >
                        <LoginOutlined />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};