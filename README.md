# mosh-react-18

# env setup

install prettier
turn on format on save in vs code

npm create vite@4.1.0 (@latest if on your own)
react
typescript

npm i (install)
npm run dev

npm i bootstrap@5.2.3

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
