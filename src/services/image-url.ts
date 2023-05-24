export function getCroppedImageUrl(url: string) {
	if (!url) return url

	const target = 'media/'
	const index = url.indexOf(target)

	if (index === -1) return url

	const start = url.substring(0, index)
	const end = url.substring(index + target.length, url.length)

	return `${start}media/crop/600/400/${end}`
}
