import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string',()=>{

    test('getSaludo debe de retornar hola Fernando',() => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe( 'Hola ' + nombre );

    }); 

    test('getSaludo debe de retornar valor default',() => {

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos' );

    }); 
});