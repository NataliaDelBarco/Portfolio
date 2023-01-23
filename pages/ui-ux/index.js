import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'
import SectionItem from '../../components/section-item'
import CardButton from '../../components/card-button'
import SocialButton from '../../components/social-button'
import ButtonSection from '../../components/button-section'
import { proyectsUI_UX } from '../../modules/proyects/ui-ux/proyectsEnum'
import Head from 'next/head'
import ProyectHeader from '../../components/project-header'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'

export default function UIUX() {
	const [isLofi] = useCtxLofi()

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
						className="bg-[url(/prtfolio/img/ProyectosUXhifi.svg)] dark:bg-[url(/prtfolio/img/ProyectosUXlofi.svg)] bg-no-repeat m-0 bg-cover w-screen">
						<div>
							<ProyectHeader />
							<section className="h-[100vh] mx-8 text-center">
								<div className="mt-8">
									<span className="font-serif text-4xl md:text-6xl">
										Proyectos UX/UI
									</span>
								</div>
								<div className="grid grid-cols-2 md:grid-cols-3 justify-items-center md:px-32 gap-8 md:w-full mt-20 justify-center">
									{proyectsUI_UX.map((proyect, index) => {
										return (
											<CardButton
												key={index}
												title={proyect.title}
												date={proyect.date}
												isAlternative={index % 2 === 0}
												routeToGo={`#${proyect.title}`}
												isLofi={isLofi}
											/>
										)
									})}
								</div>
							</section>
							<div>
								{proyectsUI_UX.map((proyect, index) => {
									const prevProyect = proyectsUI_UX[index - 1]
									const nextProyect = proyectsUI_UX[index + 1]

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
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1 }}
								className="w-full relative flex justify-center items-start -mt-3">
								<a href="#Vegrows">
									<ButtonSection
										text="Vegrows"
										isPrev="true"
									/>
								</a>
							</motion.div>
							<section
								className="h-[80vh] flex flex-col justify-center md:justify-start"
								id="contacta">
								<div className="w-full pt-0 md:pt-40  mx-auto text-center">
									<span className="font-serif px-2 md:px-0 text-6xl md:text-8xl transition-all duration-200">
										¡Contacta conmigo!
									</span>
								</div>
								<div className="flex gap-5  h-5 mt-24 justify-center items-center">
									<SocialButton
										bg="/prtfolio/icons/Linkedin.svg"
										bgLofi="/prtfolio/icons/LinkedinLo.svg"
										href="https://www.linkedin.com/in/natalia-del-barco-rojas-product-designer/"
										isLofi={isLofi}
									/>
									<SocialButton
										bg="/prtfolio/icons/Medium.svg"
										bgLofi="/prtfolio/icons/MediumLo.svg"
										href="https://medium.com/@nataliadelbarcorojas"
										isLofi={isLofi}
									/>
									<SocialButton
										bg="/prtfolio/icons/mail.svg"
										bgLofi="/prtfolio/icons/MailLo.svg"
										href="mailto:nataliadelbarcodesign@gmail.com"
										isLofi={isLofi}
									/>
									<SocialButton
										bg="/prtfolio/icons/Behance.svg"
										bgLofi="/prtfolio/icons/BehanceLo.svg"
										href="https://www.behance.net/nataliadelbar"
										isLofi={isLofi}
									/>
									<SocialButton
										bg="/prtfolio/icons/Figma.svg"
										bgLofi="/prtfolio/icons/FigmaLo.svg"
										href="https://www.figma.com/@nataliadelbarco"
										isLofi={isLofi}
									/>
								</div>
							</section>
						</div>
					</motion.main>
				</div>
			</AnimatePresence>
		</>
	)
}
