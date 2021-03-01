state=prompt("Please enter the two letter abbreviation of your state.")
yourName=prompt("Please enter your name.")
outsideTemp=prompt("Please enter the current temperature in Farenheit.")
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", " wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

if (outsideTemp<32 && state=="ne")
{console.log(`${yourName}, you should ${messages[0]}`)}
else if (50>outsideTemp && outsideTemp>32 && state=="ne")
{console.log(`${yourName}, you should${messages[1]}.`)}
else if (50>outsideTemp && outsideTemp>32 && state=="fl")
  {console.log(`${yourName}, you should ${messages[2]}.`)}
else if (70>outsideTemp && outsideTemp>50 && state=="fl")
  {console.log(`${yourName}, you should ${messages[3]}.`)}
else
  {"sorry, we do not have a recommendation for you"}

