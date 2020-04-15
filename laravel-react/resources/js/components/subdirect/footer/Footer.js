import React from 'react';

export default function Footer(){
    const styleFooter = {
        textAlign: 'center',
        fontSize: '20px',
        width: '100%',
        backgroundColor: 'red',
        bottom: '0',
        padding: '4px',
        height: '5vh'
    }

    return(
        <footer style={styleFooter}>
            <p>
                this is Footer React.
            </p>
        </footer>
    );
}
