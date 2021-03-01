switch(true) {
  case outsideTemp<32 && state== "ne":
   console.log(`${yourName}, you should ${messages[0]}`)
    break;
  case 50>outsideTemp>32 && state== "ne":
    console.log(`${yourName}, you should ${messages[1]}`)
    break;
  case 50>outsideTemp>32 && state=="fl":
    console.log(`${yourName}, you should ${messages[2]}`)
    break;
  case outsideTemp<32 && state=="fl":
    console.log(`${yourName}, you should ${messages[3]}`)
 
  default:
   console.log(`${yourName}, we do not have recommendation for you at the moment!`)
  }