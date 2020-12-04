$(() => {




    const testString = `Relax don't do it
    ↵When you want to go to it
    ↵Re`;
  //The function to process the lyrics into 1 line divs that are readable
  const processStringOfLyrics = (object) => {

    //Initialize a local array to hold each letter of the string
    const stringArray =[];
    console.log(object.lyrics);
    let string = object.lyrics;
    //For loop to break the lyric string into an array
    for (var i = 0; i < string.length; i++) {
      stringArray[i] = string[i];
    }

    // //Create the first div that the first line of the lyrics will hold
    let $eachLyricDiv = $('<div class="lyricLine">');
    //Initialize an aray for each line of lyrics
    let eachLineArray = [];
    //Initialize a variable for the string of each line in the lyrics
    let eachLine = '';

    //A for loop to examine each letter of the lyrics
    for (each of stringArray) {
      //This API is set up using a carriage return charcter to seperate each line in the lyrics
      // If the letter is not a carriage return character
      console.log(each);
      if (each !== '↵'){
        //then add each letter to the string
        eachLine += `${each}`;
        // console.log(eachLine);
        // If it is a carriage return, start a new line of lyrics
      } else {
        // const lyricsWithLineBreaks = object.lyrics.replace(/\u21B5/g, '<br/>');
        //Make the text of a div the string of one line of lyric
        // console.log(lyricsWithLineBreaks);
        $eachLyricDiv.text(eachline);
        //Append that div to the main div for the box the lyrics will be in
        $eachLyricDiv.appendTo('.lyricsBox');
        //Create a new div for the next line in the song
        $eachLyricDiv = $('<div class="lyricLine">');
        //Reset the string of each line in the lyrics
        eachLine = '';
        }
      }
  }

// processStringOfLyrics(testString);
    $('form').on('click',(event) => {
      event.preventDefault();

      const bandName = $('input[type="text"]').val();

      $.ajax({
        url: `https://api.lyrics.ovh/v1/${bandName}`,
        type: 'GET'
      }).then(

        (song)=>{
          console.log(song.lyrics);
          processStringOfLyrics(song);
          // let $eachLyricDiv = $('<div class="lyricLine">');
          // $eachLyricDiv.text(song.lyrics);
          // //Append that div to the main div for the box the lyrics will be in
          // $eachLyricDiv.appendTo('.lyricsBox');

        },
        ()=>{
          console.log('bad request');
        }
      );
  })
})
