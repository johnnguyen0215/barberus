const prod = process.env.NODE_ENV === 'production';

const environment = {
  apiUrl: prod ? '' : 'http://localhost:8080'
};

export default environment;
