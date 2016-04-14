# TodoMVC example build with React, Flux, Kefir.js and ES6

Forked to show bug where componentDidUpdate prevProps does not contain value of prevProps but of current props. 

Steps to see: 

1. Build and run the todo app. 
2. Add a todo. 
3. Edit the todo that you added. 
4. Check the console where value from componentDidUpdate is logged. prevProps value is the latest prop and not prevProps. 

Note: This bug does not exist in the original FluxTodo-MVC app by Bill Fisher. 
Note2: I came across this bug while building another flux react application and then repro'd it here using the todo-mvc app. 

==============================================================================
This is port of official TodoMVC Flux example from Facebook: <a href="http://github.com/facebook/flux/blob/master/examples/flux-todomvc">http://github.com/facebook/flux/blob/master/examples/flux-todomvc</a> - files structure and most of variable names are the same.

Flux Dispatcher and EventEmitter (used in Store) are replaced with Kefir.js FRP library: <a href="http://pozadi.github.io/kefir/">http://pozadi.github.io/kefir/</a>   

JavaScript code is written in ES6 with modern React 0.13 class syntax, transpiled by <a href="http://babeljs.io/">Babel</a>

<a href="http://pqr.github.io/react-flux-kefir-es6-todomvc-example/">Demo</a>

## Installing

    npm install
    
## Rebuild if you change something 
    
    webpack
