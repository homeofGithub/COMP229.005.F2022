
function add(x, y = 0) {
   return x + y;
}
document.write(add(10) + "<br>");
document.write(add(10,2));


function userFriends(user, ...friends) {
   console.log(user + ' has ' + friends.length + ' friends. They are:');
   friends.map(n => console.log(n));
}
userFriends('John', 'Bob', 'Alice', 'Joanna', 'Yi Chen');


function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
 }
 userTopFriends(...['Alice', 'Bob', 'Michelle', 'John']);