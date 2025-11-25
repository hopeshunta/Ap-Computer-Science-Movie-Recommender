 
//Variables:
//age stores a number
var age = "undefined"; 
//the rest of the variables store strings
var hobbies = "undefined";
var freeTime = "undefined";
var chosenMovie = "undefined"; 
var previousImage = "migrationImage";
var genre; 
//dropdown("hobbiesInput2", "Choose your hobby", "Skydiving", "Improv Classes", "Elaborate Pranks");

//The purpose of this is to collect users age to reccomend movie that they will like
//This functions by the user inputing their age and then the code will output a recommendation based on their age later.
onEvent("ageInput", "change", function( ) {
  age = getNumber("ageInput");
  movieReccomender ();
  setProperty("hobbiesLabel", "hidden", false);
  setProperty("hobbiesInput", "hidden", false);
});
//The purpose of this is to collect users hobbies to reccomend movie that they will like
//This functions by the user choosing their hobby and then the code will output a recommendation based on their hobby later.
onEvent("hobbiesInput", "change", function( ) {
  hobbies = getText("hobbiesInput");
  movieReccomender ();
  setProperty("freeTimeLabel", "hidden", false);
  setProperty("aLittleButton", "hidden", false);
  setProperty("aLotButton", "hidden", false);
});
 
//The purpose of this is to collect users amount of free time to reccomend movie that they will like
//This functions by the user choosing their free time and then the code will output a recommendation based on their free time later.
onEvent("aLittleButton", "click", function( ) {
  freeTime = "a little";
  setProperty("aLittleButton", "background-color", "lightGreen");
  setProperty("aLotButton", "background-color", "rgb(240, 98, 101)");
  movieReccomender ();
  setProperty("getRecommendationButton", "hidden", false);
}); 

//The purpose of this is to collect users amount of free time to reccomend movie that they will like
//This functions by the user choosing their free time and then the code will output a recommendation based on their free time later.
onEvent("aLotButton", "click", function( ) {
  freeTime = "a lot";
  setProperty("aLotButton", "background-color", "lightGreen");
  setProperty("aLittleButton", "background-color", "rgb(240, 98, 101)");
  setProperty("getRecommendationButton", "hidden", false);
  movieReccomender();
}); 
//Bring you back to main page and resets the form
onEvent("clapperBoard", "click", setToReccomendationScreen);
onEvent("clapperBoardAdventure", "click", setToReccomendationScreen);
onEvent("clapperBoardDrama", "click", setToReccomendationScreen);
onEvent("clapperBoardComedy", "click", setToReccomendationScreen);

//outputs reccomendation
onEvent("getRecommendationButton", "click", function ( ) {
  movieReccomender();
  undefinedCheck ();
}); 

 //The purpose of this function is to be able to make recommendations to users based on their inputed ages, hobbies, and free time. This way users will be recommended a movie that matches their needs. 
 //This funciton funcitons by first getting the most recent inputs form the variables, 
 //then it checks which hobbies were inputed and based on those inputs the function choses which genre the user would like. 
 //after being sorted into the four genres the function checks if the user has a lot or a little free time 
 //Lastly, the code checks the users age and sets the chosenMovie variable to the reccomendation. 
 //It will also set any previous recomendation images to hidden and will unhide the reccomendation so it is ready when the page is switched.
function movieReccomender() {
  age = getNumber("ageInput"); 
  hobbies = getText("hobbiesInput");
  //adventure
  if(hobbies == "Skydiving"){ 
    genre = "adventureScreen";
    if(freeTime == "a little"){
      if (age <= 10){
        // Little free time, kid
        chosenMovie = "Migration";
        setProperty(previousImage, "hidden", true);
        setProperty("migrationImage", "hidden", false); 
        previousImage = "migrationImage";
      } else {
        // Little free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "The Princess Bride";
        setProperty("princessBrideImage", "hidden", false);
        previousImage = "princessBrideImage";
      }
    } else if (age <= 10){
        // Lot of free time, kid
        setProperty(previousImage, "hidden", true);
        chosenMovie = "The BFG";
        setProperty("BFGImage", "hidden", false);
        previousImage = "BFGImage";

      } else {
        // Lot of free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Lord of the Rings";
        setProperty("LOTRImage", "hidden", false);
        previousImage = "LOTRImage";
      }
    }
    
//Drama
  if(hobbies == "Improv Classes"){
    genre = "dramaScreen";
     if(freeTime == "a little"){
      if (age <= 10){
        // Little free time, kid
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Bluey";
        setProperty("blueyImage", "hidden", false);
        previousImage = "blueyImage";

      } else {
        // Little free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Noelle";
        setProperty("noelleImage", "hidden", false);
        previousImage = "noelleImage";
      }
    } else if (age <= 10){
        // Lot of free time, kid
        setProperty(previousImage, "hidden", true);
        chosenMovie = "The Parent Trap";
        setProperty("parentTrapImage", "hidden", false);
        previousImage = "parentTrapImage";
      } else {
        // Lot of free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Knives Out";
        setProperty("knivesOutImage", "hidden", false);
        previousImage = "knivesOutImage";
      }
  } 
  
    //Comedy
  if (hobbies == "Elaborate Pranks"){
      genre = "comedyScreen";
     if(freeTime == "a little"){
      if (age <= 10){
        // Little free time, kid
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Shrek";
        setProperty("shrekImage", "hidden", false);
        previousImage = "shrekImage";
      } else {
        // Little free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Murder Mystery";
        setProperty("murderMysteryImage", "hidden", false);
        previousImage = "murderMysteryImage";
      }
    } else if (age <= 10){
        // Lot of free time, kid
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Zootopia";
        setProperty("zootopiaImage", "hidden", false);
        previousImage = "zootopiaImage";
      } else {
        // Lot of free time, adult 
        setProperty(previousImage, "hidden", true);
        chosenMovie = "Jumanji";
        setProperty("jumanjiImage", "hidden", false);
        previousImage = "jumanjiImage";
      }
  } 

} 

//This functions purpose is to first check to make sure all fields were chosen so that a recomendation isn't made without vital information
//then it changes the screen so that users can see their reccomendation. 
//This funciton functions by first checking each variable to ensure that it has been given a valid value. 
//If there is an undefined variable the program will not progress 
//If all variables are set then it will set the screen based on the genre chosen in the movieRecommender function 
//Equivalenet to an "updateScreen" function
 function undefinedCheck(){
 if(age == "undefined" || hobbies == "undefined" || freeTime == "undefined"){
    chosenMovie = "undefined";
  } else{
    if (genre == "adventureScreen"){
      setScreen("adventureScreen");
  }else if (genre == "dramaScreen"){
    setScreen("dramaScreen");
  }else if (genre == "comedyScreen")
    setScreen("comedyScreen");
 }}

//The purpose of this function is to bring the user back to the form so that they can take the quiz over and over again. 
// This function functions by setting the screen back to the recommendationForm and resetting each variable to its original state.
function setToReccomendationScreen (){
  setScreen ("recommendationForm"); 
  setText("ageInput", "");
  age = "undefined";
  hobbies = "undefined";
  setProperty("aLittleButton", "background-color", "rgb(240, 98, 101)");
  setProperty("aLotButton", "background-color", "rgb(240, 98, 101)");
  freeTime = "undefined";
  chosenMovie = "undefined"; 
  setProperty("hobbiesLabel", "hidden", true);
setText("hobbiesInput", "Choose your hobby");
  setProperty("hobbiesInput", "hidden", true);
  setProperty("freeTimeLabel", "hidden", true);
  setProperty("aLittleButton", "hidden", true);
  setProperty("aLotButton", "hidden", true);
}




















