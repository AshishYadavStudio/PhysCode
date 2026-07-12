/* ======================================================
   WEB UNIT 4 – Database Connectivity with MySQL
   Topics: mysql-intro, mysql-crud
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. Database Connectivity
    window.APP.register({
        subject: 'web',
        unit: 4,
        id: 'mysql-intro',
        title: 'MySQL Connectivity',
        icon: '🗄️',
        description: 'Connecting PHP to MySQL databases',

        content() {
            var connectCode = window.APP.codeBlock(
'<?php\n' +
'$servername = "localhost";\n' +
'$username = "root";\n' +
'$password = "";\n' +
'$dbname = "physcode_db";\n\n' +
'// Create connection (using MySQLi Object-Oriented)\n' +
'$conn = new mysqli($servername, $username, $password, $dbname);\n\n' +
'// Check connection\n' +
'if ($conn->connect_error) {\n' +
'    die("Connection failed: " . $conn->connect_error);\n' +
'} \n' +
'echo "Connected successfully";\n' +
'?>', 'php', 'PHP MySQLi Connection');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit IV</div>',
                    '<h1>🗄️ Database Connectivity with MySQL</h1>',
                    '<p class="topic-subtitle">Connecting the backend logic (PHP) with persistent storage (MySQL database).</p>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Why Databases?</h2>',
                    '<p>PHP variables are temporary; they disappear when the script finishes executing. To store data permanently (like user accounts, physics records, or blog posts), we use a Database Management System (DBMS) like MySQL.</p>',
                    '<h2>Establishing a Connection</h2>',
                    '<p>PHP provides several extensions to connect to MySQL: <strong>MySQLi</strong> (MySQL Improved) and <strong>PDO</strong> (PHP Data Objects). Below is the standard MySQLi object-oriented approach.</p>',
                    connectCode,
                '</div>'
            );
        }
    });

    // 2. CRUD Operations
    window.APP.register({
        subject: 'web',
        unit: 4,
        id: 'mysql-crud',
        title: 'SQL Data Manipulation',
        icon: '📝',
        description: 'Creation, Insertion, and Retrieval',

        content() {
            var sqlCode = window.APP.codeBlock(
'-- 1. Create Table\n' +
'CREATE TABLE Students (\n' +
'    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,\n' +
'    name VARCHAR(30) NOT NULL,\n' +
'    email VARCHAR(50)\n' +
');\n\n' +
'-- 2. Insert Data\n' +
'INSERT INTO Students (name, email) VALUES ("Alice", "alice@example.com");\n\n' +
'-- 3. Retrieve Data\n' +
'SELECT * FROM Students WHERE id = 1;', 'sql', 'Basic SQL Commands');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit IV</div>',
                    '<h1>📝 Database & Data Manipulation</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>CRUD Operations</h2>',
                    '<p>CRUD stands for <strong>Create, Read, Update, Delete</strong>. These are the four basic functions of persistent storage in SQL databases.</p>',
                    '<ul>',
                        '<li><strong>CREATE:</strong> <code>CREATE TABLE</code> / <code>INSERT INTO</code></li>',
                        '<li><strong>READ:</strong> <code>SELECT</code></li>',
                        '<li><strong>UPDATE:</strong> <code>UPDATE ... SET</code></li>',
                        '<li><strong>DELETE:</strong> <code>DELETE FROM</code></li>',
                    '</ul>',
                    sqlCode,
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Interactive SQL Terminal</h3>',
                    '<p>Run basic SQL commands to manipulate a virtual "Students" table.</p>',
                    '<div class="controls-row">',
                        '<input type="text" id="sql-cmd" placeholder="e.g., INSERT INTO Students (name) VALUES (\'Bob\')" class="control-field" style="flex:1;">',
                        '<button class="btn btn-primary" onclick="simSQL()">Execute</button>',
                    '</div>',
                    '<div style="display:flex; gap:20px; margin-top:20px;">',
                        '<div style="flex:1;">',
                            '<h4>Current Table: <code>Students</code></h4>',
                            '<table class="styled-table" id="sql-table">',
                                '<thead><tr><th>id</th><th>name</th><th>email</th></tr></thead>',
                                '<tbody id="sql-tbody">',
                                    '<tr><td>1</td><td>Alice</td><td>alice@test.com</td></tr>',
                                '</tbody>',
                            '</table>',
                        '</div>',
                        '<div style="flex:1;">',
                            '<h4>Terminal Output</h4>',
                            '<div id="sql-result" class="result-display" style="font-family: monospace; min-height:100px;">Waiting for query...</div>',
                        '</div>',
                    '</div>',
                '</div>'
            );
        },
        init() {
            // Very basic virtual DB state
            window.virtualDB = [
                {id: 1, name: 'Alice', email: 'alice@test.com'}
            ];
            window.dbNextId = 2;

            window.renderTable = function() {
                const tbody = document.getElementById('sql-tbody');
                tbody.innerHTML = '';
                window.virtualDB.forEach(row => {
                    tbody.innerHTML += `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.email}</td></tr>`;
                });
                if(window.virtualDB.length === 0) tbody.innerHTML = '<tr><td colspan="3">Table is empty</td></tr>';
            };

            window.simSQL = function() {
                const cmd = document.getElementById('sql-cmd').value.trim();
                const res = document.getElementById('sql-result');
                const upperCmd = cmd.toUpperCase();
                
                if (upperCmd.startsWith('INSERT')) {
                    // Extremely naive parsing for simulation: INSERT INTO Students (name, email) VALUES ('x', 'y')
                    let match = cmd.match(/VALUES\s*\((.*?)\)/i);
                    if (match) {
                        let parts = match[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
                        let name = parts[0] || 'Unknown';
                        let email = parts[1] || 'none@test.com';
                        window.virtualDB.push({id: window.dbNextId++, name: name, email: email});
                        renderTable();
                        res.innerHTML = `<span style="color:#28a745;">Query OK, 1 row affected.</span>`;
                    } else {
                        res.innerHTML = `<span style="color:#dc3545;">Error: Check your INSERT syntax. Try: INSERT INTO Students VALUES ('Bob', 'bob@test.com')</span>`;
                    }
                } 
                else if (upperCmd.startsWith('DELETE')) {
                    // DELETE FROM Students
                    if (upperCmd.includes('WHERE')) {
                        let match = cmd.match(/id\s*=\s*(\d+)/i);
                        if (match) {
                            let oldLen = window.virtualDB.length;
                            window.virtualDB = window.virtualDB.filter(r => r.id != match[1]);
                            renderTable();
                            res.innerHTML = `<span style="color:#28a745;">Query OK, ${oldLen - window.virtualDB.length} row(s) affected.</span>`;
                        } else {
                            res.innerHTML = `<span style="color:#dc3545;">Error: Simple simulator only supports DELETE WHERE id=X</span>`;
                        }
                    } else {
                        let oldLen = window.virtualDB.length;
                        window.virtualDB = [];
                        renderTable();
                        res.innerHTML = `<span style="color:#28a745;">Query OK, ${oldLen} row(s) affected. (Table cleared)</span>`;
                    }
                }
                else if (upperCmd.startsWith('SELECT')) {
                    res.innerHTML = `> ${cmd}\n<span style="color:#17a2b8;">(See table on the left for data view)</span>`;
                }
                else {
                    res.innerHTML = `<span style="color:#dc3545;">Simulator supports basic INSERT, DELETE, and SELECT.</span>`;
                }
                
                document.getElementById('sql-cmd').value = '';
            };
        }
    });

})();
