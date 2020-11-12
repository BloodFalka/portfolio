import * as React from 'react'
import styled from 'styled-components'
//@ts-ignore
import WOW from 'wow.js'
import '../../animations.scss'

type Props = {
	text: string,
}

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	text-align: center;
`

const StyledTitle = styled.h2`
	position: relative;

	margin: 50px 0px 30px 0px;
	font-weight: bold;
	font-size: 50px;
	line-height: 50px;

	color: #ffffff;

	@media (max-width: 992px) {
		margin: 50px 0px 30px 0px;
		font-size: 40px;
		line-height: 40px;
	}
	@media (max-width: 768px) {
		margin: 50px 0px 30px 0px;
		font-size: 30px;
		line-height: 30px;
	}
	@media (max-width: 576px) {
		margin: 15px 0px 15px 0px;
	}
`

export const Title: React.FC<Props> = ({ text }) => {
	React.useEffect(() => {
		const wow = new WOW()
		wow.init()
	}, [])
	return (
		<Wrapper className="wow fade-in">
			<StyledTitle data-text={text} className="title glitch">
				{text}
			</StyledTitle>
		</Wrapper>
	)
}
