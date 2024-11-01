lint: 
	npx eslint .
test:
	npm test
install:
	npm install
test-coverage:
	npm test -- --coverage --coverageProvider=v8
publish:
	npm publish --dry-run