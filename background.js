

var audio = document.createElement("audio");

        chrome.commands.onCommand.addListener(function(command) {
            if(command == "Play"){
                audio.setAttribute('src', "http://streaming.tdiradio.com:8000/tdiradio.mp3");
                audio.play();
            }else if(command == "Stop"){
                audio.setAttribute('src', "");
            }
         });