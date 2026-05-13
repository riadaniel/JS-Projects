function toggleNewsLetter(){

  const newsLetter = document.getElementById("newsLetter");

  newsLetter.classList.toggle("active");

}
/*const newsLetter = document.getElementById("newsLetter");

document → represents your whole webpage.

.getElementById("newsLetter") → finds the HTML element with the id="newsLetter".

const newsLetter = ... → stores that element in a variable called newsLetter so you can use it later.
.classList → lets you work with the element’s CSS classes.

.toggle("active") → adds the class "active" if it’s not there, or removes it if it is.

In your CSS, the #newsLetter.active rule makes the box visible and moves it to the center of the screen.
*/

/*
#newsLetter {
  position: fixed;
  top: -100%;       /* starts hidden above the screen 
  visibility: hidden;
  transition: 0.5s;  smooth animation */

/*
#newsLetter.active {
  visibility: visible;
  top: 50%;         /* moves into the middle of the screen */

