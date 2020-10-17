let volume = 4,
    length = 100;

a = new AudioContext();

document.addEventListener('mousemove', getMouse);

function beep(vol, freq, duration) {
    v = a.createOscillator()
    u = a.createGain()
    v.connect(u)
    v.frequency.value = freq
    v.type = "square"
    u.connect(a.destination)
    u.gain.value = vol * 0.01
    v.start(a.currentTime)
    v.stop(a.currentTime + duration * 0.001)
}

function getMouse(e) {
    let colorX = (e.clientX / screen.width) * 256;
    let colorY = (e.clientY / screen.height) * 100;

    document.querySelector(".visualizer").style.backgroundColor = "hsl(" + colorX + ",100%," + colorY + "%)";

    colorX = (e.clientX / screen.width) * 100;
    colorY = (e.clientY / screen.height) * 256;

    document.body.style.backgroundColor = "hsl(" + colorY + ",100%," + colorX + "%)";

    beep(volume, (colorY * colorX) / 10, length);
}