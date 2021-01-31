var empty = [];

let sleepsort = async (...args) => {
  args.forEach((i) => {
    setTimeout(async () => {
      empty.push(i);
      console.log(empty); // just for visualization
    }, i * 250);
  });
}

sleepsort(18,3,10,45,9);

//É a road to dev JR. garai
