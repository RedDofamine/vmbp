
export async function preSave(props, model, validator) {
	const params = Object.keys(props).map(key => ({ [key]: props[key] }))
	const valid = validator(await model.find(params))
	return valid.message
}

