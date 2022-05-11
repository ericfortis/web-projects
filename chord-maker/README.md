# Chord Maker
A programming project for musicians learning to code.

Demo App: __https://ericfortis.github.io/web-projects/chord-maker/__


## Exercise

Implement __dim7__

For example, 

`DiminishedSeventh(B)` should output

`[B, D, F, G_Sharp]`


## Files

### chord-maker.js
This file has algorithms for computing the notes
of a given chord. It's octave agnostic, for example:

`Major(C)` returns `[C, E, G]`

`Major(G)` returns `[G, B, D]`

We'll use it as the engine of a web user interface, but its code would be
similar if written in many other programming languages. So you could use it as
the basis for projects such as an electronic keyboard, or a virtual assistant.


To run its tests (using [Node.js](https://nodejs.org/)):
```shell
node chord-maker.test.js
```

### index.html
This file is for the user interface. In contrast to
`chord-maker.js`, it's highly particular to programming web apps.

In macOS, run it from the Terminal:
```shell
cd chord-maker
python3 -m http.server 8000
```
Then, open a browser [localhost:8000](http://localhost:8000)

