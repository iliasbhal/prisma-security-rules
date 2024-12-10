import { JestConfigWithTsJest } from "ts-jest";

const esModules = [].join("|");

const jestConfig: JestConfigWithTsJest = {
	preset: "ts-jest",

	testEnvironment: "node",
	transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
	moduleNameMapper: {
		"@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.tsx?$": ["ts-jest", {
			isolatedModules: true,
		}],
	},
};

export default jestConfig;
