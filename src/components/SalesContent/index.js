import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Paper, Container, makeStyles, Typography, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1,
        padding: '20px 0'
    },
    papper: {
        borderRadius: 20,
        padding: theme.spacing(2)
    },
    indicator: {
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        height: '5px',
        '& > div': {
            width: '60%',
            height: '5px',
            borderRadius: '5px 5px 0 0',
            background: theme.palette.secondary.main
        }
    },
    tab: {
        textTransform: 'inherit',
        padding: 0,
        height: 40,
        width: 100,
        maxWidth: 100,
    },
    selected: {
        color: theme.palette.secondary.main
    }
}))

export default ({ index }) => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)

    return (
        <div className={classes.container}>
            <Grid container spacing={3}>
                <Grid item md={6} sm={12} xs={12}>
                    <Paper className={classes.papper} elevation={3}>
                        <Typography variant='subtitle2'>Estadisticas de venta</Typography>
                        <Tabs 
                            classes={{ indicator: classes.indicator }}
                            value={tab}
                            onChange={(e, value) => setTab(value) }
                            TabIndicatorProps={{ children: <div />}}
                            variant='scrollable'
                        >
                            <Tab classes={{root: classes.tab, selected: classes.selected}} disableRipple label='Semanal' />
                            <Tab classes={{root: classes.tab, selected: classes.selected}} disableRipple label='Trimestral' />
                            <Tab classes={{root: classes.tab, selected: classes.selected}} disableRipple label='Anual' />
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Paper className={classes.papper} elevation={3}>
                        <Typography variant='subtitle2'>Más vendidos</Typography>
                    </Paper>
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <Paper className={classes.papper} elevation={3}>
                        <Typography variant='subtitle2'>Registro de venta</Typography>
                    </Paper>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Paper className={classes.papper} elevation={3}>
                        <Typography variant='subtitle2'>Ventas anteriores</Typography>
                    </Paper>
                </Grid>
                <Grid item sm={12}  xs={12}>
                    <Paper className={classes.papper} elevation={3}>
                        <Typography variant='subtitle2'>Productos</Typography>
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Name
                                        </TableCell>
                                        <TableCell align="right">Calorias</TableCell>
                                        <TableCell align="right">Grasa</TableCell>
                                        <TableCell align="right">Carb</TableCell>
                                        <TableCell align="right">Proteina</TableCell>
                                    </TableRow>
                                    
                                </TableBody>
                            </Table>
                            </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}