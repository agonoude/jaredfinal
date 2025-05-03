let popup;

function setup() {
  createCanvas(600, 400);
  background(200);

  let openBtn = createButton('Open Pop-up');
  openBtn.position(20, 20);
  openBtn.mousePressed(showPopup);
}

function showPopup() {
  popup = createDiv(`
    <div style="padding: 10px;">
      <h3>Hello!</h3>
      <p>This is a mini HTML window inside your sketch.</p>
      <button id="closeBtn">Close</button>
    </div>
  `);

  popup.style('position', 'absolute');
  popup.style('top', '100px');
  popup.style('left', '100px');
  popup.style('background', 'white');
  popup.style('border', '2px solid black');
  popup.style('padding', '10px');
  popup.style('z-index', '10');

  // Hook up the close button
  select('#closeBtn').mousePressed(() => {
    popup.remove();
  });
}
