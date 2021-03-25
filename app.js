let BulanArray = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'October', 'November', 'Desembera'];
let HariArray = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Juma'at", "Sabtu"];
let timeElement = document.getElementById("JamSpan");
let dateElement = document.getElementById("TanggalSpan");


setInterval(() => {
    let dateObj = new Date();

    let time = getTime(dateObj)
    let date = getDate(dateObj);

    timeElement.innerHTML = time;
    dateElement.innerHTML = date;
}, 1000);

function getTime(dateObj) {
    let jam = appendZero(dateObj.getHours());
    let menit = appendZero(dateObj.getMinutes());
    let detik = appendZero(dateObj.getSeconds());

    return `${jam}:${menit}:${detik}`;
    }

function getDate(date) {
    let hari = HariArray[date.getDay()];
    let tanggal = appendZero(date.getDate());
    let bulan = BulanArray[date.getMonth()];
    let tahun = date.getFullYear();

    return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

function appendZero(num) {
    return num < 10 ? `0${num}` : num;
}
