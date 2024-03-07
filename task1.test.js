// Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doTest(a, b) {
    try {
        if (isNaN(a) | isNaN(b)) throw new Error('Not a number')
        return a ** b
    } catch (error) {
        return error.message
    }
}

describe('Group test', () => {
    test('Get result', () => {
        const result = doTest(2, 4)
        expect(result).toBe(16)
    })

    test('Get false', () => {
        const result = doTest('mkdolf', 5)
        expect(result).toBe('Not a number')
    })
})