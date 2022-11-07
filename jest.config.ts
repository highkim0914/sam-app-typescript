export default {
    transform: {
        '^.+\\.ts?$': 'esbuild-jest',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    setupFiles: ["<rootDir>/jest.setup.ts"],
    testMatch: ['**/tests/unit/*.test.ts'],
};