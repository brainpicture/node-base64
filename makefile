all:
	node-waf configure build && mkdir -p ~/.node_libraries && cp ./build/default/base64.node ~/.node_libraries/base64.node
tests:
	node ./test.js
clean:
	rm -rf ./build
