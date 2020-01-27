function distanceFromHqInBlocks(x) {
 if (x >= 42) {
  return  x - 42 }
 else {
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

function calculatesFarePrice() {


}


