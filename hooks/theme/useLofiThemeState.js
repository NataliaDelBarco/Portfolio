import { useState, createContext, useContext, useMemo } from 'react'

const lofiContext = createContext(null)

export const LofiProvider = ({ children }) => {
	const [lofi, setLofi] = useState(false)
	const manageLofiToggle = () => setLofi(!lofi)

	const lofiValue = useMemo(() => [lofi, manageLofiToggle], [lofi])

	return (
		<lofiContext.Provider value={lofiValue}>
			{children}
		</lofiContext.Provider>
	)
}

export default function useCtxLofi() {
	return useContext(lofiContext)
}
