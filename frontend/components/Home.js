import React from 'react';
import Welcome from './Home/Welcome';
import Slogan from './Home/Slogan';
import FreshMovies from './Home/FreshMovies';

export default function Home() {
  return (
    <div>
        <Slogan />
        <Welcome />
        <FreshMovies />
    </div>
  );
}
