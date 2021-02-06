const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://rdbajra.com' : 'https://rdbajra.com'

console.log("dev", dev, server);
