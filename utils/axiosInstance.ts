import axios from "axios";

// Create an Axios instance for your own API
const myApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
});

// Create an Axios instance for Vimeo API
const vimeoApiInstance = axios.create({
  baseURL: "https://api.vimeo.com", // Vimeo API base URL
  headers: {
    Authorization: `Bearer fec86bd3c0b4c46a62b6970f357d841b`,
    "Content-Type": "application/json",
    Accept: "application/vnd.vimeo.*+json;version=3.4",
  },
});

// Add interceptors or additional configuration to the instances if needed
myApiInstance.interceptors.request.use((request) => {
  // Add headers or modify the request for your own API
  // You can use getSession() here if needed
  return request;
});

vimeoApiInstance.interceptors.request.use((request) => {
  // Add headers or modify the request for Vimeo API
  return request;
});

// Export the instances to use them in your components
export { myApiInstance, vimeoApiInstance };
