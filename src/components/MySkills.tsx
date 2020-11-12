import * as React from 'react'
import styled from 'styled-components'
import { Title } from './common/Title'
import TagsCloud from './TagsCloud'
//@ts-ignore
import WOW from 'wow.js'

const Wrapper = styled.div`
	.title {
		margin-top: 70px;
	}
`

export const MySkills = () => {
	React.useEffect(() => {
		const wow = new WOW()
		wow.init()
	}, [])
	return (
		<Wrapper id="mySkills" className="wow fade-in">
			<Title text="mySkills" />
			<TagsCloud color={'#fff'} speed={1} />
		</Wrapper>
	)
}
