console.log("r/place");

const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.fillStyle = "red";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "green";
c.fillRect(200, 200, 100, 100);
c.fillStyle = "blue";
c.fillRect(300, 300, 100, 100);

//line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.stroke();

// circle

for (let i = 0; i < 10; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  c.beginPath();
  c.strokeStyle = "pink";
  c.arc(x, y, 30, 0, 2 * Math.PI);
  c.stroke();
}
