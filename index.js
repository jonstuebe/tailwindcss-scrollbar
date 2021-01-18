const plugin = require("tailwindcss/plugin");

function generateThemeOptions({
  prefix,
  themeValues,
  transformValue = (value) => value,
}) {
  return Object.keys(themeValues).reduce((acc, name) => {
    if (typeof themeValues[name] === "string") {
      return {
        ...acc,
        [`.${prefix}-${name}`]: transformValue(themeValues[name]),
      };
    }

    return {
      ...acc,
      ...generateThemeOptions({
        prefix: `${prefix}-${name}`,
        transformValue,
        themeValues: themeValues[name],
      }),
    };
  }, {});
}

module.exports = plugin(function ({ addUtilities, theme, variants }) {
  const scrollbarUtilities = {
    ".scrollbar": {
      "&::-webkit-scrollbar": { width: theme("spacing.4") },
    },
    ...generateThemeOptions({
      prefix: "scrollbar-w",
      themeValues: theme("spacing"),
      transformValue: (value) => {
        return {
          "&::-webkit-scrollbar": { width: value },
        };
      },
    }),
    ...generateThemeOptions({
      prefix: "scrollbar-thumb-rounded",
      themeValues: theme("borderRadius"),
      transformValue: (value) => {
        return {
          "&::-webkit-scrollbar-thumb": { borderRadius: value },
        };
      },
    }),
    ...generateThemeOptions({
      prefix: "scrollbar-thumb",
      themeValues: theme("colors"),
      transformValue: (value) => {
        return {
          "&::-webkit-scrollbar-thumb": { backgroundColor: value },
        };
      },
    }),
    ...generateThemeOptions({
      prefix: "scrollbar-track",
      themeValues: theme("colors"),
      transformValue: (value) => {
        return {
          "&::-webkit-scrollbar-track": {
            backgroundColor: value,
          },
        };
      },
    }),
  };

  addUtilities(scrollbarUtilities, variants("scrollbar"));
});
