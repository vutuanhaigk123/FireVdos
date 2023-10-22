import axios from "axios";
import { getYTApiKey } from "./utils/constant.js";

const base_url = "https://yt-api.p.rapidapi.com";

function getOptions() {
  return {
    headers: {
      "X-RapidAPI-Key": getYTApiKey(),
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };
}

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(base_url + "/" + url, getOptions());
    console.log("API call for ...", url);

    return data;
  } catch (error) {
    console.error(error);
  }
};
