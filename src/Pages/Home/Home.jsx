import React from 'react';
import Slider from './Slider';
import Stats from './Stats';
import LanguageCategories from './LanguageCategories';
import FeedBack from './FeedBack';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;