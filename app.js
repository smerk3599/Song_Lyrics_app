$(() => {


  //Initialize the BandName and SongName variables
  let bandName = '';
  let songName = '';
  //Grabbing the musician button.
  const $openButton1 = $('#first-page');
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

  //Function to open modal 1
  const openModal1 = () => {
    //Make the title of the first modal the name of the singer/musician
    $('#page-2-title').text(`${bandName}`);
    //Show modal 1
    $modal1.css('display', 'block');
    //Hide the first page
    $openButton1.css('display', 'none');
    // Make the cursor appear in the song title input box
    $('#songName').focus();
  }

  //Function to open modal 2
  const openModal2 = () => {
    //originally a title for the second modal that included
    // $('#page-3-title').text(`Song Lyrics for ${bandName}'s  ${songName}`);
    //hide modal 1
    $modal1.css('display', 'none');
    //Show modal 2
    $modal2.css('display', 'block');
  }

  //Function to close modal 1
  const closeModal1 = () => {
    //hide modal 1
    $modal1.css('display', 'none');
    //Show the first page
    $openButton1.css('display', 'block');
    // Make the cursor appear in the song title input box
    $('#band').focus();
    //reset the band name variable when the first modal closes
    bandName = '';
  }

  //Function to close modal 2
  const closeModal2 = () => {
    //hide modal 2
    $modal2.css('display', 'none');
    //Show modal 1
    $modal1.css('display', 'block');
    // Make the cursor appear in the song title input box
    $('#songName').focus();
    //reset the text area when the second modal closes
    $('#lyricsBox').text('');
    //reset the song name variable when the second modal closes
    songName = '';
  }

  //Event listeners to open each modal
  $openButton1.on('click', openModal1);
  $openButton2.on('click', openModal2);

  //Event listeners to close each modal
  $newMusician.on('click', closeModal1);
  $newSong.on('click', closeModal2);

// processStringOfLyrics(testString);
  $('#musician').on('click',(event) => {
    //Keep the console.log from emptying
    event.preventDefault();
    // Assign a variable to the name of the band
    bandName = $('#band').val();
    console.log(bandName);
    //reset the musician input box
    $('#musician').trigger('reset');
  });

  $('#getSong').on('click',(event) => {
    //Keep the console.log from emptying
    event.preventDefault();
    // Assign a variable to the name of the song
    songName = $('#songName').val();
    console.log(`${bandName}/${songName}`);
    //reset the song input box
    $('#getSong').trigger('reset');

    // Ajax call for the API
    $.ajax({
      url: `https://api.lyrics.ovh/v1/${bandName}/${songName}`,
      type: 'GET',
    }).then(

      (song)=>{
        // assign the retreived lyrics to the text area
        $('#lyricsBox').text(song.lyrics);
        console.log(songName);

      },
      ()=>{
        //if nothing comes back from the api send an alert to the user
        console.log('bad request');
        alert("What you entered doesn't return a song!");
      }
    );
    });
});
