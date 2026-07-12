/* ======================================================
   UNIT 2 – Control Flow, Arrays & Programs
   Topics: control, loops, arrays, programs
   ====================================================== */
(function () {
    'use strict';

    // =========================================================================
    // TOPIC 1: CONTROL STATEMENTS
    // =========================================================================
    window.APP.register({
        id: 'control',
        title: 'Control Statements',
        unit: 2,
        icon: '🔀',
        description: 'If, else, switch, goto and ternary operator',

        content() {
            var c1 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n\n    if (num > 0) {\n        cout << num << " is a positive number." << endl;\n    }\n\n    cout << "Program ended." << endl;\n    return 0;\n}',
'Enter a number: 7\n7 is a positive number.\nProgram ended.', 'cpp', 'if Statement – Positive Number Check');

            var c2 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n\n    if (num % 2 == 0) {\n        cout << num << " is Even." << endl;\n    } else {\n        cout << num << " is Odd." << endl;\n    }\n    return 0;\n}',
'Enter a number: 13\n13 is Odd.', 'cpp', 'if-else – Odd/Even Check');

            var c3 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int marks;\n    cout << "Enter marks (0-100): ";\n    cin >> marks;\n\n    if (marks >= 90) {\n        cout << "Grade: A+" << endl;\n    } else if (marks >= 80) {\n        cout << "Grade: A" << endl;\n    } else if (marks >= 70) {\n        cout << "Grade: B" << endl;\n    } else if (marks >= 60) {\n        cout << "Grade: C" << endl;\n    } else if (marks >= 50) {\n        cout << "Grade: D" << endl;\n    } else {\n        cout << "Grade: F (Fail)" << endl;\n    }\n    return 0;\n}',
'Enter marks (0-100): 75\nGrade: B', 'cpp', 'else-if Ladder – Grade Classification');

            var c4 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    cout << "Maximum = " << max << endl;\n\n    int num = 15;\n    string result = (num % 2 == 0) ? "Even" : "Odd";\n    cout << num << " is " << result << endl;\n    return 0;\n}',
'Maximum = 20\n15 is Odd', 'cpp', 'Ternary Operator');

            var c5 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int i = 1;\n\nstart:              // label\n    cout << i << " ";\n    i++;\n    if (i <= 5)\n        goto start; // jump to label\n\n    cout << endl << "Loop ended." << endl;\n    return 0;\n}',
'1 2 3 4 5\nLoop ended.', 'cpp', 'goto Statement');

            var c6 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int day;\n    cout << "Enter day number (1-7): ";\n    cin >> day;\n\n    switch (day) {\n        case 1: cout << "Monday" << endl; break;\n        case 2: cout << "Tuesday" << endl; break;\n        case 3: cout << "Wednesday" << endl; break;\n        case 4: cout << "Thursday" << endl; break;\n        case 5: cout << "Friday" << endl; break;\n        case 6: cout << "Saturday" << endl; break;\n        case 7: cout << "Sunday" << endl; break;\n        default: cout << "Invalid day!" << endl;\n    }\n    return 0;\n}',
'Enter day number (1-7): 3\nWednesday', 'cpp', 'switch Statement – Day of Week');

            var c7 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int num;\n    cout << "Enter a number: ";\n    cin >> num;\n\n    if (num > 0) {\n        if (num % 2 == 0) {\n            cout << num << " is positive and even." << endl;\n        } else {\n            cout << num << " is positive and odd." << endl;\n        }\n    } else if (num < 0) {\n        cout << num << " is negative." << endl;\n    } else {\n        cout << "Number is zero." << endl;\n    }\n    return 0;\n}',
'Enter a number: 6\n6 is positive and even.', 'cpp', 'Nested if – Multiple Conditions');

            var c8 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    char op;\n    double a, b;\n    cout << "Enter operator (+, -, *, /): ";\n    cin >> op;\n    cout << "Enter two numbers: ";\n    cin >> a >> b;\n\n    switch (op) {\n        case \'+\': cout << a << " + " << b << " = " << a + b << endl; break;\n        case \'-\': cout << a << " - " << b << " = " << a - b << endl; break;\n        case \'*\': cout << a << " * " << b << " = " << a * b << endl; break;\n        case \'/\':\n            if (b != 0)\n                cout << a << " / " << b << " = " << a / b << endl;\n            else\n                cout << "Error: Division by zero!" << endl;\n            break;\n        default: cout << "Invalid operator!" << endl;\n    }\n    return 0;\n}',
'Enter operator (+, -, *, /): *\nEnter two numbers: 4.5 3\n4.5 * 3 = 13.5', 'cpp', 'switch – Simple Calculator');

            return '<div class="topic-header">' +
                '<div class="topic-breadcrumb"><span>Unit II</span> › Control Statements</div>' +
                '<h1>🔀 Control Statements in C++</h1>' +
                '<p class="topic-subtitle">Master decision-making constructs: if, else, switch, ternary operator, and goto — the building blocks that let your programs choose different paths of execution.</p>' +
            '</div>' +

            '<div class="theory-section">' +
                '<h2>Introduction to Control Flow</h2>' +
                '<p>By default, C++ executes statements <strong>sequentially</strong> — one after another, from top to bottom. However, real programs need to make <strong>decisions</strong>. Control statements alter the normal sequential flow, allowing the program to branch, skip, or choose between alternative actions based on conditions.</p>' +

                '<div class="concept-box">' +
                    '<h4>📌 Types of Control Statements</h4>' +
                    '<ul>' +
                        '<li><strong>Conditional Statements</strong>: <code>if</code>, <code>if-else</code>, <code>else-if</code> ladder, nested <code>if</code>, <code>switch</code></li>' +
                        '<li><strong>Ternary Operator</strong>: <code>? :</code> — a shorthand conditional expression</li>' +
                        '<li><strong>Unconditional Jump</strong>: <code>goto</code> — transfers control to a labeled statement</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +

            /* -------- if Statement -------- */
            '<div class="theory-section">' +
                '<h2>1. The <code>if</code> Statement</h2>' +
                '<p>The simplest decision-making statement. It evaluates a condition; if the condition is <strong>true</strong> (non-zero), the body executes. If <strong>false</strong> (zero), the body is skipped entirely.</p>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('if (condition) {\n    // statements executed when condition is true\n}', 'cpp', 'if Syntax') +

                '<h3>Flowchart</h3>' +
                '<div class="diagram-container">' +
                    '<div class="flow-node start">Start</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node decision">condition?</div><br>' +
                    '<span class="flow-arrow">↓ True&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>' +
                    '<span class="flow-arrow">→ False → </span>' +
                    '<div class="flow-node process" style="opacity:0.5">Skip</div><br>' +
                    '<div class="flow-node process">Execute Body</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node end">Continue</div>' +
                '</div>' +

                '<h3>Example: Check if a Number is Positive</h3>' +
                c1 +
            '</div>' +

            /* -------- if-else Statement -------- */
            '<div class="theory-section">' +
                '<h2>2. The <code>if-else</code> Statement</h2>' +
                '<p>Extends the <code>if</code> statement by providing an alternative block that executes when the condition is <strong>false</strong>. Exactly one of the two blocks always executes.</p>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('if (condition) {\n    // runs when true\n} else {\n    // runs when false\n}', 'cpp', 'if-else Syntax') +

                '<h3>Flowchart</h3>' +
                '<div class="diagram-container">' +
                    '<div class="flow-node start">Start</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node decision">condition?</div><br>' +
                    '<span class="flow-arrow">↓ True</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<span class="flow-arrow">↓ False</span><br>' +
                    '<div class="flow-node process">if-body</div>&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<div class="flow-node process">else-body</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node end">Continue</div>' +
                '</div>' +

                '<h3>Example: Odd or Even</h3>' +
                c2 +
            '</div>' +

            /* -------- Nested if & else-if -------- */
            '<div class="theory-section">' +
                '<h2>3. Nested <code>if</code> and <code>else-if</code> Ladder</h2>' +
                '<p>A <strong>nested if</strong> places one <code>if</code> inside another. An <strong>else-if ladder</strong> chains multiple conditions — only the first matching branch executes.</p>' +

                '<h3>else-if Ladder Syntax</h3>' +
                APP.codeBlock('if (condition1) {\n    // block 1\n} else if (condition2) {\n    // block 2\n} else if (condition3) {\n    // block 3\n} else {\n    // default block\n}', 'cpp', 'else-if Ladder') +

                '<h3>Example: Grade Classification</h3>' +
                c3 +

                '<h3>Example: Nested if – Multiple Conditions</h3>' +
                c7 +
            '</div>' +

            /* -------- Ternary Operator -------- */
            '<div class="theory-section">' +
                '<h2>4. Ternary Operator <code>? :</code></h2>' +
                '<p>The ternary operator is a compact one-line replacement for a simple <code>if-else</code>. It is the only C++ operator that takes <strong>three operands</strong>.</p>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('result = (condition) ? value_if_true : value_if_false;', 'cpp', 'Ternary Syntax') +

                '<div class="tip-box"><h4>💡 When to Use</h4><p>Use the ternary operator for simple assignments based on a condition. For complex logic with multiple statements, prefer <code>if-else</code>.</p></div>' +

                '<h3>Example</h3>' +
                c4 +
            '</div>' +

            /* -------- goto Statement -------- */
            '<div class="theory-section">' +
                '<h2>5. The <code>goto</code> Statement</h2>' +
                '<p>The <code>goto</code> statement transfers program control unconditionally to a <strong>labeled statement</strong>. A label is an identifier followed by a colon (<code>:</code>).</p>' +

                '<div class="warning-box"><h4>⚠️ Warning</h4><p>The <code>goto</code> statement is generally <strong>discouraged</strong> in modern C++ because it makes code harder to read, debug, and maintain ("spaghetti code"). Use loops and functions instead wherever possible.</p></div>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('goto label_name;\n\n// ... other code ...\n\nlabel_name:\n    // statements', 'cpp', 'goto Syntax') +

                '<h3>Example</h3>' +
                c5 +
            '</div>' +

            /* -------- switch Statement -------- */
            '<div class="theory-section">' +
                '<h2>6. The <code>switch</code> Statement</h2>' +
                '<p>The <code>switch</code> statement tests a variable against a list of constant values (<code>case</code> labels). It is cleaner than long else-if chains when you need to compare a single variable against many fixed values.</p>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('switch (expression) {\n    case value1:\n        // statements\n        break;\n    case value2:\n        // statements\n        break;\n    default:\n        // default statements\n}', 'cpp', 'switch Syntax') +

                '<div class="info-box"><h4>🔑 Key Points</h4>' +
                '<ul>' +
                    '<li>Each <code>case</code> must have a <strong>constant</strong> value (not a variable)</li>' +
                    '<li><code>break</code> exits the switch. Without it, execution "falls through" to the next case</li>' +
                    '<li><code>default</code> handles any value not matched by a case</li>' +
                    '<li>Works with <code>int</code>, <code>char</code>, and <code>enum</code> types</li>' +
                '</ul></div>' +

                '<h3>Example: Day of the Week</h3>' +
                c6 +

                '<h3>Example: Simple Calculator</h3>' +
                c8 +
            '</div>' +

            /* -------- Comparison Table -------- */
            '<div class="theory-section">' +
                '<h2>Comparison Table</h2>' +
                '<table class="styled-table">' +
                    '<thead><tr><th>Statement</th><th>Use Case</th><th>Multiple Paths?</th></tr></thead>' +
                    '<tbody>' +
                        '<tr><td><code>if</code></td><td>Single condition check</td><td>No (one path)</td></tr>' +
                        '<tr><td><code>if-else</code></td><td>Two-way branching</td><td>Yes (2 paths)</td></tr>' +
                        '<tr><td><code>else-if</code></td><td>Multiple conditions</td><td>Yes (N paths)</td></tr>' +
                        '<tr><td><code>switch</code></td><td>Match one variable to many constants</td><td>Yes (N paths)</td></tr>' +
                        '<tr><td><code>?:</code></td><td>Compact two-way assignment</td><td>Yes (2 values)</td></tr>' +
                        '<tr><td><code>goto</code></td><td>Unconditional jump (avoid!)</td><td>N/A</td></tr>' +
                    '</tbody>' +
                '</table>' +
            '</div>' +

            /* -------- Interactive: Code Stepper -------- */
            '<div class="interactive-area">' +
                '<h3>Interactive Code Stepper</h3>' +
                '<p>Set a value for the variable and click <strong>Evaluate</strong> to see which branch the program takes.</p>' +
                '<div class="controls-row">' +
                    '<div class="control-field">' +
                        '<label>Enter marks (0-100):</label>' +
                        '<input type="number" id="ctrl-stepper-input" value="75" min="0" max="100">' +
                    '</div>' +
                    '<button class="btn btn-primary" id="ctrl-stepper-btn">Evaluate</button>' +
                '</div>' +
                '<div id="ctrl-stepper-code" style="font-family: \'JetBrains Mono\', monospace; font-size: 0.85rem; line-height: 1.8; background: var(--bg-code); padding: 1rem; border-radius: 8px; margin-top: 1rem;"></div>' +
                '<div class="result-display" id="ctrl-stepper-result">Click Evaluate to see the result.</div>' +
            '</div>';
        },

        init() {
            var codeLines = [
                'int marks = <span id="ctrl-marks-val">75</span>;',
                '',
                'if (marks >= 90) {',
                '    cout << "Grade: A+";',
                '} else if (marks >= 80) {',
                '    cout << "Grade: A";',
                '} else if (marks >= 70) {',
                '    cout << "Grade: B";',
                '} else if (marks >= 60) {',
                '    cout << "Grade: C";',
                '} else if (marks >= 50) {',
                '    cout << "Grade: D";',
                '} else {',
                '    cout << "Grade: F (Fail)";',
                '}'
            ];

            function renderCode(highlightLine) {
                var html = '';
                for (var i = 0; i < codeLines.length; i++) {
                    var bg = (i === highlightLine) ? 'background: rgba(52,211,153,0.2); border-left: 3px solid var(--accent-green);' : 'border-left: 3px solid transparent;';
                    html += '<div style="padding: 0 0.5rem; ' + bg + '">' + codeLines[i] + '</div>';
                }
                return html;
            }

            var codeEl = document.getElementById('ctrl-stepper-code');
            var resultEl = document.getElementById('ctrl-stepper-result');
            codeEl.innerHTML = renderCode(-1);

            document.getElementById('ctrl-stepper-btn').addEventListener('click', function () {
                var marks = parseInt(document.getElementById('ctrl-stepper-input').value) || 0;
                codeLines[0] = 'int marks = <span style="color:var(--accent-cyan);font-weight:bold;">' + marks + '</span>;';
                var line, grade;
                if (marks >= 90) { line = 3; grade = 'A+'; }
                else if (marks >= 80) { line = 5; grade = 'A'; }
                else if (marks >= 70) { line = 7; grade = 'B'; }
                else if (marks >= 60) { line = 9; grade = 'C'; }
                else if (marks >= 50) { line = 11; grade = 'D'; }
                else { line = 13; grade = 'F (Fail)'; }

                codeEl.innerHTML = renderCode(line);
                resultEl.textContent = 'marks = ' + marks + '  →  Grade: ' + grade;
            });
        }
    });

    // =========================================================================
    // TOPIC 2: LOOPS
    // =========================================================================
    window.APP.register({
        id: 'loops',
        title: 'Loops in C++',
        unit: 2,
        icon: '🔄',
        description: 'While, do-while, for loops, break, continue and nested loops',

        content() {
            var cWhile = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, sum = 0, i = 1;\n    cout << "Enter N: ";\n    cin >> n;\n\n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n\n    cout << "Sum of first " << n << " natural numbers = " << sum << endl;\n    return 0;\n}',
'Enter N: 10\nSum of first 10 natural numbers = 55', 'cpp', 'while Loop – Sum of N Numbers');

            var cDoWhile = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int choice;\n    do {\n        cout << "\\n--- Menu ---" << endl;\n        cout << "1. Say Hello" << endl;\n        cout << "2. Say Goodbye" << endl;\n        cout << "3. Exit" << endl;\n        cout << "Enter choice: ";\n        cin >> choice;\n\n        switch (choice) {\n            case 1: cout << "Hello!" << endl; break;\n            case 2: cout << "Goodbye!" << endl; break;\n            case 3: cout << "Exiting..." << endl; break;\n            default: cout << "Invalid!" << endl;\n        }\n    } while (choice != 3);\n    return 0;\n}',
'--- Menu ---\n1. Say Hello\n2. Say Goodbye\n3. Exit\nEnter choice: 1\nHello!\n\n--- Menu ---\nEnter choice: 3\nExiting...', 'cpp', 'do-while – Menu Driven');

            var cFor = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter a number: ";\n    cin >> n;\n\n    long long factorial = 1;\n    for (int i = 1; i <= n; i++) {\n        factorial *= i;\n    }\n\n    cout << n << "! = " << factorial << endl;\n    return 0;\n}',
'Enter a number: 6\n6! = 720', 'cpp', 'for Loop – Factorial');

            var cBreak = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i == 6) {\n            cout << "\\nBreaking at i = " << i << endl;\n            break; // exit loop\n        }\n        cout << i << " ";\n    }\n    return 0;\n}',
'1 2 3 4 5\nBreaking at i = 6', 'cpp', 'break Statement');

            var cContinue = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 3 == 0) {\n            continue; // skip multiples of 3\n        }\n        cout << i << " ";\n    }\n    cout << endl;\n    return 0;\n}',
'1 2 4 5 7 8 10', 'cpp', 'continue Statement');

            var cNested = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            cout << "* ";\n        }\n        cout << endl;\n    }\n    return 0;\n}',
'*\n* *\n* * *\n* * * *\n* * * * *', 'cpp', 'Nested Loops – Star Pattern');

            var cTable = APP.codeWithOutput(
'#include <iostream>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter number: ";\n    cin >> n;\n\n    for (int i = 1; i <= 10; i++) {\n        cout << n << " x " << setw(2) << i << " = " << setw(3) << n * i << endl;\n    }\n    return 0;\n}',
'Enter number: 7\n7 x  1 =   7\n7 x  2 =  14\n7 x  3 =  21\n7 x  4 =  28\n7 x  5 =  35\n7 x  6 =  42\n7 x  7 =  49\n7 x  8 =  56\n7 x  9 =  63\n7 x 10 =  70', 'cpp', 'Multiplication Table');

            return '<div class="topic-header">' +
                '<div class="topic-breadcrumb"><span>Unit II</span> › Loops</div>' +
                '<h1>🔄 Loops in C++</h1>' +
                '<p class="topic-subtitle">Loops let you repeat a block of code multiple times — essential for iteration, counting, accumulation, and pattern generation.</p>' +
            '</div>' +

            '<div class="theory-section">' +
                '<h2>Why Loops?</h2>' +
                '<p>Imagine printing "Hello" 1000 times — you would not write 1000 <code>cout</code> statements! A <strong>loop</strong> executes a block of code repeatedly as long as a condition is true. C++ provides three types of loops:</p>' +
                '<div class="concept-box"><h4>📌 Three Loop Types</h4>' +
                '<ul>' +
                    '<li><strong>while</strong> — checks condition <em>before</em> each iteration (entry-controlled)</li>' +
                    '<li><strong>do-while</strong> — checks condition <em>after</em> each iteration (exit-controlled, runs at least once)</li>' +
                    '<li><strong>for</strong> — compact syntax with init, condition, and update in one line</li>' +
                '</ul></div>' +
            '</div>' +

            /* while */
            '<div class="theory-section">' +
                '<h2>1. The <code>while</code> Loop</h2>' +
                '<p>The <code>while</code> loop is an <strong>entry-controlled</strong> loop — the condition is checked <em>before</em> each iteration. If the condition is false initially, the body never executes.</p>' +
                '<h3>Syntax</h3>' +
                APP.codeBlock('while (condition) {\n    // body — runs as long as condition is true\n    // update statement (important to avoid infinite loop!)\n}', 'cpp', 'while Syntax') +
                '<h3>Flowchart</h3>' +
                '<div class="diagram-container">' +
                    '<div class="flow-node start">Start</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node decision">condition?</div><br>' +
                    '<span class="flow-arrow">True ↓</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<span class="flow-arrow">False →</span> <div class="flow-node end">Exit</div><br>' +
                    '<div class="flow-node process">Execute Body</div><br>' +
                    '<span class="flow-arrow">↑ ←←←←←←←←</span>' +
                '</div>' +
                '<h3>Example: Sum of First N Numbers</h3>' +
                cWhile +
            '</div>' +

            /* do-while */
            '<div class="theory-section">' +
                '<h2>2. The <code>do-while</code> Loop</h2>' +
                '<p>The <code>do-while</code> loop is an <strong>exit-controlled</strong> loop — the body executes <em>first</em>, then the condition is checked. This guarantees the body runs <strong>at least once</strong>.</p>' +
                '<h3>Syntax</h3>' +
                APP.codeBlock('do {\n    // body — runs at least once\n} while (condition);  // note the semicolon!', 'cpp', 'do-while Syntax') +
                '<div class="tip-box"><h4>💡 Key Difference from while</h4><p>In a <code>while</code> loop, if the condition is initially false, the body never runs. In a <code>do-while</code>, the body always runs at least once. This makes <code>do-while</code> perfect for menus where you want to show options at least once.</p></div>' +
                '<h3>Example: Menu-Driven Program</h3>' +
                cDoWhile +
            '</div>' +

            /* for */
            '<div class="theory-section">' +
                '<h2>3. The <code>for</code> Loop</h2>' +
                '<p>The most commonly used loop in C++. It combines <strong>initialization</strong>, <strong>condition</strong>, and <strong>update</strong> in a single line, making it compact and clear.</p>' +
                '<h3>Syntax</h3>' +
                APP.codeBlock('for (initialization; condition; update) {\n    // body\n}\n\n// Example:\nfor (int i = 0; i < 10; i++) {\n    cout << i << " ";\n}', 'cpp', 'for Loop Syntax') +
                '<h3>Flowchart</h3>' +
                '<div class="diagram-container">' +
                    '<div class="flow-node start">init</div><br>' +
                    '<span class="flow-arrow">↓</span><br>' +
                    '<div class="flow-node decision">condition?</div><br>' +
                    '<span class="flow-arrow">True ↓</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
                    '<span class="flow-arrow">False →</span> <div class="flow-node end">Exit</div><br>' +
                    '<div class="flow-node process">Body</div><br>' +
                    '<div class="flow-node process">Update</div><br>' +
                    '<span class="flow-arrow">↑ ←←←←←←←←</span>' +
                '</div>' +
                '<h3>Example: Factorial</h3>' +
                cFor +
                '<h3>Example: Multiplication Table</h3>' +
                cTable +
            '</div>' +

            /* break, continue */
            '<div class="theory-section">' +
                '<h2>4. <code>break</code> and <code>continue</code></h2>' +
                '<p><code>break</code> exits the loop immediately. <code>continue</code> skips the rest of the current iteration and jumps to the next.</p>' +
                '<h3>break — Exit Early</h3>' +
                cBreak +
                '<h3>continue — Skip Iteration</h3>' +
                cContinue +
            '</div>' +

            /* Nested loops */
            '<div class="theory-section">' +
                '<h2>5. Nested Loops</h2>' +
                '<p>A loop inside another loop is called a <strong>nested loop</strong>. For each iteration of the outer loop, the inner loop completes all its iterations. Common use: printing patterns and working with 2D arrays.</p>' +
                '<h3>Example: Star Triangle</h3>' +
                cNested +
            '</div>' +

            /* Comparison Table */
            '<div class="theory-section">' +
                '<h2>Comparison Table</h2>' +
                '<table class="styled-table">' +
                    '<thead><tr><th>Feature</th><th>while</th><th>do-while</th><th>for</th></tr></thead>' +
                    '<tbody>' +
                        '<tr><td>Control Type</td><td>Entry-controlled</td><td>Exit-controlled</td><td>Entry-controlled</td></tr>' +
                        '<tr><td>Min Executions</td><td>0</td><td>1</td><td>0</td></tr>' +
                        '<tr><td>Syntax Compactness</td><td>Medium</td><td>Medium</td><td>High</td></tr>' +
                        '<tr><td>Best For</td><td>Unknown iterations</td><td>Menus, validation</td><td>Known count</td></tr>' +
                    '</tbody>' +
                '</table>' +
            '</div>' +

            /* Interactive: Loop Visualizer */
            '<div class="interactive-area">' +
                '<h3>Loop Visualizer</h3>' +
                '<p>Watch the loop execute step by step! Set the number of iterations and click <strong>Run</strong>.</p>' +
                '<div class="controls-row">' +
                    '<div class="control-field">' +
                        '<label>Loop count (N):</label>' +
                        '<input type="number" id="loop-viz-n" value="5" min="1" max="15">' +
                    '</div>' +
                    '<button class="btn btn-primary" id="loop-viz-run">▶ Run</button>' +
                    '<button class="btn btn-secondary" id="loop-viz-reset">Reset</button>' +
                '</div>' +
                '<div id="loop-viz-display" style="display:flex; gap:8px; flex-wrap:wrap; margin-top:1rem; min-height:60px;"></div>' +
                '<div class="result-display" id="loop-viz-result">Sum = 0 (click Run to start)</div>' +
            '</div>' +

            /* Interactive: Pattern Printer */
            '<div class="interactive-area">' +
                '<h3>Pattern Printer</h3>' +
                '<p>Select a pattern type and number of rows to see nested loops in action.</p>' +
                '<div class="controls-row">' +
                    '<div class="control-field">' +
                        '<label>Rows:</label>' +
                        '<input type="number" id="pattern-rows" value="5" min="1" max="12">' +
                    '</div>' +
                    '<div class="control-field">' +
                        '<label>Pattern:</label>' +
                        '<select id="pattern-type">' +
                            '<option value="right">Right Triangle</option>' +
                            '<option value="inverted">Inverted Triangle</option>' +
                            '<option value="pyramid">Pyramid</option>' +
                            '<option value="diamond">Diamond</option>' +
                        '</select>' +
                    '</div>' +
                    '<button class="btn btn-primary" id="pattern-btn">Generate</button>' +
                '</div>' +
                '<pre id="pattern-output" style="font-family: \'JetBrains Mono\', monospace; font-size:1rem; color:var(--accent-cyan); background:var(--bg-code); padding:1rem; border-radius:8px; min-height:80px; margin-top:1rem;"></pre>' +
            '</div>';
        },

        init() {
            /* Loop Visualizer */
            var loopDisplay = document.getElementById('loop-viz-display');
            var loopResult = document.getElementById('loop-viz-result');
            var animTimer = null;

            document.getElementById('loop-viz-run').addEventListener('click', function () {
                clearInterval(animTimer);
                var n = parseInt(document.getElementById('loop-viz-n').value) || 5;
                loopDisplay.innerHTML = '';
                var sum = 0;
                var step = 0;

                animTimer = setInterval(function () {
                    step++;
                    if (step > n) { clearInterval(animTimer); return; }
                    sum += step;
                    var cell = document.createElement('div');
                    cell.className = 'memory-cell';
                    cell.innerHTML = '<div class="cell-box" style="animation: fadeIn 0.3s ease;">' + step + '</div><div class="cell-label">i=' + step + '</div>';
                    loopDisplay.appendChild(cell);
                    loopResult.textContent = 'Iteration ' + step + ': sum += ' + step + '  →  sum = ' + sum;
                }, 500);
            });

            document.getElementById('loop-viz-reset').addEventListener('click', function () {
                clearInterval(animTimer);
                loopDisplay.innerHTML = '';
                loopResult.textContent = 'Sum = 0 (click Run to start)';
            });

            /* Pattern Printer */
            document.getElementById('pattern-btn').addEventListener('click', function () {
                var n = parseInt(document.getElementById('pattern-rows').value) || 5;
                var type = document.getElementById('pattern-type').value;
                var result = '';

                if (type === 'right') {
                    for (var i = 1; i <= n; i++) {
                        for (var j = 0; j < i; j++) result += '* ';
                        result += '\n';
                    }
                } else if (type === 'inverted') {
                    for (var i = n; i >= 1; i--) {
                        for (var j = 0; j < i; j++) result += '* ';
                        result += '\n';
                    }
                } else if (type === 'pyramid') {
                    for (var i = 1; i <= n; i++) {
                        for (var s = 0; s < n - i; s++) result += '  ';
                        for (var j = 0; j < 2 * i - 1; j++) result += '* ';
                        result += '\n';
                    }
                } else if (type === 'diamond') {
                    for (var i = 1; i <= n; i++) {
                        for (var s = 0; s < n - i; s++) result += '  ';
                        for (var j = 0; j < 2 * i - 1; j++) result += '* ';
                        result += '\n';
                    }
                    for (var i = n - 1; i >= 1; i--) {
                        for (var s = 0; s < n - i; s++) result += '  ';
                        for (var j = 0; j < 2 * i - 1; j++) result += '* ';
                        result += '\n';
                    }
                }

                document.getElementById('pattern-output').textContent = result;
            });

            // Auto-generate default pattern
            document.getElementById('pattern-btn').click();
        }
    });

    // =========================================================================
    // TOPIC 3: ARRAYS & STRUCTURES
    // =========================================================================
    window.APP.register({
        id: 'arrays',
        title: 'Arrays & Structures',
        unit: 2,
        icon: '📊',
        description: '1D arrays, 2D arrays and structures',

        content() {
            var c1 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 20, 30, 40, 50};\n    int sum = 0;\n\n    for (int i = 0; i < 5; i++) {\n        sum += arr[i];\n        cout << "arr[" << i << "] = " << arr[i] << endl;\n    }\n\n    cout << "Sum = " << sum << endl;\n    cout << "Average = " << (double)sum / 5 << endl;\n    return 0;\n}',
'arr[0] = 10\narr[1] = 20\narr[2] = 30\narr[3] = 40\narr[4] = 50\nSum = 150\nAverage = 30', 'cpp', '1D Array – Sum & Average');

            var c2 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[20] = {45, 12, 89, 3, 67, 91, 24, 56, 78, 34,\n                   11, 99, 42, 65, 7, 83, 51, 28, 73, 60};\n    int greatest = arr[0];\n\n    for (int i = 1; i < 20; i++) {\n        if (arr[i] > greatest) {\n            greatest = arr[i];\n        }\n    }\n\n    cout << "Greatest number = " << greatest << endl;\n    return 0;\n}',
'Greatest number = 99', 'cpp', 'Greatest of 20 Numbers');

            var c3 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int A[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int B[3][3] = {{9,8,7},{6,5,4},{3,2,1}};\n    int C[3][3];\n\n    // Matrix Addition\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 3; j++)\n            C[i][j] = A[i][j] + B[i][j];\n\n    cout << "Matrix A + B:" << endl;\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++)\n            cout << C[i][j] << "\\t";\n        cout << endl;\n    }\n    return 0;\n}',
'Matrix A + B:\n10\t10\t10\n10\t10\t10\n10\t10\t10', 'cpp', 'Matrix Addition');

            var c4 = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int A[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    int B[3][3] = {{9,8,7},{6,5,4},{3,2,1}};\n    int C[3][3] = {0};\n\n    // Matrix Multiplication\n    for (int i = 0; i < 3; i++)\n        for (int j = 0; j < 3; j++)\n            for (int k = 0; k < 3; k++)\n                C[i][j] += A[i][k] * B[k][j];\n\n    cout << "Matrix A * B:" << endl;\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++)\n            cout << C[i][j] << "\\t";\n        cout << endl;\n    }\n    return 0;\n}',
'Matrix A * B:\n30\t24\t18\n84\t69\t54\n138\t114\t90', 'cpp', 'Matrix Multiplication');

            var c5 = APP.codeWithOutput(
'#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    int roll;\n    string name;\n    float marks;\n};\n\nint main() {\n    Student s1;\n    s1.roll = 101;\n    s1.name = "Alice";\n    s1.marks = 92.5;\n\n    cout << "Roll: " << s1.roll << endl;\n    cout << "Name: " << s1.name << endl;\n    cout << "Marks: " << s1.marks << endl;\n\n    // Array of structures\n    Student class1[3] = {\n        {102, "Bob", 85.0},\n        {103, "Charlie", 78.5},\n        {104, "Diana", 95.0}\n    };\n\n    cout << "\\nClass Records:" << endl;\n    for (int i = 0; i < 3; i++) {\n        cout << class1[i].roll << " | "\n             << class1[i].name << " | "\n             << class1[i].marks << endl;\n    }\n    return 0;\n}',
'Roll: 101\nName: Alice\nMarks: 92.5\n\nClass Records:\n102 | Bob | 85\n103 | Charlie | 78.5\n104 | Diana | 95', 'cpp', 'Structures – Student Records');

            return '<div class="topic-header">' +
                '<div class="topic-breadcrumb"><span>Unit II</span> › Arrays & Structures</div>' +
                '<h1>📊 Arrays & Structures</h1>' +
                '<p class="topic-subtitle">Learn how to store and manipulate collections of data using arrays and custom data types using structures.</p>' +
            '</div>' +

            /* 1D Arrays */
            '<div class="theory-section">' +
                '<h2>1. One-Dimensional Arrays</h2>' +
                '<p>An <strong>array</strong> is a collection of elements of the <em>same data type</em>, stored in contiguous memory locations. Each element is accessed by its <strong>index</strong> (starting from 0).</p>' +

                '<h3>Declaration & Initialization</h3>' +
                APP.codeBlock('int arr[5];                    // declaration (uninitialized)\nint arr[5] = {10, 20, 30, 40, 50}; // declaration + initialization\nint arr[] = {1, 2, 3};         // size auto-deduced (3 elements)', 'cpp', 'Array Declaration') +

                '<div class="info-box"><h4>📌 Key Points</h4>' +
                '<ul>' +
                    '<li>Array indices start from <strong>0</strong> (first element is <code>arr[0]</code>)</li>' +
                    '<li>Array size must be a compile-time constant in standard C++</li>' +
                    '<li>Accessing out-of-bounds indices causes <strong>undefined behavior</strong></li>' +
                '</ul></div>' +

                '<h3>Memory Layout</h3>' +
                '<div class="diagram-container">' +
                    '<div style="display:flex; gap:4px; justify-content:center; flex-wrap:wrap;">' +
                        '<div class="memory-cell"><div class="cell-box">10</div><div class="cell-label">[0]</div></div>' +
                        '<div class="memory-cell"><div class="cell-box">20</div><div class="cell-label">[1]</div></div>' +
                        '<div class="memory-cell"><div class="cell-box">30</div><div class="cell-label">[2]</div></div>' +
                        '<div class="memory-cell"><div class="cell-box">40</div><div class="cell-label">[3]</div></div>' +
                        '<div class="memory-cell"><div class="cell-box">50</div><div class="cell-label">[4]</div></div>' +
                    '</div>' +
                    '<p style="margin-top:0.5rem; color:var(--text-muted); font-size:0.85rem;">Contiguous memory: each <code>int</code> occupies 4 bytes</p>' +
                '</div>' +

                '<h3>Example: Sum & Average</h3>' +
                c1 +
                '<h3>Example: Greatest of 20 Numbers</h3>' +
                c2 +
            '</div>' +

            /* 2D Arrays */
            '<div class="theory-section">' +
                '<h2>2. Two-Dimensional Arrays (Matrices)</h2>' +
                '<p>A 2D array is an <strong>array of arrays</strong> — it stores data in a table-like structure with rows and columns. Useful for matrices, grids, and tabular data.</p>' +

                '<h3>Declaration</h3>' +
                APP.codeBlock('int matrix[3][3];  // 3 rows, 3 columns\nint matrix[3][3] = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};', 'cpp', '2D Array Declaration') +

                '<div class="tip-box"><h4>💡 Row-Major Storage</h4><p>In C++, 2D arrays are stored in <strong>row-major order</strong> — elements of each row are stored contiguously in memory.</p></div>' +

                '<h3>Example: Matrix Addition</h3>' +
                c3 +
                '<h3>Example: Matrix Multiplication</h3>' +
                c4 +
            '</div>' +

            /* Structures */
            '<div class="theory-section">' +
                '<h2>3. Structures</h2>' +
                '<p>A <strong>structure</strong> (<code>struct</code>) is a user-defined data type that groups variables of <em>different types</em> under a single name. Unlike arrays (same type), structures can hold mixed types.</p>' +

                '<h3>Syntax</h3>' +
                APP.codeBlock('struct StructureName {\n    type member1;\n    type member2;\n    // ...\n};\n\n// Usage:\nStructureName var;\nvar.member1 = value;  // dot operator', 'cpp', 'Structure Syntax') +

                '<h3>Example: Student Records</h3>' +
                c5 +
            '</div>' +

            /* Interactive: Array Visualizer */
            '<div class="interactive-area">' +
                '<h3>Interactive Array Visualizer</h3>' +
                '<p>Click on cells to change values, then use the operations below.</p>' +
                '<div id="arr-viz-cells" style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:1rem;"></div>' +
                '<div class="btn-group">' +
                    '<button class="btn btn-primary btn-sm" id="arr-find-max">Find Max</button>' +
                    '<button class="btn btn-secondary btn-sm" id="arr-find-min">Find Min</button>' +
                    '<button class="btn btn-secondary btn-sm" id="arr-sort">Sort</button>' +
                    '<button class="btn btn-secondary btn-sm" id="arr-reverse">Reverse</button>' +
                    '<button class="btn btn-secondary btn-sm" id="arr-sum">Sum</button>' +
                    '<button class="btn btn-secondary btn-sm" id="arr-randomize">Randomize</button>' +
                '</div>' +
                '<div class="result-display" id="arr-viz-result">Click an operation above</div>' +
            '</div>' +

            /* Interactive: Matrix Calculator */
            '<div class="interactive-area">' +
                '<h3>Matrix Calculator</h3>' +
                '<p>Enter values in both 3×3 matrices, select an operation, and see the result!</p>' +
                '<div style="display:flex; gap:1rem; flex-wrap:wrap; align-items:center; margin-bottom:1rem;">' +
                    '<div><p style="text-align:center;font-weight:600;margin-bottom:0.5rem;">Matrix A</p><table class="styled-table" id="mat-a"></table></div>' +
                    '<div style="font-size:1.5rem; padding-top:1.5rem;" id="mat-op-symbol">+</div>' +
                    '<div><p style="text-align:center;font-weight:600;margin-bottom:0.5rem;">Matrix B</p><table class="styled-table" id="mat-b"></table></div>' +
                    '<div style="font-size:1.5rem; padding-top:1.5rem;">=</div>' +
                    '<div><p style="text-align:center;font-weight:600;margin-bottom:0.5rem;">Result</p><table class="styled-table" id="mat-result"></table></div>' +
                '</div>' +
                '<div class="btn-group">' +
                    '<button class="btn btn-primary btn-sm" id="mat-add">Add</button>' +
                    '<button class="btn btn-secondary btn-sm" id="mat-sub">Subtract</button>' +
                    '<button class="btn btn-secondary btn-sm" id="mat-mul">Multiply</button>' +
                    '<button class="btn btn-secondary btn-sm" id="mat-transpose-a">Transpose A</button>' +
                '</div>' +
            '</div>';
        },

        init() {
            /* Array Visualizer */
            var arrData = [42, 17, 89, 3, 56, 24, 71, 38];
            var arrCells = document.getElementById('arr-viz-cells');
            var arrResult = document.getElementById('arr-viz-result');

            function renderArray(highlight) {
                arrCells.innerHTML = '';
                arrData.forEach(function (val, i) {
                    var cell = document.createElement('div');
                    cell.className = 'memory-cell';
                    var isHL = highlight && highlight.indexOf(i) !== -1;
                    cell.innerHTML = '<div class="cell-box" style="' +
                        (isHL ? 'background:rgba(52,211,153,0.3);border-color:var(--accent-green);box-shadow:0 0 12px rgba(52,211,153,0.4);' : '') +
                        'cursor:pointer;" data-idx="' + i + '">' + val + '</div>' +
                        '<div class="cell-label">[' + i + ']</div>';
                    arrCells.appendChild(cell);
                });

                arrCells.querySelectorAll('.cell-box').forEach(function (box) {
                    box.addEventListener('click', function () {
                        var idx = parseInt(this.dataset.idx);
                        var newVal = prompt('Enter new value for index [' + idx + ']:', arrData[idx]);
                        if (newVal !== null && !isNaN(parseInt(newVal))) {
                            arrData[idx] = parseInt(newVal);
                            renderArray();
                        }
                    });
                });
            }
            renderArray();

            document.getElementById('arr-find-max').addEventListener('click', function () {
                var max = Math.max.apply(null, arrData);
                var idx = arrData.indexOf(max);
                renderArray([idx]);
                arrResult.textContent = 'Maximum = ' + max + ' at index [' + idx + ']';
            });
            document.getElementById('arr-find-min').addEventListener('click', function () {
                var min = Math.min.apply(null, arrData);
                var idx = arrData.indexOf(min);
                renderArray([idx]);
                arrResult.textContent = 'Minimum = ' + min + ' at index [' + idx + ']';
            });
            document.getElementById('arr-sort').addEventListener('click', function () {
                arrData.sort(function (a, b) { return a - b; });
                renderArray();
                arrResult.textContent = 'Array sorted: [' + arrData.join(', ') + ']';
            });
            document.getElementById('arr-reverse').addEventListener('click', function () {
                arrData.reverse();
                renderArray();
                arrResult.textContent = 'Array reversed: [' + arrData.join(', ') + ']';
            });
            document.getElementById('arr-sum').addEventListener('click', function () {
                var sum = arrData.reduce(function (a, b) { return a + b; }, 0);
                renderArray();
                arrResult.textContent = 'Sum = ' + sum + ', Average = ' + (sum / arrData.length).toFixed(2);
            });
            document.getElementById('arr-randomize').addEventListener('click', function () {
                arrData = arrData.map(function () { return Math.floor(Math.random() * 100); });
                renderArray();
                arrResult.textContent = 'Randomized: [' + arrData.join(', ') + ']';
            });

            /* Matrix Calculator */
            function createMatrixInputs(tableId) {
                var table = document.getElementById(tableId);
                var html = '<tbody>';
                for (var i = 0; i < 3; i++) {
                    html += '<tr>';
                    for (var j = 0; j < 3; j++) {
                        var val = (tableId === 'mat-a') ? (i * 3 + j + 1) : (9 - i * 3 - j);
                        html += '<td><input type="number" id="' + tableId + '-' + i + '-' + j + '" value="' + val + '" style="width:50px;padding:4px;background:var(--bg-elevated);border:1px solid var(--glass-border);color:var(--text-primary);border-radius:4px;text-align:center;font-family:\'JetBrains Mono\',monospace;"></td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                table.innerHTML = html;
            }

            function getMatrix(tableId) {
                var m = [];
                for (var i = 0; i < 3; i++) {
                    m[i] = [];
                    for (var j = 0; j < 3; j++) {
                        m[i][j] = parseFloat(document.getElementById(tableId + '-' + i + '-' + j).value) || 0;
                    }
                }
                return m;
            }

            function showResult(mat) {
                var table = document.getElementById('mat-result');
                var html = '<tbody>';
                for (var i = 0; i < mat.length; i++) {
                    html += '<tr>';
                    for (var j = 0; j < mat[i].length; j++) {
                        html += '<td style="text-align:center;font-weight:600;color:var(--accent-cyan);">' + mat[i][j] + '</td>';
                    }
                    html += '</tr>';
                }
                html += '</tbody>';
                table.innerHTML = html;
            }

            createMatrixInputs('mat-a');
            createMatrixInputs('mat-b');
            showResult([[0,0,0],[0,0,0],[0,0,0]]);

            document.getElementById('mat-add').addEventListener('click', function () {
                var A = getMatrix('mat-a'), B = getMatrix('mat-b'), C = [[0,0,0],[0,0,0],[0,0,0]];
                for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) C[i][j] = A[i][j] + B[i][j];
                showResult(C);
                document.getElementById('mat-op-symbol').textContent = '+';
            });
            document.getElementById('mat-sub').addEventListener('click', function () {
                var A = getMatrix('mat-a'), B = getMatrix('mat-b'), C = [[0,0,0],[0,0,0],[0,0,0]];
                for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) C[i][j] = A[i][j] - B[i][j];
                showResult(C);
                document.getElementById('mat-op-symbol').textContent = '−';
            });
            document.getElementById('mat-mul').addEventListener('click', function () {
                var A = getMatrix('mat-a'), B = getMatrix('mat-b'), C = [[0,0,0],[0,0,0],[0,0,0]];
                for (var i = 0; i < 3; i++)
                    for (var j = 0; j < 3; j++)
                        for (var k = 0; k < 3; k++)
                            C[i][j] += A[i][k] * B[k][j];
                showResult(C);
                document.getElementById('mat-op-symbol').textContent = '×';
            });
            document.getElementById('mat-transpose-a').addEventListener('click', function () {
                var A = getMatrix('mat-a'), T = [[0,0,0],[0,0,0],[0,0,0]];
                for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) T[i][j] = A[j][i];
                showResult(T);
                document.getElementById('mat-op-symbol').textContent = 'Tᴬ';
            });
        }
    });

    // =========================================================================
    // TOPIC 4: ALGORITHMS & PROGRAMS
    // =========================================================================
    window.APP.register({
        id: 'programs',
        title: 'Algorithms & Programs',
        unit: 2,
        icon: '💻',
        description: 'Algorithm design and practical C++ programs',

        content() {
            var pArea = APP.codeWithOutput(
'#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    // Area of Circle\n    double r = 5.0;\n    double area = M_PI * r * r;\n    cout << "Circle: radius=" << r << ", area=" << area << endl;\n\n    // Area of Rectangle\n    double l = 8.0, w = 4.0;\n    cout << "Rectangle: " << l << "x" << w << ", area=" << l * w << endl;\n\n    // Area of Triangle\n    double base = 6.0, height = 3.5;\n    cout << "Triangle: base=" << base << ", h=" << height\n         << ", area=" << 0.5 * base * height << endl;\n\n    // Volume of Sphere\n    cout << "Sphere: r=" << r << ", volume="\n         << (4.0/3.0) * M_PI * pow(r, 3) << endl;\n\n    // Volume of Cylinder\n    double h = 10.0;\n    cout << "Cylinder: r=" << r << ", h=" << h\n         << ", volume=" << M_PI * r * r * h << endl;\n\n    // Volume of Cone\n    cout << "Cone: r=" << r << ", h=" << h\n         << ", volume=" << (1.0/3.0) * M_PI * r * r * h << endl;\n\n    return 0;\n}',
'Circle: radius=5, area=78.5398\nRectangle: 8x4, area=32\nTriangle: base=6, h=3.5, area=10.5\nSphere: r=5, volume=523.599\nCylinder: r=5, h=10, volume=785.398\nCone: r=5, h=10, volume=261.799', 'cpp', 'Area & Volume Calculations');

            var pSI = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    double principal, rate, time, si;\n    cout << "Enter Principal: "; cin >> principal;\n    cout << "Enter Rate (%): "; cin >> rate;\n    cout << "Enter Time (years): "; cin >> time;\n\n    si = (principal * rate * time) / 100.0;\n\n    cout << "Simple Interest = " << si << endl;\n    cout << "Total Amount = " << principal + si << endl;\n    return 0;\n}',
'Enter Principal: 10000\nEnter Rate (%): 8.5\nEnter Time (years): 3\nSimple Interest = 2550\nTotal Amount = 12550', 'cpp', 'Simple Interest Calculator');

            var pSumN = APP.codeWithOutput(
'#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cout << "Enter N: ";\n    cin >> n;\n\n    // Method 1: Using loop\n    int sum1 = 0;\n    for (int i = 1; i <= n; i++) {\n        sum1 += i;\n    }\n    cout << "Sum (loop) = " << sum1 << endl;\n\n    // Method 2: Using formula n*(n+1)/2\n    int sum2 = n * (n + 1) / 2;\n    cout << "Sum (formula) = " << sum2 << endl;\n\n    return 0;\n}',
'Enter N: 100\nSum (loop) = 5050\nSum (formula) = 5050', 'cpp', 'Sum of First N Natural Numbers');

            var pSin = APP.codeWithOutput(
'#include <iostream>\n#include <cmath>\n#include <iomanip>\nusing namespace std;\n\nint main() {\n    cout << "Plot of sin(x) from 0 to 2*PI:" << endl;\n    cout << string(40, \'-\') << endl;\n\n    for (double x = 0; x <= 2 * M_PI; x += 0.2) {\n        double y = sin(x);\n        int pos = (int)((y + 1) * 20); // scale to 0-40\n        cout << setw(4) << fixed << setprecision(1) << x << " |";\n        cout << string(pos, \' \') << "*" << endl;\n    }\n    return 0;\n}',
'Plot of sin(x) from 0 to 2*PI:\n----------------------------------------\n 0.0 |                    *\n 0.2 |                        *\n 0.4 |                             *\n ... (sine wave pattern continues)\n 6.0 |                     *\n 6.2 |                    *', 'cpp', 'Plotting sin(x)');

            return '<div class="topic-header">' +
                '<div class="topic-breadcrumb"><span>Unit II</span> › Algorithms & Programs</div>' +
                '<h1>💻 Algorithms & Programs</h1>' +
                '<p class="topic-subtitle">Learn algorithm design principles and explore complete C++ programs for common computational tasks.</p>' +
            '</div>' +

            /* Algorithms */
            '<div class="theory-section">' +
                '<h2>What is an Algorithm?</h2>' +
                '<p>An <strong>algorithm</strong> is a finite, step-by-step procedure for solving a problem or performing a computation. It is the <em>logic</em> behind a program, independent of any programming language.</p>' +

                '<div class="concept-box"><h4>📌 Characteristics of a Good Algorithm</h4>' +
                '<ul>' +
                    '<li><strong>Finiteness</strong> — Must terminate after a finite number of steps</li>' +
                    '<li><strong>Definiteness</strong> — Each step must be precisely defined, with no ambiguity</li>' +
                    '<li><strong>Input</strong> — Takes zero or more inputs</li>' +
                    '<li><strong>Output</strong> — Produces at least one output</li>' +
                    '<li><strong>Effectiveness</strong> — Each step must be basic enough to be carried out</li>' +
                '</ul></div>' +
            '</div>' +

            '<div class="theory-section">' +
                '<h2>Structured Programming</h2>' +
                '<p><strong>Structured programming</strong> is a paradigm that organizes code into logical blocks using sequences, selections, and loops (no <code>goto</code>!). It follows a <strong>top-down approach</strong>: break a problem into smaller sub-problems (modules), solve each independently, then combine.</p>' +

                '<div class="tip-box"><h4>💡 Advantages</h4>' +
                '<ul>' +
                    '<li>Easier to read, understand, and debug</li>' +
                    '<li>Reusable modules</li>' +
                    '<li>Reduced complexity</li>' +
                '</ul></div>' +
            '</div>' +

            /* Programs */
            '<div class="theory-section">' +
                '<h2>Program Collection</h2>' +

                '<h3>(a) Area & Volume Calculations</h3>' +
                '<div class="info-box"><h4>📐 Formulas Used</h4>' +
                '<ul>' +
                    '<li>Circle Area: \\(A = \\pi r^2\\)</li>' +
                    '<li>Rectangle Area: \\(A = l \\times w\\)</li>' +
                    '<li>Triangle Area: \\(A = \\frac{1}{2} \\times base \\times height\\)</li>' +
                    '<li>Sphere Volume: \\(V = \\frac{4}{3}\\pi r^3\\)</li>' +
                    '<li>Cylinder Volume: \\(V = \\pi r^2 h\\)</li>' +
                    '<li>Cone Volume: \\(V = \\frac{1}{3}\\pi r^2 h\\)</li>' +
                '</ul></div>' +
                pArea +

                '<h3>(b) Simple Interest</h3>' +
                '<div class="info-box"><h4>📐 Formula</h4><p>\\(SI = \\frac{P \\times R \\times T}{100}\\) where P = Principal, R = Rate (%), T = Time (years)</p></div>' +
                pSI +

                '<h3>(d) Plotting sin(x)</h3>' +
                pSin +

                '<h3>(g) Sum of First N Natural Numbers</h3>' +
                '<div class="info-box"><h4>📐 Formula</h4><p>\\(S = \\frac{n(n+1)}{2}\\)</p></div>' +
                pSumN +
            '</div>' +

            /* Interactive: Area/Volume Calculator */
            '<div class="interactive-area">' +
                '<h3>Area & Volume Calculator</h3>' +
                '<div class="controls-row">' +
                    '<div class="control-field">' +
                        '<label>Shape:</label>' +
                        '<select id="prog-shape">' +
                            '<option value="circle">Circle (Area)</option>' +
                            '<option value="rectangle">Rectangle (Area)</option>' +
                            '<option value="triangle">Triangle (Area)</option>' +
                            '<option value="sphere">Sphere (Volume)</option>' +
                            '<option value="cylinder">Cylinder (Volume)</option>' +
                            '<option value="cone">Cone (Volume)</option>' +
                        '</select>' +
                    '</div>' +
                '</div>' +
                '<div class="controls-row" id="prog-inputs"></div>' +
                '<button class="btn btn-primary" id="prog-calc-btn">Calculate</button>' +
                '<div class="result-display" id="prog-calc-result">Select a shape and enter values</div>' +
            '</div>' +

            /* Interactive: SI Calculator */
            '<div class="interactive-area">' +
                '<h3>Simple Interest Calculator</h3>' +
                '<div class="controls-row">' +
                    '<div class="control-field"><label>Principal (₹):</label><input type="number" id="si-p" value="10000"></div>' +
                    '<div class="control-field"><label>Rate (%):</label><input type="number" id="si-r" value="8.5" step="0.1"></div>' +
                    '<div class="control-field"><label>Time (years):</label><input type="number" id="si-t" value="3" step="0.5"></div>' +
                '</div>' +
                '<button class="btn btn-primary" id="si-calc-btn">Calculate</button>' +
                '<div class="result-display" id="si-result"></div>' +
            '</div>';
        },

        init() {
            /* Shape Calculator */
            var shapeInputs = {
                circle: [{id: 'prog-r', label: 'Radius', val: 5}],
                rectangle: [{id: 'prog-l', label: 'Length', val: 8}, {id: 'prog-w', label: 'Width', val: 4}],
                triangle: [{id: 'prog-b', label: 'Base', val: 6}, {id: 'prog-h', label: 'Height', val: 3.5}],
                sphere: [{id: 'prog-r', label: 'Radius', val: 5}],
                cylinder: [{id: 'prog-r', label: 'Radius', val: 5}, {id: 'prog-h', label: 'Height', val: 10}],
                cone: [{id: 'prog-r', label: 'Radius', val: 5}, {id: 'prog-h', label: 'Height', val: 10}]
            };

            var inputsDiv = document.getElementById('prog-inputs');
            var resultDiv = document.getElementById('prog-calc-result');
            var shapeSelect = document.getElementById('prog-shape');

            function renderInputs() {
                var shape = shapeSelect.value;
                var fields = shapeInputs[shape];
                inputsDiv.innerHTML = fields.map(function (f) {
                    return '<div class="control-field"><label>' + f.label + ':</label><input type="number" id="' + f.id + '" value="' + f.val + '" step="0.1"></div>';
                }).join('');
            }

            shapeSelect.addEventListener('change', renderInputs);
            renderInputs();

            document.getElementById('prog-calc-btn').addEventListener('click', function () {
                var shape = shapeSelect.value;
                var pi = Math.PI;
                var result, formula;

                function gv(id) { return parseFloat(document.getElementById(id).value) || 0; }

                switch (shape) {
                    case 'circle':
                        var r = gv('prog-r');
                        result = pi * r * r;
                        formula = 'A = π × ' + r + '² = ' + result.toFixed(4);
                        break;
                    case 'rectangle':
                        var l = gv('prog-l'), w = gv('prog-w');
                        result = l * w;
                        formula = 'A = ' + l + ' × ' + w + ' = ' + result.toFixed(4);
                        break;
                    case 'triangle':
                        var b = gv('prog-b'), h = gv('prog-h');
                        result = 0.5 * b * h;
                        formula = 'A = ½ × ' + b + ' × ' + h + ' = ' + result.toFixed(4);
                        break;
                    case 'sphere':
                        var r = gv('prog-r');
                        result = (4/3) * pi * Math.pow(r, 3);
                        formula = 'V = 4/3 × π × ' + r + '³ = ' + result.toFixed(4);
                        break;
                    case 'cylinder':
                        var r = gv('prog-r'), h = gv('prog-h');
                        result = pi * r * r * h;
                        formula = 'V = π × ' + r + '² × ' + h + ' = ' + result.toFixed(4);
                        break;
                    case 'cone':
                        var r = gv('prog-r'), h = gv('prog-h');
                        result = (1/3) * pi * r * r * h;
                        formula = 'V = 1/3 × π × ' + r + '² × ' + h + ' = ' + result.toFixed(4);
                        break;
                }
                resultDiv.textContent = formula;
            });

            /* SI Calculator */
            document.getElementById('si-calc-btn').addEventListener('click', function () {
                var p = parseFloat(document.getElementById('si-p').value) || 0;
                var r = parseFloat(document.getElementById('si-r').value) || 0;
                var t = parseFloat(document.getElementById('si-t').value) || 0;
                var si = (p * r * t) / 100;
                document.getElementById('si-result').textContent =
                    'SI = (P × R × T) / 100 = (' + p + ' × ' + r + ' × ' + t + ') / 100 = ₹' + si.toFixed(2) +
                    '\nTotal Amount = ₹' + (p + si).toFixed(2);
            });

            // Auto-calculate
            document.getElementById('si-calc-btn').click();
            document.getElementById('prog-calc-btn').click();
        }
    });

})();
