module.exports = {
	apps: [
		{
			name: "MAWA-PROJECTS", // PROJECT-NAME
			script: "./projects/server/src/index.js",
			env: {
				NODE_ENV: "production",
				PORT: 8000,
			},
			time: true,
		},
	],
};
