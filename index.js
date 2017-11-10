// Write your solution in this file!
const driver = {
  name: 'Sam',
}
function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}
