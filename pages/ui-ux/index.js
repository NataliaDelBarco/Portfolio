import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'
import SectionItem from '../../components/section-item'
import CardButton from '../../components/card-button'
import SocialButton from '../../components/social-button'
import ButtonSection from '../../components/button-section'
import { projectsUI_UX } from '../../modules/projects/ui-ux/projectsEnum'
import Head from 'next/head'
import ProyectHeader from '../../components/project-header'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'
import { useEffect, useState } from 'react'
import createLog from '../../modules/supabase/createLog'

export default function UIUX() {
	const [isLofi] = useCtxLofi()
	const [dateOfEnter, setDateOfEnter] = useState(null)

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
				<title>Proyectos UX/UI</title>
			</Head>
			<AnimatePresence>
				<div className={` ${isLofi && 'dark'}`}>
					<motion.main
						{...animationOpacitySettings}
						id="proyectos"
						className="bg-[url(/portfolio/img/ProyectosUXhifi.svg)] dark:bg-[url(/portfolio/img/ProyectosUXlofi.svg)] bg-no-repeat m-0 bg-cover w-screen">
						<div>
							<ProyectHeader />
							<div className="snap snap-y snap-mandatory h-[90dvh] w-screen overflow-y-scroll">
								<section className="h-[100dvh] mx-8 text-center ">
									<div className="snap-start h-[10dvh] flex justify-center items-center">
										<span className="font-serif text-4xl md:text-4xl">
											Proyectos UX/UI
										</span>
									</div>
									<div className="md:flex md:flex-wrap grid-flow-row-dense grid grid-cols-2 md:grid-cols-3 justify-items-center md:px-48 gap-4 md:w-full mt-2 md:mt-10 md:justify-center">
										<div className="col-span-2 row-span-1 justify-self-stretch mx-2">
											<CardButton
												key={-1}
												title="Nuevos Proyectos"
												routeToGo="#proffesional"
												isLofi={isLofi}
												date="2023-Actualmente"
												isProffesional={true}
												isFullScreen={true}
											/>
										</div>

										{projectsUI_UX.map((proyect, index) => {
											return (
												<CardButton
													key={index}
													title={proyect.title}
													date={proyect.date}
													isAlternative={
														index % 2 === 0
													}
													routeToGo={`#${proyect.title}`}
													isLofi={isLofi}
												/>
											)
										})}
									</div>
								</section>
								<div>
									<section
										id="proffesional"
										className="font-serif justify-center text-center text-4xl md:text-4xl md:pt-0 h-[100dvh] md:h-[100dvh] my-[5dvh] md:my-0 snap-proximity">
										<div className="mx-auto snap-start pt-[10dvh] flex flex-col items-center justify-center">
											<h2> Nuevos Proyectos</h2>
											<p className="text-lg font-sans px-20 md:px-72 mt-10">
												Dispongo de un portfolio extra
												con proyectos profesionales más
												recientes que puede ser útil
												para cualquier proceso de
												contratación. Hazme una
												solicitud y me pondré en
												contacto contigo con esta
												información 😊👩🏽‍💻
											</p>
											<div className="mt-6 justify-center">
												<a href="mailto:nataliadelbarcodesign@gmail.com">
													<button className="font-sans text-[16px] md:px-6 transition-all duration-300 dark:hover:px-14 hover:shadow-2xl dark:hover:shadow-lofi hover:dark:border-4 px-12 rounded-full dark:bg-white dark:border-2 dark:border-black dark:from-white dark:to-white bg-gradient-to-r from-orange-300 to-yellow-100">
														Mandar solicitud
													</button>
												</a>
											</div>
										</div>
									</section>
									{projectsUI_UX.map((proyect, index) => {
										const prevProyect =
											projectsUI_UX[index - 1]
										const nextProyect =
											projectsUI_UX[index + 1]

										const {
											title,
											imageSrc,
											duration,
											role,
											typeOfWork,
											content,
											figmaLink,
											mediumLink,
											linkedInLink
										} = proyect

										return (
											<SectionItem
												id={title}
												key={title}
												title={title}
												isImageInRight={index % 2 !== 0}
												imageSrc={imageSrc}
												duration={duration}
												role={role}
												typeOfWork={typeOfWork}
												content={content}
												figmaLink={figmaLink}
												mediumLink={mediumLink}
												linkedInLink={linkedInLink}
												prevProyect={
													prevProyect
														? prevProyect.title
														: 'Proyectos'
												}
												prevProyectHref={
													prevProyect
														? `#${prevProyect.title}`
														: '#proyectos'
												}
												nextProyect={
													nextProyect
														? nextProyect.title
														: '¡Contacta Conmigo!'
												}
												nextProyectHref={
													nextProyect
														? `#${nextProyect.title}`
														: '#contacta'
												}
											/>
										)
									})}
									<section
										className="md:pt-0 h-[100dvh] md:h-[100dvh] my-[5dvh] md:my-0 flex flex-col justify-center snap-start"
										id="contacta">
										<div className="w-full pt-0 md:pt-0 mx-auto text-center">
											<span className="font-serif px-2 md:px-0 text-6xl md:text-8xl transition-all duration-200">
												¡Contacta conmigo!
											</span>
										</div>
										<div className="flex gap-5 h-5 md:h-auto mt-24 justify-center items-center">
											<SocialButton
												bg="/portfolio/icons/Linkedin.svg"
												bgLofi="/portfolio/icons/LinkedinLo.svg"
												href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
												isLofi={isLofi}
											/>
											<SocialButton
												bg="/portfolio/icons/Medium.svg"
												bgLofi="/portfolio/icons/MediumLo.svg"
												href="https://medium.com/@nataliadelbarcorojas"
												isLofi={isLofi}
											/>
											<SocialButton
												bg="/portfolio/icons/mail.svg"
												bgLofi="/portfolio/icons/MailLo.svg"
												href="mailto:nataliadelbarcodesign@gmail.com"
												isLofi={isLofi}
											/>
											<SocialButton
												bg="/portfolio/icons/Behance.svg"
												bgLofi="/portfolio/icons/BehanceLo.svg"
												href="https://www.behance.net/nataliadelbar"
												isLofi={isLofi}
											/>
											<SocialButton
												bg="/portfolio/icons/Figma.svg"
												bgLofi="/portfolio/icons/FigmaLo.svg"
												href="https://www.figma.com/@nataliadelbarco"
												isLofi={isLofi}
											/>
										</div>
									</section>
								</div>
							</div>
						</div>
					</motion.main>
				</div>
			</AnimatePresence>
		</>
	)
}
