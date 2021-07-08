import React from 'react';
import './Discover.css';

const Discover = () => {
    return (
        <div className='my-5'>
            <div className="text-center">
                <h5 className='font-dancing color-red font-bold discover-title-top'>Discover</h5>
                <h2 className='font-ubuntu discover-title'>OUR COMPANY HISTORY</h2>
            </div>
            <div className="container my-5">
                <h4 className='text-center font-ubuntu'>The standard Lorem Ipsum passage, used since the 1500s</h4>
                <p className='text-center font-open-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa laboriosam repudiandae rem veritatis magnam minus labore, expedita reiciendis quisquam laborum aliquid numquam fugiat ullam tempore sequi saepe nisi repellat, accusamus accusantium quibusdam quidem molestiae. Quae, amet eligendi! Dolor deleniti aspernatur quibusdam, itaque quae aut voluptatem tempore id quasi odit numquam unde temporibus, perferendis ipsam maxime consequatur voluptatibus velit maiores?</p>
                <div className="row">
                    <div className="col-md-6 discover-image p-2">
                        <img className='img-fluid rounded' src="https://i.ibb.co/mBXGH80/engin-akyurt-x1-KEls-XNet0-unsplash-1.jpg" alt="" />
                    </div>
                    <div className="col-md-6 discover-image p-2">
                        <img className='img-fluid rounded' src="https://i.ibb.co/KGPtk6N/ann-b7ooyxpub4-A-unsplash-1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;