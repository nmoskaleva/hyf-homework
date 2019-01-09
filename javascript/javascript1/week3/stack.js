const watchFirstEpisode = function () {
  //watchFirstEpisode()
  //watchBreakingBad()
  //finishMondayEvening(watchBreakingBad)
  console.log('Watch first episode');
};

const watchBreakingBad = function () {
  console.log('Watching Breaking bad');
  //watchBreakingBad();
  //finishMondayEvening(watchBreakingBad)
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function () {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function () {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  //watchBreakingBad();
  //finishMondayEvening(watchBreakingBad);

  goForARun();
  //goForARun()
  //finishMondayEvening(watchBreakingBad)

  helpStudentsWithHomework();
  //helpStudentsWithHomework();
  //finishMondayEvening(watchBreakingBad)

  console.log('done for today')
}
// draw call stack: now call stack is empty

finishMondayEvening(watchBreakingBad);
// draw call stack 
//finishMondayEvening(watchBreakingBad)

/*
console(logs)
Watching Breaking bad
Watch first episode
No more for today
Im running! look at me!
Help help help
done for today
*/