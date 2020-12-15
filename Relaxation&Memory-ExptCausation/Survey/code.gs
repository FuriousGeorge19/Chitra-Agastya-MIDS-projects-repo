const YOUNG = '5 - 21 years';
const ADULT = '22 - 55 years';
const OLD = 'Older than 55 years';


var scriptProperties = PropertiesService.getScriptProperties();


function doGet() {
  return HtmlService.createHtmlOutputFromFile('FullForm');
}

function setScore(score) {
  Logger.log("User score: ", score);
  //var myform = FormApp.openById(myformid);
  //var item = myform.addTextItem();
  //item.setTitle('Your game score is: ' + score);
}

//
//reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//
function shuffle(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

function getPropValue(key) {
  let props = loadProperties();
  //console.log('Props: ', props);
  let block = JSON.parse(props[key]);
  //console.log('Block: ', block);
  let assignment = null;
  if(block.length > 0) {
    assignment = block.shift();
    if (block.length == 0) {
       block = shuffle(shuffle(['0', '1']));
    }
    scriptProperties.setProperty(key, JSON.stringify(block));
  }
  return assignment;
}

function loadProperties() {
  let sprops = scriptProperties.getProperties();
  if(Object.keys(sprops) === null || Object.keys(sprops).length === 0)
  {
     Logger.log('No properties found. Creating them!');
     scriptProperties.setProperty(YOUNG, JSON.stringify(shuffle(shuffle(['0', '1']))));
     scriptProperties.setProperty(ADULT, JSON.stringify(shuffle(shuffle(['0', '1']))));
     scriptProperties.setProperty(OLD, JSON.stringify(shuffle(shuffle(['0', '1']))));
     sprops = scriptProperties.getProperties();
  } 
  else
    Logger.log('Script Props: ', sprops);
  return sprops;
}

function getTreatment (block) {
  console.log('getTreatment for: ', block);
  let assign = getPropValue(block);
  console.log('User assigned to treatment: ', assign);
  return assign;
}

function testAssignTreatment() {
  for(let i =0; i < 10; i++) {
    Logger.log('Assigned to Treatment Group: ', getTreatment(YOUNG));
  }
}

function deleteAllProps() {
  let scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.deleteAllProperties();
}

function testShuffle() {
  var arr = shuffle(shuffle(['0', '1']));
  Logger.log(arr);
}

