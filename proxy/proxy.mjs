import { initializeAuthProxy } from '@propelauth/auth-proxy'

// Replace with your configuration
await initializeAuthProxy({
    authUrl: "https://auth.predictivehealthsolutions.co",
    integrationApiKey: "b62cc0767b4c82a66ed82ad941b14f19499b84384d14d16952420c70f35ea597b0eef010882f4a657a73090b563a4bcd",
    proxyPort: 8000,
    urlWhereYourProxyIsRunning: 'https://auth.predictivehealthsolutions.co',
    target: {
        host: 'app-pc-hospice.predictivehealthsolutions.co',
        protocol: 'https:'
    },
})

