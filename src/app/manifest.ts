import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vedant Sunil Raut - Portfolio",
    short_name: "Vedant Raut",
    description: "Software Engineer at Logituit & Native Android Specialist",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#a855f7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
