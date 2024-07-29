import ToggleTheme from '../toggle-theme'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { animationOpacitySettings } from '../../modules/animation/opacity'

export default function Header({ isToggleMenu, manageToggleMenu, language }) {
	const esTexts = {
		aboutMe: 'Sobre mí',
		aboutMeId: 'sobre-mi',
		projects: 'Proyectos',
		projectsId: 'proyectos',
		contact: 'Contacto',
		contactId: 'contacta-conmigo'
	}
	const enTexts = {
		aboutMe: 'About me',
		aboutMeId: 'about-me',
		projects: 'Projects',
		projectsId: 'projects',
		contact: 'Contact',
		contactId: 'contact-me'
	}
	const texts = language === 'en' ? enTexts : esTexts
	const genericHamburgerLine = `h-[0.2rem] w-6 my-[0.1rem] rounded-full bg-black transition ease transform z-30 duration-300`
	return (
		<>
			{/* Dektop */}
			<motion.header
				{...animationOpacitySettings}
				transition={{ delay: 2, duration: 2 }}
				className="fixed top-0 w-full flex h-[10vh] backdrop-blur-2xl md:px-10 px-2 items-center justify-between z-10 shadow-md">
				<div className="hidden md:flex justify-between gap-2 md:gap-8 md:text-xl text-sm">
					<a href={`#${texts.aboutMeId}`}>
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/portfolio/icons/perfil.svg"
								width="30"
								height="30"
								alt="sobre mi"
							/>
							<span>{texts.aboutMe}</span>
						</div>
					</a>
					<a href={`#${texts.projectsId}`}>
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/portfolio/icons/proyectos.svg"
								width="30"
								height="30"
								alt="proyectos"
							/>
							<span>{texts.projects}</span>
						</div>
					</a>
					<a href={`#${texts.contactId}`}>
						<div className="flex flex-row pb-1 gap-4 items-center border-transparent border-b-2 hover:border-black transition-all duration-500">
							<Image
								src="/portfolio/icons/contacto.svg"
								width="30"
								height="30"
								alt="contacta conmigo"
							/>
							<span>{texts.contact}</span>
						</div>
					</a>
				</div>
				{/* Mobile */}
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
				<a href="#intro">
					<div className="w-12">
						<Image
							src="/portfolio/img/Union.png"
							width="60"
							height="60"
							alt="logo"
						/>
					</div>
				</a>
				<div className="mr-4">
					<ToggleTheme />
				</div>
			</motion.header>
		</>
	)
}
