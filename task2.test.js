// Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function doMultiply(a, b) {
    try {
        if (isNaN(a) | isNaN(b)) throw new Error('Not a number')
        if (typeof a !== 'number' || typeof a !== 'number') throw new Error('Type is not a number')
        return a * b
    } catch (error) {
        return error.message
    }
}

describe('Group test', () => {
    test('Get success', () => {
        const result = doMultiply(3, 5)
        expect(result).toBe(15)
    })

    test('Get false', () => {
        const result = doMultiply('mkdolf', 5)
        expect(result).toBe('Not a number')
    })
    
    test('Get false', () => {
        const result = doMultiply('mkdolf', 5)
        expect(result).toBe('Not a number')
    })


})

