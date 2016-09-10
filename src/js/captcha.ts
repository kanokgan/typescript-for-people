export class Captcha {
	generate(pattern: number, left: number, right: number, operator: number): string {
		var output = "";
		var numberString = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
		var operatorString = ['+', '-', '*'];

		if (pattern == 1) 
		{
			output += left;

			output += ' ';

			output += operatorString[operator - 1];

			output += ' ';

			output += numberString[right - 1];

		} else if (pattern == 2)
		{
			output += numberString[left -1];

			output += ' ';

			output += operatorString[operator - 1];

			output += ' ';

			output += right;

		}

		return output;
	};
}
