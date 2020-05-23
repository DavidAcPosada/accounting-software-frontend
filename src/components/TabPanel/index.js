import React from 'react'
import { Typography } from '@material-ui/core'

export default ({ children, value, index, ...other }) => {
    return (
        <Typography
            component='div'
            role='tab-panel'
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            {...other}
        >
            { value === index && children }
        </Typography>
    )
}
