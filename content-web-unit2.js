/* ======================================================
   WEB UNIT 2 – Introduction to PHP & String Handling
   Topics: php-intro, php-control, php-strings
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. PHP Basics
    window.APP.register({
        subject: 'web',
        unit: 2,
        id: 'php-intro',
        title: 'Introduction to PHP',
        icon: '🐘',
        description: 'Basic syntax, variables, and data types',

        content() {
            var phpCode = window.APP.codeBlock(
'<?php\n' +
'// Defining constants\n' +
'define("SITE_NAME", "PhysCode");\n\n' +
'// Variables start with $\n' +
'$name = "Alice";       // String\n' +
'$age = 20;             // Integer\n' +
'$gpa = 3.8;            // Float/Double\n' +
'$isStudent = true;     // Boolean\n\n' +
'echo "Welcome to " . SITE_NAME . ", " . $name;\n' +
'?>', 'php', 'PHP Basic Syntax');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit II</div>',
                    '<h1>🐘 Introduction to PHP</h1>',
                    '<p class="topic-subtitle">PHP (Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.</p>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Basic Syntax & Variables</h2>',
                    '<p>PHP code is executed on the server, and the result is returned to the browser as plain HTML. PHP scripts start with <code>&lt;?php</code> and end with <code>?&gt;</code>.</p>',
                    '<ul>',
                        '<li>Variables in PHP are declared using the <code>$</code> sign.</li>',
                        '<li>PHP is a loosely typed language (you do not declare variable types).</li>',
                        '<li>Constants are defined using the <code>define()</code> function and cannot be changed during script execution.</li>',
                    '</ul>',
                    phpCode,
                '</div>',

                '<div class="theory-section">',
                    '<h2>Data Types & Operators</h2>',
                    '<p>PHP supports standard data types: String, Integer, Float (double), Boolean, Array, Object, NULL, and Resource.</p>',
                    '<p>Operators include Arithmetic (<code>+ - * / %</code>), Assignment (<code>= += -=</code>), Comparison (<code>== === != > <</code>), and Logical (<code>&& || !</code>) — very similar to C++ and JavaScript.</p>',
                '</div>'
            );
        }
    });

    // 2. Control Flow & HTML Mixing
    window.APP.register({
        subject: 'web',
        unit: 2,
        id: 'php-control',
        title: 'Decision Making & HTML',
        icon: '🔀',
        description: 'if/else, loops, and embedding in HTML',

        content() {
            var mixCode = window.APP.codeBlock(
'<ul>\n' +
'<?php\n' +
'  $colors = array("Red", "Green", "Blue");\n' +
'  foreach ($colors as $color) {\n' +
'      echo "<li>" . $color . "</li>";\n' +
'  }\n' +
'?>\n' +
'</ul>\n\n' +
'<!-- Alternative Syntax (Better for HTML mixing) -->\n' +
'<ul>\n' +
'<?php foreach ($colors as $color): ?>\n' +
'    <li><?php echo $color; ?></li>\n' +
'<?php endforeach; ?>\n' +
'</ul>', 'php', 'Mixing PHP and HTML');

            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit II</div>',
                    '<h1>🔀 Control Flow & HTML Mixing</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Decision Making & Loops</h2>',
                    '<p>PHP supports the standard decision-making structures: <code>if...else</code>, <code>elseif</code>, and <code>switch</code>. It also supports looping constructs: <code>while</code>, <code>do...while</code>, <code>for</code>, and the highly useful <code>foreach</code> loop specifically for arrays.</p>',
                    
                    '<h3>Mixing PHP with HTML</h3>',
                    '<p>A major feature of PHP is its ability to easily drop in and out of HTML mode. You can output HTML inside PHP using <code>echo</code>, or you can drop out of PHP using <code>?&gt;</code> to write raw HTML and drop back in.</p>',
                    mixCode,
                '</div>'
            );
        }
    });

    // 3. String Handling
    window.APP.register({
        subject: 'web',
        unit: 2,
        id: 'php-strings',
        title: 'PHP String Handling',
        icon: '🔤',
        description: 'Creating, searching, replacing, and formatting',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Internet Technologies</span> &rsaquo; Unit II</div>',
                    '<h1>🔤 String Handling in PHP</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>String Basics</h2>',
                    '<p>Strings can be specified using single quotes or double quotes. Double quotes allow variable interpolation (e.g., <code>"Hello $name"</code>).</p>',
                    
                    '<h3>Built-in String Functions</h3>',
                    '<table class="styled-table">',
                        '<thead><tr><th>Function</th><th>Description</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><code>strlen($str)</code></td><td>Returns the length of a string</td></tr>',
                            '<tr><td><code>strpos($haystack, $needle)</code></td><td>Searches for a text within a string (returns first index)</td></tr>',
                            '<tr><td><code>str_replace($search, $replace, $str)</code></td><td>Replaces all occurrences of search string</td></tr>',
                            '<tr><td><code>strtolower()</code> / <code>strtoupper()</code></td><td>Case conversion</td></tr>',
                            '<tr><td><code>sprintf()</code></td><td>Returns a formatted string (like printf in C)</td></tr>',
                        '</tbody>',
                    '</table>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Interactive PHP String Simulator</h3>',
                    '<div class="controls-row">',
                        '<input type="text" id="str-input" class="control-field" value="Hello World from PHP!" style="flex:1;">',
                    '</div>',
                    '<div class="controls-row">',
                        '<button class="btn btn-primary" onclick="simStr(\'strlen\')">strlen()</button>',
                        '<button class="btn btn-secondary" onclick="simStr(\'strtoupper\')">strtoupper()</button>',
                        '<button class="btn btn-secondary" onclick="simStr(\'strrev\')">strrev()</button>',
                        '<button class="btn btn-secondary" onclick="simStrReplace()">str_replace("o","0")</button>',
                    '</div>',
                    '<div id="str-result" class="result-display" style="font-size:1.2rem; min-height:50px;"></div>',
                '</div>'
            );
        },
        init() {
            window.simStr = function(func) {
                const val = document.getElementById('str-input').value;
                const res = document.getElementById('str-result');
                if (func === 'strlen') res.innerHTML = `Length: <strong>${val.length}</strong>`;
                if (func === 'strtoupper') res.innerHTML = val.toUpperCase();
                if (func === 'strrev') res.innerHTML = val.split('').reverse().join('');
            };
            window.simStrReplace = function() {
                const val = document.getElementById('str-input').value;
                document.getElementById('str-result').innerHTML = val.replace(/o/g, '0').replace(/O/g, '0');
            };
        }
    });

})();
