var byebyte = require('byebyte');
var Buffer = require('buffer/').Buffer;

module.exports = function(url, opts) {
  opts = opts || { command: 'destroy', min: .3, max: .8 };
  opts.animate = opts.animate === undefined ? true : opts.animate;

  var real = document.createElement('img');
  real.crossOrigin = 'Anonymous';
  var glitch = document.createElement('img');

  real.onload = function(){
    var tmp = document.createElement('canvas');
    var ctx = tmp.getContext('2d');
    tmp.width = real.width;
    tmp.height = real.height;
    ctx.drawImage(real, 0, 0);
    process(glitch, tmp, ctx, opts);
  };
  real.src = url

  return glitch;
};

function process(img, canvas, ctx, opts) {
  canvas.toBlob(function(blob) {
    var fileReader = new FileReader();
    fileReader.onload = function() {
      var arrayBuffer = this.result;
      var buffer  = Buffer.from(arrayBuffer);
      var result = byebyte[opts.command](buffer, opts);

      var fb = new Blob([result.buffer]);
      var url = URL.createObjectURL(fb);
      var broken = document.createElement('img');
      broken.onload = function() {
        ctx.drawImage(broken, 0, 0);
        canvas.toBlob(function(blob) {
          var url = URL.createObjectURL(blob);
          if (img.parentElement !== null && opts.animate) {
            img.src = url;
            requestAnimationFrame(function() {
              process(img, canvas, ctx);
            });
          }
        });
      };
      broken.src = url;
    };
    fileReader.readAsArrayBuffer(blob);
  });
}

