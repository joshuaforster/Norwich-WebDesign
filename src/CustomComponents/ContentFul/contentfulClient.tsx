import { createClient } from 'contentful';

const client = createClient({
  space: '18q0bnjllo71',           // Replace with your actual Space ID
  accessToken: 'QG1NAgWPrQw6ReAr3oeLzAhh3NsHxVdS0-6Fv8oF2e4', // Replace with your actual Access Token
  environment: 'master',            // Replace with your environment ID if not 'master'
});

export default client;