const palindrome = "arara"
const reverso = palindrome.split("").reverse().join("")

if(palindrome === reverso){
  console.log(true)
} else{
  console.log(false)
}