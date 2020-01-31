var bg = new Image();
bg.src = "image/gmbar.jpg";

var pesawat = new Image();
pesawat.src = "image/pesawat.png";

function aksicanvas() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    var cW = canvas.width;
    var cH = canvas.height;

    function Bg() {
        this.x = 0, this.y = 0;
        this.render = function () {
            ctx.drawImage(bg, this.x--, this.y);
            if (this.x == -1699) {
                this.x = 0;
            }
        }
    }

    function Pesawat() {
        this.x = 100, this.y = 200, this.w = 650, this.h = 366;
        this.render = function () {
            ctx.drawImage(pesawat, this.x, this.y)
        }
        ctx
    }

    var back = new Bg();
    var pesawat1 = new Pesawat();

    function animasi() {
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);

        back.render();
        pesawat1.render();
        ctx.restore();
    }
    var interval = setInterval(animasi, 30);
}
window.onload = aksicanvas;