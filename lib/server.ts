import app from './app';

const PORT = 7500;

app.listen(PORT, (error) => {
  if (error) console.error('Ooop!!.. An error occurred: ', error);
  else console.info('Server started on port => ', PORT);
});