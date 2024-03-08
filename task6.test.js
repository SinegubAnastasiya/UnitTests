// На входе статичный объект. Необходимо посчитать количество пар (ключ:
//     значение) где значение число и вывести количество. Добавить необходимые
//     проверки.
//     Написать тест для функции

// const obj = {
//     id: 'dfg',
//     name: 'Nastya',
//     age: 'sfdgsfg',
//     city: 'Minsk'
// }

function countPares(obj) {
    try {
        let count = 0
        for (let key in obj) {
            if (!isNaN(obj[key])) count ++
        }
        if (count == 0) throw new Error('Array does not contain numeric values')
        return count
    } catch (error) {
        return error.message
    }
}

describe('Check countPares', () => {
    test('Get success', () => {
        const obj = {
            id: 1,
            name: 'Nastya',
            age: 25,
            city: 'Minsk'
        }
        const res = countPares(obj)
        expect(res).toBe(2)
    })

    test('Get falsy', () => {
        const obj = {
            id: 'dmgl',
            name: 'Nastya',
            age: 'nfgk',
            city: 'Minsk'
        }
        const res = countPares(obj)
        expect(res).toBe('Array does not contain numeric values')
    })
})