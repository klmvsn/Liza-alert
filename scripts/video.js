document.getElementById("volume").oninput = function () {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, rgb(255, 102, 0) 0%, rgb(255, 102, 0) ' + value + '%, rgb(147, 151, 163) ' + value + '%, rgb(147, 151, 163) 100%)'
};

document.getElementById("progress").oninput = function () {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, rgb(255, 102, 0) 0%, rgb(255, 102, 0) ' + value + '%, rgb(147, 151, 163) ' + value + '%, rgb(147, 151, 163) 100%)'
};