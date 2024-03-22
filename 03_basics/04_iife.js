// immidiately invocked function expression ( IIFE ) -> a function that is called immediately after it is defined
//  because the function expressed is called immediately, 
//the IIFE wraps up the code nicely so that we don't pollute the global scope.

(function chai(){                                       // named
    console.log('db CONNECTED');
}) ();          // () ()   


(   ()  => {
    console.log( 'db CONNECTED 2');
}) ();

// while writing two iife make sure to use " ; "  after the first iife
// otherwise environment dont know where to stop

(   (name)  => {
    console.log( `${name}`);
}) ('tanmay iife')

