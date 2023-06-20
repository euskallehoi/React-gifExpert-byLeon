import { GifItem } from '../../src/components/gifGridItem'
import {render, screen} from '@testing-library/react'

describe('Pruebas en <gifItem />', () => {

    const title = 'Piccolo';
    const url = 'https://dragon-ball.com/piccolo.jpn';

    test('debe de hacer match con el snapchot', () => {
        
        const { container } = render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy();

    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifItem title={ title } url={ url } /> )
        //screen.debug();
        // expect(screen.getByRole('img').src ).toBe( url );
        // expect(screen.getByRole('img').src ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('debe de mostrar el titulo en el componente', () => {
        
        render( <GifItem title={ title } url={ url } /> )
        expect( screen.getByText( title ) ).toBeTruthy();

    });
})
