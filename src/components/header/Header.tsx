import React from 'react'
import styled from 'styled-components'
import { Container } from '../common/Container'
import { Logo } from './Logo'
import { NavMenu } from './NavMenu'

const HeaderWrapper = styled.div`
	position: fixed;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	top: 0;
	z-index: 10;
	padding: 0px 25px;
	height: 50px;
	width: 100%;
`
export const Header = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<NavMenu />
		</HeaderWrapper>
	)
}
