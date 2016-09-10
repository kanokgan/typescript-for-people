/// <reference path="../typings/jest/jest.d.ts"/>

class Captcha {
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


describe('Captcha', function() {
	describe('Pattern 1', function() {
		it('Shouldbe "1 + Two" when left=1, right=2, operator=1', function() {
			var captcha = new Captcha();
			expect(captcha.generate(1, 1, 2, 1)).toEqual('1 + Two');
		});

		it('Shouldbe "1 + Three" when left=1, right=3, operator=1', function() {
			var captcha = new Captcha();
			expect(captcha.generate(1, 1, 3, 1)).toEqual('1 + Three');
		});

		it('Shouldbe "2 - One" when left=2, right=1, operator=2', function() {
			var captcha = new Captcha();
			expect(captcha.generate(1, 2, 1, 2)).toEqual('2 - One');
		});		

		it('Shouldbe "9 * Eight" when left=2, right=1, operator=2', function() {
			var captcha = new Captcha();
			expect(captcha.generate(1, 9, 8, 3)).toEqual('9 * Eight');
		});		
	});

	describe('Pattern 2', function() {
		it('Shouldbe "Two + 2" when left=2, right=2, operator=1', function() {
			var captcha = new Captcha();
			expect(captcha.generate(2, 2, 2, 1)).toEqual('Two + 2');
		});

		it('Shouldbe "Three + 3" when left=3, right=3, operator=1', function() {
			var captcha = new Captcha();
			expect(captcha.generate(2, 3, 3, 1)).toEqual('Three + 3');
		});

		it('Shouldbe "Two - 1" when left=2, right=1, operator=2', function() {
			var captcha = new Captcha();
			expect(captcha.generate(2, 2, 1, 2)).toEqual('Two - 1');
		});	

		it('Shouldbe "Eight * 9" when left=8, right=9, operator=3', function() {
			var captcha = new Captcha();
			expect(captcha.generate(2, 8, 9, 3)).toEqual('Eight * 9');
		});	
	});
});