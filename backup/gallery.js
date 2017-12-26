$(document).ready(function() {


    // let folder ='../giftGallery/pictures';
    // let pics = [];


    // $.ajax({
    //     url: folder,
    //     success: function(data){
    //         console.log(data);
    //     }
    // });

    let pictures = getPics();
    let images = [];

    for (let pic of pictures) {
        let img = $(`<img src="${pic}" alt="${pic}" />`);
        images.push(img);
    }


    // [
    //     '<img src="pictures/1.jpg" />',
    //     '<img src="pictures/2.jpg" />'
    // ]


    let randomNumber = Math.floor(Math.random() * images.length);
    $('span[name="count"]').text(randomNumber);
    let randomStartingPic = images[randomNumber];

    $('.imageBorder').html(randomStartingPic);

    let isAutoplayTurnOn = true;
    let isAutoplayOrderdTurnOn = false;
    let autoplayOrdered = '';

    let autoplay = setInterval(function() {
        randomNumber = Math.floor(Math.random() * images.length);
        $('span[name="count"]').text(randomNumber);
        let randomStartingPic = images[randomNumber];

        $('.imageBorder').html(randomStartingPic);

    }, 7000);


    //logic about autoplay with random selected pictures
    $('a[name="autoplay"]').click(function () {

        if(isAutoplayOrderdTurnOn){
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките - ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
        }

        if(isAutoplayTurnOn){
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("Авт.сменяне на снимките - ВКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
            isAutoplayTurnOn = false;
        } else{

            $('a[name="autoplay"]').text("Авт.сменяне на снимките - ИЗКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-warning");
            $('a[name="autoplay"]').addClass("btn btn-outline-warning");


             autoplay = setInterval(function() {
                randomNumber = Math.floor(Math.random() * images.length);
                $('span[name="count"]').text(randomNumber);
                let randomStartingPic = images[randomNumber];

                $('.imageBorder').html(randomStartingPic);

            }, 7000);

             isAutoplayTurnOn = true;
        }
    });












    //logic about autoplay pictures ordered
    $('a[name="autoplayOrdered"]').click(function () {

        if(isAutoplayTurnOn){
            clearInterval(autoplay);
            $('a[name="autoplay"]').text("Авт.сменяне на снимките - ВКЛЮЧИ.");
            $('a[name="autoplay"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplay"]').addClass("btn btn-warning");
        }

        if(isAutoplayOrderdTurnOn){
            clearInterval(autoplayOrdered);
            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките - ВКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-outline-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-warning");
            isAutoplayOrderdTurnOn = false;
        } else{

            $('a[name="autoplayOrdered"]').text("Авт.сменяне на снимките - ИЗКЛЮЧИ.");
            $('a[name="autoplayOrdered"]').removeClass("btn btn-warning");
            $('a[name="autoplayOrdered"]').addClass("btn btn-outline-warning");


             autoplayOrdered = setInterval(function() {

                 if (randomNumber >= images.length) {
                     randomNumber = 0;

                     $('span[name="count"]').text(randomNumber);
                 } else {
                     randomNumber++;
                     $('span[name="count"]').text(randomNumber);
                 }

                 $('.imageBorder').html(images[randomNumber]);

                // randomNumber = Math.floor(Math.random() * images.length);
                // $('span[name="count"]').text(randomNumber);
                // let randomStartingPic = images[randomNumber];
                //
                // $('.imageBorder').html(randomStartingPic);

            }, 7000);

            isAutoplayOrderdTurnOn = true;
        }
    });




    //logic for next button
    $('a[name="next"]').click(function() {
        // showNextPicture(randomNumber, images);

        if (randomNumber >= images.length) {
            randomNumber = 0;

            $('span[name="count"]').text(randomNumber);
        } else {
            randomNumber++;
            $('span[name="count"]').text(randomNumber);
        }

        $('.imageBorder').html(images[randomNumber]);



    });



    $('a[name="prev"]').click(function() {

        if (randomNumber <= 0) {
            randomNumber = images.length;
            $('.imageBorder').html(images[randomNumber]);
            $('span[name="count"]').text(randomNumber);
        } else {
            randomNumber--;
            $('.imageBorder').html(images[randomNumber]);
            $('span[name="count"]').text(randomNumber);
        }

    });



    $('a[name="random"]').click(function() {
        randomNumber = Math.floor(Math.random() * images.length);
        $('.imageBorder').html(images[randomNumber]);
        $('span[name="count"]').text(randomNumber);
    });



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