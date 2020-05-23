import React from 'react'
import posed from 'react-pose'
import { Helmet } from 'react-helmet'

const SettingsContainer = posed.div({
    enter: { staggerChildren: 50, opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
})
export default () => {
    return (
        <SettingsContainer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Ajustes - esa</title>
            </Helmet>
            <h1>Settings</h1>
        </SettingsContainer>
    )
}