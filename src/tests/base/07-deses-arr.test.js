import '@testing-library/jest-dom';

import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuracion', ()=>{

    test('Debe de re retornar un string y un numero',()=>{
        
        const [ letras , numeros ] = retornaArreglo(); //['ABC', 123]

         console.log( typeof numeros);
        //expect( arr ).toEqual( ['ABC', 123] );
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    

    });
});