import React, { useState } from 'react'
import clsx from 'clsx'
import { 
    Card, 
    CardContent,
    CardActions, 
    CardMedia, 
    makeStyles, 
    CardHeader, 
    Avatar, 
    IconButton, 
    Typography,
    Collapse
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 20
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        background: theme.palette.secondary.main
    },
    content: {
        padding: 24
    }
}))

export default ({ content, actions, style }) => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    return (
        <Card classNames={classes.root} style={style}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>V</Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
                title='Ventas mensuales'
                subheader='Marzo 19'
            />
            <CardMedia 
                className={classes.media}
                image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
                title='Any Title'
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={() => setExpanded(!expanded)}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
