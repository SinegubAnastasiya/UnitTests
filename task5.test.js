// У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

const array = ['375295647322', '375331231232', '375331231256', '375331231256']

function getUniqueNumbers(array) {
    try {
        if (!Array.isArray(array)) throw new Error('Is not array')
        let str = []
        for (let tel of array) {
            if (!str.includes(tel)) str.push(tel)
        }
        return str
    } catch (error) {
        return error.message
    }
}

describe('Group test', () => {
    test('correct tel', () => {
        const res = getUniqueNumbers(array)
        expect(res).toEqual(['375295647322', '375331231232', '375331231256'])
        expect(res.length).toBeGreaterThan(0)
        expect(res).toHaveLength(3)
    })

    test('correct tel', () => {
        const res = getUniqueNumbers(array)
        expect(res).toEqual(['375295647322', '375331231232', '375331231256'])
    })
})