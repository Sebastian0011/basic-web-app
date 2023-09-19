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
      `${Number(args[2]) + Number(args[4])}`
    )
  } 
  
  if (queryString.includes("largest")) {
    const args = queryString.split(" ")
    return (
      `${Math.max(Number(args[8]), Number(args[9]), Number(args[10]))}`
    )
  } 
  
  if (queryString.includes("multiply")) {
    const args = queryString.split(" ")
    return (
      `${Number(args[2]) * Number(args[5])}`
    )
  }

  
  return "";
}
