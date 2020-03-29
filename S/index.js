// A class or a function should have one responsibilty. When your function is doind more than one thing
//its time to creat a new one
//When designing our classes, we should aim to put related features together, so whenever they tend to change they change for the same reason.
// And we should try to separate features if they will change for different reasons

/**
 * the bad
 */
class Books{
   constructor(name){
     name = name
   }

   static nameToUppercase(){
       return this.name.toUpperCase();
   }
   static nameToLowercase(){
       return this.name.toLowerCase();
   }
   static printTextToConsole(){
      //print to console
   }
   static saveName(){

    // save to database
   }
}






/**
 * the good
 */

class Books{
    constructor(name){
      name = name
    }
 
    static nameToUppercase(){
        return this.name.toUpperCase();
    }
    static nameToLowercase(){
        return this.name.toLowerCase();
    }
   
 }

 class PrintBookName{
     static printBookNamePlusJibberish(BookName){
         return BookName + 'furufurfksjdjioweiofjioje'
     }
 }


 class NamesDb{
    static saveName(){

        // save to database
       }
 }