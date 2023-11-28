"use client";

import Slider from "react-slick";
import AnimeCard from "../AnimeList/AnimeCard";
import AnimeSkeleton from "../AnimeList/AnimeSkeleton";
import { useState } from "react";
import SettingSlider from "./SettingSlider";

const AnimeSlider = ({ api }) => {
  const [slideValue, setslideValue] = useState(0);
  const arr = Array.from({ length: 5 }, (value, index) => index);

  const currentSlide = () => {
    if (slideValue < 4) {
      setslideValue(slideValue + 1);
    } else {
      setslideValue(0);
    }
  };

  return (
    <div className="p-3 md:px-3">
      <Slider beforeChange={currentSlide} {...SettingSlider(slideValue)}>
        {api.data
          ? api.data.map((anime) => {
              return (
                <div className="px-2">
                  <AnimeCard
                    key={anime.mal_id}
                    id={anime.mal_id}
                    title={anime.title}
                    episode={anime.episodes}
                    studio={
                      anime.studios[0] ? anime.studios[0].name : "unknown"
                    }
                    image={anime.images.webp.image_url}
                  />
                </div>
              );
            })
          : arr.map((val) => {
              return <AnimeSkeleton key={val} />;
            })}
      </Slider>
    </div>
  );
};

export default AnimeSlider;
