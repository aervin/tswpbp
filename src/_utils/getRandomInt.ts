/* Returns random int between 1 and 6 */
export default function getRandomDieValue() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
}