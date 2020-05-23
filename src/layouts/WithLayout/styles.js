import styled, { css } from 'styled-components';
import PropTypes from 'prop-types'

export const LeftRightMain = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    height: 100%;
`

export const TopBottomMain = styled.div`
    flex-grow: 1;
    display: flex;
    overflow: auto;

    scroll-behavior: smooth;

    position: relative;

    > * {
        position: absolute;
    }

    @media print {
        overflow: visible;
    }
`

export const FullWidthContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const FlexibleSize = styled.div`
    ${({ width }) => width && css`width: ${width};`}
    ${({ height }) => height && css`height: ${height};`}
    transition: all .3s ease;
`

FlexibleSize.propTypes = {
    width: PropTypes.string.isRequired
}

export const Main = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
`
