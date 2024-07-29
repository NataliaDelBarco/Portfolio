import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../../modules/animation/opacity'
import SectionItem from '../../../components/section-item'
import CardButton from '../../../components/card-button'
import SocialButton from '../../../components/social-button'
import ButtonSection from '../../../components/button-section'
import { projectsUI_UX } from '../../../modules/projects/ui-ux/en/projectsEnum'
import Head from 'next/head'
import ProyectHeader from '../../../components/project-header'
import useCtxLofi from '../../../hooks/theme/useLofiThemeState'
import { useEffect, useState } from 'react'
import createLog from '../../../modules/supabase/createLog'

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
				<title>UX/UI Projects</title>
			</Head>
			<AnimatePresence>
				<div className={` ${isLofi && 'dark'}`}>
					<motion.main
						{...animationOpacitySettings}
						id="projects"
						className="bg-[url(/portfolio/img/ProyectosUXhifi.svg)] dark:bg-[url(/portfolio/img/ProyectosUXlofi.svg)] bg-no-repeat m-0 bg-cover w-screen">
						<div>
							<ProyectHeader language="en" />
							<div className="snap snap-y snap-mandatory h-[90dvh] w-screen overflow-y-scroll">
								<section className="h-[100dvh] mx-8 text-center ">
									<div className="snap-start h-[10dvh] flex justify-center items-center">
										<span className="font-serif text-4xl md:text-4xl">
											UX/UI Projects
										</span>
									</div>
									<div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:px-32 gap-8 md:w-full mt-10 md:mt-10 justify-center">
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
												language={'en'}
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
									})}
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
						</div>
					</motion.main>
				</div>
			</AnimatePresence>
		</>
	)
}
