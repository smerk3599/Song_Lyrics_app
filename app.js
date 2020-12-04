$(() => {


    // console.log($('body'));
    $('form').on('click',(event) => {
      event.preventDefault();

      const bandName = $('input[type="text"]').val();

      $.ajax({
        url: `https://api.lyrics.ovh/v1/${bandName}`,

      }).then(

        (lyrics)=>{
          console.log(lyrics);
          $('.lyricsBox').text(lyrics.lyrics)
        },
        ()=>{
          console.log('bad request');
        }
      );
  })
});
