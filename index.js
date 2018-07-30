var deliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name);
  return (`Welcome, ${name}. You are number ${DeliLine.length} in line.`)
};

function nowServing(DeliLine){
  if (DeliLine.length > 0){
    return `Currently serving ${DeliLine.shift()}.`
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
