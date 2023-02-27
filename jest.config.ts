import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
    verbose: true,
    rootDir: path.resolve(__dirname),
    testRegex: '(test)\\.[jt]sx?$',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    preset: 'ts-jest',
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest"
    },
};

export default config;
