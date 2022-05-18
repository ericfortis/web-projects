# Web Learning Projects

A collection of plain CSS, JS, HTML projects for learning.
These programs are [ISC licensed](./LICENSE).


## Paint Calculator [(Demo)](https://ericfortis.github.io/web-projects/paint-calculator/)
A plain CSS, JS, HTML paint calculator.


## Daily Menu Specials [(Demo)](https://ericfortis.github.io/web-projects/daily-menu-specials/)
A webpage that shows a different image each day. For example, for a menu special.


## Chord Maker [(Demo)](https://ericfortis.github.io/web-projects/chord-maker/)
A programming project for musicians learning to code.

### Exercise

Implement __dim7__. For example, `DiminishedSeventh(B)` should output `[B, D, F, G_Sharp]`


### Files

#### chord-maker.js
This file has algorithms for computing the notes of
a given chord. It's octave agnostic, for example:

`Major(C)` returns `[C, E, G]`

`Major(G)` returns `[G, B, D]`

We'll use it as the engine of a web user interface, but its code would be
similar if written in many other programming languages. So you could use it as
the basis for projects such as an electronic keyboard, or a virtual assistant.

To run its tests (using [Node.js](https://nodejs.org/)):
```shell
node chord-maker.test.js
```

#### index.html
This file is for the user interface. In contrast to
`chord-maker.js`, it's highly particular to programming web apps.

In macOS, run it from the Terminal:
```shell
cd chord-maker
python3 -m http.server 8000
```
Then, open a browser [localhost:8000](http://localhost:8000)



