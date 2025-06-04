function flyBy(lamps, drone){
  let l = drone.length
  return 'o'.repeat(Math.min(l, lamps.length)) + lamps.slice(l)
}
