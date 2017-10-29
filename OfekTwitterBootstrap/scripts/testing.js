(function() {
	window.onload = function init(){
		test_group('first test group', function() {
			assert(true, "simple successful test");
			assert(true, "simple successful test 2");
			assert(true, "simple successful test 3");
		});

		test_group('second test group', function() {
			assert(tweetingTest, "tweeting test");
			assert(true, "simple successful test 2");
			assert(false, "simple unsuccessful test");
		});
	}

	var test_group = function (name, asserts) {
		var col = newTestDiv();
		addHeaderToRow(col, name);
		this.testGroupUl = document.createElement("ul");
		col.appendChild(this.testGroupUl);
		asserts();
	}

	var newTestDiv = function () {
		var testDiv = document.getElementById("testContainer");
		var row = document.createElement('div');
		row.className = "row testRow";
		testDiv.appendChild(row);
		var col = document.createElement('div');
		col.className = "testCol col-lg-4 offset-lg-1";
		row.appendChild(col);
		return col;
	}

	var addHeaderToRow = function (row, headerText) {
		var elementTitle = document.createElement("H5");
		var text = document.createTextNode(headerText);
		elementTitle.appendChild(text);
		row.appendChild(elementTitle);
	}

	function assert(value, name) {
		var li = document.createElement("li");

		if (value)
		{
			li.className =  "success";
		}
		else {
			li.className =  "failed";
			this.testGroupUl.parentNode.classList.add("failed")
		}

		li.textContent = name;
		this.testGroupUl.appendChild(li);
	}
	
	function tweetingTest() {
		var lenBefore = tweets.length;
		publishTweet();
		tweets.length;

		return lenBefore === tweets.length - 1;
	}
}());
