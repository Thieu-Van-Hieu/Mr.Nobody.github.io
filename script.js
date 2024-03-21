function generateRandomFileName(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomFileName = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomFileName += characters.charAt(randomIndex);
    }

    return randomFileName;
}
function hackFile() {
    document.getElementById('btn_hackfile').style.display = 'none'
    document.getElementById('pb').style.display = 'block'
    document.getElementById('consoleText').innerHTML += "<br>> Start hacking file...";
    document.getElementById('consoleText').innerHTML += "<br>> Initiating file hack...";
    document.getElementById('consoleText').innerHTML += "<br>> Running exploit code...";
    document.getElementById('consoleText').innerHTML += "<br>> Accessing mainframe... ";

    // Hiệu ứng nhiều file chạy tùm lum (nhanh hơn và khác nhau)
    for (let i = 0; i < 80; i++) {
        setTimeout(function () {
            let fileType = Math.random() > 0.5 ? "exe" : "dll";
            document.getElementById('consoleText').innerHTML = `<br>>` + generateRandomFileName(Math.floor(Math.random() * 30) + 10) + `.${fileType}...`;
        }, i * 50);
    }

}

function downloadFile() {
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('loading').style.display = 'inline-block';
    setTimeout(function () {
        alert("File downloaded successfully!");
        document.getElementById('loading').style.display = 'none';
    }, 3000);
}

function startProgress() {
    let progressBar = document.getElementById("pb");
    let width = 0;

    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + "%";
            progressBar.innerHTML = width + "%";
        }
    }, 45);
    setTimeout(function(){
        document.getElementById('hack_fn').style.display = "block";
        }, 4000)
    setTimeout(function () {
        document.getElementById('pb').style.display = 'none';
        document.getElementById('downloadBtn').style.display = 'inline-block';
        document.getElementById('loading').style.display = 'none';
    }, 5000);
    setTimeout(function(){
        document.getElementById('hack_text').style.display = 'none';
        }, 4000)
}