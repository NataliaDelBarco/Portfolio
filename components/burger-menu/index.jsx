import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function BurgerMenu({
	isVisibleMenu,
	handleClickCloseMenu,
	textStyle
}) {
	return (
		<>
			<AnimatePresence>
				{isVisibleMenu && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="md:hidden fixed w-screen z-10 -pt-8 backdrop-blur-3xl">
						<motion.aside
							initial={{ opacity: 0, x: '-100%' }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: '-100%' }}
							transition={{
								duration: 0.5
							}}
							className="w-3/4 h-screen pt-8 px-8 backdrop-blur-2xl shadow-2xl">
							<div>
								<div
									className="ml-3 cursor-pointer w-4"
									onClick={handleClickCloseMenu}>
									<Image
										src="/portfolio-nxtjs/icons/close.png"
										alt="cerrar menú"
										width="20"
										height="20"
									/>
								</div>
								<a href="#intro" onClick={handleClickCloseMenu}>
									<h1
										className="font-serif text-4xl pt-10 dark:text-transparent"
										style={textStyle}>
										Portfolio <br />
										Natalia del Barco
									</h1>
								</a>
							</div>
							<div className="flex flex-col gap-8 mt-16">
								<a
									href="#sobre-mi"
									onClick={handleClickCloseMenu}>
									<div className="flex gap-8 items-center">
										<Image
											src="/portfolio-nxtjs/icons/perfil.svg"
											width="30"
											height="30"
											alt="sobre mi"
										/>
										<div>Sobre mí</div>
									</div>
								</a>
								<a
									href="#proyectos"
									onClick={handleClickCloseMenu}>
									<div className="flex gap-8 items-center">
										<Image
											src="/portfolio-nxtjs/icons/proyectos.svg"
											width="30"
											height="30"
											alt="proyectos"
										/>
										<div>Proyectos</div>
									</div>
								</a>
								<a
									href="#contacta-conmigo"
									onClick={handleClickCloseMenu}>
									<div className="flex gap-8 items-center">
										<Image
											src="/portfolio-nxtjs/icons/contacto.svg"
											width="30"
											height="30"
											alt="perfil"
										/>
										<div>Contacto</div>
									</div>
								</a>
							</div>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
