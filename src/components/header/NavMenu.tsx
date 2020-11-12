import React from 'react'
import styled from 'styled-components'
import { NavMenuItem } from './NavMenuItem'

export const NavMenuWrapper = styled.div`
	display: flex;
	margin-left: 100px;
	align-items: center;
	justify-content: center;
	@media (max-width: 992px) {
		margin-left: 45px;
	}
	@media (max-width: 576px) {
		margin-left: 30px;
	}
`

export const NavMenu = () => {
	return (
		<NavMenuWrapper>
			<NavMenuItem href={'#aboutMe'} text={'aboutMe'} />
			<NavMenuItem href={'#works'} text={'works'} />
			<NavMenuItem href={'#mySkills'} text={'mySkills'} />
		</NavMenuWrapper>
	)
}
