const dev = process.env.NODE_ENV === 'production'

export const server = dev ? 'http://localhost:3000' : 'https://rdbajra.com'

console.log("dev", dev, server);
