import Image from 'next/image'
import useCtxLofi from '../../hooks/theme/useLofiThemeState'

export default function ProyectInfo({ duration, typeOfWork, role }) {
	const [isLofi] = useCtxLofi()
	return (
		<>
			{duration && typeOfWork && role && (
				<div className="h-14 flex gap-2 items-center justify-between w-full rounded-2xl">
					<div className="flex flex-row items-center gap-2 text-left border-[1px] border-black p-[0.5rem] md:p-[8px] rounded-full bg-white h-3/4">
						<Image
							src={
								isLofi
									? '/portfolio-nxtjs/icons/ProyectoRelojLo.svg'
									: '/portfolio-nxtjs/icons/ProyectoReloj.svg'
							}
							width={25}
							height={25}
							alt="Tiempo de proyecto"
						/>
						<span className="text-[10px] whitespace-nowrap lg:text-lg md:text-md text-center">
							{duration}
						</span>
					</div>
					<div className="flex flex-row items-center gap-2 text-left border-[1px] border-black p-[0.5rem] md:p-[8px] rounded-full bg-white h-3/4">
						<Image
							src={
								isLofi
									? '/portfolio-nxtjs/icons/ProyectoMaletinLo.svg'
									: '/portfolio-nxtjs/icons/ProyectoMaletin.svg'
							}
							width={25}
							height={25}
							alt="Rol desempeñado"
						/>
						<span className="text-[10px] whitespace-nowrap lg:text-lg md:text-md text-center">
							{role}
						</span>
					</div>
					<div className="flex flex-row items-center gap-2 text-left border-[1px] border-black p-[0.5rem] md:p-[8px] rounded-full bg-white h-3/4">
						<Image
							src={
								isLofi
									? '/portfolio-nxtjs/icons/ProyectoPersonasLo.svg'
									: '/portfolio-nxtjs/icons/ProyectoPersonas.svg'
							}
							width={25}
							height={25}
							alt="Modalidad de trabajo"
						/>
						<span className="text-[10px] whitespace-nowrap lg:text-lg md:text-md text-center">
							{typeOfWork}
						</span>
					</div>
				</div>
			)}
		</>
	)
}
