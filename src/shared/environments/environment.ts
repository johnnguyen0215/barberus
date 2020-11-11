const prod = process.env.NODE_ENV === 'production';

const environment = {
  apiUrl: prod ? '' : 'localhost:8080'
};

export default environment;
