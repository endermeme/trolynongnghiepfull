const asset_folder = "/assets/all/";

interface BadgeInfo {
    name: string;
    svg_src: string;
  }
  

export const weatherDescriptions: { [desc: string]: BadgeInfo } = {
  "clear sky": {
    name: "Trời quang",
    svg_src: asset_folder + "clear-day.svg",
  },
  "few clouds": {
    name: "Mây thưa",
    svg_src: asset_folder + "partly-cloudy-day.svg",
  },
  "overcast clouds": { name: "Nhiều mây", svg_src: asset_folder + "overcast-day.svg" },
  "scattered clouds": { name: "Mây rải rác", svg_src: asset_folder + "partly-cloudy-day.svg" },
  "broken clouds": { name: "Mây đứt quãng", svg_src: asset_folder + "partly-cloudy-day.svg" },
  "shower rain": { name: "Mưa rào", svg_src: asset_folder + "hail.svg" },
  "rain": { name: "Mưa", svg_src: asset_folder + "rain.svg" },
  "moderate rain": { name: "Mưa vừa", svg_src: asset_folder + "rain.svg" },
  "thunderstorm": { name: "Giông bão", svg_src: asset_folder + "thunderstorms-rain.svg" },
  "snow": { name: "Tuyết", svg_src: asset_folder + "snow.svg" },
  "mist": { name: "Sương mù", svg_src: asset_folder + "mist.svg" },
  "light rain": { name: "Mưa nhẹ", svg_src: asset_folder + "drizzle.svg" },
};