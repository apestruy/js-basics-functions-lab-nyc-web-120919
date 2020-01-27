function distanceFromHqInBlocks(x) {
 if (x >= 42) {
  return  x - 42 
 } else {
  return 42 - x }
}

function distanceFromHqInFeet(x){
 return (distanceFromHqInBlocks(x) * 264)
}

function distanceTravelledInFeet(a, b) {
  if (a < b) {
  return ((b - a) * 264) 
  } else {
    return ((a - b) * 264)
  }
}

function calculatesFarePrice(a, b) {
  const distance = distanceTravelledInFeet(a, b);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance * 2);
  } else if (distance > 2000 && distance < 2500) {
    return 1;
  } else {
    return "cannot travel that far";
  }
}


