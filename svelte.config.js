import adapter from "@sveltejs/adapter-node";

import { vitePreprocess } from "@sveltejs/kit/vite";

const config = {
  kit: {
    adapter: adapter({ out: "build" }),
  },

  preprocess: vitePreprocess(),
};

export default config;
