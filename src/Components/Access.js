import { Button } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    
    return (
        <Link className={ match ? "active" : "button-link" }
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
}

export function Access( children, to, ...props ) {

     return (
        <div>

            <div className='flexHome'>
                    
                <CustomLink to="/login-cadaster-react/login">
                    <Button 
                        type="link" variant="contained"
                        sx={{
                            margin: "10px",
                            width: "150px",
                        }}>Entrar
                    </Button>
                    
                </CustomLink>
                <CustomLink to="login-cadaster-react/cadaster">
                    <Button 
                        type="link" variant="contained"
                        sx={{
                            margin: "10px",
                            width: "150px",
                        }}>Cadastrar-se
                    </Button>
                    
                </CustomLink>

            </div>

            
            
         </div>
     )
}