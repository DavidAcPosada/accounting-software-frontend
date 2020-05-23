import React from 'react'
import _ from 'lodash'
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader } from '@material-ui/core'
import navigation from '../../utils/navigation'
import Logo from './../../utils/assets/img/esa.png'


import { SideBarContainer, BrandLogo } from './styles'
import { Link, Location } from '@reach/router'

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '20px 0 0 20px',
        transition: theme.transitions.create(['box-shadow', 'background-color'], {
            duration: theme.transitions.duration.shortest
        })
    },
    active: {
        width: '100%',
        backgroundColor: theme.palette.grey[100],
        borderRadius: '20px 0 0 20px',
        boxShadow: theme.shadows[3],
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        },
        transition: theme.transitions.create(['box-shadow', 'background-color'], {
            duration: theme.transitions.duration.shortest
        })
    },
    white: {
        color: theme.palette.common.white
    },
    black: {
        color: theme.palette.common.black
    },
    secondary: {
        color: theme.palette.secondary.main
    },
    primary: {
        fontWeight: 'bold'
    }
}))

export default () => {
    const classes = useStyles()

    return (
        <Location>
            {({ location }) => (
                <SideBarContainer>
                    <BrandLogo src={Logo} />
                    <List component='nav'>
                        {
                            _.map(navigation, (el, key) => (
                                <React.Fragment key={key}>
                                    <ListSubheader classes={{ root: classes.white }} style={{ zIndex: 0 }}>{_.upperCase(el.title)}</ListSubheader>
                                    {
                                        _.map(el.children, item => (
                                            <ListItem 
                                                key={item.id}
                                                button 
                                                component={item.path && Link} 
                                                to={item.path}
                                                onClick={item.action && item.action}
                                                classes={{ root: location.pathname === item.path ? classes.active : classes.root }}
                                            >
                                                {
                                                    item.icon && (
                                                        <ListItemIcon classes={{ root: location.pathname === item.path ? classes.secondary : classes.white }}>
                                                            { item.icon }
                                                        </ListItemIcon>
                                                    )
                                                }
                                                <ListItemText
                                                    primary={item.title}
                                                    secondary={item.subtitle}
                                                    classes={{ 
                                                        root: location.pathname === item.path ? classes.black : classes.white, 
                                                        primary: classes.primary,
                                                        secondary: location.pathname === item.path ? classes.black : classes.white
                                                    }} 
                                                />
                                            </ListItem>
                                        ))
                                    }
                                    { key < navigation.length - 1 && <Divider style={{ marginTop: 20 }} /> }
                                </React.Fragment>
                            ))
                        }
                    </List>
                </SideBarContainer>
            )}
        </Location>
    )
}
