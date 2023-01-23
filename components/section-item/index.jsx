import { motion } from 'framer-motion'
import ProyectInfo from '../proyect-info'
import SocialButton from '../social-button'
import ButtonSection from '../button-section'
import Title from '../title'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'

export default function SectionItem({
	id,
	title,
	content,
	duration,
	typeOfWork,
	role,
	imageSrc,
	isImageInRight,
	figmaLink,
	mediumLink,
	behanceLink,
	externalLink,
	linkedInLink,
	prevProyect,
	prevProyectHref,
	nextProyect,
	nextProyectHref
}) {
	const [isLofi] = useCtxLofi()
	return (
		<>
			<div className="py-[20%] md:pt-[9vh]" id={id}>
				<div className="h-[80vh] flex flex-col justify-between">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full relative flex justify-center items-start -mt-3">
						{prevProyect && (
							<a href={prevProyectHref}>
								<ButtonSection
									text={prevProyect}
									isPrev="true"
								/>
							</a>
						)}
					</motion.div>
					<motion.section
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="md:h-[75vh]">
						<div className="md:hidden flex flex-col items-center mx-8">
							<div className="md:w-[40vw] md:h-[40vw] my-5">
								<div
									style={{
										backgroundImage: `url(${imageSrc})`
									}}
									className={`w-[40vw] h-[40vw] bg-cover bg-no-repeat bg-center rounded-3xl shadow-2xl border-[1px] border-transparent dark:border-black dark:shadow-lofi`}></div>
							</div>
							<div className="w-full text-center mb-4">
								<Title notChangeStyle>{title}</Title>
							</div>
							<div className="w-full">
								<ProyectInfo
									duration={duration}
									typeOfWork={typeOfWork}
									role={role}
								/>
								<p className="mt-3 text-sm h-[22vh] overflow-y-scroll dark:bg-white p-4 dark:rounded-3xl">
									{content}
								</p>
								<div className="flex flex-row justify-center gap-4 py-4">
									{mediumLink && (
										<SocialButton
											bg="/prtfolio/icons/Medium.svg"
											bgLofi="/prtfolio/icons/MediumLo.svg"
											href={mediumLink}
											isLofi={isLofi}
										/>
									)}
									{figmaLink && (
										<SocialButton
											bg="/prtfolio/icons/Figma.svg"
											bgLofi="/prtfolio/icons/FigmaLo.svg"
											href={figmaLink}
											isLofi={isLofi}
										/>
									)}
									{behanceLink && (
										<SocialButton
											bg="/prtfolio/icons/Behance.svg"
											bgLofi="/prtfolio/icons/BehanceLo.svg"
											href={behanceLink}
											isLofi={isLofi}
											isProyect
										/>
									)}
									{externalLink && (
										<SocialButton
											bg="/prtfolio/icons/Link2.svg"
											bgLofi="/prtfolio/icons/LinkLo.svg"
											href={externalLink}
											isLofi={isLofi}
											isProyect
										/>
									)}
									{linkedInLink && (
										<SocialButton
											bg="/prtfolio/icons/LinkedIn.svg"
											bgLofi="/prtfolio/icons/LinkedInLo.svg"
											href={linkedInLink}
											isLofi={isLofi}
											isProyect
										/>
									)}
								</div>
							</div>
						</div>
						{!isImageInRight ? (
							<div className="hidden md:flex md:flex-row">
								{/* Image*/}
								<div className="w-1/2 flex items-center justify-center h-[80vh]">
									<div
										style={{
											backgroundImage: `url(${imageSrc})`
										}}
										className={`w-96 h-96 bg-cover bg-center rounded-3xl shadow-2xl transition-all duration-150 dark:border-[1px] dark:border-black dark:shadow-lofi`}></div>
								</div>
								{/* Title*/}
								<div className="w-1/2">
									<div className="mt-10 w-4/5">
										<div className="text-center">
											<Title
												sizeOfText="text-4xl"
												notChangeStyle>
												{title}
											</Title>
										</div>

										<div className="mt-5">
											<ProyectInfo
												duration={duration}
												typeOfWork={typeOfWork}
												role={role}
											/>
										</div>
										<div className="mt-2 text-md dark:bg-white border-[1px] border-transparent -ml-4 dark:ml-0 transition-all duration-75 dark:backdrop-blur-3xl dark:rounded-2xl">
											<p>{content}</p>
										</div>

										<div className="text-center">
											{(mediumLink ||
												figmaLink ||
												behanceLink ||
												externalLink ||
												linkedInLink) && (
												<p className="text-sm mt-4">
													Enlaces:
												</p>
											)}
											<div className="flex flex-row gap-4 mt-2 w-full justify-center">
												{mediumLink && (
													<SocialButton
														bg="/prtfolio/icons/Medium.svg"
														bgLofi="/prtfolio/icons/MediumLo.svg"
														href={mediumLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{figmaLink && (
													<SocialButton
														bg="/prtfolio/icons/Figma.svg"
														bgLofi="/prtfolio/icons/FigmaLo.svg"
														href={figmaLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{behanceLink && (
													<SocialButton
														bg="/prtfolio/icons/Behance.svg"
														bgLofi="/prtfolio/icons/BehanceLo.svg"
														href={behanceLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{externalLink && (
													<SocialButton
														bg="/prtfolio/icons/Link2.svg"
														bgLofi="/prtfolio/icons/LinkLo.svg"
														href={externalLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{linkedInLink && (
													<SocialButton
														bg="/prtfolio/icons/LinkedIn.svg"
														bgLofi="/prtfolio/icons/LinkedInLo.svg"
														href={linkedInLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="hidden md:flex md:flex-row">
								{/* Title*/}
								<div className="w-1/2 pl-32">
									<div className="mt-10">
										<div className="text-center">
											<Title
												sizeOfText="text-4xl"
												notChangeStyle>
												{title}
											</Title>
										</div>

										<div className="w-full mt-5">
											<ProyectInfo
												duration={duration}
												typeOfWork={typeOfWork}
												role={role}
											/>
										</div>
										<div className="mt-2 text-md dark:bg-white border-[1px] border-transparent ml-4 dark:ml-0 transition-all duration-75 dark:backdrop-blur-3xl dark:rounded-2xl">
											<p>{content}</p>
										</div>
										<div className="text-center">
											{(mediumLink ||
												figmaLink ||
												behanceLink ||
												externalLink ||
												linkedInLink) && (
												<p className="text-sm mt-4">
													Enlaces:
												</p>
											)}
											<div className="flex flex-row gap-4 mt-2 w-full justify-center">
												{mediumLink && (
													<SocialButton
														bg="/prtfolio/icons/Medium.svg"
														bgLofi="/prtfolio/icons/MediumLo.svg"
														href={mediumLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{figmaLink && (
													<SocialButton
														bg="/prtfolio/icons/Figma.svg"
														bgLofi="/prtfolio/icons/FigmaLo.svg"
														href={figmaLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{behanceLink && (
													<SocialButton
														bg="/prtfolio/icons/Behance.svg"
														bgLofi="/prtfolio/icons/BehanceLo.svg"
														href={behanceLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{externalLink && (
													<SocialButton
														bg="/prtfolio/icons/Link2.svg"
														bgLofi="/prtfolio/icons/LinkLo.svg"
														href={externalLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
												{linkedInLink && (
													<SocialButton
														bg="/prtfolio/icons/LinkedIn.svg"
														bgLofi="/prtfolio/icons/LinkedInLo.svg"
														href={linkedInLink}
														isLofi={isLofi}
														isProyect
													/>
												)}
											</div>
										</div>
									</div>
								</div>
								{/* Image*/}
								<div className="w-1/2 flex items-center justify-center h-[80vh]">
									<div
										style={{
											backgroundImage: `url(${imageSrc})`
										}}
										className={`w-96 h-96 bg-cover bg-center rounded-3xl transition-all duration-150 dark:border-[1px] dark:border-black shadow-2xl dark:shadow-lofi`}></div>
								</div>
							</div>
						)}
					</motion.section>
					<div className="flex items-center">
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="w-full h-[7dvh] md:h-[4vh] flex justify-center items-center">
							{nextProyect && (
								<a href={nextProyectHref}>
									<ButtonSection text={nextProyect} />
								</a>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	)
}
