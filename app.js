$(() => {




  //   const testString = `Relax don't do it
  //   ↵When you want to go to it
  //   ↵Re`;
  // //The function to process the lyrics into 1 line divs that are readable
  // const processStringOfLyrics = (object) => {
  //
  //   //Initialize a local array to hold each letter of the string
  //   const stringArray =[];
  //   // console.log(object);
  //   let string = object.lyrics;
  //   // console.log(string.length);
  //   //For loop to break the lyric string into an array
  //   for (var i = 0; i < string.length; i++) {
  //     if ((/[ -z]/).test(string[i]) || (string[i] === '\r')){
  //       stringArray[i] = string[i];
  //     }
  //   }
  //   console.log(stringArray);
  //
  //   //***    object.lyrics.replace(/[\r]/g, '<br>');
  //   //*** $('.lyricsBox').text(object.lyrics);
  //   //Create the first div that the first line of the lyrics will hold
  //   let $eachLyricDiv = $('<div class="lyricLine">');
  //   //Initialize a variable for the string of each line in the lyrics
  //   let eachLine = '';
  //
  //   //A for loop to examine each letter of the lyrics
  //   for (each of stringArray) {
  //     //This API is set up using a carriage return charcter to seperate each line in the lyrics
  //     // If the letter is not a carriage return character
  //     // console.log(each);
  //     // if (each !== ''){
  //
  //       if (each !== '\r'){
  //         //then add each letter to the string
  //         eachLine += `${each}`;
  //         // console.log(eachLine);
  //         // If it is a carriage return, start a new line of lyrics
  //       } else {
  //       // const lyricsWithLineBreaks = object.lyrics.replace(/\u21B5/g, '<br/>');
  //         //Make the text of a div the string of one line of lyric
  //         console.log(eachLine);
  //         console.log('In the else');
  //         // eachLine += `<br>`;
  //         $eachLyricDiv.text(eachLine);
  //         //Append that div to the main div for the box the lyrics will be in
  //         $eachLyricDiv.appendTo('.lyricsBox');
  //         //Create a new div for the next line in the song
  //         $eachLyricDiv = $('<div class="lyricLine">');
  //         //Reset the string of each line in the lyrics
  //         eachLine = '';
  //       }
  //     // }
  //   }
  // }
  //Initialize the BandName and SongName variables
  let bandName = '';
  let songName = '';
  //Grabbing the musician button.
  const $openButton1 = $('#openModal1');
  // Grabbing modal one.
  const $modal1 = $('#modal1');
  // Close Modal one
  const $newMusician = $('#close1');
    //Grabbing the what song button.
  const $openButton2 = $('#openModal2');
    // Grabbing modal two.
  const $modal2 = $('#modal2');
    // Close Modal two
  const $newSong = $('#close2');


  const openModal1 = () => {
    $modal1.css('display', 'block');
  }

  const openModal2 = () => {
    $modal2.css('display', 'block');
  }

// processStringOfLyrics(testString);
  $('#musician').on('click',(event) => {
    event.preventDefault();

    bandName = $('input[type ="text"]').val();
    // const bandName = $('.band').val();
    console.log(bandName);
    $('#musician').trigger('reset');
  });

  $('#getSong').on('click',(event) => {
    event.preventDefault();
    songName = $('#songName').val();
    console.log(songName);
    console.log(`${bandName}/${songName}`);
    $.ajax({
      url: `https://api.lyrics.ovh/v1/${bandName}/${songName}`,
      type: 'GET',
    }).then(

      (song)=>{
        console.log(song.lyrics);
        $('#lyricsBox').text(song.lyrics);
      // processStringOfLyrics(song);
      // let $eachLyricDiv = $('<div class="lyricLine">');
      // $eachLyricDiv.text(song.lyrics);
      // //Append that div to the main div for the box the lyrics will be in
      // $eachLyricDiv.appendTo('.lyricsBox');
      },
      ()=>{
        console.log('bad request');
        alert("You must enter the name of a real band or singer!");
      }
    );
    $('#song').trigger('reset');
    });
});
