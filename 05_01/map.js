const friends = [
  { firstname: 'Jane', lastname: 'Doe' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Alex', lastname: 'Trebek' },
];

//Create a new array that includes only the full name (firstname + lastname) of each friend.
const fullName = friends.map((friend) => {
  return friend.firstname + " " + friend.lastname;
});
console.log(fullName);