import React from 'react';
import Slider from './Slider';
import Stats from './Stats';
import LanguageCategories from './LanguageCategories';
import FeedBack from './FeedBack';
import LatestTutor from './LatestTutor';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Stats></Stats>
            <LanguageCategories></LanguageCategories>
            <LatestTutor></LatestTutor>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;