export default function QueryProcessor(query: string): string {
  let queryString = query.toLowerCase()

  if (queryString.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } 
  
  if (queryString.includes("andrew id")) {
    return (
      "Your andrew id is hello!!"
    )
  } 
  
  if (queryString.includes("what is your name?")) {
    return (
      "Sebastian"
    )
  } 
  
  if (queryString.includes("plus")) {
    const args = queryString.split(" ")
    return (
      `${parseInt(args[2]) + parseInt(args[4])}`
    )
  } 

  if (queryString.includes("minus")) {
    const args = queryString.split(" ")
    return (
      `${parseInt(args[2]) - parseInt(args[4])}`
    )
  } 
  
  if (queryString.includes("largest")) {
    const args = queryString.split(" ")
    return (
      `${Math.max(parseInt(args[8]), parseInt(args[9]), parseInt(args[10]))}`
    )
  } 
  
  if (queryString.includes("multiplied")) {
    const args = queryString.split(" ")
    return (
      `${parseInt(args[2]) * parseInt(args[5])}`
    )
  }

  if (queryString.includes("square")) {
    const args = queryString.split(" ")
    for (let i = 12; i < args.length; i += 1) {
      // if math.sqrt(parseInt(args[i]))
    }
    return (
      `${parseInt(args[2]) * parseInt(args[5])}`
    )
  }

  // cbrt

  return "";
}
