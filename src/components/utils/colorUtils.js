export function randomHexColor() {
    const randomNumber = Math.floor(Math.random() * parseInt('ffffff', 16));
    return `#${randomNumber.toString(16)}`;
}
