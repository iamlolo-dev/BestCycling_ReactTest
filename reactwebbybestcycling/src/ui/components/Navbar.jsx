import { useContext } from 'react';
import { AppBar, Button, IconButton, Toolbar } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginOutlined from '@mui/icons-material/LoginOutlined';

import { AuthContext } from '../../auth/context';

export const Navbar = () => {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    };

    const handleClick = () => navigate('/subscription')

    return (
        <AppBar position="fixed" style={{ background: '#000' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <NavLink
                    className="nav-logo"
                    to="/"
                >
                    <img src={'../../assets/images/logo.png'} alt='logo' />
                </NavLink>
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            BestCycling
                        </Typography> */}
                <div>
                    <Button
                        variant="contained"
                        size='large'
                        color='warning'
                        sx={{
                            color: '#fff',
                            background: '#ff7900',
                            fontWeight: 'bold',
                            fontSize: '1em',
                            marginRight: '1.5em',
                        }}
                        onClick={handleClick}
                    >
                        SUSCRÍBETE
                    </Button>

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