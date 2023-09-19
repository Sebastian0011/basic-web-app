export default function QueryProcessor(query: string): string {
  let queryString = query.toLowerCase()

  if (queryString.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (queryString.includes("andrew id")) {
    return (
      "Your andrew id is hello!!"
    )
  } else if (queryString.includes("What is your name?")) {
    return (
      "Your name is Sebastian"
    )
  }

  return "";
}
