const sizes = {
  30: "12px",
  35: "14px",
  40: "16px",
  50: "20px",
};

const letterSpacing = {
  base: "0px",
  sparse: "0.25px",
};

const fontFamilies = {
  ui: '"Roboto Flex", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  heading:
    '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

export const theme = {
  colors: {
    primary: {
      base: "#A76AFC",
      hover: "#7E3DDA",
      active: "#5114A6",
      text: "#fff",
    },
    secondary: {
      base: "#F5EBFF",
      hover: "#F7F0FF",
      active: "#E4CAFF",
      text: "#7F40D8",
    },
    link: {
      base: "#3C479D",
      hover: "#6878CA",
      active: "#2E3880",
    },
    text: {
      base: "#000000",
      secondary: "#666666",
      body: "#546378",
    },
    border: "#E0E0E0",
    input: {
      resting: "#AEB9C9",
      focused: "#3C479D",
      invalid: "#BD350F",
      label: "#273343",
      placeholder: "#3C4A5E",
      errorMessage: "#8E280B",
    },
    white: "#FFFFFF",
    focus: {
      shadow: "#E4EBFF",
    },
  },
  typography: {
    family: {
      ...fontFamilies,
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    size: {
      sm: "14px",
      md: "16px", // Body text
      ...sizes,
    },
    headings: {
      xs: {
        fontSize: sizes[50],
        lineHeight: "25px",
        letterSpacing: letterSpacing.base,
      },
    },
    lineHeight: {
      ...sizes,
      normal: 1.5,
    },
    letterSpacing,
  },
  spacing: {
    md: "16px", // The padding top/bottom from your specs

    // For specific values from your Figma design:
    input: {
      padding: "12px",
      gap: "10px",
    },
  },
  borderRadius: {
    md: "8px", // From your Figma radius spec
  },
  shadows: {
    focus: "0px 0px 0px 3px #E4EBFF",
  },
  layout: {
    button: {
      width: "437px", // Fixed width from Figma
      height: "48px", // Hug height from Figma
    },
    input: {
      height: "40px", // Height for inputs based on Figma
    },
  },
  transition: {
    normal: "0.2s ease",
  },
};

// This helps with TypeScript intellisense
export type Theme = typeof theme;

// For default theme in styled-components
export default theme;

// note - figma height - doesnt include strokes
