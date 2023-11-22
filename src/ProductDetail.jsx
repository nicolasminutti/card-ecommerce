import React, { useState, useEffect } from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Container,
    Grid,
    Alert,
    AlertTitle,
} from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

export const ProductDetail = () => {
    const [isPurchased, setIsPurchased] = useState(false)

    useEffect(() => {
        let timeout
        if (isPurchased) {
            timeout = setTimeout(() => {
                setIsPurchased(false)
            }, 3000) // 3000 milliseconds (3 seconds)
        }
        return () => clearTimeout(timeout)
    }, [isPurchased])

    const handleBuyClick = () => {
        setIsPurchased(true)
    }

    return (
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5', // Fondo blanco del body
            }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    backgroundColor: '#fafafa', // Tono suave para resaltar
                }}
            >
                <CardMedia
                    component='img'
                    height='194'
                    image='./src/auriculares.jpg'
                    title='Auriculares Inalámbricos'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Auricular Inalámbrico
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Inalámbrico + Bluetooth 5.0 + Alta Fidelidad + Cancelación Activa de Ruido + IPX5 (Deportes) + Asistente Google y Alexa
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='h4' color='text.secondary' gutterBottom>
                        <AttachMoneyIcon /> 99
                    </Typography>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={6}>
                            <Typography variant='body2'>
                                Disponible: 10
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='body2' color='text.secondary'>
                                SKU: ABC123
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button variant='contained' color='success' onClick={handleBuyClick}>
                        Comprar
                    </Button>
                </CardActions>
            </Card>
            {isPurchased && (
                <Alert
                    severity='success'
                    style={{
                        position: 'fixed',
                        top: '10px',
                        left: '10px',
                        zIndex: 1000,
                    }}
                >
                    <AlertTitle>¡Éxito!</AlertTitle>
                    Gracias por su compra.
                </Alert>
            )}
        </Container>
    )
}