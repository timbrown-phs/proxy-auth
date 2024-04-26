import { initializeAuthProxy } from '@propelauth/auth-proxy'

// Replace with your configuration
await initializeAuthProxy({
    authUrl: "https://33793539.propelauthtest.com",
    integrationApiKey: "8dbd0a...",
    proxyPort: 8000,
    urlWhereYourProxyIsRunning: 'https://proxy-auth-service-rzp4s3nasq-ue.a.run.app',
    target: {
        host: 'app-pc-hospice-service-rzp4s3nasq-ue.a.run.app',
        protocol: 'https:'
    },
})


