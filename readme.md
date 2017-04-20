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

**opts** is a config which will be pass directly to [byebyte](https://github.com/wayspurrchen/byebyte).
- **opts.command** must be either `destroy` or `shuffle`.
- **opts.animate** (optional). A boolean for if the image should be continually reglitched on animation frame. Default is true.
- please consult `byebyte` for command specific options


