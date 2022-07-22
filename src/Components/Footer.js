import { Button } from "@mui/material";

export function Footer() {
    return (
        <footer>
            <p>Aplicação Desenvolvida por Walker Lobato</p>                 
            <div className='social'>
                
            <Button 
                type="link" variant="contained"
                sx={{
                    margin: "10px",
                    width: "100px",
                }}>
                <a href="https://github.com/WalkerBrum/login-cadaster-react" target="_blank" rel="noreferrer" title="github">
                    Github
                </a>
            </Button>

            <Button 
                type="link" variant="contained"
                sx={{
                    margin: "10px",
                    width: "100px",
                }}>
                <a href="https://www.linkedin.com/in/walkerlobato/" target="_blank" rel="noreferrer" title="linkedin">
                    Linkedin
                </a>
            </Button>

            </div>
        </footer>
    )
}