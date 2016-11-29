var random_number;
var computerGuessedColour;
var colourArray ;
 var userColour;
var finished=false;
var guesses=0;
function do_game() {
   
    random_number=Math.random()*10;
    
    random_number = Math.floor(random_number);
    
    alert("The value is "+random_number);
     colourArray = ["Red", "Green", "Violet", "Indigo","Blue", "Yellow", "Orange", "Pink","White", "Black"];
    
   computerGuessedColour = colourArray[random_number];
    alert("The compter guessed colour is " +computerGuessedColour);
    
    while(!finished)
        {
    userColour=prompt("I am thinking of one of these colours:\n\nRed, Green, Violet, Indigo, Blue, Yellow, Orange, Pink, White, Black\n\nWhat colour am I thinking of ???"); 
    alert("User colour is "+userColour);
            
            
    guesses+=1;
            
            
   finished=check_guess();
      
        }
}




function check_guess(){
     alert("Index of user colour " +colourArray.indexOf(userColour));
   if(colourArray.indexOf(userColour)<=-1 )
    {
        alert("The colour that you have entered is not in the list")
    return false;
    }
     if(userColour < computerGuessedColour)
    {
         alert("The colour that you have entered is alphabetically lower than mine!");
        return false;
        
    } 
     if(userColour > computerGuessedColour)
        {
         alert("The colour that you have entered is alphabetically higher than mine!");
        return false;
        
    } 
    
    alert( "You got it right !! \n It took "+guesses +" chances for you to find it.")
   
  return true;
     }
