export const toPascalCase = (...words) => {
    return words.filter(word => typeof word === 'string' && word.length > 0)
                .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
                .join('');
};
