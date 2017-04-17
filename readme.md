# GlitchImage

Creates an `<img>` that has been glitched.

## Install

`npm install glitch-img-tag --save`

## Usage

```html
<div id='main'></div>
```

```js
var GlitchImage = require('glitch-img-tag');

var img = new GlitchImage('https://www.instagram.com/p/BEm1yKquZqk/media/?size=m')

var div = document.getElementById('main');
div.appendChild(img);
```

## API

`var img = new GlitchImage(url[, opts]);`

**url** is a url to an image.

**opts** is a config.
