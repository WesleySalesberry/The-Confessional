export const truncateText = (text, end) => text.split(' ').slice(0, end).join(' ') + ' ...'
export const removeUnderscores = (text) => text.split('_').join(' ')