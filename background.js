// Play and stop function
const audio = document.createElement("audio");
audio.setAttribute('src', "http://streaming.tdiradio.com:8000/tdiradio.mp3");

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command:', command);
    if (command == "Play") {
        audio.play();
    } else if (command == "Stop") {
        audio.pause();
        audio.setAttribute('src', "");
    }
});

// Notification popup
function notification() {
    var d = new Date()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var opt = {
        type: 'list',
        title: 'TDI Radio',
        message: 'Pocinje TDI emisija',
        priority: 1,
        items: [{ title: '', message: '' }],
        iconUrl: '../icon.png'
    };
    if (days[d.getDay()] == 'Tuesday' && d.getHours() == '16' && d.getMinutes() == '00') {
        chrome.notifications.create('id', opt, function (id) { });
    } else if (days[d.getDay()] == 'Wednesday' && d.getHours() == '16' && d.getMinutes() == '00') {
        chrome.notifications.create('id', opt, function (id) { });
    } else if (days[d.getDay()] == 'Thursday' && d.getHours() == '16' && d.getMinutes() == '00') {
        chrome.notifications.create('id', opt, function (id) { });
    }
}
notification()
