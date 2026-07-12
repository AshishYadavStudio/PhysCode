/* ======================================================
   WEB UNIT 3 – Handling HTML Forms with PHP
   Topics: forms-intro, get-post, validation
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. Forms & HTTP Methods
    window.APP.register({
        subject: 'web',
        unit: 3,
        id: 'forms-intro',
        title: 'HTML Forms & PHP',
        icon: '📋',
        description: 'Creating forms and submitting data',

        content() {
            var formCode = window.APP.codeBlock(
'<!-- login.html -->\n' +
'<form action="welcome.php" method="POST">\n' +
'  Name: <input type="text" name="username">\n' +
'  Pass: <input type="password" name="password">\n' +
'  <input type="submit" value="Login">\n' +
'</form>\n\n' +
'<!-- welcome.php -->\n' +
'<?php\n' +
'  echo "Welcome " . $_POST["username"];\n' +
'?>', 'php', 'Form Submission Flow');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit III</div>',
                    '<h1>📋 Handling Forms in PHP</h1>',
                    '<p class="topic-subtitle">How client-side HTML interfaces with server-side PHP to process user input.</p>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Client-Server Form Flow</h2>',
                    '<p>When a user submits an HTML form, the browser sends the form data to the server using an HTTP request. PHP can capture this data using special superglobal arrays like <code>$_GET</code> or <code>$_POST</code> depending on the form\'s <code>method</code> attribute.</p>',
                    formCode,
                '</div>'
            );
        }
    });

    // 2. GET vs POST
    window.APP.register({
        subject: 'web',
        unit: 3,
        id: 'get-post',
        title: 'GET vs POST Methods',
        icon: '📬',
        description: 'Comparing HTTP submission methods',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit III</div>',
                    '<h1>📬 GET vs POST</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<table class="styled-table">',
                        '<thead><tr><th>Feature</th><th>GET Method</th><th>POST Method</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><strong>Data Location</strong></td><td>Appended to the URL (Query String)</td><td>Sent in the HTTP Request Body</td></tr>',
                            '<tr><td><strong>Visibility</strong></td><td>Visible to everyone in URL bar</td><td>Hidden from the URL bar</td></tr>',
                            '<tr><td><strong>Security</strong></td><td>Insecure for sensitive data (passwords)</td><td>More secure (but still needs HTTPS)</td></tr>',
                            '<tr><td><strong>Data Limit</strong></td><td>Limited by max URL length (~2000 chars)</td><td>No restriction on data length/size</td></tr>',
                            '<tr><td><strong>Caching/Bookmarking</strong></td><td>Can be cached and bookmarked</td><td>Cannot be easily bookmarked</td></tr>',
                        '</tbody>',
                    '</table>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>HTTP Method Simulator</h3>',
                    '<div class="controls-row">',
                        '<input type="text" id="sim-user" placeholder="Username" class="control-field">',
                        '<select id="sim-method" class="control-field" style="max-width:100px;">',
                            '<option value="GET">GET</option><option value="POST">POST</option>',
                        '</select>',
                        '<button class="btn btn-primary" onclick="simSubmit()">Submit Form</button>',
                    '</div>',
                    '<div id="http-result" class="result-display" style="font-family: monospace; min-height: 120px; white-space: pre-wrap;"></div>',
                '</div>'
            );
        },
        init() {
            window.simSubmit = function() {
                const user = document.getElementById('sim-user').value || 'guest';
                const method = document.getElementById('sim-method').value;
                const res = document.getElementById('http-result');
                
                if (method === 'GET') {
                    res.innerHTML = `<strong>Browser URL updates to:</strong>\nhttp://example.com/login.php?username=${encodeURIComponent(user)}\n\n<strong>HTTP Request:</strong>\nGET /login.php?username=${encodeURIComponent(user)} HTTP/1.1\nHost: example.com`;
                } else {
                    res.innerHTML = `<strong>Browser URL remains:</strong>\nhttp://example.com/login.php\n\n<strong>HTTP Request:</strong>\nPOST /login.php HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nusername=${encodeURIComponent(user)}`;
                }
            };
        }
    });

    // 3. Validation
    window.APP.register({
        subject: 'web',
        unit: 3,
        id: 'validation',
        title: 'Server-Side Validation',
        icon: '🛡️',
        description: 'Validating registration and login data',

        content() {
            var valCode = window.APP.codeBlock(
'<?php\n' +
'// Server-side validation logic\n' +
'$name = $_POST["name"];\n' +
'$email = $_POST["email"];\n\n' +
'if (empty($name)) {\n' +
'    echo "Name is required";\n' +
'} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {\n' +
'    echo "Invalid email format";\n' +
'} else {\n' +
'    echo "Registration successful!";\n' +
'}\n' +
'?>', 'php', 'Registration Validation');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit III</div>',
                    '<h1>🛡️ Registration & Validation</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Why Server-Side Validation?</h2>',
                    '<p>Client-side validation (using HTML5 <code>required</code> or JavaScript) is good for user experience, but it can be bypassed easily by attackers. <strong>Server-side validation is mandatory for security.</strong> You must always validate incoming <code>$_POST</code> or <code>$_GET</code> data in PHP before using it or inserting it into a database.</p>',
                    valCode,
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Simulated PHP Login Validation</h3>',
                    '<p>Try logging in. The simulated server expects the email to be valid and password to be at least 6 characters.</p>',
                    '<div style="max-width:300px;">',
                        '<input type="email" id="val-email" placeholder="Email" class="control-field" style="width:100%; margin-bottom:10px;">',
                        '<input type="password" id="val-pass" placeholder="Password" class="control-field" style="width:100%; margin-bottom:10px;">',
                        '<button class="btn btn-primary" onclick="simLogin()" style="width:100%;">Login (POST)</button>',
                    '</div>',
                    '<div id="val-result" style="margin-top:15px; padding:10px; border-radius:4px; display:none;"></div>',
                '</div>'
            );
        },
        init() {
            window.simLogin = function() {
                const email = document.getElementById('val-email').value;
                const pass = document.getElementById('val-pass').value;
                const res = document.getElementById('val-result');
                res.style.display = 'block';
                
                // Simulate PHP backend validation
                if (!email) {
                    res.innerHTML = "PHP Error: Email is required.";
                    res.style.background = "#ffdce0"; res.style.color = "#86181d";
                } else if (!email.includes('@')) {
                    res.innerHTML = "PHP Error: Invalid email format.";
                    res.style.background = "#ffdce0"; res.style.color = "#86181d";
                } else if (pass.length < 6) {
                    res.innerHTML = "PHP Error: Password must be >= 6 chars.";
                    res.style.background = "#ffdce0"; res.style.color = "#86181d";
                } else {
                    res.innerHTML = "PHP Success: User logged in! Welcome, " + email.split('@')[0];
                    res.style.background = "#d4edda"; res.style.color = "#155724";
                }
            };
        }
    });

})();
