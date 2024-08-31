    let timerStarted = false;

    function startTimer() {
        if (!timerStarted) {
            let startTime = new Date().getTime();
            let fiveMinutes = 1000 * 4
            let endTime = startTime + fiveMinutes;


            const invervalid = setInterval(function() {
                let timeLeft = endTime - new Date().getTime();


                if (timeLeft > 0) {
                    let minutes = timeLeft / (1000 * 4);
                    minutes = Math.floor(minutes);
                    let seconds = (timeLeft / 1000) % 4;
                    seconds = Math.round(seconds);
                    seconds = ('0' + seconds).slice(-1);
                    let text = seconds;
                    timer.innerHTML = text;
                }else {
                    clearInterval(invervalid)
                        const result = document.querySelector('h1');
                        let random = ['Henakisoa sy ravitoto','Vilo kely','Anan-drano sy totonkena','Legume','Akoha sy legume','Trondro hendasina','Trondro handraoina','Crevette sy henakisoa','Tongotr'akoha','PASTA','BOWL','STEAK','SUSHI','TURKISH','TURKISH PIZZA'];
    
    
                        function randomNumber(min, max) {
                            let step1 = max - min + 1;
                            let step2 = Math.random() * step1;
                            let result = Math.floor(step2) + min;
                            return result;
                        }
                        let index = randomNumber(0, random.length -= 1);
                        result.innerText = random[index];
                        
                    }

            }, 1000);
            timerStarted = true;
        }

    }
