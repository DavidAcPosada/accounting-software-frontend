import styled from 'styled-components'
import posed from 'react-pose'

import {flex} from './../../utils/styles/_mixins'
import { Paper } from '@material-ui/core'

const Container = posed.div({
    enter: { staggerChildren: 50, opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 }
})

export const SalesContainer = styled(Container)`
    padding: 20px;
    padding-top: 0;
`

export const Locals = styled.div`
    ${flex({ direction: 'row', justifyContent: 'flex-start' })}
`

export const Actions = styled.div`
    ${flex({ direction: 'row', justifyContent: 'flex-end' })}
`

export const SalesNavigation = styled(Paper)`
    border-radius: 50px;
    padding: 0 30px;
    ${flex({ direction: 'row', justifyContent: 'space-between' })}
`
