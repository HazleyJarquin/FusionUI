import { ChakraProvider, ThemeOverride } from "@chakra-ui/react";
import type { Preview } from "@storybook/react";

import customTheme from "../src/theme";
import React from "react";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider theme={customTheme satisfies ThemeOverride}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
