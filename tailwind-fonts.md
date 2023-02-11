# Next.js Fonts with Tailwind CSS

After installing Tailwind CSS, you may want to add custom fonts to your project.  

## Step 1: layout.tsx

- import the fonts you need
- assign them to variables
- add the fonts to the `<html>` element

Notice that we do not need a weight property in our variables, because both Inter and Eczar are [variable fonts](https://fonts.google.com/variablefonts)

```tsx
import './globals.css'
import { Inter, Eczar } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional'
})

const eczar = Eczar({
  subsets: ['latin'],
  variable: '--font-eczar',
  display: 'optional'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} ${eczar.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
```

## Step 2: tailwind.config.js

Extend the `fontFamily` property in your `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        eczar: ['var(--font-eczar)'],
      },
    }
  },
  plugins: []
}
```

## Step 3: page.tsx

Use the fonts in your pages.

```tsx
export default function Home() {
  return (
    <div>
      <div className=''>Font default</div>
      <div className='font-inter'>Font Inter</div>
      <div className='font-eczar'>Font Eczar</div>
    </div>
  )
}
```
