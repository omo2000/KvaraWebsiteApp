import React from 'react';
import { Leftside } from '../../global';
import { Header } from '../header';
import VideoSearch from './VideoSearch';
import { Footer } from '../../global';

export function Video() {
  return (
    <div className="container">
      <Leftside />
      <div className="right-1">
        <div className="right-001"></div>
        <Header />
        <div className="right-2">
          <div className="video_cont">
            <div className="video_inner_cont">
              <VideoSearch />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
