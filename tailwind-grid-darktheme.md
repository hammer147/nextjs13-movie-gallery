# Next.js with Tailwind CSS

Just 2 non-related tricks:

## add dark theme

in globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
}
```

## add a fluid grid

in tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(15rem, 1fr))'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        eczar: ['var(--font-eczar)']
      }
    }
  },
  plugins: []
}
```

and in your component

```jsx
<div className='grid grid-cols-fluid gap-12'>
  {res.results.map(movie => (
    <Movie
      key={movie.id}
      id={movie.id}
      title={movie.title}
      poster_path={movie.poster_path}
      release_date={movie.release_date}
    />
  ))}
</div>
```
