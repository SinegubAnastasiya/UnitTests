// На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleVal(obj) {
    try {
        let check = Object.values(obj).some(el => !isNaN(el))
        if (!check) throw new Error('Object does not contain numbers')
        let newObj = Object.entries(obj).reduce((arr, [key, value]) => {
            if (typeof value === 'number') arr[key] = value * 2
            else arr[key] = value
            return arr
        }, {})
        // for (let key in obj) {
        //     if (typeof obj[key] == 'number') {
        //         newObj[key] = obj[key] * 2
        //     }
        //     else newObj[key] = obj[key]
        // }
        return newObj
    } catch (error) {
        return error.message
    }
}

describe('Check doubleVal', () => {
    test('Get success', () => {
        let obj = {
            id: 1,
            name: 'Nastya',
            age: 25,
            city: 'Minsk',
            num: 15
        }
        const res = doubleVal(obj)
        expect(res).toEqual({ id: 2, name: 'Nastya', age: 50, city: 'Minsk', num: 30 })
    })

    test('object has no numbers', () => {
        let obj = {
            id: 'fmksl',
            name: 'Nastya',
            age: 'mvf',
            city: 'Minsk',
            num: 'mfk'
        }
        const res = doubleVal(obj)
        expect(res).toBe('Object does not contain numbers')
    })
})