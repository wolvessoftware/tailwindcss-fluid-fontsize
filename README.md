# Tailwindcss Fluid FontSize

A plugin to have an easy way to create dynamic font-sizes.

## 👉🏻 Installation

Install the plugin from npm:

```bash
# Using pnpm
pnpm install -D @wolves.ink/tailwindcss-fluid-fontsize

# Using npm
npm install -D @wolves.ink/tailwindcss-fluid-fontsize

# Using Yarn
yarn add -D @wolves.ink/tailwindcss-fluid-fontsize
```

Then add the plugin to your tailwind.config.js file and do your settings if you're not happy with the defaults:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("@wolves.ink/tailwindcss-fluid-fontsize")(),
    // ...
  ],
};
```

## 👉🏻 Usage

When not setting a prefix you can use the default font sizing classes.

```html
<article>
  <h1 class="text-xl">Fluid font-size</h1>
</article>
```

## 👉🏻 Configuration

The plugin comes with a default configuration (see below) but it's possible to customize this config for your project.
As default, we use `rem` for better accessibility, but you can also use `px`.

Without setting a prefix the normal css text-xx classes will be overwritten.

When defining a fluidFontSize the first value will be used up to the screenMin value. Between the screenMin and screenMax the font will scale linear from the fist value set on the size up to the second value. When the screen is larger than screenMax the font size will be the second value.

### Default configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    fluidFontSize: {
      xs: [0.75, 0.75],
      sm: [0.875, 0.875],
      base: [1, 1],
      lg: [1, 1.125],
      xl: [1, 1.25],
      "2xl": [1.25, 1.5],
      "3xl": [1.5, 1.875],
      "4xl": [1.75, 2.25],
      "5xl": [2, 3],
      "6xl": [2.5, 3.75],
      "7xl": [2.75, 4.5],
      "8xl": [3, 6],
      "9xl": [4, 8],
    },
  },
  plugins: [
    require("@wolves.ink/tailwindcss-fluid-fontsize")({
      screenMin: 20, // 20rem === 320px
      screenMax: 96, // 96rem === 1536px
      unit: "rem", // default is rem but it's also possible to use 'px'
      prefix: "", // set a prefix to use it alongside the default font sizes
    }),
  ],
};
```

## Acknowledgements

There is already a fluid type plugin, but there is no fine grain control for diffrent heading sizes

- [Fluid Type](https://github.com/davidhellmann/tailwindcss-fluid-type)
