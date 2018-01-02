$(document).ready(function() {


    function showHideElementsOnStart() {
        $('.container').hide();
        $('.container').delay(1000).fadeIn(5000);
        $('.instructions').hide();
        $('.moreInstructions').hide();
        $('.settings').hide();
    }

    function showStats() {
        $('.stats').append("Общ брой снимки -> " + pictures.length + "<br />");
        $('.stats').append("Общ брой стихове -> " + poems.length);
    }


    function fillArrayImages() {
        for (let pic of pictures) {
            let img = $(`<img class="pic" src="${pic}" alt="${pic}" />`);
            images.push(img);
        }
    }

    function generateRndNumber(length) {
        return Math.floor(Math.random() * length);
    }


    function initialSettings() {
        let randomNumber = generateRndNumber(images.length);
        let randomPoem = generateRndNumber(poems.length);

        $('span[name="count"]').text(randomNumber);


        let randomStartingPic = images[randomNumber];
        let randomStartingPoem = poems[randomPoem];


        $('.imageBorder').html(randomStartingPic);


        $('.poemPlace').text(randomStartingPoem);

        let isAutoplayTurnOn = true;
        let isAutoplayOrderdTurnOn = false;
        let autoplayOrdered = '';
        let poemsTurnOn = true;
        let bigImages = false;
        let instructionsTurnOn = false;
        let moreInstructionsTurnOn = false;
        let openSettingsWindow = false;
        let heartThemes = 8;
        let randomHeartTheme = 0;
        let backgThemes = 10;
        let randomBackgrTheme = 0;
        return {
            randomNumber,
            randomPoem,
            isAutoplayTurnOn,
            isAutoplayOrderdTurnOn,
            autoplayOrdered,
            poemsTurnOn,
            bigImages,
            instructionsTurnOn,
            moreInstructionsTurnOn,
            openSettingsWindow,
            heartThemes,
            randomHeartTheme,
            backgThemes,
            randomBackgrTheme
        };
    }



    function hideElementsInAutoplayMode() {
        $('.poemPlace').hide();
        $('.imageBorder').hide();
    }


    function writeOnCounterEl(number) {
        $('span[name="count"]').text(number);
    }


    function writeImageAndPoem() {
        $('.imageBorder').html(images[randomNumber]).fadeIn(5000);

        if (poemsTurnOn) {
            $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
        } else {
            $('.poemPlace').text("").fadeIn(2000);
        }
    }



    function changeBackgroundTheme() {
        switch (randomBackgrTheme) {
            case 0:
                $('body div:first').removeClass('mainBackground2').addClass('main');
                $('body div:first').removeClass('mainBackground3').addClass('main');
                $('body div:first').removeClass('mainBackground4').addClass('main');
                $('body div:first').removeClass('mainBackground5').addClass('main');
                $('body div:first').removeClass('mainBackground6').addClass('main');
                $('body div:first').removeClass('mainBackground7').addClass('main');
                $('body div:first').removeClass('mainBackground8').addClass('main');
                $('body div:first').removeClass('mainBackground9').addClass('main');
                $('body div:first').removeClass('mainBackground10').addClass('main');
                break;
            case 1:
                $('body div:first').removeClass('main').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground2');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground2');
                break;
            case 2:
                $('body div:first').removeClass('main').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground3');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground3');
                break;
            case 3:
                $('body div:first').removeClass('main').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground4');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground4');
                break;
            case 4:
                $('body div:first').removeClass('main').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground5');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground5');
                break;
            case 5:
                $('body div:first').removeClass('main').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground6');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground6');
                break;
            case 6:
                $('body div:first').removeClass('main').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground7');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground7');
                break;
            case 7:
                $('body div:first').removeClass('main').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground8');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground8');
                break;
            case 8:
                $('body div:first').removeClass('main').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground9');
                $('body div:first').removeClass('mainBackground10').addClass('mainBackground9');
                break;
            case 9:
                $('body div:first').removeClass('main').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground2').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground3').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground4').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground5').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground6').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground7').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground8').addClass('mainBackground10');
                $('body div:first').removeClass('mainBackground9').addClass('mainBackground10');
                break;
        }
    }


    function changeHeartTheme() {
        switch (randomHeartTheme) {
            case 0:
                $('.col-lg div:first').removeClass('heart2').addClass('heart');
                $('.col-lg div:first').removeClass('heart3').addClass('heart');
                $('.col-lg div:first').removeClass('heart4').addClass('heart');
                $('.col-lg div:first').removeClass('heart5').addClass('heart');
                $('.col-lg div:first').removeClass('heart6').addClass('heart');
                $('.col-lg div:first').removeClass('heart7').addClass('heart');
                $('.col-lg div:first').removeClass('heart8').addClass('heart');


                $('#instrButtons').removeClass('instructionButtonsNoDefaultTheme').addClass('instructionButtons');

                break;
            case 1:
                $('.col-lg div:first').removeClass('heart').addClass('heart2');
                $('.col-lg div:first').removeClass('heart3').addClass('heart2');
                $('.col-lg div:first').removeClass('heart4').addClass('heart2');
                $('.col-lg div:first').removeClass('heart5').addClass('heart2');
                $('.col-lg div:first').removeClass('heart6').addClass('heart2');
                $('.col-lg div:first').removeClass('heart7').addClass('heart2');
                $('.col-lg div:first').removeClass('heart8').addClass('heart2');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');

                break;
            case 2:
                $('.col-lg div:first').removeClass('heart').addClass('heart3');
                $('.col-lg div:first').removeClass('heart2').addClass('heart3');
                $('.col-lg div:first').removeClass('heart4').addClass('heart3');
                $('.col-lg div:first').removeClass('heart5').addClass('heart3');
                $('.col-lg div:first').removeClass('heart6').addClass('heart3');
                $('.col-lg div:first').removeClass('heart7').addClass('heart3');
                $('.col-lg div:first').removeClass('heart8').addClass('heart3');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;
            case 3:
                $('.col-lg div:first').removeClass('heart').addClass('heart4');
                $('.col-lg div:first').removeClass('heart2').addClass('heart4');
                $('.col-lg div:first').removeClass('heart3').addClass('heart4');
                $('.col-lg div:first').removeClass('heart5').addClass('heart4');
                $('.col-lg div:first').removeClass('heart6').addClass('heart4');
                $('.col-lg div:first').removeClass('heart7').addClass('heart4');
                $('.col-lg div:first').removeClass('heart8').addClass('heart4');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;

            case 4:
                $('.col-lg div:first').removeClass('heart').addClass('heart5');
                $('.col-lg div:first').removeClass('heart2').addClass('heart5');
                $('.col-lg div:first').removeClass('heart3').addClass('heart5');
                $('.col-lg div:first').removeClass('heart4').addClass('heart5');
                $('.col-lg div:first').removeClass('heart6').addClass('heart5');
                $('.col-lg div:first').removeClass('heart7').addClass('heart5');
                $('.col-lg div:first').removeClass('heart8').addClass('heart5');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;
            case 5:
                $('.col-lg div:first').removeClass('heart').addClass('heart6');
                $('.col-lg div:first').removeClass('heart2').addClass('heart6');
                $('.col-lg div:first').removeClass('heart3').addClass('heart6');
                $('.col-lg div:first').removeClass('heart4').addClass('heart6');
                $('.col-lg div:first').removeClass('heart6').addClass('heart6');
                $('.col-lg div:first').removeClass('heart7').addClass('heart6');
                $('.col-lg div:first').removeClass('heart8').addClass('heart6');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;
            case 6:
                $('.col-lg div:first').removeClass('heart').addClass('heart7');
                $('.col-lg div:first').removeClass('heart2').addClass('heart7');
                $('.col-lg div:first').removeClass('heart3').addClass('heart7');
                $('.col-lg div:first').removeClass('heart4').addClass('heart7');
                $('.col-lg div:first').removeClass('heart5').addClass('heart7');
                $('.col-lg div:first').removeClass('heart6').addClass('heart7');
                $('.col-lg div:first').removeClass('heart8').addClass('heart7');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;
            case 7:
                $('.col-lg div:first').removeClass('heart').addClass('heart8');
                $('.col-lg div:first').removeClass('heart2').addClass('heart8');
                $('.col-lg div:first').removeClass('heart3').addClass('heart8');
                $('.col-lg div:first').removeClass('heart4').addClass('heart8');
                $('.col-lg div:first').removeClass('heart5').addClass('heart8');
                $('.col-lg div:first').removeClass('heart6').addClass('heart8');
                $('.col-lg div:first').removeClass('heart7').addClass('heart8');


                $('#instrButtons').removeClass('instructionButtons').addClass('instructionButtonsNoDefaultTheme');
                break;


        }
    }


    function stopAutoplayOrdered() {
        if (isAutoplayOrderdTurnOn) {
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
        }
    }


    function stopAutoplayRandomOrdered() {
        if (isAutoplayTurnOn) {
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("ВКЛЮЧИ..");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
        }
    }



    function checkIfAutoplOnOrOff() {

        if (isAutoplayTurnOn) {
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("ВКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
            isAutoplayTurnOn = false;
        } else {

            $('a[name="autoplay"]').text("ИЗКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-warning");
            $('a[name="autoplay"]').addClass("btn btn-outline-warning");


            autoplay = setInterval(function () {

                hideElementsInAutoplayMode();

                randomNumber = generateRndNumber(images.length);
                randomPoem = generateRndNumber(poems.length);

                writeOnCounterEl(randomNumber);
                writeImageAndPoem();


            }, 30000);

            isAutoplayTurnOn = true;
        }
    }


    function checkIfAutoplOrderedOnOrOff() {
        if (isAutoplayOrderdTurnOn) {
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
            isAutoplayOrderdTurnOn = false;
        } else {

            $('a[name="autoplayOrdered"]').text("ИЗКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-outline-warning");


            autoplayOrdered = setInterval(function () {

                hideElementsInAutoplayMode();
                chooseImageAndPoemNextButton();
                writeImageAndPoem();


            }, 30000);

            isAutoplayOrderdTurnOn = true;
        }
    }



    function chooseImageAndPoemNextButton() {
        if (randomNumber >= images.length) {
            randomNumber = 0;

            writeOnCounterEl(randomNumber);

        } else {
            randomNumber++;
            writeOnCounterEl(randomNumber);
        }

        //logic for poems to show them in order from array


        if (randomPoem >= poems.length) {
            randomPoem = 0;
        } else {
            randomPoem++;
        }
    }


    function chooseImageAndPoemPrevButton() {
        if (randomNumber <= 0) {
            randomNumber = images.length;
            writeOnCounterEl(randomNumber);
        } else {
            randomNumber--;
            writeOnCounterEl(randomNumber);
        }
        //logic for poems


        if (randomPoem <= 0) {
            randomPoem = poems.length;
            // $('.poemPlace').text(poems[randomPoem]);
        } else {
            randomPoem--;
        }
    }


    function poemsTurnOnOrOff() {
        if (poemsTurnOn) {
            poemsTurnOn = false;
            $('a[name="stopPoems"]').removeClass('btn btn-outline-warning');
            $('a[name="stopPoems"]').addClass('btn btn-warning');
            $('a[name="stopPoems"]').text('Покажи стихчетата');
            $('.poemPlace').text("");
        } else {
            poemsTurnOn = true;
            $('a[name="stopPoems"]').removeClass('btn btn-warning');
            $('a[name="stopPoems"]').addClass('btn btn-outline-warning');
            $('a[name="stopPoems"]').text('Непоказвай стихчетата');
            $('.poemPlace').text(poems[randomPoem]).fadeIn(2000);
        }
    }


    function createMusicBoxAndLoadSongsThere() {
        $('.musicControls').append('<audio class="musicPlayer" controls>');

        for (let song of songs) {
            $('.musicPlayer').append(`<source src="${song}" type="audio/mpeg">`);
        }
    }


    function zoomOnOrOff() {
        isZoomed = !isZoomed;

        if (isZoomed) {
            $(this).addClass('img-zoom');
        } else {
            $(this).removeClass('img-zoom');
        }
    }



    function zoomedPicsTurnOnOrOff() {
        bigImages = !bigImages;

        if (bigImages) {
            images = [];

            for (let picture of pictures) {
                let img = $(`<img class="img-zoom" src="${picture}" alt="${picture}" />`);
                images.push(img);
            }
            ;

            $('a[name="bigImage"]').removeClass('btn btn-outline-warning');
            $('a[name="bigImage"]').addClass('btn btn-warning');
            $('a[name="bigImage"]').text('Намали снимките');
        } else {

            images = [];

            for (let picture of pictures) {
                let img = $(`<img class="pic" src="${picture}" alt="${picture}" />`);
                images.push(img);
            }
            ;

            $('a[name="bigImage"]').removeClass('btn btn-warning');
            $('a[name="bigImage"]').addClass('btn btn-outline-warning');
            $('a[name="bigImage"]').text('Уголеми снимките');


        }
    }


    function showInstructionsTurnOnOrOff() {
        instructionsTurnOn = !instructionsTurnOn;

        if (instructionsTurnOn) {
            $('a[name="showInstructions"]').removeClass('btn btn-warning');
            $('a[name="showInstructions"]').addClass('btn btn-outline-warning');
            $('a[name="showInstructions"]').text("Скрий инструкциите");


            $('.instructions').fadeIn(2000);
            instructionsTurnOn = true;
        } else {
            $('a[name="showInstructions"]').removeClass('btn btn-outline-warning');
            $('a[name="showInstructions"]').addClass('btn btn-warning');
            $('a[name="showInstructions"]').text("Покажи инструкции");


            $('.instructions').hide();
            $('.moreInstructions').hide();
            instructionsTurnOn = false;
        }
    }


    function moreInstructionsTurnOnOrOff() {
        moreInstructionsTurnOn = !moreInstructionsTurnOn;

        if (moreInstructionsTurnOn) {
            $('a[name="moreInstructions"]').removeClass('btn btn-success');
            $('a[name="moreInstructions"]').addClass('btn btn-outline-success');
            $('a[name="moreInstructions"]').text("Скрий инструкциите");


            $('.row div:first').before($('.moreInstructions'));
            $('.moreInstructions').fadeIn(2000);
            moreInstructionsTurnOn = true;
        } else {
            $('a[name="moreInstructions"]').removeClass('btn btn-outline-success');
            $('a[name="moreInstructions"]').addClass('btn btn-success');
            $('a[name="moreInstructions"]').text("Тук");


            $('.moreInstructions').hide();
            moreInstructionsTurnOn = false;
        }
    }



    function settingsOpenOrClose() {
        openSettingsWindow = !openSettingsWindow;

        if (openSettingsWindow) {
            $('.settings').fadeIn(2000);
            $('a[name="openSettingsWindow"]').removeClass('btn btn-warning')
                .addClass('btn btn-outline-warning')
                .html("Скрий настройките");
            // openSettingsWindow = true;
        } else {
            $('.settings').fadeOut("fast");
            $('a[name="openSettingsWindow"]').removeClass('btn btn-outline-warning')
                .addClass('btn btn-warning')
                .html("Настройки");
            // openSettingsWindow = true;
        }
    }


    function closeSettingsWindow() {
        $(this).parent('div').parent('div').parent('div').fadeOut("fast");

        $('a[name="openSettingsWindow"]').removeClass('btn btn-outline-warning')
            .addClass('btn btn-warning')
            .html("Настройки");

        openSettingsWindow = false;
    }



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    showHideElementsOnStart();

    let pictures = getPics();
    let poems = getPoems();


    let images = [];

    showStats();
    fillArrayImages();



    let {randomNumber, randomPoem, isAutoplayTurnOn, isAutoplayOrderdTurnOn, autoplayOrdered, poemsTurnOn, bigImages, instructionsTurnOn, moreInstructionsTurnOn, openSettingsWindow, heartThemes, randomHeartTheme, backgThemes, randomBackgrTheme} = initialSettings();




    let autoplay = setInterval(function() {

        hideElementsInAutoplayMode();

        randomNumber = generateRndNumber(images.length);
        randomPoem = generateRndNumber(poems.length);

        writeOnCounterEl(randomNumber);
        writeImageAndPoem();

        //choose heart background
        randomBackgrTheme = generateRndNumber(backgThemes);
        changeBackgroundTheme();

        //choose heart theme
        randomHeartTheme = generateRndNumber(heartThemes);
        changeHeartTheme();



    }, 30000);


    //logic about autoplay with random selected pictures
    $('a[name="autoplay"]').click(function () {
        stopAutoplayOrdered();
        checkIfAutoplOnOrOff();
    });


    //logic about autoplay pictures ordered
    $('a[name="autoplayOrdered"]').click(function () {
        stopAutoplayRandomOrdered();
        checkIfAutoplOrderedOnOrOff();
    });


    //logic for next button
    $('a[name="next"]').click(function() {
        hideElementsInAutoplayMode();
        chooseImageAndPoemNextButton();
        writeImageAndPoem();
    });


    //logic for prev button
    $('a[name="prev"]').click(function() {
       hideElementsInAutoplayMode();
       chooseImageAndPoemPrevButton();
       writeImageAndPoem();
    });



    //logic for random button
    $('a[name="random"]').click(function() {
       hideElementsInAutoplayMode();
       randomNumber = generateRndNumber(images.length);
       randomPoem = generateRndNumber(poems.length);
       writeOnCounterEl(randomNumber);
       writeImageAndPoem();
       });



    //logic for turn on/off poems(just hide element)
    $('a[name="stopPoems"]').click(function () {
        poemsTurnOnOrOff();
    });



    //logic for music
    //load music names in array
    let songs = getMusic();
    createMusicBoxAndLoadSongsThere();



    //logic about zoom of pictures when click on image
    let isZoomed = false;

    $('.imageBorder').on("click","img", function (e) {
        e.preventDefault();
        zoomOnOrOff.call(this);
    });



    //logic about turn on/off bigger images
    $('a[name="bigImage"]').click(function () {
        zoomedPicsTurnOnOrOff();
    });



    //logic for instructions
    $('a[name="showInstructions"]').click(function () {
        showInstructionsTurnOnOrOff();
    });



    //logic for more instructions
    $('a[name="moreInstructions"]').click(function () {
        moreInstructionsTurnOnOrOff();
    });


    //close more instructions window
    $('a[name="closeMoreInstructions"]').click(function (e) {
        e.preventDefault();
        $(this).parent().parent('div').hide();
    });


    //open settings window
    $('a[name="openSettingsWindow"]').click(function () {
        settingsOpenOrClose();
    });

    //close settings window
    $('a[name="closeSettingsWindow"]').click(function () {
        closeSettingsWindow.call(this);
    })



});

