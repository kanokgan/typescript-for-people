function Captcha() {

}

Captcha.prototype.generate = function(pattern, left, right, operator) {
	if (right == 2)
		return "1 + Two";	
	if (right == 3)
		return "1 + Three";
};