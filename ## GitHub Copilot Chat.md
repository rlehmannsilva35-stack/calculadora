## GitHub Copilot Chat

- Extension: 0.50.1 (prod)
- VS Code: 1.122.1 (8761a5560cfd65fdd19ce7e2bd18dab5c0a4d84e)
- OS: win32 10.0.19045 x64
- GitHub Account: rlehmannsilva35-stack

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 4.228.31.149 (5 ms)
- DNS ipv6 Lookup: Error (4 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: timed out after 10 seconds
- Node.js fetch: timed out after 10 seconds

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (7 ms)
- DNS ipv6 Lookup: Error (9 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (519 ms)
- Node.js https: HTTP 200 (551 ms)
- Node.js fetch: HTTP 200 (500 ms)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: 4.228.31.153 (37 ms)
- DNS ipv6 Lookup: Error (5 ms): getaddrinfo ENOTFOUND copilot-proxy.githubusercontent.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (139 ms)
- Node.js https: HTTP 200 (154 ms)
- Node.js fetch: HTTP 200 (161 ms)

Connecting to https://mobile.events.data.microsoft.com: HTTP 404 (749 ms)
Connecting to https://dc.services.visualstudio.com: HTTP 404 (786 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (522 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (569 ms)
Connecting to https://default.exp-tas.com: HTTP 400 (169 ms)

Number of system certificates: 112

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).