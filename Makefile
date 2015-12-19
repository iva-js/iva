#
# Makefile
# missingdays, 2015-12-11 09:40
#

test-unit:
	mocha --recursive --compilers js:babel/register

clean:
	rm -rf node_modules bower_components
