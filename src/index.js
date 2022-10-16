const plugin = require("tailwindcss/plugin");
const defaults = require("./config/defaults");
const calcClampFontSize = require("./utils/calcClampFontSize");

module.exports = plugin(function ({ addUtilities, theme }) {
  const fluidFontSize = theme("fluidFontSize");
  const settings = {
    ...defaults.settings,
    ...(fluidFontSize?.settings || {}),
  };
  const sizes = fluidFontSize?.sizes || defaults.sizes;
  let prefix = "";
  if (settings?.prefix) {
    prefix = settings?.prefix + "-";
  }
  if (sizes) {
    const fontSizes = Object.entries(sizes).map(([key, value]) => {
      if (Array.isArray(value)) {
        return {
          [`.${prefix}text-${key}`]: {
            fontSize: calcClampFontSize(
              value[0],
              value[1],
              settings.screenMin,
              settings.screenMax,
              settings.unit
            ),
          },
        };
      }
    });
    addUtilities(fontSizes, {
      variants: ["responsive"],
    });
  }
});
