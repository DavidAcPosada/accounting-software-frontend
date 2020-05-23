import React from 'react'
import posed from 'react-pose'
import { Helmet } from 'react-helmet'

const ReportsContainer = posed.div({
    enter: { staggerChildren: 50, opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
})

export default () => {
    localStorage.setItem('title', 'Reportes')
    return (
        <ReportsContainer>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reportes - esa</title>
            </Helmet>
            <h1>Reports</h1>
        </ReportsContainer>
    )
}