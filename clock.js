setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hhand = 30 * h + m / 2;
    let mhand = 6 * m + s / 10;
    let shand = 6 * s;

    hour.style.transform = `rotate(${hhand}deg)`;
    minute.style.transform = `rotate(${mhand}deg)`;
    second.style.transform = `rotate(${shand}deg)`;
}, 1000);