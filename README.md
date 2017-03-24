# Algolia-test-2

This test is my attempt at **integrating a react-instantsearch inside a custom app**. The goal of this was to discover how react-instantsearch works under the hood, as well as showing how I tend to structure my folders and files with maintainability in mind. I've added only the most essential widgets, as well as building three different themes. All of them are **fully responsive** and will work from small iPhone resolution to big desktop screens.

On a side note, I have to say I'm very impressed at how easy it is to integrate and customize react-instantsearch onto an existing app. The only problem I ran into wasn't a big one: it seems I didn't have the possibility to customize the DOM provided by the widgets (eg. have `ais-Hits__root` as a `ul` instead of a `div`).

## How-to

Run `npm install && npm start` to launch the app at http://localhost:3000/.

## Stack and approach

- This app has been built using **create-react-app**.
- I've added **Sass** to get a lot of benefits over vanilla CSS (variables, smart nesting, mixins, etc).
- I've also added [Normalize.css](https://necolas.github.io/normalize.css/) in order to improve browsers consistency.
- The CSS has been written using a BEM variant called [SUIT](https://suitcss.github.io/). I find it to be the most relevant when it comes to React as its CamelCase syntax complements React components. It's also very scalable and efficient when the codebase grows a lot.
- Most of the unit measures I've used are written using **rem** over px (stuff like images or border-width / radius still use px). This is good for users who have changed the default size of  their browsers.
- I've adopted an **approach by component** which has also been reflected in SCSS files. As an example, you'll notice media queries which concern a specific component **are located inside this very component**. This makes components more maintainable as well as making media queries easier to manage. The impact of this on gzipped file size is negligible, as shown by [Jake Archibald](https://jakearchibald.github.io/sass-ie/).

## Nice to have

Here are a few things I would have liked to do/add wih a bit more time:

- Add localStorage in order to persist the chosen theme.
- Test the rendering on more devices with tools such as [Browserstack](https://www.browserstack.com/start).
