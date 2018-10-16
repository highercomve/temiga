import Mapper from '../src/mapper'

describe('Mapper string to object with functions', () => {
  test('Test with one variable', () => {
    const link = "https://higher.com.ve"
    const text = "Mi sitio web"
    const mapper = new Mapper(document.body, { link, text })
    const map = mapper.map`
    <a href="${link}">
      Prueba de algo ${text}
    </a>`
    expect(map).toEqual({
      link: [
        { comand: 'setAttribute', params: ['href', link] }
      ]
    })
  })
})
