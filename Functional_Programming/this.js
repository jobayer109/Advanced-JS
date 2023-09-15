/*

    Topics:
    -------
        A. 'this' keyword's use case.


    Description:_________________________________________________________________

         B. 'this' keyword:
         -----------------
            1. This keyword always refers an object.
            2. If it can't access any object, it refer window/ global object.
            3. The value of this is set at the time the function is called.
            4. In arrow function, "this" in global scope refers to the global object 
               (even in strict mode).
            5. Arrow functions don’t have their own "this".
            6. On the other hand, normal function generally refers "global/window" 
               object. But in "use strict" mode, it can't refer to the window 
               object. If he can't access anything it returns "undefined"


*/

// --------------------------------------------------------------------------->>
