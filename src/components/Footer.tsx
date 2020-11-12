import React from 'react'
import styled from 'styled-components'
import '../animations.scss'

const FooterWrapper = styled.div`
	position: absolute;
	bottom: 0;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 0px 25px;
	height: 50px;
	width: 100%;
	div {
		position: relative;
	}
	@media (max-width: 992px) {
	}
	@media (max-width: 768px) {
	}
	@media (max-width: 576px) {
		padding: 0px 15px;
		div {
			width: 60%;
			font-size: 10px;
		}
	}
`
export const Footer = () => {
	return (
		<FooterWrapper>
			<div className="glitch" data-text="Design by _kalenychenko(my wife?) & bloodfalka">
				Design by _kalenychenko(my wife?) & bloodfalka
			</div>
		</FooterWrapper>
	)
}
