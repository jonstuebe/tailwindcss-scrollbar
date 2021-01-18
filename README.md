# tailwindcss-scrollbar

The `tailwindcss-scrollbar` plugin adds a set of customizable utility classes that you can use to add custom scrollbars in `webkit` based browsers.

## Installation

Install the plugin from npm

```bash
# Using npm
npm install tailwindcss-scrollbar

# Using yarn
yarn add tailwindcss-scrollbar
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    // ...
  ],
};
```

## Usage

Now you can use the utility classes to add your custom scrollbar to any html/jsx:

```html
<!-- html -->
<html class="overflow-y-scroll">
  ...
  <body class="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    ...
  </body>
</html>
```

```jsx
{/* Next.js _document.js */}
<Html class="overflow-y-scroll">
  ...
  <body class="scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-200">
  ...
```

### Width modifiers

Width modifiers allow you to adjust the width of the scrollbar. This follows the values from `theme.spacing`.

```html
<!-- html -->
<html class="overflow-y-scroll">
  ...
  <body class="scrollbar-w-1 scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    ...
  </body>
</html>
```

### Color modifiers

Both the `thumb` and `track` have color modifiers based off of `theme.colors` (see above examples).

### Variants

If you want to add other variants such as `dark`, `responsive`, etc, add them to your config like so:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("tailwindcss-scrollbar"),
    // ...
  ],
  variants: {
    scrollbar: ["dark"],
    // ...
  },
};
```
