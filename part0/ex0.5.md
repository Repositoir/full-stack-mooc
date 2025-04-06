# Answer to Exercise 0.4

## MOOC Full Stack Open 2025

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML Document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Javascript File
    deactivate server

    Note right of browser: Javascript code executes on browser and begins GET request for JSON data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{"content":"","date":"2025-04-06T10:46:47.046Z"}, ...]
    deactivate server

    Note left of server: JSON data is rendered by the browser to show final notes list
```
