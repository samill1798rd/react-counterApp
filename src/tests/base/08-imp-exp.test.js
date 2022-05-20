import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
import '@testing-library/jest-dom';

describe('Pruebas en funciones de Heroe',() => {

    test('Debe retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find ( heroe => heroe.id === id);

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe retornar un undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });


    test('Debe retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';

        const heroes = getHeroesByOwner( owner );

        const heroeData = heroes.filter ( heroe => heroe.owner === owner);

        expect( heroes  ).toEqual( heroeData );

    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';

        const heroesList = getHeroesByOwner( owner );

        expect( heroesList.length ).toBe(2);

    });

    
    test('Debe retornar un arreglo vacio al un owner al no existir', () => {
        
        const owner = 'Naruto';

        const heroesList = getHeroesByOwner( owner );

        expect( heroesList ).toEqual([]);

    });




});