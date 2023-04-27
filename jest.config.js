module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['<rootDir>/src/**/*.test.(js|jsx)'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};