import React from 'react'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined'

export default [
    {
        type: 'module',
        title: 'Módulos',
        children: [
            {
                id: 'home',
                title: 'Inicio',
                subtitle: 'Gráficos y Estadísticas',
                type: 'item',
                path: '/app',
                icon: <DashboardOutlinedIcon />
            },
            {
                id: 'sales',
                title: 'Ingresos y Egresos',
                subtitle: 'Gestión monetaría',
                type: 'item',
                path: '/app/sales',
                icon: <CompareArrowsOutlinedIcon />
            },
            {
                id: 'report',
                title: 'Reportes',
                subtitle: 'Descarga de informes',
                type: 'item',
                path: '/app/reports',
                icon: <DescriptionOutlinedIcon />
            }
        ]
    },
    {
        type: 'module',
        title: 'Más',
        children: [
            {
                id: 'settings',
                title: 'Ajustes',
                type: 'item',
                path: '/app/settings',
                icon: <SettingsOutlinedIcon />
            },
            {
                id: 'logout',
                title: 'Cerrar Sesión',
                type: 'item',
                action: () => alert('logout'),
                icon: <MeetingRoomOutlinedIcon />
            }
        ]
    }
]