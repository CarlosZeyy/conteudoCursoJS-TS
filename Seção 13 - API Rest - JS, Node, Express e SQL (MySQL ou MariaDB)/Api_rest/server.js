import { configDotenv } from 'dotenv';
configDotenv();

import app from './app.js';

app.listen(process.env.PORT, () => {
  console.log();
  console.log(`Escutando na porta ${process.env.PORT}`);
});
