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
						<div className="snap snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
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
									¡Hola! Soy
								</motion.h1>
								<motion.h1
									{...animationOpacitySettings}
									transition={{ delay: 1, duration: 2 }}
									className="font-serif mt-5 text-4xl text-center pt-6 md:pt-0 md:text-start md:text-8xl dark:text-transparent transition-all duration-200"
									style={textStyle}>
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
										<div className="w-full md:h-[60dvh] -mt-8 md:mt-0 md:w-1/2">
											<div className="pt-4">
												<Title>Sobre mí</Title>
											</div>

											<div className="md:mr-12 pt-4 pr-4 md:pt-10 md:h-[55dvh] h-[30dvh] overflow-y-auto pb-[2dvh] text-sm md:text-[16px] sobreMi">
												<p>
													Soy{' '}
													<span className="font-bold">
														Diseñadora de Producto
														UX/UI,{' '}
													</span>
													trabajo en UX/UI desde hace
													casi{' '}
													<span className="font-bold">
														3 años
													</span>
													, aunque tengo un background
													de{' '}
													<span className="font-bold">
														7 años en Diseño
														Gráfico,
													</span>{' '}
													donde me he centrado en
													estudiar diseño y entender
													cómo comunicar al usuario de
													una forma perspicaz y
													visual.
												</p>
												<br />
												<p>
													👩🏽‍💻 Mi misión es ayudar a
													gestionar una UX y UI
													exitosa en el menor tiempo
													posible, haciendo un trabajo
													interdisciplinario y
													centrado en el ser humano.
													He trabajado en proyectos
													para particulares y
													empresas; en la{' '}
													<span className="font-bold">
														Industria de la
														Automoción
													</span>{' '}
													con{' '}
													<span className="font-bold">
														Cupra
													</span>
													,
													<span className="font-bold">
														{' '}
														Gobierno de España,
														Telefónica, Mapfre,{' '}
													</span>
													<span className="font-normal">
														en la industria de la{' '}
													</span>
													<span className="font-bold">
														Publicidad y Marketing,
														Comunicación, Banca,
														Financiera, Farmacéutica
														y Energía.{' '}
													</span>
													Gracias a mis conocimientos
													en Diseño Gráfico, utilizo
													toda mi creatividad y
													conocimientos prácticos en
													mi trabajo
												</p>
												<br />
												<p>
													🙎🏽‍♀️ Me apasiona la
													tecnología, me verás en
													convenciones para aprender
													más sobre innovación en el
													mundo tech y mi principal
													interés es la IA, domótica y
													tendencias de diseño. Soy
													casa de acogida de una
													asociación de animales, me
													encanta cocinar y
													experimentar, gamer, hago
													senderismo para tener las
													ideas claras, me encanta la
													fotografía, que me acompaña
													allá donde voy.
												</p>
												<br />
												<p>
													💕 ¿Qué es lo que más me
													motiva de mi trabajo? Poder
													mejorar la experiencia del
													usuario al interactuar con
													el producto, con un diseño
													bien enfocado y poder
													aprender de cada proyecto.
												</p>
											</div>
										</div>
										<div className="flex items-center mt-[4dvh] md:-mt-14 md:my-0 w-full md:w-1/2 h-full justify-center md:justify-between mx-auto md:ml-32">
											<div className="bg-[url('/portfolio/img/PerfilHiFi.png')] dark:bg-[url('/portfolio/img/PerfilLoFi.webp')] h-48 w-48 md:h-[30rem] md:w-[30rem] bg-contain bg-no-repeat transition-all duration-200"></div>
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
							<Section id="contacta-conmigo">
								<div className="w-full mx-auto text-center">
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
						</div>
					</main>
				</motion.div>
			</AnimatePresence>
		</>
	)
}
