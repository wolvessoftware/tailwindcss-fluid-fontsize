# Tailwindcss Fluid FontSize

A plugin to have an easy way to create dynamic font-sizes.

## 👉🏻 Installation

Install the plugin from npm:

```bash
# Using pnpm
pnpm install -D tailwindcss-fluid-fontsize

# Using npm
npm install -D tailwindcss-fluid-fontsize

# Using Yarn
yarn add -D tailwindcss-fluid-fontsize
```

Then add the plugin to your tailwind.config.js file and do your settings if you're not happy with the defaults:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-fluid-fontsize"),
    // ...
  ],
};
```

## 👉🏻 Usage

Nothing changed here to the default tailwindcss configuration:

```html
<article>
  <h1 class="text-xl">Fluid type</h1>
</article>
```

## 👉🏻 Configuration

The plugin comes with a default configuration (see below) but it's possible to customize this config for your project.
As default, we use `rem` for better accessibility, but you can also use `px`.

### Default configuration

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-fluid-fontsize")({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      sizes: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
        "4xl": [5, 1.1],
        "5xl": [6, 1.1],
        "6xl": [7, 1.1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
  ],
};
```
