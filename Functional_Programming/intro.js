/*


Q: What is functional programming ?

    Functional programming is programming paradigm - a style of building the structure 
    and element of computer program that treats computation as the evaluation of 
    mathematical functions and avoid  changing-state and mutable data. 

    Or,
    Functional programming is a programming paradigm in which we try to bind everything 
    in pure mathematical functions style. It is a declarative type of programming style. 
    Its main focus is on “what to solve” in contrast to an imperative style where the 
    main focus is “how to solve”.

    
    ----------------------------------------------------------------------------------------------------

    Three main terms:
        1. Pure function.
        2. First class  function
        3. Higher order  function

     
     ---->> Function acts like a value (Definition)

    ----------------------------------------------------------------------------------------------------
    
    Notes:
        * It uses expressions instead of statements. An expression is evaluated to
          produce a value; whereas a statement is executed to assign variables. 
        * Functional Programming is based on Lambda Calculus: 
          Lambda calculus is a framework developed by Alonzo Church to study computations with functions.
          It can be called as the smallest programming language in the world.


    Read the GeeksForGeeks documentation



    --------------------------------------------------------------------
Pure functions: These functions have two main properties. First, they always produce the same output for same arguments irrespective of anything else. 
Secondly, they have no side-effects i.e. they do not modify any arguments or local/global variables or input/output streams. 
Later property is called immutability. The pure function’s only result is the value it returns. They are deterministic. 
Programs done using functional programming are easy to debug because pure functions have no side effects or hidden I/O. Pure functions also make it easier to write parallel/concurrent applications. When the code is written in this style, a smart compiler can do many things – it can parallelize the instructions, wait to evaluate results when needing them, and memorize the results since the results never change as long as the input doesn’t change. 
example of the pure function: 

sum(x, y)           // sum is function taking x and y as arguments
return x + y    // sum is returning sum of x and y without changing them



*/
