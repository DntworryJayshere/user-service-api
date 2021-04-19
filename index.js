const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =>
	res.json([
		{
			name: 'bob',
			email: 'bob@gmail.com',
		},
		{
			name: 'jane',
			email: 'jane@gmail.com',
		},
		{
			name: 'gill',
			email: 'gill@gmail.com',
		},
		{
			name: 'maria',
			email: 'maria@gmail.com',
		},
	])
);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
