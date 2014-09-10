'use strict';

describe('Test suite', function() {

	it('should have classList', function() {
		var el = document.createElement('div');

		expect(el.classList).to.be.ok();
		expect(el.classList.add).to.be.a('function');
		expect(el.classList.remove).to.be.a('function');
		expect(el.classList.toggle).to.be.a('function');
		expect(el.classList.contains).to.be.a('function');

		var className = 'SomeClass';
		el.classList.add(className);
		expect(el.classList.contains(className)).to.be(true);
		expect(el.className.trim()).to.eql(className);
		el.classList.remove(className);
		expect(el.classList.contains(className)).to.be(false);
		el.classList.toggle(className, true);
		expect(el.classList.contains(className)).to.be(true);

	});

	it('should have addEventListener', function() {
		var el = document.createElement('div');

		expect(window.addEventListener).to.be.ok();
		expect(document.addEventListener).to.be.ok();
		expect(el.addEventListener).to.be.ok();
		expect(el.removeEventListener).to.be.ok();

		var gotClicked = false;
		el.addEventListener('click', function() {
			gotClicked = true;
		});
		el.dispatchEvent(new CustomEvent('click'));
		expect(gotClicked).to.be(true);

	});

	it('should have array methods', function() {
		var arr = [1, 2, 3, 4];

		expect(arr.forEach).to.be.a('function');
		expect(arr.map).to.be.a('function');
		expect(arr.reduce).to.be.a('function');
		expect(arr.some).to.be.a('function');
		expect(arr.every).to.be.a('function');

	});

});
