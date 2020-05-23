import React, { useState } from 'react'
import { Fab, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ToggleIcon from 'material-ui-toggle-icon'
import { Avatar, Button, NotificationButton, Sidebar } from '../../components'
import WithLayout from '../WithLayout'

import { AppLayoutContainer, Content, UserControls, AuthControls, Controls, Email } from './styles'

const useStyles = makeStyles(theme => ({
    content: {
        background: theme.palette.grey[100]
    }
}))

export default ({ children }) => {
    const classes = useStyles()

    const [expand, setExpand] = useState(true)

    return (
        <AppLayoutContainer>
                <WithLayout
                    left={<Sidebar />}
                    leftWidth={expand ? '20%' : '0%'}
                >
                    <Content className={classes.content}>
                        <UserControls>
                            <Controls>
                                <Fab size='small' color='primary' onClick={() => setExpand(!expand)}>
                                    <ToggleIcon 
                                        on={expand}
                                        onIcon={<ArrowBackIcon />}
                                        offIcon={<MenuIcon />}
                                    />
                                </Fab>
                                <h1>{localStorage.getItem('title')}</h1>
                            </Controls>
                            <AuthControls>
                                <NotificationButton style={{ zIndex: 1 }} />
                                <Button 
                                    tooltipText='Mi perfil'
                                    textTransform='normal'
                                    path='/app/profile'
                                >
                                    <Avatar />
                                    <Email>usuario@usuario.com</Email>
                                </Button>
                            </AuthControls>
                        </UserControls>
                        <WithLayout>
                            { children }
                        </WithLayout>
                    </Content>
                </WithLayout>
        </AppLayoutContainer>
    )
}