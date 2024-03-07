// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

const arr = [
    { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
    { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
    { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
    { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
    { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
    { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
]

function getGoods(arr) {
    try {
        const res = arr.filter((el) => el.count > 10 && el.producer == 'Германия')
        if (!res.length) throw new Error('Array is empty')
        return res
    } catch (error) {
        return error.message
    }
}

describe('Group tests', () => {
    test('Get success', () => {
        const result = getGoods(arr)
        expect(result).toEqual([
            {
              id: 2,
              title: 'Смартфон',
              count: 33,
              price: 1500,
              producer: 'Германия'
            },
            {
              id: 7,
              title: 'Холодильник',
              count: 11,
              price: 2400,
              producer: 'Германия'
            }
          ])
    })
})