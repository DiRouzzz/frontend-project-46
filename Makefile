lint: 
	npx eslint .
fix:
	npx eslint --fix .
test:
	npm test
install:
	npm install
test-coverage:
	npm test -- --coverage --coverageProvider=v8
publish:
	npm publish --dry-run
install: 
	npm ci