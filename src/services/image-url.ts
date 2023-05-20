export function getCroppedImageUrl(url: string) {
	const target = 'media/'
	const index = url.indexOf(target)
	const start = url.substring(0, index)
	const end = url.substring(index + target.length, url.length)
	return `${start}media/crop/600/400/${end}`
}
