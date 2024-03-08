// На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

function getEvenNums(obj) {
    try {
        let check = Object.values(obj).some(el => !isNaN(el))
        if (!check) throw new Error('Object does not contain numbers')
        let arr = []
        const res = Object.values(obj).filter(el => {
            if (el % 2 == 0) return arr.push(el)
        })
        if (!res.length) throw new Error('Array has no even numbers')
        return res
    } catch (error) {
        return error.message
    }
}

describe('Check getEvenNums', () => {
    test('Get success result', () => {
        let obj = {
            id: 2,
            name: 'Nastya',
            age: 26,
            city: 'Minsk',
            num: 'mfk'
        }
        const result = getEvenNums(obj)
        expect(result).toEqual([2, 26])
        expect(result.length).toBeGreaterThan(0)
        expect(result).toHaveLength(2)
    })

    test('object without numbers', () => {
        let obj = {
            id: 'njk',
            name: 'Nastya',
            age: 'jkm',
            city: 'Minsk',
            num: 'mfk'
        }
        const result = getEvenNums(obj)
        expect(result).toBe('Object does not contain numbers')
    })

    test('object without even numbers', () => {
        let obj = {
            id: 1,
            name: 'Nastya',
            age: 'jkm',
            city: 'Minsk',
            num: 'mfk'
        }
        const result = getEvenNums(obj)
        expect(result).toBe('Array has no even numbers')
    })
})