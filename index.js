// Code your solution in this file!
let blockNum; 
function distanceFromHqInBlocks(blockNum) {
    if (blockNum > 42) {
        return blockNum - 42;
    } else {
        return 42 - blockNum;
    }
}

function distanceFromHqInFeet(blockNum) {
    return distanceFromHqInBlocks(blockNum) * 264;
}

function distanceTravelledInFeet(begin, end) {
    if (begin < end) {
        return (end - begin) * 264;
    } else { 
        return (begin - end) * 264;
    }
}

function calculatesFarePrice (begin, end) {
  const distance = distanceTravelledInFeet(begin, end);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}