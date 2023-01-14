import AllUserJSON from './customer_summary_3.json'

/*


null
undefined
1
"asdf"
[1,2,3]
{}

*/

const userKeys = Object.keys(AllUserJSON);

const userNumbers = Object.keys(AllUserJSON[userKeys[0]])
const userObjects = [];

userNumbers.forEach((userNumber) => {
  const newUserObject = {};
  userKeys.forEach((key) => {
    newUserObject[key] = AllUserJSON[key][userNumber]
  })
  userObjects.push(newUserObject);
})

export default userObjects;