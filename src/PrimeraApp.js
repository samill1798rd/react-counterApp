import React from 'react';
import PropTypes from 'prop-types'

//FC
const PrimeraApp = ( { saludo, subtitulo } ) =>{


    return ( 
        <>
            <h1> { saludo } </h1>
            {/* <pre> { JSON.stringify( saludo,null,3) } </pre> */}
            <p> { subtitulo } </p>
        </>
    );
    

};

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un titulo',
}

export default PrimeraApp;