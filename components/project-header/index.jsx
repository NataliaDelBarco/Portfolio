import Image from 'next/image'
import Link from 'next/link'
import Title from '../title'
import ToggleTheme from '../toggle-theme'
export default function ProyectHeader({ language }) {
	return (
		<>
			<div className="sticky top-0 z-10 w-full py-4 pl-6 flex flex-row align-middle items-center self-center backdrop-blur-lg rounded-b-lg shadow-xl">
				<div className="md:w-1/3 w-1/5">
					<Link
						href={
							language === 'en' ? '/en/#projects' : '/#proyectos'
						}>
						<Image
							src="/portfolio/icons/arrow.svg"
							width={30}
							height={30}
							alt={
								language === 'en'
									? 'Back to projects'
									: 'Volver a proyectos'
							}
						/>
					</Link>
				</div>
				<div className="md:w-1/3 w-3/5 flex justify-center text-center">
					<Image
						src="/portfolio/img/Union.png"
						width="50"
						height="50"
						alt="logo"
					/>
				</div>
				<div className="md:w-1/3 w-3/5 flex md:justify-end md:mr-6 justify-center self-end">
					<ToggleTheme />
				</div>
			</div>
		</>
	)
}
