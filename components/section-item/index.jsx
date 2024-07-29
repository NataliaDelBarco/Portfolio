import { motion } from 'framer-motion'
import ProyectInfo from '../proyect-info'
import SocialButton from '../social-button'
import ButtonSection from '../button-section'
import Title from '../title'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'

export default function SectionItem({
	id,
	language,
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
	const esTexts = {
		links: 'Enlaces:'
	}
	const enTexts = {
		links: 'Links:'
	}
	const texts = language === 'en' ? enTexts : esTexts
	return (
		<>
			<div
				className="md:pt-0 h-[100dvh] md:h-[100dvh] my-[5dvh] md:my-0 flex flex-col snap-proximity"
				id={id}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full relative flex justify-center items-start snap-start -mt-3 md:h-[15dvh] h-[10dvh] md:mt-0">
					{prevProyect && (
						<a href={prevProyectHref}>
							<ButtonSection text={prevProyect} isPrev="true" />
						</a>
					)}
				</motion.div>
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="md:h-[60dvh] h-[70dvh] overflow-auto">
					<div className="md:hidden flex flex-col items-center mx-8 md:gap-0 gap-2">
						<div className="md:w-[40vw] md:h-[40vw] my-5">
							<div
								style={{
									backgroundImage: `url(${imageSrc})`
								}}
								className={`md:w-[40vw] md:h-[40vw] w-[30vw] h-[30vw] bg-cover bg-no-repeat bg-center rounded-3xl shadow-lg border-[1px] border-transparent dark:border-black dark:shadow-lofi`}></div>
						</div>
						<div className="w-full text-center mb-4">
							<Title notChangeStyle>{title}</Title>
						</div>
						<div className="w-full h-[10ddvh]">
							<ProyectInfo
								duration={duration}
								typeOfWork={typeOfWork}
								role={role}
							/>
							<p className="mt-3 text-sm h-[22dvh] overflow-y-scroll dark:bg-white p-4 dark:rounded-3xl">
								{content}
							</p>
							<div className="flex flex-row justify-center gap-4 py-2 md:py-4">
								{mediumLink && (
									<SocialButton
										bg="/portfolio/icons/Medium.svg"
										bgLofi="/portfolio/icons/MediumLo.svg"
										href={mediumLink}
										isLofi={isLofi}
									/>
								)}
								{figmaLink && (
									<SocialButton
										bg="/portfolio/icons/Figma.svg"
										bgLofi="/portfolio/icons/FigmaLo.svg"
										href={figmaLink}
										isLofi={isLofi}
									/>
								)}
								{behanceLink && (
									<SocialButton
										bg="/portfolio/icons/Behance.svg"
										bgLofi="/portfolio/icons/BehanceLo.svg"
										href={behanceLink}
										isLofi={isLofi}
										isProyect
									/>
								)}
								{externalLink && (
									<SocialButton
										bg="/portfolio/icons/Link2.svg"
										bgLofi="/portfolio/icons/LinkLo.svg"
										href={externalLink}
										isLofi={isLofi}
										isProyect
									/>
								)}
								{linkedInLink && (
									<SocialButton
										bg="/portfolio/icons/Linkedin.svg"
										bgLofi="/portfolio/icons/LinkedinLo.svg"
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
							<div className="w-1/2 flex items-center md:items-start justify-center">
								<div
									style={{
										backgroundImage: `url(${imageSrc})`
									}}
									className={`w-96 h-96 bg-cover bg-center rounded-3xl shadow-lg transition-all duration-150 dark:border-[1px] dark:border-black dark:shadow-lofi`}></div>
							</div>
							{/* Title*/}
							<div className="w-1/2">
								<div className="mt-10 md:mt-0 w-4/5">
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
									<div className="mt-2 text-md dark:bg-white border-[1px] md:h-[25dvh] overflow-y-scroll border-transparent dark:ml-0 transition-all duration-75 dark:backdrop-blur-3xl dark:rounded-2xl">
										<p>{content}</p>
									</div>

									<div className="text-center">
										{(mediumLink ||
											figmaLink ||
											behanceLink ||
											externalLink ||
											linkedInLink) && (
											<p className="text-sm mt-4">
												{texts.links}
											</p>
										)}
										<div className="flex flex-row gap-4 mt-2 w-full justify-center">
											{mediumLink && (
												<SocialButton
													bg="/portfolio/icons/Medium.svg"
													bgLofi="/portfolio/icons/MediumLo.svg"
													href={mediumLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{figmaLink && (
												<SocialButton
													bg="/portfolio/icons/Figma.svg"
													bgLofi="/portfolio/icons/FigmaLo.svg"
													href={figmaLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{behanceLink && (
												<SocialButton
													bg="/portfolio/icons/Behance.svg"
													bgLofi="/portfolio/icons/BehanceLo.svg"
													href={behanceLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{externalLink && (
												<SocialButton
													bg="/portfolio/icons/Link2.svg"
													bgLofi="/portfolio/icons/LinkLo.svg"
													href={externalLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{linkedInLink && (
												<SocialButton
													bg="/portfolio/icons/Linkedin.svg"
													bgLofi="/portfolio/icons/LinkedinLo.svg"
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
								<div className="mt-10 md:mt-0">
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
									<div className="mt-2 text-md dark:bg-white border-[1px] md:h-[25dvh] overflow-y-scroll border-transparent dark:ml-0 transition-all duration-75 dark:backdrop-blur-3xl dark:rounded-2xl">
										<p>{content}</p>
									</div>
									<div className="text-center">
										{(mediumLink ||
											figmaLink ||
											behanceLink ||
											externalLink ||
											linkedInLink) && (
											<p className="text-sm mt-4">
												{texts.links}
											</p>
										)}
										<div className="flex flex-row gap-4 mt-2 w-full justify-center">
											{mediumLink && (
												<SocialButton
													bg="/portfolio/icons/Medium.svg"
													bgLofi="/portfolio/icons/MediumLo.svg"
													href={mediumLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{figmaLink && (
												<SocialButton
													bg="/portfolio/icons/Figma.svg"
													bgLofi="/portfolio/icons/FigmaLo.svg"
													href={figmaLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{behanceLink && (
												<SocialButton
													bg="/portfolio/icons/Behance.svg"
													bgLofi="/portfolio/icons/BehanceLo.svg"
													href={behanceLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{externalLink && (
												<SocialButton
													bg="/portfolio/icons/Link2.svg"
													bgLofi="/portfolio/icons/LinkLo.svg"
													href={externalLink}
													isLofi={isLofi}
													isProyect
												/>
											)}
											{linkedInLink && (
												<SocialButton
													bg="/portfolio/icons/Linkedin.svg"
													bgLofi="/portfolio/icons/LinkedinLo.svg"
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
							<div className="w-1/2 flex items-center md:items-start justify-center">
								<div
									style={{
										backgroundImage: `url(${imageSrc})`
									}}
									className={`w-96 h-96 bg-cover bg-center rounded-3xl transition-all duration-150 dark:border-[1px] dark:border-black shadow-lg dark:shadow-lofi`}></div>
							</div>
						</div>
					)}
				</motion.section>
				<div className="flex items-center md:h-[15dvh] h-[10dvh]">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full md:h-[4dvh] md:mt-0 flex justify-center items-center">
						{nextProyect && (
							<a href={nextProyectHref}>
								<ButtonSection text={nextProyect} />
							</a>
						)}
					</motion.div>
				</div>
			</div>
		</>
	)
}
