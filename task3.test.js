// Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function getSum(array) {
    try {
        if (!Array.isArray(array)) throw new Error('It is not array')
        const res = array.some((el) => isNaN(el))
        if (res) throw new Error('Array has not only numbers') 
        return array.reduce((sum, el) => sum + el, 0)
    } catch (error) {
        return error.message
    }
}

describe('Group tests', () => {
    test('Get success', () => {
        const result = getSum([1, 2, 3, 4])
        expect(result).toBe(10)
    })

    test('Check array', () => {
        const result = getSum(10)
        expect(result).toBe('It is not array')
    })

    test('Check el of array', () => {
        const result = getSum(['n', 1, 2, 3])
        expect(result).toBe('Array has not only numbers')
    })
})