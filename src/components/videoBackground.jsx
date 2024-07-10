import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const trailerKey = useSelector((store) => {
    return store.movies?.trailerVideo;
  });

  return (
    <div className="w-full ">
      <iframe
        className="aspect-video w-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 1022789,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Time to Celebrate",
//       "key": "RY5aH21ohU4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-19T17:41:37.000Z",
//       "id": "6674f0f178b39f538271e0ec"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Best Movie of the Year",
//       "key": "eioXDOSx6rQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-19T17:40:40.000Z",
//       "id": "6674f0f9a4c73dd59071e2e2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "#1 Movie is Certified Fresh",
//       "key": "b0mVq8LGOkI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-19T17:39:50.000Z",
//       "id": "6674f100233fc6557ab0459d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official IMAX® Interview",
//       "key": "RUFqAHPLkzI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-06-17T22:10:15.000Z",
//       "id": "667e9da6f8317d69d67de2b9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "IMAX® Upgrade",
//       "key": "j7jvAHcKJGs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-06-15T00:01:50.000Z",
//       "id": "667e9dba8e8acace5e45fc95"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Warm Fuzzies",
//       "key": "xSeavZfiO0s",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-14T23:30:23.000Z",
//       "id": "666fc14c3b0e63299ad1de87"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Father's Day",
//       "key": "-OrsTqfN-sg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-14T23:29:44.000Z",
//       "id": "666fc13ef182e419dbd1d9ed"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet the Cast of Inside Out 2",
//       "key": "uyzQw8-8k9U",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-06-07T00:37:41.000Z",
//       "id": "6662b013eba41395c5528e84"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Remember How You Felt...",
//       "key": "uskbXdnbcvg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-06T19:00:27.000Z",
//       "id": "6662ab539057653a013ca04d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Summer Kick Off",
//       "key": "0W6mhdueFec",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-05T18:00:00.000Z",
//       "id": "6662a0a53120d5f720089e1d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "L4DrolmDxmw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-06-04T16:00:17.000Z",
//       "id": "665f511e176dc873953843e5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Hop On",
//       "key": "uwnlgp64shw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-04T14:49:48.000Z",
//       "id": "665ffb8d5e9156e94f76ccfa"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Moments",
//       "key": "nm35CQL3yms",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-31T18:23:15.000Z",
//       "id": "665d81f49fa5ffa9046fc01f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Riley and Her Mom",
//       "key": "tnLtvSxNU1o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T21:00:38.000Z",
//       "id": "665d81e6fb05337b51907020"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bad Memories",
//       "key": "2GMtiofogKI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T19:00:37.000Z",
//       "id": "665d81ce16d2fa696edd7fdc"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet envy",
//       "key": "sqJ1Tz91TNA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T16:00:50.000Z",
//       "id": "665d819cfaf5d53a3923255e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "That Feeling When",
//       "key": "Zpcr6u-eu50",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-29T23:00:24.000Z",
//       "id": "6657fe3c46f30f137474d9c2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Joy & Anxiety",
//       "key": "R9H1df_tlwQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-05-29T23:00:22.000Z",
//       "id": "6657fe175e86abc4252d1df4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet Anxiety",
//       "key": "C27fmGCmPa4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-29T19:00:11.000Z",
//       "id": "6657fdfd97b7c5247574d896"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Booth To Screen",
//       "key": "MvKzg3rrP30",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-05-22T17:29:03.000Z",
//       "id": "664e43c27390b745b042952e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tickets on Sale!",
//       "key": "nDL4nbvT9T0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-14T16:00:42.000Z",
//       "id": "664445d0609d6aec31c53813"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Where Can I Put My Stuff",
//       "key": "E4rC-9NR7dk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-05-14T13:00:23.000Z",
//       "id": "664445dfad08a305073d2cb6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "LEjhY15eCx0",// youtube key
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-03-07T17:00:10.000Z",
//       "id": "65e9f3347c6de3016308522d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Team",
//       "key": "aYRnM4nyuKs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-08T17:00:02.000Z",
//       "id": "65c50910db4ed60183d301c5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Teaser Trailer",
//       "key": "VWavstJydZU",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-11-09T13:59:01.000Z",
//       "id": "654ce86241a561336b7a5a0d"
//     }
//   ]
// }
