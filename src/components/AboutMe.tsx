import * as React from 'react'
import styled from 'styled-components'
import myPhoto from '../assets/img/myPhoto.webp'
//@ts-ignore
import WOW from 'wow.js'
import '../animations.scss'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	color: white;

	@media (max-width: 576px) {
		margin-bottom: 210px;
		margin-top: 30px;
	}
`

const BgSqr = styled.div`
	margin-top: 100px;
	position: relative;
	display: flex;
	padding: 15px;
	width: 480px;
	height: 480px;
	background: #cc3642;
	border-radius: 30px;
	transform: translateX(-50%);
	.photo-bg {
		position: absolute;
		left: 42%;
		top: 25%;
		width: 50%;
		height: 72%;
		background: #a5313e;
		border-radius: 30px;
		img {
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 3;
			width: auto;
			height: 380px;
			border-radius: 30px;
		}
	}
	.text {
		width: 300px;
		margin-left: 90px;
		text-align: center;
		font-size: 60px;
		font-weight: bold;
		line-height: 55px;
		color: #a5313e;
		transform: rotate(270deg);
		&:hover {
			animation: flip 0.9s infinite step-end;
		}
	}
	@media (max-width: 992px) {
		width: 350px;
		height: 350px;

		.photo-bg {
			background: #a5313e;
			border-radius: 15px;

			img {
				height: 105%;
				border-radius: 15px;
			}
		}
		.text {
			margin-left: 15px;
			font-size: 35px;
			line-height: 37px;
		}
	}
	@media (max-width: 768px) {
		width: 270px;
		height: 270px;

		.photo-bg {
			background: #a5313e;
			border-radius: 15px;
			img {
				height: 105%;
				border-radius: 15px;
			}
		}
		.text {
			margin-left: 0px;
			font-size: 28px;
			line-height: 29px;
		}
	}
	@media (max-width: 576px) {
		margin-top: 50px;
		width: 150px;
		height: 150px;
		.photo-bg {
			width: 80%;
			height: 130%;
			top: 85%;
			left: 20%;
			background: #a5313e;
			border-radius: 15px;
			img {
				height: 95%;
				border-radius: 15px;
			}
		}
		.text {
			width: 120px;
			font-size: 18px;
			line-height: 19px;
		}
	}
`
const FrontSqr = styled.div`
	top: 10%;
	left: 50%;
	position: absolute;
	padding: 15px;
	width: 150%;
	height: 80%;
	background: #0c212f;
	border-radius: 30px;
	h2 {
		display: inline-block;
		position: relative;
		z-index: 2;
		margin: 0;
		font-size: 50px;
		text-align: center;
		cursor: text;
		span {
			position: absolute;
			top: 0;
			right: 0;
			background: #0c212f;
			width: 100%;
			border-left: 0.1em solid transparent;
			-webkit-animation: typing 3s steps(16) forwards, cursor 1s infinite;
			animation: typing 3s steps(16) forwards, cursor 1s infinite;
		}
	}
	pre {
		z-index: 1;
		position: absolute;
		font-size: 15px;
		line-height: 19px;
		top: 0;
		left: 0;
		left: 25px;
		color: rgba(204, 54, 66, 0.3);
	}
	div {
		word-break: break-all;
		position: relative;
		z-index: 2;
		font-size: 19px;
		line-height: 21px;
		margin: 15px 0px 0px 150px;
	}
	@media (max-width: 992px) {
		h2 {
			font-size: 20px;
			padding: 0px 5px 0px 0px;
		}
		pre {
			font-size: 11px;
			line-height: 14px;
			left: 15px;
		}
		div {
			font-size: 14px;
			line-height: 15px;
			margin: 10px 0px 0px 28%;
		}
	}
	@media (max-width: 768px) {
		top: 10%;
		pre {
			font-size: 9px;
			line-height: 12px;
			left: 15px;
		}
		div {
			font-size: 13px;
			line-height: 14px;
			margin: 10px 0px 0px 28%;
		}
	}
	@media (max-width: 576px) {
		height: auto;

		min-height: 280px;
		pre {
			font-size: 9px;
			line-height: 12px;
			left: 15px;
		}
		div {
			margin: 10px 0px 0px 18%;
			font-size: 12px;
			line-height: 13px;
		}
	}
`

export const AboutMe = () => {
	React.useEffect(() => {
		const wow = new WOW()
		wow.init()
	}, [])
	return (
		<Wrapper id="aboutMe" className="wow fade-in">
			<BgSqr>
				<div className="text flicker-in-1">JUNIOR FRONTEND DEVELOPER</div>
				<div className="photo-bg">
					<img src={myPhoto} alt="myPhoto" className="scale-in-bl" />
				</div>

				<FrontSqr>
					<h2>
						antony_ivanchuk&nbsp;
						<span>&nbsp;</span>
					</h2>
					<pre>
						{String.raw`import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Favicon from 'react-favicon'
import AppContainer from './AppContainer' 
import { Provider } from 'react-redux'
import store ./../redux/store'

const App = () => {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Favicon url="./favicon.ico" />
	<Provider store={store}>
	 <AppContainer />
    </Provider>
   </BrowserRouter>
  )
}

export default App`}
					</pre>
					<div>
						ANToxa MC люблю жінку та Україну. Користуюся реактом(Reactor), він бавить мене. Фронтенд моє хоббі
						та робота(ні). Хочу знати все і уміти все
					</div>
				</FrontSqr>
			</BgSqr>
		</Wrapper>
	)
}
