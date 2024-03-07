function converter(array) {
    try {
        if (!Array.isArray(array)) throw new Error('It is not array')
        return array.map((item) => item ** 2)
    } catch (error) {
        return error.message
    }
}

describe('Group converter', () => {
    test('Get result', () => {
        const result = converter([1, 2, 3, 4])
        expect(result).toEqual([1, 4, 9, 16])
    })
    
    test('Check array', () => {
        const result = converter(10)
        expect(result).toBe('It is not array')
    })

    test('Check length', () => {
        const result = converter([1, 2, 3, 4])
        expect(result).toHaveLength(4)
    })
})