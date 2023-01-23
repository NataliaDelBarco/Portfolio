import useCtxLofi from '../../hooks/theme/useLofiThemeState'

export default function ToggleTheme() {
	const [lofiToggle, toggleLofiTheme] = useCtxLofi()
	return (
		<>
			<div className="flex items-end justify-center">
				<label
					htmlFor="toggle"
					className="flex items-center cursor-pointer">
					<div className="mr-3 text-gray-700 font-medium text-sm md:text-lg">
						Hi-fi
					</div>

					<div className="relative">
						<input
							type="checkbox"
							id="toggle"
							className="sr-only"
							onClick={toggleLofiTheme}
							defaultChecked={lofiToggle}
						/>
						<div className="block bg-[#B4AAF1] w-10 h-6 md:w-14 md:h-8 rounded-full"></div>
						<div className="dot absolute left-1 top-1 bg-white w-4 h-4 md:w-6 md:h-6 rounded-full transition"></div>
					</div>
					<div className="ml-3 text-gray-700 font-medium text-sm md:text-lg">
						Lo-fi
					</div>
				</label>
			</div>
		</>
	)
}
