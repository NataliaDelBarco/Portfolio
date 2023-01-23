import { LofiProvider } from '../hooks/theme/useLofiThemeState'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
	return (
		<>
			<LofiProvider>
				<Component {...pageProps} />
			</LofiProvider>
		</>
	)
}
