import useCtxLofi from '../../hooks/theme/useLofiThemeState'
import { getTextStyle } from '../../modules/style/textStyle'

export default function Title({ children, sizeOfText, notChangeStyle }) {
	const [isLofi] = useCtxLofi()
	const textStyle = notChangeStyle ? {} : getTextStyle(isLofi)
	return (
		<>
			<span
				className={`font-serif ${
					sizeOfText ?? 'text-4xl md:text-6xl lg:text-6xl'
				} ${
					notChangeStyle ?? 'dark:text-transparent'
				} transition-all duration-200`}
				style={textStyle}>
				{children}
			</span>
		</>
	)
}
