import Image from 'next/image'
import Link from 'next/link'
import Title from '../title'
import ToggleTheme from '../toggle-theme'
export default function ProyectHeader() {
	return (
		<>
			<div className="sticky top-0 z-10 w-full py-4 pl-6 flex flex-row align-middle items-center self-center backdrop-blur-lg rounded-b-lg shadow-xl">
				<div className="md:w-1/3 w-1/5">
					<Link href="/#proyectos">
						<Image
							src="/portfolio-nxtjs/icons/arrow.svg"
							width={30}
							height={30}
							alt="volver atrás"
						/>
					</Link>
				</div>
				<div className="font-serif text-xl md:w-1/3 w-3/5 text-center">
					<span className="font-serif">Natalia del Barco</span>
				</div>
				<div className="md:w-1/3 w-3/5 flex md:justify-end md:mr-6 justify-center self-end">
					<ToggleTheme />
				</div>
			</div>
		</>
	)
}
