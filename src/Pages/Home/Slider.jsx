import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <div className='lg:w-[90%] w-[95%] mx-auto rounded-2xl'>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://d33xpen3f57qeo.cloudfront.net/wp-content/uploads/sites/2/2015/03/17154827/study-help-finding-an-online-language-tutor.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
        <SwiperSlide>
            <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://oasesonline.com/wp-content/uploads/2017/01/AdobeStock_99777536-1024x683-1.jpeg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
        <SwiperSlide>
            <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: "url(https://cdn.prod.website-files.com/650355070f73b7b0891ec935/6595826f27305f540ef6e5cc_6504bb16851001e8456c8989_63c8423c983faf514e3e5ec8_prepare.jpeg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;