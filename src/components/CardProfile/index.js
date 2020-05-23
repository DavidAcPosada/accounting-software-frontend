import React, { useState } from 'react'
import clsx from 'clsx'
import { 
    Paper, 
    Avatar, 
    Typography, 
    Divider, 
    List, 
    ListItemAvatar, 
    ListItem, 
    ListItemText,
    IconButton, 
    Collapse, 
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    FormControl,
    OutlinedInput,
    InputLabel,
    DialogActions,
    Button
} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import LocalBarOutlinedIcon from '@material-ui/icons/LocalBarOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ToggleIcon from 'material-ui-toggle-icon'

import colors from '../../utils/styles/_colors'
import useStyles from './styles'
import { lime, green } from '@material-ui/core/colors'

export default ({ data }) => {
    const [open, setOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const classes = useStyles()
    const cardProfileClasses = clsx({
        [classes.paper]: true,
        [classes.cardProfile]: true
    })

    return (
        <>
            <Paper className={cardProfileClasses} elevation={3}>
                <Avatar className={classes.bigAvatar} src={data.avatar} />
                <Typography variant='subtitle2'>Datos basicos</Typography>
                <Divider />
                <List classes={{ root: classes.list }}>

                    <ListItem classes={{ root: classes.listItem }}>
                        <ListItemAvatar>
                            <Avatar style={{ background: green[700]}}>
                                <AccountCircleOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.name} secondary={data.role} />
                        
                        <Tooltip title='Editar info.' placement='right'>
                            <IconButton edge='end' size='small' onClick={() => setOpenDialog(!openDialog)}>
                                <EditOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </ListItem>
                    
                    <ListItem classes={{ root: classes.listItem }}>
                        <ListItemAvatar>
                            <Avatar style={{ background: colors['r']}}>
                                <MailOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.email} secondary='Correo electrónico' />
                    </ListItem>

                    <ListItem classes={{ root: classes.listItem }}>
                        <ListItemAvatar>
                            <Avatar style={{ background: colors['g']}}>
                                <CakeOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={data.birth} secondary='Fecha de cumpleaños' />
                    </ListItem>
                </List>

                <Typography variant='subtitle2'>Más</Typography>
                <Divider />
                <List classes={{ root: classes.list }}>
                    <ListItem classes={{ root: classes.listItem }} onClick={() => setOpen(!open)}>
                        <ListItemAvatar>
                            <Avatar style={{ background: lime[500] }}>
                                <LocalBarOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${data.locals.length} establecimiento${data.locals.length > 1 ? 's' : ''}`} secondary='Establecimientos a cargo' />
                        <ToggleIcon 
                            on={open}
                            onIcon={<ExpandLess />}
                            offIcon={<ExpandMore />}
                        />
                    </ListItem>
                    
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            {
                                data.locals && data.locals.map((el, index) => {
                                    const first = el.name.substring(0, 1)
                                    return (
                                        <ListItem key={index} className={classes.nested}>
                                            <ListItemAvatar>
                                                <Avatar style={{ background: colors[first.toLowerCase()]}}>{first.toUpperCase()}</Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={el.name} secondary={`${el.employees.length} empleados`} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Collapse>
                </List>
            </Paper>

            <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                keepMounted
                fullWidth
            >
                <DialogTitle><Typography variant='subtitle2'>Editar información de usuario</Typography></DialogTitle>
                <DialogContent>
                    <form>
                        <FormControl fullWidth>
                            <InputLabel title='Nombre completo' />
                            <OutlinedInput
                                value={data.name}
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions className={classes['dialog-actions']}>
                    <Button color='primary' variant='contained'>
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
