module.exports = {
    extends: [
		'gustavguez-eslint-config'
	].map(require.resolve),
    parserOptions: {
        project: "tsconfig.json",
    },
    rules: {
		"@typescript-eslint/no-extraneous-class": "off",
		"@typescript-eslint/no-magic-numbers": "off",
		"@typescript-eslint/restrict-plus-operands": "off"
	}
	
}