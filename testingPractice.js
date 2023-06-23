export function sum(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
export function reverseString(string) {
	return [...string].reverse().join('')
}
export function add(a, b) {
	return a + b
}
export function subtract(a, b) {
	return a - b
}
export function divide(a, b) {
	return a / b
}
export function multiply(a, b) {
	return a * b
}

export function analyzeArray(array) {
	return {
		average: array.reduce((a, b) => a + b) / array.length,
		min: Math.min(...array),
		max: Math.max(...array),
		length: array.length,
	}
}
