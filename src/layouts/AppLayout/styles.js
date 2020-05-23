import styled from 'styled-components'
import { primaryColor } from '../../utils/styles/_vars'
import { flex } from '../../utils/styles/_mixins'

export const AppLayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: ${primaryColor};
    padding: 20px;
    box-sizing: border-box;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    border-radius: 20px;
    ${flex({ alignItems: 'flex-start', justifyContent: 'flex-start'})}
`

export const UserControls = styled.section`
    width: 100%;
    margin-bottom: 20px;
    ${flex({ direction: 'row', justifyContent: 'space-between', alignItems: 'center' })}
`

export const AuthControls = styled.div`
    ${flex({ direction: 'row' })}
`
export const Controls = styled.div`
    ${flex({ direction: 'row' })}

    & > h1 {
        margin-left: 15px;
    }
`

export const Email = styled.b`
    margin-left: 20px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
`
