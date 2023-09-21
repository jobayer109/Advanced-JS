/*
    Topics:
    -------
        A. What is async Generator? 
        B. Its a advanced topic

    Notes:
    ------
        *   
*/

// -------------------------------------------------------------------->>

async function* myAsyncGenerator() {
  let i = 1;

  while (true) {
    if (i > 5) return;
    yield await Promise.resolve(i++);
  }
}

// async Generator created by IIFEs
(async function () {
  for await (let v of myAsyncGenerator()) {
    console.log(v);
  }
})();
