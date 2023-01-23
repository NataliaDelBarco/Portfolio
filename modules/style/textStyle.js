export const getTextStyle = (isLofi) => {
	return isLofi
		? {
				WebkitTextStroke: '1px black'
		  }
		: {
				WebkitTextStrokeWidth: 0,
				WebkitTextStrokeColor: 'none'
		  }
}
