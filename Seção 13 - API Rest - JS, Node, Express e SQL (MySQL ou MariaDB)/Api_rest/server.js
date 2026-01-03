import app from './app.js';
import { configDotenv } from 'dotenv';
configDotenv();

app.listen(process.env.PORT, () => {
  console.log();
  console.log(`Escutando na porta ${process.env.PORT}`);
});
