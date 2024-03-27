## Explore all the ways of writing css.
   
   ● https://styled-components.com/
   ● https://tailwindcss.com/
   ● https://getbootstrap.com/
   ● Material UI - https://mui.com/
   ● https://ant.design/
   ● https://sass-lang.com/guide/
   ● https://blog.logrocket.com/the-definitive-guide-to-scss/
   ● https://chakra-ui.com/

## How do we configure tailwind?
  -Installing Tailwind CSS with Parcel
     - npm install -D tailwindcss postcss
     - npx tailwindcss init
   these commands will create tailwind.config.js
     which will be like this 
            /** @type {import('tailwindcss').Config} */
                  module.exports = {
                  content: ["./src/**/*.{html,js,ts,jsx,tsx}",],
                  theme: {
                     extend: {},
                  },
                  plugins: [],
                  }

  - now we'll also have to configure PostCSS 
      by creating a new file .postcssrc
           {
              "plugins": {
                  "tailwindcss": {}
                  }
            }

    and in the End we will have to add 

               @tailwind base;
               @tailwind components;
               @tailwind utilities;

         in our index.css file.

   

## In tailwind.config.js, what does all the keys mean (content, theme, extend,
## plugins)?

    - content :
         shows that we are using different different named file(Extension) in this. like -> .js,.jsx,. html etc.it Defines the files that Tailwind should analyze to remove unused styles.
    - theme: Customizes Tailwind's default design system such as colors, spacing, typography, etc
    - extend: Extends or overrides Tailwind's default utility classes.
    - plugins: Includes additional plugins to enhance Tailwind's functionality.




## Why do we have .postcssrc file?
 - basically it's just a tool for  transforming CSS with JavaScript.
 - tailwind CSS uses PostCSS behind the scene.


