function takeANumber(currentLine, newPerson){
  var str = '';
    var newPersonPosition = (currentLine.length + 1);
    str += ('Welcome, ' + newPerson + '. You are number ' + newPersonPosition + ' in line.')

  currentLine.push(newPerson)
  return str;
  return currentLine;
}
// return the new persons name and the number they are in line

function nowServing(currentLine){
  if (currentLine.length < 1){
    return "There is nobody waiting to be served!"
  }
    var firstPerson = currentLine[0];
    var newLine = currentLine.shift(2)
    // the shift pushes the array one over to the right.

  //  console.log(newLine);
  return ("Currently serving " + firstPerson + ".")
}
// return first person in line and than get rid of that person from line.

function currentLine(current){
  var str = "";
  if (current.length < 1){
    return ("The line is currently empty.")
  }
  str += 'The line is currently: '
  for (var i = 0; i < current.length; i++){
    var person = current[i];
  if (i === (current.length - 1)){
    str += ((i + 1) + ". " + person)
    // if last person dont do a comma.
  } else{
        str += ((i + 1) + ". " + person + ", ");
      }
      // if anyone else do comma.
  }
  return str;
}
// returns the placement of each person in line using a string.
