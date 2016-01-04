#
# Makefile
# missingdays, 2015-12-11 09:40
#

all: long build-final build-dev

test-all: long test-unit test-integr

build-final:
	WEBPACK_ENV=build
	webpack --progress --colors 

build-dev:
	WEBPACK_ENV=dev
	webpack --progress --colors

test-unit:
	mocha --recursive --compilers js:babel-core/register

test-integr:
	gulp test-integration

clean:
	rm -rf node_modules bower_components build

check-ts:
	tsc ts/iva.d.ts

example:
	phantomjs scripts/screen.js localhost:8000/examples/html/test examples/test.png

watch-all:
	gulp watch:all

long:
	@echo "Go drink some coffee -- this will take some time"
