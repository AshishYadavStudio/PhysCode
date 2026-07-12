/* ======================================================
   WEB UNIT 1 – Intro to Internet Technologies
   Topics: internet-protocols, dns-ip, html-basics, js-intro
   ====================================================== */
(function () {
    'use strict';

    // Helper to avoid nested template literal issues
    function concat(...args) { return args.join(''); }

    // 1. Internet & Protocols
    window.APP.register({
        subject: 'web',
        unit: 1,
        id: 'internet-protocols',
        title: 'Internet Protocols',
        icon: '🌐',
        description: 'TCP/IP, HTTP, DNS, and SMTP',

        content() {
            var tcpSnippet = window.APP.codeBlock(
'// Concept: TCP Handshake\n' +
'Client -> SYN -> Server\n' +
'Server -> SYN-ACK -> Client\n' +
'Client -> ACK -> Server\n' +
'// Connection Established', 'plaintext', 'TCP 3-Way Handshake');

            var httpSnippet = window.APP.codeBlock(
'GET /index.html HTTP/1.1\n' +
'Host: physcode.github.io\n' +
'User-Agent: Mozilla/5.0\n' +
'Accept: text/html\n\n' +
'HTTP/1.1 200 OK\n' +
'Content-Type: text/html\n\n' +
'<!DOCTYPE html>...', 'http', 'HTTP Request & Response');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit I</div>',
                    '<h1>🌐 Internet & Protocols</h1>',
                    '<p class="topic-subtitle">The foundation of the World Wide Web and how computers communicate globally.</p>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>What is the Internet?</h2>',
                    '<p>The Internet is a global network of interconnected computers that communicate using standardized communication protocols. It provides a variety of information and communication facilities, consisting of interconnected networks using standardized communication protocols.</p>',
                    
                    '<h3>The TCP/IP Suite</h3>',
                    '<p>The Transmission Control Protocol / Internet Protocol (TCP/IP) suite is the conceptual model and set of communications protocols used on the Internet. It dictates how data should be packetized, addressed, transmitted, routed, and received.</p>',
                    tcpSnippet,
                '</div>',

                '<div class="theory-section">',
                    '<h2>Application Protocols</h2>',
                    '<table class="styled-table">',
                        '<thead><tr><th>Protocol</th><th>Port</th><th>Description</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><strong>HTTP</strong></td><td>80</td><td>Hypertext Transfer Protocol: Foundation of data communication for the WWW.</td></tr>',
                            '<tr><td><strong>HTTPS</strong></td><td>443</td><td>Secure version of HTTP with encryption.</td></tr>',
                            '<tr><td><strong>SMTP</strong></td><td>25</td><td>Simple Mail Transfer Protocol: Used for email routing.</td></tr>',
                            '<tr><td><strong>DNS</strong></td><td>53</td><td>Domain Name System: Translates domain names to IP addresses.</td></tr>',
                        '</tbody>',
                    '</table>',
                    '<br>',
                    '<h3>HTTP in Action</h3>',
                    '<p>When you type a URL into your browser, it sends an HTTP request. The server replies with an HTTP response containing the requested data.</p>',
                    httpSnippet,
                '</div>'
            );
        }
    });

    // 2. IP Addressing & DNS
    window.APP.register({
        subject: 'web',
        unit: 1,
        id: 'dns-ip',
        title: 'IP Addressing & DNS',
        icon: '🗺️',
        description: 'How the internet routes traffic',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit I</div>',
                    '<h1>🗺️ IP Addressing & DNS</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>IP Addressing</h2>',
                    '<p>An Internet Protocol (IP) address is a numerical label assigned to each device connected to a computer network. It serves two principal functions: host or network interface identification and location addressing.</p>',
                    '<ul>',
                        '<li><strong>IPv4:</strong> 32-bit number (e.g., <code>192.168.1.1</code>). Exhausted globally.</li>',
                        '<li><strong>IPv6:</strong> 128-bit number (e.g., <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code>). Designed to replace IPv4.</li>',
                    '</ul>',
                    
                    '<h2>Domain Name System (DNS)</h2>',
                    '<p>Because humans cannot remember IP addresses for every website, DNS was created. It acts like the phonebook of the Internet, translating human-friendly domains (like <code>google.com</code>) into machine-readable IP addresses.</p>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Interactive DNS Lookup Simulator</h3>',
                    '<p>Type a domain name to simulate a DNS resolution process.</p>',
                    '<div class="controls-row">',
                        '<input type="text" id="sim-domain" class="control-field" value="www.physcode.edu" style="max-width: 200px;">',
                        '<button class="btn btn-primary" id="sim-dns-btn">Resolve DNS</button>',
                    '</div>',
                    '<div id="dns-result" class="result-display" style="font-family: monospace; min-height: 120px;"></div>',
                '</div>'
            );
        },
        init() {
            const btn = document.getElementById('sim-dns-btn');
            const res = document.getElementById('dns-result');
            if (btn && res) {
                btn.addEventListener('click', () => {
                    const domain = document.getElementById('sim-domain').value.toLowerCase();
                    res.innerHTML = `Querying Root DNS Server for .${domain.split('.').pop()}...<br>`;
                    setTimeout(() => {
                        res.innerHTML += `Querying TLD Server for ${domain}...<br>`;
                        setTimeout(() => {
                            const fakeIp = `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
                            res.innerHTML += `Querying Authoritative Nameserver...<br>`;
                            res.innerHTML += `<br><strong style="color:var(--accent);">Resolved:</strong> ${domain} -> A Record: <strong>${fakeIp}</strong>`;
                        }, 500);
                    }, 500);
                });
            }
        }
    });

    // 3. HTML & Web Programming Basics
    window.APP.register({
        subject: 'web',
        unit: 1,
        id: 'web-programming',
        title: 'Web Programming & JS',
        icon: '💻',
        description: 'HTML structure and JS Scripting differences',

        content() {
            var htmlCode = window.APP.codeBlock(
'<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello Web!</h1>\n</body>\n</html>', 'xml', 'Basic HTML Structure');

            var jsCode = window.APP.codeBlock(
'// Front-end JavaScript\ndocument.getElementById("btn").addEventListener("click", () => {\n  alert("Button clicked!");\n});', 'javascript', 'Client-side Scripting');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit I</div>',
                    '<h1>💻 HTML & Web Programming</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Hypertext Markup Language (HTML)</h2>',
                    '<p>HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and semantic meaning of the web content.</p>',
                    htmlCode,
                '</div>',

                '<div class="theory-section">',
                    '<h2>Scripting: Front-end vs Server-side</h2>',
                    '<p>Web applications require logic, which is implemented using scripting languages. Scripts can run in two places:</p>',
                    
                    '<table class="styled-table">',
                        '<thead><tr><th>Feature</th><th>Front-end (Client-side)</th><th>Server-side (Backend)</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><strong>Where it runs</strong></td><td>In the user\'s web browser</td><td>On the web server</td></tr>',
                            '<tr><td><strong>Primary Language</strong></td><td>JavaScript</td><td>PHP, Python, Node.js, Java</td></tr>',
                            '<tr><td><strong>Main Purpose</strong></td><td>UI interactions, animations, DOM manipulation</td><td>Database access, authentication, file handling</td></tr>',
                            '<tr><td><strong>Security</strong></td><td>Code is visible to users (cannot trust data)</td><td>Code is hidden (secure for passwords/DB logic)</td></tr>',
                        '</tbody>',
                    '</table>',
                    '<br>',
                    '<h3>JavaScript Fundamentals</h3>',
                    '<p>JavaScript is a versatile programming language initially designed for client-side scripting. It can manipulate HTML/CSS, handle events, and make asynchronous requests (AJAX).</p>',
                    jsCode,
                '</div>'
            );
        }
    });

})();
