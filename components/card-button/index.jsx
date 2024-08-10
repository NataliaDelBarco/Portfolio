import Link from 'next/link'

export default function CardButton({
	isAlternative,
	isLofi,
	title,
	date,
	routeToGo,
	hasGoToOtherPage,
	isCardProject,
	isProffesional,
	isFullScreen
}) {
	let hClass = 'h-auto'
	let mtClass = 'mt-auto'
	if (date) {
		hClass = 'h-1/3'
		mtClass = 'mt-1/3'
	}
	if (isFullScreen) {
		hClass = 'md:h-1/3 h-full'
		mtClass = 'mt-8 md:mt-1/3'
	}

	const getCardButton = () => {
		const backgroundImgClass = isProffesional
			? `bg-[url('/portfolio/img/Proffesional.png')]`
			: "bg-[url('/portfolio/img/DisenoGrafico.webp')]"
		return (
			<div
				className={`${
					isAlternative
						? isLofi
							? 'bg-white border-2 border-black'
							: "bg-[url('/portfolio/img/UX_UI.webp')]"
						: isLofi
						? 'bg-white border-2 border-black'
						: backgroundImgClass
				}
                bg-cover
                flex
                flex-col
                justify-center
                items-center
                hover:cursor-pointer
				shadow-xl
				dark:shadow-none
				dark:hover:shadow-lofi
				md:w-40 md:h-40
				${isFullScreen ? 'w-full h-28' : 'w-36 h-36 hover:w-full hover:h-full'}
				${
					isCardProject
						? 'md:w-72 md:h-72 md:hover:w-[18rem] md:hover:h-[18rem] hover:w-36 hover:h-36'
						: !isFullScreen &&
						  'md:w-56 md:h-56 md:hover:w-[13.5rem] md:hover:h-[13.5rem] hover:w-36 hover:h-36'
				}
				 transition-all duration-300 hover:shadow-2xl rounded-3xl select-none`}>
				<div
					className={`w-full flex items-center justify-center ${hClass} text-center px-8`}>
					<span
						className={`font-serif text-xl md:text-2xl ${mtClass} select-none`}>
						{title}
					</span>
				</div>
				<div
					className={`pt-4 pb-2 ${hClass} flex items-end justify-end font-serif w-full text-right pr-6`}>
					<span className="md:text-xl text-xs">{date}</span>
				</div>
			</div>
		)
	}
	return (
		<>
			{hasGoToOtherPage ? (
				<Link href={routeToGo}>{getCardButton()}</Link>
			) : (
				<a href={`${routeToGo}`}>{getCardButton()}</a>
			)}
		</>
	)
}
