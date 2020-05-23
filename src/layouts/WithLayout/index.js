import React from 'react'
import * as Layout from './styles'

export default ({ 
    children, 
    left, 
    leftWidth = '0', 
    right, rightWidth, top, topHeight, bottom, bottomHeight, className }) => 
    (
        <Layout.Main className={className}>
            { left && <Layout.FlexibleSize width={ leftWidth }>{ left }</Layout.FlexibleSize> }
             <Layout.LeftRightMain>
                { top && <Layout.FlexibleSize height={ topHeight }>{ top }</Layout.FlexibleSize> }
                 <Layout.TopBottomMain>
                     <Layout.FullWidthContainer>
                        { children }
                     </Layout.FullWidthContainer>
                 </Layout.TopBottomMain>
                { bottom && <Layout.FlexibleSize height={ bottomHeight }>{ bottom }</Layout.FlexibleSize> }
             </Layout.LeftRightMain>
            { right && <Layout.FlexibleSize width={ rightWidth }>{ right }</Layout.FlexibleSize> }
        </Layout.Main>
    )