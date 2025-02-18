import axios from 'axios';

//const URL = "http://localhost:3000/api";

const URL = "https://fakefy.onrender.com/";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
