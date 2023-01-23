import ToggleTheme from '../toggle-theme'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'

export default function Header({ isToggleMenu, manageToggleMenu }) {
	const genericHamburgerLine = `h-[0.2rem] w-6 my-[0.1rem] rounded-full bg-black transition ease transform z-30 duration-300`
	return (
		<>
			<motion.header
				{...animationOpacitySettings}
				transition={{ delay: 2, duration: 2 }}
				className="fixed top-0 w-full flex h-[10vh] backdrop-blur-2xl md:px-10 px-2 items-center justify-between z-10 shadow-md">
				<div className="hidden md:flex justify-between gap-2 md:gap-8 md:text-xl text-sm">
					<a href="#sobre-mi">
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/prtfolio/icons/perfil.svg"
								width="30"
								height="30"
								alt="sobre mi"
							/>
							<span>Sobre mí</span>
						</div>
					</a>
					<a href="#proyectos">
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/prtfolio/icons/proyectos.svg"
								width="30"
								height="30"
								alt="proyectos"
							/>
							<span>Proyectos</span>
						</div>
					</a>
					<a href="#contacta-conmigo">
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/prtfolio/icons/contacto.svg"
								width="30"
								height="30"
								alt="contacta conmigo"
							/>
							<span>Contacto</span>
						</div>
					</a>
				</div>
				<div className="block relative z-20 md:hidden">
					<button
						className="flex relative ml-6 flex-col h-10 w-10 outline-0 rounded justify-center items-center group"
						onClick={manageToggleMenu}>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? 'rotate-45 mt-3 translate-y-0 group-hover:opacity-100'
									: 'group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? 'opacity-0'
									: 'group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? '-rotate-45 -translate-y-[0.85rem] group-hover:opacity-100'
									: 'group-hover:opacity-100'
							}`}
						/>
					</button>
				</div>
				<div className="mr-4">
					<ToggleTheme />
				</div>
			</motion.header>
		</>
	)
}
