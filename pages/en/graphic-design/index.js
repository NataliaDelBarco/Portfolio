import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../../modules/animation/opacity'
import SectionItem from '../../../components/section-item'
import CardButton from '../../../components/card-button'
import SocialButton from '../../../components/social-button'
import ButtonSection from '../../../components/button-section'
import { projectsDisenoGrafico } from '../../../modules/projects/diseno-grafico/en/projectsEnum'
import ProyectHeader from '../../../components/project-header'
import useCtxLofi from '../../../hooks/theme/useLofiThemeState'
import Title from '../../../components/title'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import createLog from '../../../modules/supabase/createLog'

export default function DisenoGrafico() {
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
				<title>Graphic Design Projects</title>
			</Head>
			<AnimatePresence>
				<div className={` ${isLofi && 'dark'}`}>
					<motion.main
						{...animationOpacitySettings}
						className="bg-[url(/portfolio/img/ProyectosDGHiFi.svg)] dark:bg-[url(/portfolio/img/ProyectosDGLoFi.svg)] bg-no-repeat m-0 bg-cover w-screen">
						<div>
							<ProyectHeader language="en" />
							<div
								id="projects"
								className="snap snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
								<section className="h-[70dvh] mb-[30dvh] md:mt-[10dvh] mx-8 text-center flex items-center justify-center md:items-start snap-start">
									<div className="flex flex-col gap-10 md:gap-20">
										<div className="mt-10">
											<Title notChangeStyle>
												Graphic Design
											</Title>
											<div className="block mt-2">
												<Title notChangeStyle>
													Projects
												</Title>
											</div>
										</div>
										<div className="flex justify-center items-center">
											<div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center md:px-[5vw] gap-8 md:w-full justify-center">
												{projectsDisenoGrafico.map(
													(proyect, index) => {
														return (
															<CardButton
																key={
																	proyect.title
																}
																title={
																	proyect.title
																}
																date={
																	proyect.date
																}
																isAlternative={
																	index %
																		2 ===
																	0
																}
																isLofi={isLofi}
																routeToGo={`#${proyect.title}`}
															/>
														)
													}
												)}
											</div>
										</div>
									</div>
								</section>
								<div>
									{projectsDisenoGrafico.map(
										(proyect, index) => {
											const prevProyect =
												projectsDisenoGrafico[index - 1]
											const nextProyect =
												projectsDisenoGrafico[index + 1]

											const {
												title,
												imageSrc,
												duration,
												role,
												typeOfWork,
												content,
												behanceLink,
												externalLink
											} = proyect

											return (
												<SectionItem
													key={title}
													language="en"
													id={title}
													title={title}
													isImageInRight={
														index % 2 !== 0
													}
													imageSrc={imageSrc}
													duration={duration}
													role={role}
													typeOfWork={typeOfWork}
													content={content}
													behanceLink={behanceLink}
													externalLink={externalLink}
													prevProyect={
														prevProyect
															? prevProyect.title
															: 'Projects'
													}
													prevProyectHref={
														prevProyect
															? `#${prevProyect.title}`
															: '#projects'
													}
													nextProyect={
														nextProyect
															? nextProyect.title
															: 'Contact me!'
													}
													nextProyectHref={
														nextProyect
															? `#${nextProyect.title}`
															: '#contact'
													}
												/>
											)
										}
									)}
								</div>

								<section
									className="md:pt-0 h-[100dvh] md:h-[100dvh] my-[5dvh] md:my-0 flex flex-col justify-center snap-start"
									id="contact">
									<div className="w-full pt-0 md:pt-0 mx-auto text-center">
										<span className="font-serif px-2 md:px-0 text-6xl md:text-8xl transition-all duration-200">
											Contact me!
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
					</motion.main>
				</div>
			</AnimatePresence>
		</>
	)
}
