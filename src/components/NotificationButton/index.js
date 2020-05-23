import React, { useState, useRef, useEffect } from 'react'
import { Fab, makeStyles, MenuItem, Popper, Grow, Paper, ClickAwayListener, MenuList, ListItemIcon, ListItemText } from '@material-ui/core'

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined'
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'

const notifications = [
    {
        id: 0,
        title: 'Notification 1',
        type: 'message'
    },
    {
        id: 1,
        title: 'Notification 2',
        type: 'alert'
    },
    {
        id: 2,
        title: 'Notification 3',
        type: 'user'
    },
    {
        id: 3,
        title: 'Notification 4'
    }
]

const getIcon = (icon) => {
    switch (icon) {
        case 'user':
            return <AccountCircleOutlinedIcon />
        case 'alert':
            return <PriorityHighOutlinedIcon />
        case 'message':
            return <EmailOutlinedIcon />
        default: 
            return <FiberManualRecordOutlinedIcon />
    }
}

const useStyles = makeStyles({
    root: {
        margin: '0 10px',
        background: 'transparent',
        boxShadow: 'none',
        '&:focus': {
            boxShadow: 'none'
        }
    }
})

export default ({ style }) => {
    const classes = useStyles()
    const anchorRef = useRef()
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    }

    const handleClose = event => {
        if ( anchorRef.current && anchorRef.current.contains(event.target) ) {
            return
        }
        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)
    useEffect(() => {
        if ( prevOpen.current === true && open === false ) {
            anchorRef.current.focus()
        }
        prevOpen.current = open
    }, [open])

    return (
        <div>
            <Fab 
                ref={anchorRef}
                size='small' 
                classes={{
                    root: classes.root
                }}
                onClick={handleToggle}
                aria-controls='notifications'
                aria-haspopup='true'
            >
                <NotificationsOutlinedIcon />
            </Fab>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} style={style} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        
                        style={{ 
                            marginTop: '15px',
                            transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' 
                        }}
                    >
                        <Paper elevation={3}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id='menu-list-grow'
                                    onKeyDown={handleListKeyDown}
                                >
                                    {notifications.map(el => (
                                        <MenuItem key={el.id}>
                                            <ListItemIcon>
                                                { getIcon(el.type) }
                                            </ListItemIcon>
                                            <ListItemText>
                                                { el.title || 'Notificación' }
                                            </ListItemText>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}