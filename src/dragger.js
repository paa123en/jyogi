const bodyElm = document.getElementsByTagName('body')[0];
const canvasElm = document.getElementById('draggerCnavas');

InitCanvas(bodyElm, canvasElm);
InitEResize(bodyElm, canvasElm);


function InitEResize(bodyElm, canvasElm) {
  window.addEventListener("resize", function(event) {
    canvasElm.width = bodyElm.clientWidth;
    canvasElm.height = bodyElm.clientHeight;
  });
}


function InitCanvas(bodyElm, canvasElm) {
  // fill canvas
  canvasElm.width = bodyElm.clientWidth;
  canvasElm.height = bodyElm.clientHeight;

  let isDrawing = false;
  let x = 0;
  let y = 0;

  const context = canvasElm.getContext('2d');

  canvasElm.addEventListener('mousedown', e => {
    context.clearRect(0, 0, canvasElm.width, canvasElm.height);
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
  });

  canvasElm.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      context.clearRect(0, 0, canvasElm.width, canvasElm.height);
      drawLine(context, x, y, e.offsetX, e.offsetY);
    }
  });

  canvasElm.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

  function drawLine(context, x1, y1, x2, y2) {
    const w = x2 - x1;
    const h = y2 - y1;
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 1;
    context.rect(x1, y1, w, h);
    context.stroke();
    drawWH(context, x2, y2, w, h);
    context.closePath();
  }

  function drawWH(context, x, y, w, h) {
    context.font = "48px serif";
    context.fillStyle = "white";
    context.fillText("W: " + w + ", H:" + h, x, y);
  }

}
