import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Helmet } from 'react-helmet'
import { Typography, Tabs, Tab, makeStyles, Button, CircularProgress } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

import { green } from '@material-ui/core/colors'

import { SalesContainer, SalesNavigation, Locals, Actions } from './styles'
import { TabPanel, SalesContent } from '../../components'

const useStyles = makeStyles(theme => ({
    tab: {
        textTransform: 'capitalize',
        paddingRight: 0,
        paddingLeft: 0,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    tabSelected: {
        color: theme.palette.primary.main
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
            background: theme.palette.primary.main
        }
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative'
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700]
        }
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -5
    }
}))

export default (props) => {
    const classes = useStyles()
    const [tab, setTab] = useState(0)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    let timers = [null, null]

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success
    })

    const handleSave = () => {
        if (!loading) {
            setSuccess(false)
            setLoading(true)

            timers[0] = setTimeout(() => {
                setSuccess(true)
                setLoading(false)
            }, 2000)

            timers[1] = setTimeout(() => {
                setSuccess(false)
            }, 4000)
        }
    }

    useEffect(() => {
        return () => {
            timers.map(timer => clearTimeout(timer))
        }
    }, [])

    return (
        <SalesContainer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ingresos y egresos - esa</title>
            </Helmet>
            <SalesNavigation elevation={3}>
                <Locals>
                    <Typography variant='subtitle2' style={{ marginRight: '20px' }}>Establecimiento</Typography>
                    <Tabs
                        value={tab}
                        onChange={(e, newValue) => setTab(newValue)}
                        classes={{
                            indicator: classes.indicator
                        }}
                        TabIndicatorProps={{ children: <div /> }}
                    >
                        <Tab disableRipple={true} classes={{ root: classes.tab, selected: classes.tabSelected }} label='Fonda Maria Mulata' />
                        <Tab disableRipple={true} classes={{ root: classes.tab, selected: classes.tabSelected }} label='Bar Dubai' />
                    </Tabs>
                </Locals>
                <Actions>
                    <div className={classes.wrapper}>
                        <Button 
                            className={buttonClassname}
                            size='small' 
                            color='primary' 
                            variant='contained' 
                            style={{ marginRight: '-15px' }}
                            disabled={loading}
                            endIcon={success && <DoneIcon />}
                            onClick={handleSave}
                        >{success ? 'Guardado' : loading ? 'Guardando' : 'Guardar'}</Button>
                        { loading && <CircularProgress size={24} className={classes.buttonProgress} /> }
                    </div>
                </Actions>
            </SalesNavigation>
            <TabPanel
                value={tab}
                index={0}
            >
                <SalesContent index={0} />
            </TabPanel>
            <TabPanel
                value={tab}
                index={1}
            >
                <SalesContent index={1} />
            </TabPanel>
            
        </SalesContainer>
    )
}