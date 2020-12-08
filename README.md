# Song_Lyrics_app
User requested song lyrics site

This site uses an API to get the lyrics of a song based on user input.    The apiI used was lyrics.ovh.
The user input would be in the form of a singer or band's name and then the name of the song.
The API uses both names together in one call to get the lyrics.

Since I needed two different names, I used a modal to separate the input, and then a second modal to display the lyrics.  There are buttons on each modal to return to the previous modal.

I really wanted to set it up to either change the background picture every so often or once I new the singer/musicians name to show random pictures from that artist. Ah, ambitions.   However, I really liked how the background picture I used set up with everything.  Sometimes less is more.

Issues.
- Initially, the format of the lyrics was really difficult to deal with.    I tried to process the lyrics as a string, using the carriage return character to separate each line into its' own div because it would format nicely in the console.log, but not so much on the screen.   Putting everything into a single div did not format it correctly, it just all came out in a paragraph, and until I found an element called textarea the string processing would just randomly stop way before it was finished.  When I put the whole lyrics off the API inside the textarea, it was magically formatted.   I almost had to change APIs because of this issue and how long it took me to figure out.

- The modals took a little bit of playing around with to figure out how to do them this way, but overall it went fairly smoothly.

- The text inputs were a little challenging until I found the autofocus and focus properties, and then things worked just fine.

- One little bit of weirdness that I never solved so I took out, was the title on the second modal.  I wanted it to include the band name and song name, but the song name never would show up either in a console log or on the page.  Being similarly defined, I thought bandName and songName would behave the same way on the page, but songName had a mind of it's own.  It looks like all of that info would have been too long on one line anyway for some songs.

- The API seems a little unreliable, but only 1-2% of the time.
