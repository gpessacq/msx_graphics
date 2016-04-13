# msx_graphics.js

A Javascript library to draw in the canvas using [MSX](https://en.wikipedia.org/wiki/MSX) [Basic](https://en.wikipedia.org/wiki/MSX_BASIC) style methods.

##Methods

### screen
Passes the canvas 2d context to msxGraphics.


```
msxGraphics.screen(canvas_context);
```

##### Where

canvas_context is the canvas context.


##### Example

var canvas = document.querySelector("#myCanvas");

var ctx = canvas.getContext("2d");

msxGraphics.screen(ctx); 

### pset
Draws a single pixel.

```
pset(x1, y1, color);
```

##### Where

x1 is the x coordinate of a pixel.

y1 is the y coordinate of a pixel.

color is the pixel color.

##### Example

msxGraphics.pset(150, 55, "#afeeff");

### line
Draws a line or a box.

```
msxGraphics.line(x1, y1, x2, y2, color, box_full);
```

##### Where

x1 is the first x coordinate of the line.

y1 is the first y coordinate of the line.

x2 is the second x coordinate of the line.

y2 is the second y coordinate of the line.

color is the line or box color.

boxFull if present fills a rectangle.

##### Example

msxGraphics.line(300, 400, 350, 500, "#996633", 1);  

### circle
Draws a circle.

```
msxGraphics.circle(x1, y1, radius, color); 
```

##### Where

x1 is the x coordinate of the center of the circle.

y1 is the y coordinate of the center of the circle.

radius is the radius in pixels of the circle.

color is the color of the circle.

##### Example

msxGraphics.circle(190, 30, 24, "#66ff66");
