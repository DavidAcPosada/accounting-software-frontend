import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    paper: {
        borderRadius: 20,
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`
    },
    bigAvatar: {
        width: 150,
        height: 150,
        margin: '20px auto',
        marginTop: -95,
        boxShadow: theme.shadows[3],
        cursor: 'pointer',
        transition: 'all .3s ease',
        '&:hover': {
            boxShadow: theme.shadows[5],
            transition: 'all .3s ease'
        }
    },
    cardProfile: {
        marginTop: 80
    },
    list: {
        width: '100%',

    },
    listItem: {
        padding: `${theme.spacing(1)}px 0`,
        transition: '.3s ease',
        cursor: 'pointer'
    },
    nested: {
        paddingLeft: theme.spacing(4)
    },
    'dialog-actions': {
        padding: theme.spacing(2),
        paddingRight: theme.spacing(3)
    }
}))