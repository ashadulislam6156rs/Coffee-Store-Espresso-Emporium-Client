import React from 'react';
import Container from '../../Container/Container';
import GalleryFollow from './GalleryFollow';

const FollowUsParent = () => {
    return (
      <div>
        <Container className={`mb-10`}>
          <p className="text-center text-xs pt-5">--- Follow Us Now ---</p>
          <h1 className="text-3xl text-[#331A15] font-semibold text-center py-3 mb-4">
            Follow on Instagram
          </h1>
          <div>{<GalleryFollow></GalleryFollow>}</div>
        </Container>
      </div>
    );
};

export default FollowUsParent;