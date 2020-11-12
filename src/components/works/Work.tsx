import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { GiSpiderWeb } from 'react-icons/gi'
import cn from 'classnames'
import '../../animations.scss'
//@ts-ignore
import WOW from 'wow.js'

type WrapperProps = {
	active?: boolean,
}

const Wrapper =
	styled.section <
	WrapperProps >
	`
	cursor: pointer;
	.work-img.active{
		cursor: auto;
		&:after{
			-webkit-clip-path: inset(0 0 0 0 round 10px);
			clip-path: inset(0 0 1rem 0 round 10px);
			-webkit-transition-delay: 0s;
			transition-delay: 0s;
		}
	}

	@media (max-width: 992px) {
	}
	@media (max-width: 768px) {
		margin-top: 20px;
		display:flex;
		align-items: center;
		justify-content: center;
		width: 100%;

	}
	@media (max-width: 576px) {
		margin-top: 40px;
		height: 130px;
	}
`

type WorkImgProps = {
	img: string,
}

const WorkImg =
	styled.div <
	WorkImgProps >
	`
	transition: height 0.5s, width 0.5s;
	position: relative;
	width: 400px;
	height: 280px;

	.background{
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 15px;
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),  ${(props) =>
			`url(${props.img})`};
    	background-repeat: no-repeat;
    	background-size: cover;
		z-index: 1;
		&.active{
			background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%),  ${(props) =>
				`url(${props.img})`};
		}
	}
	@media (max-width: 1400px) {
		width: 280px;
		height: 200px;
	}
	@media (max-width: 992px) {
		width: 280px;
		height: 200px;
	}
	@media (max-width: 768px) {	
		width: 230px;
		height: 130px;
	}
	@media (max-width: 576px) {
		width: 250px;
		height: 140px;
	}
	&:after{
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: -3.1rem;
		left: 0;
		margin: -1rem;
		border-radius: 10px;
		overflow: hidden;
		z-index: 0;
		background: #0c212f; 
		-webkit-clip-path: inset(2rem 0 2rem 2rem round 10px);
		clip-path: inset(2rem 0 1.5rem 2rem round 10px);
		contain: strict;
		-webkit-transition: -webkit-clip-path 0.3s ease 0.1s;
		transition: -webkit-clip-path 0.3s ease 0.1s;
		transition: clip-path 0.3s ease 0.1s;
		transition: clip-path 0.3s ease 0.1s, -webkit-clip-path 0.3s ease 0.1s;
	}
`

const WorkTitle = styled.h2`
	width: 100%;
	color: white;
	text-align: center;
	position: absolute;
	bottom: -2.1rem;
	margin: 0px;
	z-index: 1;
	font-size: 24px;
	@media (max-width: 992px) {
	}
	@media (max-width: 768px) {
		font-size: 18px;
	}
	@media (max-width: 576px) {
	}
`

const ActiveOverlay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;

	border-radius: 15px;
	padding: 15px;
	position: relative;
	z-index: 2;
	.text {
		font-size: 13px;
		color: white;
		min-height: 70%;
		max-height: 70%;
		overflow-y: auto;
	}
	.buttons {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 992px) {
	}
	@media (max-width: 768px) {
		font-size: 15px;
	}
	@media (max-width: 576px) {
		.text {
			font-size: 11px;

			min-height: 70%;
			max-height: 70%;
		}
	}
`

type Props = {
	title: string,
	img: string,
	gitLink?: string,
	webLink: string,
}

export const Work: React.FC<Props> = ({ title, img, children, gitLink, webLink }) => {
	useEffect(() => {
		const wow = new WOW()
		wow.init()
	}, [])
	const [isActive, setIsActive] = useState(false)

	const activateIt = () => {
		setIsActive(!isActive)
	}

	return (
		<Wrapper
			className="wow fade-in"
			onMouseEnter={activateIt}
			onMouseLeave={activateIt}
			onClick={() => !isActive && activateIt}
			active={isActive}
		>
			<WorkImg className={cn('work-img', { active: isActive })} img={img}>
				<div className={cn('background', { active: isActive })}></div>
				{isActive && (
					<ActiveOverlay>
						<div className="text">{children}</div>
						<div className="buttons">
							{gitLink && <GoToButton image={'git'} href={gitLink} />}
							<GoToButton image={'web'} href={webLink} />
						</div>
					</ActiveOverlay>
				)}
				<WorkTitle>{title}</WorkTitle>
			</WorkImg>
		</Wrapper>
	)
}

const GoToButtonStyledLink = styled.a`
	margin: 10px 15px;

	color: black;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 5px;
	width: 65px;
	height: 45px;
	font-size: 30px;

	&:hover,
	&:active {
		color: white;
	}
	@media (max-width: 992px) {
	}
	@media (max-width: 768px) {
		margin: 10px 15px 0px 15px;
		width: 40px;
		height: 30px;
		font-size: 20px;
		&:hover,
		&:active {
			font-size: 25px;
		}
	}
	@media (max-width: 576px) {
	}
`

type GoToButtonProps = {
	href: string,
	image: 'git' | 'web',
}

const GoToButton: React.FC<GoToButtonProps> = ({ href, image }) => {
	return (
		<GoToButtonStyledLink className="hvr-bounce-to-top" href={href} target="_blank" rel="noreferrer">
			{image === 'git' ? <AiFillGithub /> : <GiSpiderWeb />}
		</GoToButtonStyledLink>
	)
}
