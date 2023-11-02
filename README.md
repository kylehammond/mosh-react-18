# mosh-react-18

# env setup

vscode extension: prettier
turn on format on save in vs code

npm create vite@4.1.0 (@latest if on your own)
react
typescript

npm i (install)
npm run dev

npm i bootstrap@5.2.3

vscode extension: oh lucy - color scheme (optional)
vscode extension: ES7+ React/Redux/React-Native snippets

# project structure

node_modeuls - npm packages, never have to touch
public - public assets of site like images, video
src - src code of app

index.html entry point to app - div with id of root (replaced by react) - script tag with type="module" src"/src/main.tsx"

package.json
dependencies and dev dependencies (those are not deployed)

tsconfig.json - how to compile ts to js - almost never will touch

vite.config.ts - mostly won't ever touch

# typescript

ts for plain ts
tsx for ts components

# jsx

babeljs.io/repl - see how code is compiled

# hmr

hot module reload - reloads vite server for you

# react

react is a libray, not framework (like angular/vue)

library - tool
framework - toolset

often need additional tools like - routing - http - managing app state - internationalization - form validation - animations

# css

bootstrap added

https://getbootstrap.com/docs/5.3/components/list-group/ - for how to form html with bootstrap

class is reserved in jsx - so use className

# fragments

can import Fragment from "react" and use <Fragment> OR <> without

# props vs state

props

- input passed to a component
- similar to function args
- immutable
- cause a re-render

state

- data managed by a component
- similar to local variables
- mutable
- cause a re-render

# shortcuts

rafce = react arrow function componenent export

# popular ui libraries

bootstrap - useful components, easy to use
material ui - open source react component library, google
tailwind - utility first css library - small utility classes vs full components
daisy ui - fuller components, like bootstrap
chakra ui - like tailwind, mosh likes, uses in this course
many more

react-icons - package of lots and lots of icons for each ui

# state management

react updates state async (not immediately)
batches up setstates

state is stored outside of components
(state is in memory as long as component is seen)

can only use hooks at the top level of a component
(have to be at top of function)

## best pracs:

avoid redundant state variables (anything that can be computed from existing state vars)

group related variables inside na object instead of separate state hooks

avoid deeply nested structures in your objects
(they can be hard to update)

## component purity

pure function - given the same input, always returns the same result

react expects every component to be a pure function (for performance reasons - if it hasn't changed it doesn't rerender)

keep changes out of the render phase

    Imagine a Message component that takes 'count' as a prop
    if the count was defined outside of the Message render function - there's a chance it could be changed each time it renders leading to an impure function


    let count = 0;

    const Message = () => {
        count++;
        return <div>Message {count}</div>
    }

    it would be totally fine to move let count = 0 to the rendering - because it would always start at 0 and increment 1 time

## Immer

npm i immer@9.0.19

## react hook form

npm i react-hook-form@7.43
