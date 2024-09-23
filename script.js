function firstWord(s) {
  // your code here
	s = s.trim();
	const SpaceIndex = s.indexOf(' ');
	if(SpaceIndex === -1){
		return s;
	}
	return s.substring(0, SpaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
