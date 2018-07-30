var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
};

function nowServing(katzDeliLine){
  for (n = 0; n < katzDeliLine.length; n++) {
    return 'Currently serving ${name}, ${katzDeliLine[n]} '.
  };
      return "There is nobody waiting to be served!"
};

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
  return (`The line is currently: ${name}, ${katzDeliLine.length}.`)
}
  elseif (katzDeliLine = 0) {
    return "The line is currently empty."
  };
};
