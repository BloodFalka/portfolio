import React from 'react'
import styled from 'styled-components'
import { Header } from './header/Header'
import { AboutMe } from './AboutMe'
import { Works } from './works/Works'
import { MySkills } from './MySkills'
import { Footer } from './Footer'
import Favicon from 'react-favicon'

const AppWrapper = styled.div`
	background-color: black;
`

const App: React.FC<any> = () => {
	return (
		<AppWrapper>
			<Favicon url="./favicon.ico" />
			<Header />
			<AboutMe />
			<Works />
			<MySkills />
			<Footer />
		</AppWrapper>
	)
}

export default App
