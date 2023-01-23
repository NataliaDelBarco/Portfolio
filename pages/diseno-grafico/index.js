import { motion, AnimatePresence } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'
import SectionItem from '../../components/section-item'
import CardButton from '../../components/card-button'
import SocialButton from '../../components/social-button'
import ButtonSection from '../../components/button-section'
import { proyectsDisenoGrafico } from '../../modules/proyects/diseno-grafico/proyectsEnum'
import ProyectHeader from '../../components/project-header'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'
import Title from '../../components/title'
import Head from 'next/head'

export default function DisenoGrafico() {
	const [isLofi] = useCtxLofi()

	return (
		<>
			<Head>
				<title>Proyectos Diseño Gráfico</title>
			</Head>
			<AnimatePresence>
				<div className={` ${isLofi && 'dark'}`}>
					<motion.main
						{...animationOpacitySettings}
						id="proyectos"
						className="bg-[url(/prtfolio/img/ProyectosDGHiFi.svg)] dark:bg-[url(/prtfolio/img/ProyectosDGLoFi.svg)] bg-no-repeat m-0 bg-cover w-screen">
						<div>
							<ProyectHeader />
							<section className="h-[70vh] mb-[30vh] md:mt-[10vh] mx-8 text-center flex items-center justify-center md:items-start">
								<div className="flex flex-col gap-10 md:gap-20">
									<div className="mt-10">
										<Title notChangeStyle>Proyectos</Title>
										<div className="block mt-2">
											<Title notChangeStyle>
												Diseño Grafico
											</Title>
										</div>
									</div>
									<div className="flex justify-center items-center">
										<div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center md:px-[5vw] gap-8 md:w-full justify-center">
											{proyectsDisenoGrafico.map(
												(proyect, index) => {
													return (
														<CardButton
															key={proyect.title}
															title={
																proyect.title
															}
															date={proyect.date}
															isAlternative={
																index % 2 === 0
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
								{proyectsDisenoGrafico.map((proyect, index) => {
									const prevProyect =
										proyectsDisenoGrafico[index - 1]
									const nextProyect =
										proyectsDisenoGrafico[index + 1]

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
											id={title}
											title={title}
											isImageInRight={index % 2 !== 0}
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
								<a
									href={`#${
										proyectsDisenoGrafico[
											proyectsDisenoGrafico.length - 1
										].title
									}`}>
									<ButtonSection
										text={
											proyectsDisenoGrafico[
												proyectsDisenoGrafico.length - 1
											].title
										}
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
