import { getGifs } from '../../src/helpers/getgifs'

describe('Pruebas en <getgifs />', () => {
    test('debe de retornar los gifs', async() => {
        
        const gifs = await getGifs('Dragon ball')
        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

    });
})