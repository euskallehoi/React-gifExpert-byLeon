import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/gifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('pruebas en <gifGrid', () => {

    const category = 'Dragon ball'


    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        
        render( <GifGrid category={ category }/> )
        expect( screen.getByText('cargando...') );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchgifs', () => {
        
        const gifs = [
            {
                id   : 'ABC',
                title: 'Dragon ball',
                url  : 'https://localhost/Dragon ball'
            },
            {
                id   : 'goku',
                title: 'Naruto',
                url  : 'https://localhost/Naruto'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false,
        });

        render( <GifGrid category={ category }/> )

        expect( screen.getAllByRole('img').length ).toBe(2)
    });
})