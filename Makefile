#
# Makefile
# missingdays, 2015-12-11 09:40
#

all: long deps build-final build-dev

all-dev: long build-final build-dev

test-all: long test-unit test-integr

build-final: 
	WEBPACK_ENV=build webpack --progress --colors 

build-dev: lint
	WEBPACK_ENV=dev webpack --progress --colors

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

deps:
	npm install
	bower install

lint:
	gulp lint

long:
	@echo "Go drink some coffee -- this will take some time"
