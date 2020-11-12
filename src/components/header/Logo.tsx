import React from 'react'
import styled from 'styled-components'

export const LogoWrapper = styled.div`
	font-size: 40px;
	line-height: 40px;
`

export const Logo = () => {
	return (
		<LogoWrapper className="glitch" data-text="A">
			A
		</LogoWrapper>
	)
}
