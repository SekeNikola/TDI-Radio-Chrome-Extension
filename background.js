

var audio = document.createElement("audio");
audio.setAttribute('src', "http://streaming.tdiradio.com:8000/tdiradio.mp3");


        chrome.commands.onCommand.addListener(function(command) {
            console.log('Command:', command);
            if(command == "Play"){
                audio.play();
            }else if(command == "Stop"){
                audio.pause()
            }
         });