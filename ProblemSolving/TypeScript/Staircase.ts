/*
This is a staircase of size n = 4:
   #
  ##
 ###
####
Its base and height are both equal to n. 
It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function staircase(n: number): void {
	let start: string = "";
	for (let i = 0; i < n; i++) {
		start += "#";
		let spacesN: number = n - 1 - i;
		console.log(innerSpaces(spacesN) + start);
	}
}

function innerSpaces(n: number): string {
	let finalText: string = "";
	let spaces: string = " ";
	for (let i = 0; i < n; i++) {
		finalText += spaces;
	}
	return finalText;
}
