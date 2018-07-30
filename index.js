var DeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
      else {
        return "There is nobody waiting to be served!"
    }
};


function currentLine(katzDeliLine){
  var state = "The line is currently: ";
  var n;
  if (katzDeliLine.length > 0){
    for (var n = 0; n<katzDeliLine.length; n ++)
      {
      return state.push(katzDeliLine``)
      }
    }
else {
  return "The line is currently empty."
  }
};
