import { supabase } from './supabaseClient'

export default async function createLog() {
	const ipString = await fetch('https://api.ipify.org/').then((res) =>
		res.text()
	)
	await supabase.from('authLog').insert([
		{
			ip: ipString,
			url: window?.location?.href,
			isMobile: window?.navigator?.userAgentData?.mobile,
			platform: window?.navigator?.userAgentData?.platform,
			brand: window?.navigator?.userAgentData?.brands[0].brand,
			version: window?.navigator?.userAgentData?.brands[0]?.version,
			language_browser: window?.navigator?.language
		}
	])
}
