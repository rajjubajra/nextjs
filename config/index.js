const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'nextjs-9uaa0arhv.vercel.app' : 'https://rdbajra.com'

console.log("dev", dev, server);
