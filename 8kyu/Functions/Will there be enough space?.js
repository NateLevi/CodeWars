function enough(cap, on, wait) {
  if (on >= cap) {
    return wait;
  }
  else if (on + wait > cap) {
    return (on + wait) - cap;
  }
  else {
    return 0;
  }

}
