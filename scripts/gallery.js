$(document).ready(function() {


    // let folder ='../giftGallery/pictures';
    // let pics = [];


    // $.ajax({
    //     url: folder,
    //     success: function(data){
    //         console.log(data);
    //     }
    // });







    $('.container').hide();
    $('.container').delay(1000).fadeIn(5000);
    $('.instructions').hide();
    $('.moreInstructions').hide();


    let pictures = getPics();
    let poems = getPoems();
    let images = [];

    $('.stats').append("Общ брой снимки -> " + pictures.length + "<br />");
    $('.stats').append("Общ брой стихове -> " + poems.length);

    for (let pic of pictures) {
        let img = $(`<img class="pic" src="${pic}" alt="${pic}" />`);
        images.push(img);
    }




    // [
    //     '<img src="pictures/1.jpg" />',
    //     '<img src="pictures/2.jpg" />'
    // ]


    let randomNumber = Math.floor(Math.random() * images.length);
    let randomPoem = Math.floor(Math.random() * poems.length);


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
    let heartThemes = 8;
    let randomHeartTheme = 0;
    let backgThemes = 10;
    let randomBackgrTheme = 0;


    let autoplay = setInterval(function() {
        $('.poemPlace').hide();
        $('.imageBorder').hide();

        randomNumber = Math.floor(Math.random() * images.length);
        randomPoem = Math.floor(Math.random() * poems.length);

        $('span[name="count"]').text(randomNumber);
        let randomStartingPic = images[randomNumber];
        let randomStartingPoem = poems[randomPoem];

        $('.imageBorder').html(randomStartingPic).fadeIn(5000);

        if(poemsTurnOn){
            $('.poemPlace').text(randomStartingPoem).fadeIn(5000);
        }else {
            $('.poemPlace').text("").fadeIn(2000);
        }


        //choose heart background
        randomBackgrTheme = Math.floor(Math.random() * backgThemes);


        switch (randomBackgrTheme){
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



        //choose heart theme
        randomHeartTheme = Math.floor(Math.random() * heartThemes);


        switch (randomHeartTheme){
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


        // if(randomHeartTheme = 2){
        //     $('.heart').removeClass('heart').addClass('heart2');
        // }

    }, 30000);


    //logic about autoplay with random selected pictures
    $('a[name="autoplay"]').click(function () {

        if(isAutoplayOrderdTurnOn){
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките(Случаен) - ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
        }

        if(isAutoplayTurnOn){
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("Авт.сменяне на снимките(Случаен) - ВКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
            isAutoplayTurnOn = false;
        } else{

            $('a[name="autoplay"]').text("Авт.сменяне на снимките(Случаен) - ИЗКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-warning");
            $('a[name="autoplay"]').addClass("btn btn-outline-warning");


            autoplay = setInterval(function() {
                $('.poemPlace').hide();
                $('.imageBorder').hide();

                randomNumber = Math.floor(Math.random() * images.length);
                randomPoem = Math.floor(Math.random() * poems.length);

                $('span[name="count"]').text(randomNumber);
                let randomStartingPic = images[randomNumber];
                let randomStartingPoem = poems[randomPoem];

                $('.imageBorder').html(randomStartingPic).fadeIn(5000);
                // $('.poemPlace').text(randomStartingPoem).fadeIn(5000);
                if(poemsTurnOn){
                    $('.poemPlace').text(randomStartingPoem).fadeIn(5000);
                }else {
                    $('.poemPlace').text("").fadeIn(2000);
                }

            }, 30000);

            isAutoplayTurnOn = true;
        }
    });












    //logic about autoplay pictures ordered
    $('a[name="autoplayOrdered"]').click(function () {

        if(isAutoplayTurnOn){
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("Авт.сменяне на снимките(Случаен) - ВКЛЮЧИ..");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
        }

        if(isAutoplayOrderdTurnOn){
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките(Подредба) - ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
            isAutoplayOrderdTurnOn = false;
        } else{

            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките(Подредба) - ИЗКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-outline-warning");


            autoplayOrdered = setInterval(function() {

                $('.poemPlace').hide();
                $('.imageBorder').hide();

                if (randomNumber >= images.length) {
                    randomNumber = 0;

                    $('span[name="count"]').text(randomNumber);
                } else {
                    randomNumber++;
                    $('span[name="count"]').text(randomNumber);
                }

                //logic for poems to show them in order from array


                if (randomPoem >= poems.length) {
                    randomPoem = 0;
                } else {
                    randomPoem++;
                }

                $('.imageBorder').html(images[randomNumber]).fadeIn(5000);
                // $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
                if(poemsTurnOn){
                    $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
                }else {
                    $('.poemPlace').text("").fadeIn(2000);
                }


                // randomNumber = Math.floor(Math.random() * images.length);
                // $('span[name="count"]').text(randomNumber);
                // let randomStartingPic = images[randomNumber];
                //
                // $('.imageBorder').html(randomStartingPic);

            }, 30000);

            isAutoplayOrderdTurnOn = true;
        }
    });




    //logic for next button
    $('a[name="next"]').click(function() {
        // showNextPicture(randomNumber, images);
        $('.poemPlace').hide();
        $('.imageBorder').hide();

        if (randomNumber >= images.length) {
            randomNumber = 0;

            $('span[name="count"]').text(randomNumber);
        } else {
            randomNumber++;
            $('span[name="count"]').text(randomNumber);
        }

        //logic for poems to show them in order from array

        if (randomPoem >= poems.length) {
            randomPoem = 0;
        } else {
            randomPoem++;
        }


        $('.imageBorder').html(images[randomNumber]).fadeIn(2000);
        // $('.poemPlace').text(poems[randomPoem]).fadeIn(2000);
        if(poemsTurnOn){
            $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
        }else {
            $('.poemPlace').text("").fadeIn(2000);
        }



    });



    $('a[name="prev"]').click(function() {

        $('.poemPlace').hide();
        $('.imageBorder').hide();

        if (randomNumber <= 0) {
            randomNumber = images.length;
            $('span[name="count"]').text(randomNumber);
        } else {
            randomNumber--;
            // $('.imageBorder').html(images[randomNumber]);
            $('span[name="count"]').text(randomNumber);
        }
        //logic for poems


        if (randomPoem <= 0) {
            randomPoem = poems.length;
            // $('.poemPlace').text(poems[randomPoem]);
        } else {
            randomPoem--;
        }

        $('.imageBorder').html(images[randomNumber]).fadeIn(2000);
        // $('.poemPlace').text(poems[randomPoem]).fadeIn(2000);
        if(poemsTurnOn){
            $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
        }else {
            $('.poemPlace').text("").fadeIn(2000);
        }


    });



    //logic for random button
    $('a[name="random"]').click(function() {
        $('.poemPlace').hide();
        $('.imageBorder').hide();

        randomNumber = Math.floor(Math.random() * images.length);
        randomPoem = Math.floor(Math.random() * poems.length);

        $('span[name="count"]').text(randomNumber);
        $('.imageBorder').html(images[randomNumber]).fadeIn(2000);
        // $('.poemPlace').text(poems[randomPoem]).fadeIn(2000);
        if(poemsTurnOn){
            $('.poemPlace').text(poems[randomPoem]).fadeIn(5000);
        }else {
            $('.poemPlace').text("").fadeIn(2000);
        }

    });



    //logic for turn on/off poems(just hide element)
    $('a[name="stopPoems"]').click(function () {
        if(poemsTurnOn){
            poemsTurnOn = false;
            $('a[name="stopPoems"]').removeClass('btn btn-outline-warning');
            $('a[name="stopPoems"]').addClass('btn btn-warning');
            $('a[name="stopPoems"]').text('Покажи стихчетата');
            $('.poemPlace').text("");
        }else {
            poemsTurnOn = true;
            $('a[name="stopPoems"]').removeClass('btn btn-warning');
            $('a[name="stopPoems"]').addClass('btn btn-outline-warning');
            $('a[name="stopPoems"]').text('Непоказвай стихчетата');
            $('.poemPlace').text(poems[randomPoem]).fadeIn(2000);
        }
    });



    //logic for music
    let songs = getMusic();

    $('.musicControls').append('<audio class="musicPlayer" controls>');

    for(let song of songs){
        $('.musicPlayer').append(`<source src="${song}" type="audio/mpeg">`);
    }



    //logic about zoom of pictures when click on image
    let isZoomed = false;
    $('.imageBorder').on("click","img", function (e) {
        e.preventDefault();
        isZoomed = !isZoomed;

        if(isZoomed){
            let pic = $(this).addClass('img-zoom');
        }else {
            $(this).removeClass('img-zoom');
        }

        // $('body').append('<div class="shadow">').css('background-color', 'black', 'opacity', '0.5', 'height', '2000px', 'width', '2000px', 'margin', '0 auto', 'text-align', 'center');
        // $('.shadow').html('<div class="modal">').css('background-color', 'white', 'height', '700px', 'width', '700px', 'position', 'absolute', 'margin', '0 auto');
        // let picture = $('.pic');
        // $('.modal').append(picture);
        // $('.shadow').prepend('<div class="modal">').css('background-color', 'white', 'height', '600px', 'width', '600px', 'margin', '0 auto', 'position', 'absolute', 'margin-top', '400px');
    });




    //logic about turn on/off bigger images
    $('a[name="bigImage"]').click(function () {
       bigImages = !bigImages;

       if(bigImages){
           images = [];

           for(let picture of pictures){
               let img = $(`<img class="img-zoom" src="${picture}" alt="${picture}" />`);
               images.push(img);
           };

           $('a[name="bigImage"]').removeClass('btn btn-outline-warning');
           $('a[name="bigImage"]').addClass('btn btn-warning');
           $('a[name="bigImage"]').text('Намали снимките');
       }else {

           images = [];

           for(let picture of pictures){
               let img = $(`<img class="pic" src="${picture}" alt="${picture}" />`);
               images.push(img);
           };

           $('a[name="bigImage"]').removeClass('btn btn-warning');
           $('a[name="bigImage"]').addClass('btn btn-outline-warning');
           $('a[name="bigImage"]').text('Уголеми снимките');


       }


    });




    //logic for instructions
    $('a[name="showInstructions"]').click(function () {
        instructionsTurnOn = !instructionsTurnOn;

        if(instructionsTurnOn){
            $('a[name="showInstructions"]').removeClass('btn btn-warning');
            $('a[name="showInstructions"]').addClass('btn btn-outline-warning');
            $('a[name="showInstructions"]').text("Скрий инструкциите");


            $('.instructions').fadeIn(2000);
            instructionsTurnOn = true;
        }else {
            $('a[name="showInstructions"]').removeClass('btn btn-outline-warning');
            $('a[name="showInstructions"]').addClass('btn btn-warning');
            $('a[name="showInstructions"]').text("Покажи инструкции");


            $('.instructions').hide();
            $('.moreInstructions').hide();
            instructionsTurnOn = false;
        }

    });



    //logic for more instructions
    $('a[name="moreInstructions"]').click(function () {
        moreInstructionsTurnOn = !moreInstructionsTurnOn;

        if(moreInstructionsTurnOn){
            $('a[name="moreInstructions"]').removeClass('btn btn-success');
            $('a[name="moreInstructions"]').addClass('btn btn-outline-success');
            $('a[name="moreInstructions"]').text("Скрий инструкциите");


            $('.row div:first').before($('.moreInstructions'));
            $('.moreInstructions').fadeIn(2000);
            moreInstructionsTurnOn = true;
        }else {
            $('a[name="moreInstructions"]').removeClass('btn btn-outline-success');
            $('a[name="moreInstructions"]').addClass('btn btn-success');
            $('a[name="moreInstructions"]').text("Тук");


            $('.moreInstructions').hide();
            moreInstructionsTurnOn = false;
        }

    });


    //close more instructions window
    $('a[name="closeMoreInstructions"]').click(function (e) {
        e.preventDefault();
        $(this).parent().parent('div').hide();
    })


});






// function showNextPicture(randomNumber, images) {

//     if (randomNumber >= images.length) {
//         randomNumber = 0;
//         $('.imageBorder').html(images[randomNumber]);
//         $('span[name="count"]').text(randomNumber);
//     } else {
//         randomNumber++;
//         $('.imageBorder').html(images[randomNumber]);
//         $('span[name="count"]').text(randomNumber);
//     }
// }