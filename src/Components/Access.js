import { Button } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={match ? "active" : "button-link"}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
}

export function Access() {
     return (
        <header>

            <h1>Bem vindo a One Blue, acesse abaixo para fazer o seu login ou cadastro</h1>

            <div className='flexHome'>
                    
                <CustomLink to="/login">
                    <Button 
                        type="link" variant="contained"
                        sx={{
                            margin: "10px",
                            width: "100px",
                        }}>Entrar
                    </Button>
                    
                </CustomLink>
                <CustomLink to="user/cadaster">
                    <Button 
                        type="link" variant="contained"
                        sx={{
                            margin: "10px",
                            width: "100px",
                        }}>Cadastrar
                    </Button>
                    
                </CustomLink>
            </div>
         </header>
     )
}