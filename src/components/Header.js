import { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

import { 
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button
} from '@mui/material';

import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';

const Header = () => {
    const { setState, state } = useContext(GlobalContext);

    const handleClick = () => {
        !state.login ? setState({login: true}) : setState({login: false})
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative">
                <Toolbar>
                    <CenterFocusWeakIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dio Context API
                    </Typography>
                    { 
                        state.login && 
                        <Button 
                            variant="contained"
                            color="error"
                            onClick={handleClick}
                        >
                            Sair
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
