import React from 'react'
import { Button, makeStyles, Tooltip } from '@material-ui/core'
import { navigate } from '@reach/router'

const labelStyles = makeStyles({
    capitalize: {
        textTransform: 'capitalize'
    },
    upperCase: {
        textTransform: 'uppercase'
    },
    normal: {
        textTransform: 'none'
    }
})

const rootStyles = makeStyles({
    normal: {

    },
    icon: {
        width: '24px',
        margin: 0
    }
})

export default ({ children, textTransform = 'uppercase', variant, type = 'normal', tooltipText = null, path = null }) => {
    const labelClasses = labelStyles()
    const rootClasses = rootStyles()

    const handleClick = e => {
        if (path) navigate(path)
    }

    return (
        <Tooltip title={tooltipText} disableHoverListener={!tooltipText} leaveDelay={200}>
            <Button
                variant={variant}
                classes={{
                    label: labelClasses[textTransform],
                    root: rootClasses[type]
                }}
                onClick={handleClick}
            >
                { children }
            </Button>
        </Tooltip>
    )
}