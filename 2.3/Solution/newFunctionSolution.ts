export function myFunction(myNum: number): string {
    if (myNum == 5) {
      // Here we have the first test; if the number IS 5, return "true".
      return "true";
    } else if (myNum < 5 && myNum >= 0) {
      // If the number is less than 5, we return "false".
      // We also have to make sure it's not negative, due to the last test.
      // The `&&` means both statements need to be true for this block to trigger.
      return "false";
    } else if (myNum > 5) {
      // We return "big" if we have a number larger than 5.
      return "big";
    } else {
      // Finally, we need to return "negative" if any negative number is passed
      // in, but we don't need an if here, because only negative numbers are
      // left by now.
      return "negative";
    }
  }




  function blockBuster(movie: string): string {
    if (movie == "Movie One") {
      return "Free Guy"; 
    } else if (movie == "Movie Two") {
      return "Everything,Everywhere, All at Once"; 
    }else if (movie == "Movie Three") {
      return "Surf's Up"; 
    } else if (movie == "Movie Four") {
      return "The Italian Job"; 
    } else if (movie == "Movie Five") {
      return "Fast X"
    } else {
      return `I'm sorry we do not have ${movie}!`
    }
  }