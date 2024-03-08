// На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

function breakTheArray(arr, n) {
    try {
        let newArr = []
        if (typeof n !== 'number') throw new Error('N is not a number')
        if (n === 0) throw new Error('N can not be 0')
        if (!Array.isArray(arr)) throw new Error('Is not array')
        if (!arr.length) throw new Error('Array is empty')
        for (let i = 0; i < arr.length; i += n) {
            newArr.push(arr.slice(i, i + n))
        }
        return newArr
    } catch (error) {
        return error.message
    }
}

// console.log(breakTheArray([1, 2, 3, 4, 5, 6], 4));

describe('Check breakTheArray', () => {
    test('Get success', () => {
        const res = breakTheArray([1, 2, 3, 4, 5, 6], 4)
        expect(res).toEqual([ [ 1, 2, 3, 4 ], [ 5, 6 ] ])
        expect(res.length).toBeGreaterThan(0)
        expect(res).toHaveLength(2)
    })

    test('n is not a number', () => {
        const res = breakTheArray([1, 2, 3, 4, 5, 6], 'mfld')
        expect(res).toBe('N is not a number')
    })

    test('n is 0', () => {
        const res = breakTheArray([1, 2, 3, 4, 5, 6], 0)
        expect(res).toBe('N can not be 0')
    })

    test('is not array', () => {
        const res = breakTheArray('[1, 2, 3, 4, 5, 6]', 4)
        expect(res).toBe('Is not array')
    })

    test('n is not a number', () => {
        const res = breakTheArray([], 4)
        expect(res).toBe('Array is empty')
    })
})