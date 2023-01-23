import { motion } from 'framer-motion'
import ButtonSection from '../button-section'
import { animationOpacitySettings } from '../../modules/animation/opacity'
export default function Section({
	id,
	children,
	prevSection,
	prevSectionHref,
	nextSection,
	nextSectionHref
}) {
	return (
		<>
			<section
				className="h-[100dvh] pt-[10vh] mx-8 md:mx-28 snap-start transition-all"
				id={id}>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2 }}
					className="w-full relative flex justify-center items-start h-[15%]">
					{prevSection && (
						<a href={prevSectionHref}>
							<ButtonSection text={prevSection} isPrev="true" />
						</a>
					)}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					viewport={{ margin: '20px' }}
					className="h-[70%]">
					{children}
				</motion.div>

				<motion.div
					{...animationOpacitySettings}
					transition={{ delay: 4, duration: 3 }}
					className="w-full flex justify-center items-center h-[15%]">
					{nextSection && (
						<a href={nextSectionHref}>
							<ButtonSection text={nextSection} />
						</a>
					)}
				</motion.div>
			</section>
		</>
	)
}
