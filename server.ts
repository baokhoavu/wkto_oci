import app from './app';
const port : string = process.env.PORT || '3000';
app.listen(port, () => console.log(`App running in port ${port}, browser url: http://localhost:${port}`));