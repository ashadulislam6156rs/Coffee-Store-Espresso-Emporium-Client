import React from 'react';
import Banner from '../Componants/Banner';
import PopularProducts from './PopularProducts';
import FollowUsParent from '../Componants/FollowNow/FollowUsParent';

const Home = () => {
    return (
      <div>
            <Banner></Banner>
        <PopularProducts></PopularProducts>
        <FollowUsParent></FollowUsParent>
      </div>
    );
};

export default Home;