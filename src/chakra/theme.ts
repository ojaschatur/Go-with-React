// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "gray",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { base: "white", _dark: "gray.500" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
export default system;
