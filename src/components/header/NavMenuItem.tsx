import React from 'react'
import styled from 'styled-components'
//@ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const NavMenuItemWrapper = styled(AnchorLink)`
	position: relative;
	display: inline-block;
	overflow: hidden;
	color: black;
	text-decoration: none;
	font-size: 30px;
	cursor: pointer;
	background: linear-gradient(to right, #a5313e, #a5313e 50%, black 50%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-size: 200% 100%;
	background-position: 100%;
	transition: background-position 0.5s ease;

	& + & {
		margin-left: 80px;
	}
	&:hover,
	&:active {
		background-position: 0 100%;
	}
	@media (max-width: 992px) {
		font-size: 22px;
		& + & {
			margin-left: 20px;
		}
	}

	@media (max-width: 576px) {
		& + & {
			margin-left: 15px;
		}
		font-size: 16px;
	}
`

type NavMenuItemProps = {
	text: string,
	className?: string,
	href: string,
}
export const NavMenuItem: React.FC<NavMenuItemProps> = ({ text, className, href }) => {
	return (
		<NavMenuItemWrapper className={className} href={href}>
			{text}
		</NavMenuItemWrapper>
	)
}
