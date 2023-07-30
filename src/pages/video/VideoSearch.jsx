//AIzaSyDLff6jEnlP7hiogclVK94I0GKDZ8Okido

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import CategoryButton from './CategoryButton';

const apiKey = 'AIzaSyDLff6jEnlP7hiogclVK94I0GKDZ8Okido'; // Replace with your API key
const baseUrl = 'https://www.googleapis.com/youtube/v3';

const VideoSearch = () => {
  const [query, setQuery] = useState('');
  const [searchedQuery, setSearchedQuery] = useState('kvicha kvaratskhelia'); // Store the searched query separately
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(6); // Number of videos to display

  const getVideos = useCallback(async (searchQuery) => {
    try {
      const response = await axios.get(`${baseUrl}/search`, {
        params: {
          part: 'snippet',
          q: searchQuery,
          key: apiKey,
          maxResults: visibleVideos,
        },
      });

      const videoData = response.data.items.map((item) => ({
        title: item.snippet.title,
        videoId: item.id.videoId,
        thumbnail: item.snippet.thumbnails.default.url,
      }));

      setVideos(videoData);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    }
  }, [visibleVideos]);

  useEffect(() => {
    getVideos(searchedQuery); // Fetch videos based on the initial default search query
  }, [searchedQuery, getVideos]);

  const handleCategoryClick = (searchQuery) => {
    setQuery('');
    setSearchedQuery(searchQuery); // Update the searched query when a category is clicked
    setVisibleVideos(6); // Reset to display 6 videos when switching categories
    getVideos(searchQuery);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearchedQuery(query); // Update the searched query when a manual search is performed
    setVisibleVideos(6); // Reset to display 6 videos when searching
    getVideos(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const categories = [
    { searchQuery: 'kvicha kvaratskhelia in rubin kazan', buttonText: 'ყაზანის რუბინი' },
    { searchQuery: 'kvicha kvaratskhelia in batumi dinamo', buttonText: 'ბათუმის დინამო' },
    { searchQuery: 'kvicha kvaratskhelia in napoli', buttonText: 'ნაპოლი' },
    { searchQuery: 'kvicha kvaratskhelia goals', buttonText: 'გოლები' },
    { searchQuery: 'kvicha kvaratskhelia highlights', buttonText: 'საუკეტესო მომენტები' },
  ];

  return (
    <div className="vid_cont">
      <form onSubmit={handleSearchSubmit} className="video_form">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="მოძებნე ვიდეო..."
          className="search_input"
        />
        <button type="submit" className="search_button">
          ძებნა
        </button>
      </form>

      <div className="cat_list">
        {categories.map((category) => (
          <CategoryButton
            key={category.buttonText}
            onClick={() => handleCategoryClick(category.searchQuery)}
            buttonText={category.buttonText}
          />
        ))}
      </div>

      <div className="video_list">
        {videos.map((video) => (
          <div key={video.videoId} className="video_list_item">
            <h2 className="video_list_item_title">{video.title}</h2>
            <div className="video_container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSearch;
