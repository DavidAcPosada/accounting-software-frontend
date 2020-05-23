import styled from 'styled-components'
import { makeStyles } from "@material-ui/core";

import { flex } from './../../utils/styles/_mixins'

export default makeStyles(theme => ({
    container: {
        flexGrow: 1,
        padding: '0 20px'
    },
    paper: {
        borderRadius: 20,
        padding: theme.spacing(2),
        height: '100%'
    },
    marginInput: {
        marginBottom: theme.spacing(1)
    }
}))

export const PasswordHeader = styled.div`
    padding-bottom: 10px;
    ${flex({ direction: 'row', justifyContent: 'space-between' })}   
`
