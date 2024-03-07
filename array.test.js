function sum(a, b) {
    return a + b
}

describe('Group test', () => {
    test('Get sum numbers', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
    
    test('Wrong', () => {
        const result = sum('1', '2')
        expect(result).toBe('12')
    })
})