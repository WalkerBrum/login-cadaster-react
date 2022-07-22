import { Box, Button, Container, Stack, TextField, Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from 'axios';
import { useState } from 'react'

export function Login(){
    const[alertSuccess, setAlertSuccess] = useState(false);
    const[alertError, setAlertError] = useState(false)

    const schema = yup.object({
        name: yup.string().required('Nome é um campo obrigatório'),
        password: yup.string().required('Password é um campo obrigatório'),
    }).required();

    const { handleSubmit, formState, register } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async(data) => {
        try {
            await Axios.post('http://localhost:4000/login', {
                name: data.name,
                password: data.password
            });

            setAlertSuccess(true);
            setAlertError(false);
            
        } catch (error) {
            setAlertError(error.response.data.why);
            setAlertSuccess(false);
        }
    }

    return (
        <Box sx={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20px",
                marginBottom: "50px",
                padding: "20px",
                border: "2px solid black",
                borderRadius: "20px",
                maxWidth: "460px",
                minHeight: "360px",
            }}>

            <h2>Acesse sua conta</h2>
            
            <Container maxWidth="sm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack spacing={3}>
                        {alertSuccess && <Alert severity="success">Login realizado com sucesso</Alert>}
                        {alertError && <Alert severity="error">{alertError}</Alert>}

                        <TextField error={!!formState.errors.name} {...register('name')}
                            label="Nome" variant="outlined"
                            type="text"
                            helperText={(formState.errors.name || {}).message}/>
                        <TextField error={!!formState.errors.password} {...register('password')}
                            type="password"
                            label="Senha" variant="outlined" 
                            helperText={(formState.errors.password || {}).message}/>

                        <Button type="submit" variant="contained"
                            color="success"
                            sx={{
                                margin: "20px",
                            }}>Login
                        </Button>
                    </Stack>

                </form>

            </Container>

        </Box>
    )
}