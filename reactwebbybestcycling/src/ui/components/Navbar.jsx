import { AppBar, Button, Toolbar } from '@mui/material';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    
    const navigate = useNavigate()

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

                    <Button
                        variant="contained"
                        size='large'
                        color='warning'
                        sx={{
                            color: '#fff',
                            background: '#ff7900',
                            fontWeight: 'bold',
                            fontSize: '1em',
                        }}
                        onClick={ handleClick }
                    >
                        SUSCRÍBETE
                    </Button>
            </Toolbar>
        </AppBar>
    );
};