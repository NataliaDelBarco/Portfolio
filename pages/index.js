import Head from 'next/head'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CardButton from '../components/card-button'
import Header from '../components/header'
import Section from '../components/section'
import SocialButton from '../components/social-button'
import BurgerMenu from '../components/burger-menu'
import { animationOpacitySettings } from '../modules/animation/opacity'
import { getTextStyle } from '../modules/style/textStyle'
import useCtxDark from '../hooks/theme/useLofiThemeState'
import Title from '../components/title'

export default function Home() {
	const [lofiToggle] = useCtxDark()
	const [isToggleMenu, setIsToggleMenu] = useState(false)
	const textStyle = getTextStyle(lofiToggle)

	return (
		<>
			<Head>
				<title>Natalia del Barco</title>
			</Head>
			<AnimatePresence>
				<motion.div
					{...animationOpacitySettings}
					className={` ${lofiToggle && 'dark'}`}>
					<main className="bg-[url('/portfolio-nxtjs/img/FondoHiFiM.svg')] dark:bg-[url('/portfolio-nxtjs/img/FondoLoFiM.svg')] md:bg-[url('/portfolio-nxtjs/img/FondoHiFi.svg')] bg-no-repeat m-0 md:dark:bg-[url('/portfolio-nxtjs/img/FondoLoFi.svg')] w-full bg-cover bg-top">
						<Header
							isToggleMenu={isToggleMenu}
							manageToggleMenu={() =>
								setIsToggleMenu(!isToggleMenu)
							}
						/>
						<BurgerMenu
							isVisibleMenu={isToggleMenu}
							textStyle={textStyle}
							handleClickCloseMenu={() =>
								setIsToggleMenu(!isToggleMenu)
							}
						/>
						{/* Portada */}
						<Section
							nextSection="Sobre mí"
							nextSectionHref="#sobre-mi"
							id="intro"
							isFirstSection={true}>
							<motion.h1
								{...animationOpacitySettings}
								transition={{ delay: 1, duration: 2 }}
								className="font-serif text-4xl text-center pt-32 md:pt-0 md:text-start md:text-8xl dark:text-transparent transition-all duration-200"
								style={textStyle}>
								Portfolio <br />
								Natalia del Barco
							</motion.h1>
						</Section>
						{/* Sobre mi */}
						<Section
							prevSection="Intro"
							prevSectionHref="#intro"
							nextSection="Proyectos"
							nextSectionHref="#proyectos"
							id="sobre-mi">
							<div>
								<div className="flex flex-col md:flex-row items-center justify-center h-full">
									<div className="w-full md:h-[60vh] -mt-8 md:mt-0 md:w-1/2">
										<div className="md:pt-4">
											<Title>Sobre mí</Title>
										</div>

										<p className="md:mr-12 pt-4 pr-4 md:pt-10 md:h-[55vh] md:overflow-y-scroll pb-20 text-sm md:text-md lg:text-lg">
											Me llamo Natalia, soy{' '}
											<b className="font-bold">
												Diseñadora Gráfica
											</b>{' '}
											y<br />
											<b className="font-bold">
												Diseñadora de Producto
											</b>
											, ayudo a gestionar una experiencia
											de usuario e interfaz exitosa en el
											menor tiempo posible para las
											empresas del sector tecnológico.
											Realizo trabajo interdisciplinar,
											centrado en el ser humano. He
											trabajado en proyectos de cara al
											cliente para particulares y
											empresas; en la industria de la
											publicidad, marketing y
											comunicación. Gracias a los
											conocimientos en Diseño Gráfico,
											pongo en uso toda la creatividad y
											conocimientos artísticos en mi
											trabajo.
										</p>
									</div>
									<div className="flex items-center -mt-14 md:my-0 w-full md:w-1/2 h-full justify-center md:justify-between mx-auto md:ml-32">
										<div className="bg-[url('/portfolio-nxtjs/img/PerfilHiFi.webp')] dark:bg-[url('/portfolio-nxtjs/img/PerfilLoFi.webp')] h-48 w-48 md:h-[30rem] md:w-[30rem] bg-contain bg-no-repeat transition-all duration-200"></div>
									</div>
								</div>
							</div>
						</Section>
						{/* Proyectos */}
						<Section
							prevSection="Sobre Mí"
							prevSectionHref="#sobre-mi"
							nextSection="Contacta Conmigo"
							nextSectionHref="#contacta-conmigo"
							id="proyectos">
							<div className="w-full flex justify-center">
								<Title>Proyectos</Title>
							</div>
							<div className="w-full h-full flex md:flex-row flex-col justify-evenly md:justify-center md:gap-12 md:-mt-5 items-center">
								<CardButton
									isAlternative="true"
									title="UX/UI"
									isLofi={lofiToggle}
									hasGoToOtherPage
									routeToGo="/ui-ux"
									isCardProject
								/>
								<CardButton
									title="Diseño Gráfico"
									isLofi={lofiToggle}
									hasGoToOtherPage
									routeToGo="/diseno-grafico"
									isCardProject
								/>
							</div>
						</Section>
						<Section
							prevSection="Proyectos"
							prevSectionHref="#proyectos"
							id="contacta-conmigo">
							<div className="w-full pt-20 mx-auto text-center">
								<Title>¡Contacta conmigo!</Title>
							</div>
							<div className="flex gap-5  h-5 mt-24 justify-center items-center">
								<SocialButton
									bg="/portfolio-nxtjs/icons/Linkedin.svg"
									bgLofi="/portfolio-nxtjs/icons/LinkedinLo.svg"
									isLofi={lofiToggle}
									href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
								/>
								<SocialButton
									bg="/portfolio-nxtjs/icons/Medium.svg"
									bgLofi="/portfolio-nxtjs/icons/MediumLo.svg"
									isLofi={lofiToggle}
									href="https://medium.com/@nataliadelbarcorojas"
								/>
								<SocialButton
									bg="/portfolio-nxtjs/icons/mail.svg"
									bgLofi="/portfolio-nxtjs/icons/MailLo.svg"
									isLofi={lofiToggle}
									href="mailto:nataliadelbarcodesign@gmail.com"
								/>
								<SocialButton
									bg="/portfolio-nxtjs/icons/Behance.svg"
									bgLofi="/portfolio-nxtjs/icons/BehanceLo.svg"
									isLofi={lofiToggle}
									href="https://www.behance.net/nataliadelbarcorojas"
								/>
								<SocialButton
									bg="/portfolio-nxtjs/icons/Figma.svg"
									bgLofi="/portfolio-nxtjs/icons/FigmaLo.svg"
									isLofi={lofiToggle}
									href="https://www.figma.com/@nataliadelbarco"
								/>
							</div>
						</Section>
					</main>
				</motion.div>
			</AnimatePresence>
		</>
	)
}
