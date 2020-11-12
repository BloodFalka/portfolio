import React, { useEffect } from 'react'
import styled from 'styled-components'
//@ts-ignore
import TagCloud from 'TagCloud'

type Props = {
	color: string | number,
	speed: number,
}

const TagsCloud: React.FC<Props> = ({ speed, color }) => {
	let tagsRadius = 250

	const mqlXS = window.matchMedia('all and (max-width: 575px)')
	const mqlS = window.matchMedia('all and (max-width: 767px)')
	const mqlM = window.matchMedia('all and (max-width: 991px)')
	if (mqlM.matches) {
		tagsRadius = 150
	}
	if (mqlS.matches) {
		tagsRadius = 150
	}
	if (mqlXS.matches) {
		tagsRadius = 100
	}
	console.log(tagsRadius)

	const tagName = [
		'HTML5',
		'React (hooks)',
		'npm, yarn',
		'Typescript',
		'git',
		'BEM',
		'Ajax (axios, fetch)',
		'JS (ES6+)',
		'styled components',
		'Redux-Thunk',
		'Redux',
		'CSS (sass, scss, less)',
	]
	//@ts-ignore
	useEffect(() => {
		const tc = TagCloud('.tagContent', tagName, { radius: tagsRadius })
		console.log(tc)
	}, [])
	return (
		<Wrapper>
			<CloudWrapper className="tagContent" />
		</Wrapper>
	)
}

const CloudWrapper = styled.div`
	width: 500px;
	height: 550px;

	.tagcloud--item {
		color: white;
	}
	@media (max-width: 992px) {
		margin-top: 0px;
		height: 350px;
		width: 300px;
		.tagcloud--item {
			font-size: 14px;
		}
	}
	@media (max-width: 768px) {
	}
	@media (max-width: 576px) {
		height: 250px;
		width: 200px;
		.tagcloud--item {
			font-size: 12px;
		}
	}
`

const Wrapper = styled.div`
	margin-top: -20px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export default TagsCloud
