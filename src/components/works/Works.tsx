import * as React from 'react'
import styled from 'styled-components'
import { Title } from '../common/Title'
import { Work } from './Work'
import bulkaImg from '../../assets/img/worksBg/bulka.webp'
import clikerImg from '../../assets/img/worksBg/clicker.webp'
import SNImg from '../../assets/img/worksBg/SN.webp'

const WorksWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	.works {
		margin-top: 0px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 50px;
	}
	@media (max-width: 992px) {
		.works {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 768px) {
		.works {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 576px) {
		.works {
			grid-gap: 40px;
			grid-template-columns: 1fr;
		}
	}
`
const CentredText = styled.div`
	text-align: center;
	span {
		user-select: all;
		cursor: auto;
	}
`

const Wrapper = styled.div`
	@media (max-width: 576px) {
		.title {
		}
	}
`

export const Works = () => {
	return (
		<Wrapper id="works">
			<Title text="myWorks" />
			<WorksWrapper>
				<div className="works">
					<Work
						gitLink={'https://github.com/BloodFalka/social-network'}
						webLink={'https://bloodfalka.ru/social-network'}
						title={'SOCIAL NETWORK'}
						img={SNImg}
					>
						Соціальна мережа на ReactJs. Використані такі технології: React(hooks), Redux, Redux-Thunk, axios,
						Typescript. <br />
						Бекенд не мій, доступу до ендпоінтів реєстрації не маю.
						<CentredText>Данні для входу:</CentredText>
						<CentredText>
							E-mail: <span>qwer250399@gmail.com</span>
						</CentredText>
						<CentredText>
							Password: <span>KZQrWJARe9xbq6FH</span>
						</CentredText>
					</Work>
					<Work webLink={'https://bloodfalka.ru/clicker'} title={'CLICKER'} img={clikerImg}>
						Моя проба пера (точніше клавіатури) в React. Зараз неактуальний, бо я зіткнувся з проблемою
						локального state, після чого вивчив Redux і зараз в вільний час створюю нову гру-клікер з бекендом
						(реєстрація та збереження) використовуючи сучасні підходи до розробки React додатків.
					</Work>

					<Work
						gitLink={'https://github.com/BloodFalka/bulka'}
						webLink={'https://bulka.bloodfalka.ru'}
						title={'BULKA'}
						img={bulkaImg}
					>
						Сайт-візитка художнього візуалізатора. <br />
						Реалізована відправка форми на пошту, mansory-layout галерея, просте модальне вікно. Сайт працює
						на Wordpress
					</Work>
				</div>
			</WorksWrapper>
		</Wrapper>
	)
}
