import React from 'react'
import styled from 'styled-components'

type Props = {
	large?: boolean,
}

const Wrapper =
	styled.div <
	Props >
	`
	display: flex;
	max-width: ${(props) => (props.large ? `1440px` : '1200px')}; 
	justify-content: center;
	padding: 25px;
`

export const Container: React.FC<Props> = ({ large, children }) => {
	return (
		<Wrapper large={large} className="container">
			{children}
		</Wrapper>
	)
}
