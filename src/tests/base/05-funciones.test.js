import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones',()=>{

    test('getUser debe de retornar un objecto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    });

    test('getUserActivo debe de retornar un objecto', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'Test',
        };

        const {username} = userTest;

        const userActivo = getUsuarioActivo( username );

        expect( userActivo ).toEqual( userTest );
    });

});