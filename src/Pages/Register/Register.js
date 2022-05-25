import { TextField, Stack, Container, Button, Alert, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'
import * as yup from 'yup';
import Axios from 'axios';
// usar useState para confimar cadastro

export function Register() {

    const [showAlert, setShowAlert] = useState(false)
    const [showError, setShowError] = useState(false)

    const schema = yup.object({
        name: yup.string().required('Nome é um campo obrigatório'),
        password: yup.string().min(8, 'Password deve ter pelo o menos 8 caracteres').required('Password é um campo obrigatório'),
        confirmPassword: yup.string().required().test('password-corfirm', 'Senha não coincidem', (value, context) => value === context.parent.password)
    }).required();

    const { handleSubmit, formState, register } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async(data) => {
        try {
            await Axios.post('http://localhost:4000/user/cadaster', {
                name: data.name,
                password: data.password
            });

            setShowAlert(true);
            setShowError(false);

        } catch (error) {
            setShowError(error.response.data.why);
            setShowAlert(false)
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
            
            <h2>Cadastra-se</h2>

            <Container maxWidth="sm">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack spacing={2}>
                        {showAlert && <Alert severity="success">Cadastro realizado com sucesso</Alert>}
                        {showError && <Alert severity="error">{showError}</Alert>}

                        <TextField 
                            error={!!formState.errors.name} {...register('name')} 
                            label="Nome" variant="outlined" 
                            helperText={(formState.errors.name || {}).message} />
                        <TextField 
                            error={!!formState.errors.password} {...register('password')} 
                            label="Senha" type="password" variant="outlined" 
                            helperText={(formState.errors.password || {}).message} />
                        <TextField 
                            {...register('confirmPassword')} error={!!formState.errors.confirmPassword}
                            label="Confirmar Senha" type="password" variant="outlined" 
                            helperText={(formState.errors.password || {}).message} />

                        <Button type="submit" variant="contained"
                            color="success"
                            sx={{
                                margin: "20px",
                            }}>Cadastrar
                        </Button>
                    </Stack>

                </form>

            </Container>

        </Box>
    )
}