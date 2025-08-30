function startPlanner() {
  let destinations = []
  let totalDest = parseInt(prompt("How many destinations do you want to enter? (3-5)"))
  if (isNaN(totalDest) || totalDest < 3 || totalDest > 5) {
    alert("Please enter a number between 3 and 5.")
    return
  }

  for (let i = 0; i < totalDest; i++) {
    let dest = prompt(`Enter destination ${i + 1}:`)
    if (dest) destinations.push(dest)
  }

  let budget = parseInt(prompt("Enter your total budget (in ₹):"))
  let budgetMsg = ""
  if (budget < 10000) budgetMsg = "Plan a short domestic trip."
  else if (budget <= 50000) budgetMsg = "You can plan a long domestic trip."
  else budgetMsg = "International trip possible!"

  let days = parseInt(prompt("Enter number of travel days:"))
  let tripType = ""
  if (days < 3) tripType = "Weekend Getaway."
  else if (days <= 7) tripType = "Perfect Holiday Trip."
  else tripType = "Extended Vacation."

  const hotelSuggestion = (budget, days) => {
    let perDay = budget / days
    if (perDay < 2000) return "Budget Hotels."
    else if (perDay <= 5000) return "Mid-range Hotels."
    else return "Luxury Hotels."
  }

  let hotel = hotelSuggestion(budget, days)

  console.log(`Destinations Entered: [${destinations.join(", ")}]`)
  console.log(`Total Budget: ₹${budget}`)
  console.log(`Days Planned: ${days}`)
  console.log(`Trip Type: ${tripType}`)
  console.log(`Hotel Suggestion: ${hotel}`)
  console.log(`Travel Summary: ${budgetMsg}`)
}
