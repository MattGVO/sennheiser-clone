import React from 'react';
import Gallery from '../../components/Gallery/Gallery';

function Headphones () {
    return (
        <div className="Headphones">
            <Gallery/>
            <section className="Categories">
                <h1>In-Ear</h1>
                <h1>Over-Ear</h1>
                <h1>Wireless</h1>
            </section>
        </div>
    );
}

export default Headphones;