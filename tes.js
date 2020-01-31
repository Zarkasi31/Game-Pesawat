var bg = new Image();
bg.src = "image/gmbar.jpg";

var pesawat = new Image();
pesawat.src = "image/pesawat.png";

var misil = new Image();
misil.src = "image/senjata.png";

function aksicanvas() {

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 37) {
            pesawat1.x -= 3;
        } else if (event.keyCode == 38) {
            pesawat1.y -= 3;
        } else if (event.keyCode == 39) {
            pesawat1.x += 3;
        } else if (event.keyCode == 40) {
            pesawat1.y += 3;
        } else if (event.keyCode == 83) {
            pesawat1.y += 3;
            /*peluru.push({
                "x": pesawat1.x,
                "y": pesawat1.y,
                "w": 50,
                "h": 50,
            });*/
        }
    });

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    canvas.width = canvas.scrollWidth;
    canvas.height = canvas.scrollHeight;

    var cW = canvas.width;
    var cH = canvas.height;
    var peluru = [];

    function renderPeluru() {
        for (var i = 0; i < peluru.length; i++) {
            var p = peluru[i];
            ctx.drawImage(pesawat, p.x++, p.y);
        }
    }

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
        renderPeluru();
        back.render();
        pesawat1.render();
        ctx.restore();
    }
    var interval = setInterval(animasi, 30);
}
window.onload = aksicanvas;