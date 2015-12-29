#
# Makefile
# missingdays, 2015-12-11 09:40
#

test-unit:
	mocha --recursive --compilers js:babel/register

test-integr:
	gulp test-integration

clean:
	rm -rf node_modules bower_components build

check-ts:
	tsc ts/iva.d.ts

example:
	phantomjs scripts/screen.js localhost:8000/examples/test examples/test.png
