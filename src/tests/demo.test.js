

describe('Pruebas en el archivo demo.test.js', () => {
    
    test('Debe de ser true', () => {

        // 1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3. observar el comportaminedo
        expect( mensaje ).toBe( mensaje2 );
    
    });
    
});


// test('Debe de ser true 2.0', () => {
//     const isActive = false;
// });


