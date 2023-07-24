import Head from 'next/head'
import { useState, useEffect } from 'react'
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

import createLog from '../modules/supabase/createLog'

export default function Home() {
	const [lofiToggle] = useCtxDark()
	const [isToggleMenu, setIsToggleMenu] = useState(false)
	const [dateOfEnter, setDateOfEnter] = useState(null)
	const textStyle = getTextStyle(lofiToggle)

	useEffect(() => {
		if (dateOfEnter === null) {
			setDateOfEnter(new Date())
		} else if (!process.env.NEXT_PUBLIC_IS_DEV_ENV) {
			createLog()
		}
	}, [dateOfEnter])

	return (
		<>
			<Head>
				<title>Natalia del Barco</title>
			</Head>
			<AnimatePresence>
				<motion.div
					{...animationOpacitySettings}
					className={` ${lofiToggle && 'dark'}`}>
					<main className="bg-[url('/portfolio/img/FondoHiFiM.svg')] dark:bg-[url('/portfolio/img/FondoLoFiM.svg')] md:bg-[url('/portfolio/img/FondoHiFi.svg')] bg-no-repeat m-0 md:dark:bg-[url('/portfolio/img/FondoLoFi.svg')] w-full bg-cover bg-top">
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
											<span>¡Hola!</span>
										<br/>
										Me llamo Natalia y entre otras muchas cosas soy{' '}
										<b className="font-bold">
											Diseñadora de Producto UX/UI,{' '}
										</b>
										desde hace 6 años me he centrado en estudiar el diseño y comprender cómo comunicar al usuario de una forma perspicaz y visual. Mi cometido es ayudar a gestionar una experiencia de usuario e interfaz exitosa en el menor tiempo posible, realizando un trabajo interdisciplinar, centrado en el ser humano. He trabajado en proyectos para particulares y empresas; en la industria de la publicidad, marketing, comunicación, farmacéutica y de energía.
										Gracias a los conocimientos en Diseño Gráfico, pongo en uso toda la creatividad y conocimientos prácticos en mi trabajo.
										Para saber un poquito más sobre mí tendrás que saber que soy amante de todos los animales (excepto bichos voladores) y casa de acogida, cocinera experta, gamer, friki de la tecnología, IA, domótica y diseño, hago trekking en entornos naturales y urbanos y  la fotografía, que me acompaña a donde vaya de viaje.
										¿Lo que más me motiva de mi trabajo? el poder mejorar la experiencia del usuario al interactuar con el producto, con un diseño bien enfocado, visual y perspicaz.
									</p>
								</div>
								<div className="flex items-center -mt-14 md:my-0 w-full md:w-1/2 h-full justify-center md:justify-between mx-auto md:ml-32">
									<div className="bg-[url('/portfolio/img/PerfilHiFi.webp')] dark:bg-[url('/portfolio/img/PerfilLoFi.webp')] h-48 w-48 md:h-[30rem] md:w-[30rem] bg-contain bg-no-repeat transition-all duration-200"></div>
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
								bg="/portfolio/icons/Linkedin.svg"
								bgLofi="/portfolio/icons/LinkedinLo.svg"
								isLofi={lofiToggle}
								href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
							/>
							<SocialButton
								bg="/portfolio/icons/Medium.svg"
								bgLofi="/portfolio/icons/MediumLo.svg"
								isLofi={lofiToggle}
								href="https://medium.com/@nataliadelbarcorojas"
							/>
							<SocialButton
								bg="/portfolio/icons/mail.svg"
								bgLofi="/portfolio/icons/MailLo.svg"
								isLofi={lofiToggle}
								href="mailto:nataliadelbarcodesign@gmail.com"
							/>
							<SocialButton
								bg="/portfolio/icons/Behance.svg"
								bgLofi="/portfolio/icons/BehanceLo.svg"
								isLofi={lofiToggle}
								href="https://www.behance.net/nataliadelbarcorojas"
							/>
							<SocialButton
								bg="/portfolio/icons/Figma.svg"
								bgLofi="/portfolio/icons/FigmaLo.svg"
								isLofi={lofiToggle}
								href="https://www.figma.com/@nataliadelbarco"
							/>
						</div>
					</Section>
				</main>
			</motion.div>
		</AnimatePresence >
		</>
	)
}
