import { sum, reverseString, add, subtract, divide, multiply, analyzeArray } from './sum'

test('capitalize string', () => {
	expect(sum('anna')).toBe('Anna')
})
test('reverse string', () => {
	expect(reverseString('start')).toBe('trats')
})
test('2 plus 2 equals 4', () => {
	expect(add(2, 2)).toBe(4)
})
test('4 minus 2 equals 2', () => {
	expect(subtract(4, 2)).toBe(2)
})
test('10 divided by 2 equals 5', () => {
	expect(divide(10, 2)).toBe(5)
})
test('4 multiplied by 5 gives 20', () => {
	expect(multiply(4, 5)).toBe(20)
})
test('analyze an array', () => {
	expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
		average: 3,
		min: 1,
		max: 5,
		length: 5,
	})
})
