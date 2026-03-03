function joinWithCharacter(array, charactor) {
  var array = ["Honda", "Mazda", "Mercedes"];
  var charactor = [1, 2, 3];
  var result = array.concat(charactor);
  console.log(result.join(" _ "));

  return result;
}
