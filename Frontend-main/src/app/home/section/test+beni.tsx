// test+beni.tsx

import React from 'react';
import Image from 'next/image';
import Testimonial from './Testimonial';
import Benefits from './Benifits';

const TestBeni = () => {
    return (
        <div className="relative w-full">
            {/* Background Image with padding from top */}
            <div className="absolute inset-0">
                <Image
                    src="/test+ben-bg.svg"
                    alt="Background"
                    fill
                    style={{ objectFit: 'cover' }}
                />

            </div>

            <div className="py-8 relative z-10 m-0 p-0">
                <section className="relative lg:pt-4 pb-14">
                    <Testimonial />
                </section>

                {/* Benefits Section */}
                <section className="relative lg:pb-8">
                    <Benefits />
                </section>
            </div>
        </div>
    );
}

export default TestBeni;
