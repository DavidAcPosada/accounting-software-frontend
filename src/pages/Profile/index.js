import React, { useState } from 'react'
import posed from 'react-pose'
import { Helmet } from 'react-helmet'
import { Grid, Paper, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField, Button } from '@material-ui/core'
import CardProfile from '../../components/CardProfile'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import useStyles, { PasswordHeader } from './styles'
import fakeData from '../../utils/api/fakeData'
import ToggleIcon from 'material-ui-toggle-icon'

const ProfileContainer = posed.div({
    enter: { staggerChildren: 50, opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 }
})

export default () => {
    const classes = useStyles()
    const [data, setData] = useState(fakeData.user)
    const [show, setShow] = useState(false)

    return (
        <ProfileContainer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mi perfil - esa</title>
            </Helmet>
            <Grid className={classes.container} container spacing={4}>
                <Grid item md={4} sm={12}>
                    <CardProfile data={data} />
                </Grid>
                <Grid item md={8} sm={12}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item container spacing={2} sm={12}>
                            <Grid item sm={6}>
                                <Paper className={classes.paper} elevation={3}>
                                    <PasswordHeader>
                                        <Typography variant='subtitle2'>Cambiar contraseña</Typography>
                                        <Button size='small' variant='contained' color='primary'>Guardar</Button>
                                    </PasswordHeader>
                                    <form style={{ marginTop: 10 }}>
                                        <TextField 
                                            label='Contraseña actual'
                                            size='small'
                                            variant='outlined'
                                            fullWidth
                                            type={show ? 'text' : 'password'}
                                            className={classes.marginInput}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => setShow(!show)}
                                                        >
                                                            <ToggleIcon
                                                                on={show}
                                                                onIcon={<VisibilityOff />}
                                                                offIcon={<Visibility />}
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <TextField 
                                            label='Contraseña nueva'
                                            size='small'
                                            variant='outlined'
                                            fullWidth
                                            type={show ? 'text' : 'password'}
                                            className={classes.marginInput}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => setShow(!show)}
                                                        >
                                                            <ToggleIcon
                                                                on={show}
                                                                onIcon={<VisibilityOff />}
                                                                offIcon={<Visibility />}
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <TextField 
                                            label='Confirmar contraseña'
                                            size='small'
                                            variant='outlined'
                                            fullWidth
                                            type={show ? 'text' : 'password'}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position='end'>
                                                        <IconButton
                                                            onClick={() => setShow(!show)}
                                                        >
                                                            <ToggleIcon
                                                                on={show}
                                                                onIcon={<VisibilityOff />}
                                                                offIcon={<Visibility />}
                                                            />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        
                                    </form>
                                </Paper>
                            </Grid>
                            <Grid item sm={6}>
                                <Paper className={classes.paper} elevation={3}>
                                    <Typography variant='subtitle2'>Actividad reciente</Typography> 
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item sm={12}>
                            <Paper className={classes.paper} elevation={3}>
                                <Typography variant='subtitle2'>Mis usuarios</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ProfileContainer>
    )
}