class GuessingGame {
    constructor() {
		this.result=0;
	}

    setRange(min, max) {
		this.low=min;
		this.high=max;
    }

    guess() {
		var average=(this.low+this.high)/2;
		this.result=Math.round(average);
		return this.result;
    }

    lower() {
		this.high=this.result;
    }

    greater() {
		this.low=this.result;
    }
}

module.exports = GuessingGame;
