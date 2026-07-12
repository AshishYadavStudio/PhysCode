/* ======================================================
   CONTENT MODULE – C++ I/O, Expressions & Preprocessor
   Topics: expressions, io-statements, preprocessor
   ====================================================== */
(function () {
    'use strict';

    /* ===================================================================
       TOPIC 1: EXPRESSIONS & STATEMENTS
       =================================================================== */
    window.APP.register({
        id: 'expressions',
        title: 'Expressions & Statements',
        unit: 1,
        icon: '📝',
        description: 'Expressions, statements and their types in C++',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> <span>Expressions & Statements</span></div>
                <h1>📝 Expressions & Statements</h1>
                <p class="topic-subtitle">Understanding how C++ evaluates expressions and organizes code into statements</p>
            </div>

            <!-- ============ SECTION: EXPRESSIONS ============ -->
            <div class="theory-section">
                <h2>1. What is an Expression?</h2>
                <p>An <strong>expression</strong> is a combination of <em>operands</em> (variables, constants, literals) and <em>operators</em> that is evaluated to produce (or "yield") a single value. Think of an expression like a mathematical formula: you plug in numbers, and it produces a result.</p>

                <div class="concept-box">
                    <h4>Key Insight</h4>
                    <p>Every expression in C++ has two properties:</p>
                    <ul>
                        <li><strong>Value</strong> — the result of evaluating the expression (e.g., <code>3 + 4</code> has value <code>7</code>)</li>
                        <li><strong>Type</strong> — the data type of the result (e.g., <code>3 + 4</code> has type <code>int</code>)</li>
                    </ul>
                    <p>Even a single variable like <code>x</code> is an expression — its value is whatever is stored in <code>x</code>, and its type is however <code>x</code> was declared.</p>
                </div>

                <h3>1.1 Types of Expressions</h3>
                <p>C++ expressions can be classified by the kind of operator they use:</p>

                <h4>a) Arithmetic Expressions</h4>
                <p>These use arithmetic operators to perform mathematical calculations. The result is a numeric value.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result (a=10, b=3)</th></tr></thead>
                    <tbody>
                        <tr><td><code>+</code></td><td>Addition</td><td><code>a + b</code></td><td>13</td></tr>
                        <tr><td><code>-</code></td><td>Subtraction</td><td><code>a - b</code></td><td>7</td></tr>
                        <tr><td><code>*</code></td><td>Multiplication</td><td><code>a * b</code></td><td>30</td></tr>
                        <tr><td><code>/</code></td><td>Division</td><td><code>a / b</code></td><td>3 (integer division!)</td></tr>
                        <tr><td><code>%</code></td><td>Modulus (remainder)</td><td><code>a % b</code></td><td>1</td></tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <h4>Integer Division Trap</h4>
                    <p>When both operands are integers, <code>/</code> performs <strong>integer division</strong> — the fractional part is discarded. So <code>10 / 3</code> gives <code>3</code>, not <code>3.333</code>. To get a floating-point result, at least one operand must be a float or double: <code>10.0 / 3</code> gives <code>3.333...</code>.</p>
                </div>

                ${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    cout << "a + b = " << a + b << endl;   // 13
    cout << "a - b = " << a - b << endl;   // 7
    cout << "a * b = " << a * b << endl;   // 30
    cout << "a / b = " << a / b << endl;   // 3 (integer division)
    cout << "a % b = " << a % b << endl;   // 1

    // Floating-point division
    cout << "10.0 / 3 = " << 10.0 / 3 << endl;  // 3.33333

    return 0;
}`, `a + b = 13
a - b = 7
a * b = 30
a / b = 3
a % b = 1
10.0 / 3 = 3.33333`, 'cpp', 'Arithmetic Expressions')}

                <h4>b) Relational Expressions</h4>
                <p>Relational expressions compare two values and return a <strong>boolean</strong> result: <code>true</code> (1) or <code>false</code> (0). They are fundamental for making decisions in programs.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result (a=10, b=3)</th></tr></thead>
                    <tbody>
                        <tr><td><code>==</code></td><td>Equal to</td><td><code>a == b</code></td><td>false (0)</td></tr>
                        <tr><td><code>!=</code></td><td>Not equal to</td><td><code>a != b</code></td><td>true (1)</td></tr>
                        <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>a &gt; b</code></td><td>true (1)</td></tr>
                        <tr><td><code>&lt;</code></td><td>Less than</td><td><code>a &lt; b</code></td><td>false (0)</td></tr>
                        <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>a &gt;= 10</code></td><td>true (1)</td></tr>
                        <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>a &lt;= b</code></td><td>false (0)</td></tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <h4>Common Mistake: <code>=</code> vs <code>==</code></h4>
                    <p><code>=</code> is the <strong>assignment</strong> operator (it assigns a value). <code>==</code> is the <strong>equality comparison</strong> operator. Writing <code>if (x = 5)</code> is a bug — it assigns 5 to x and always evaluates to true!</p>
                </div>

                <h4>c) Logical Expressions</h4>
                <p>Logical operators combine boolean values. They are used to build complex conditions.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Explanation</th></tr></thead>
                    <tbody>
                        <tr><td><code>&&</code></td><td>Logical AND</td><td><code>(a &gt; 5) && (b &lt; 10)</code></td><td>True only if BOTH are true</td></tr>
                        <tr><td><code>||</code></td><td>Logical OR</td><td><code>(a &gt; 5) || (b &gt; 10)</code></td><td>True if at LEAST ONE is true</td></tr>
                        <tr><td><code>!</code></td><td>Logical NOT</td><td><code>!(a == b)</code></td><td>Reverses the truth value</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>Short-Circuit Evaluation</h4>
                    <p>C++ uses <strong>short-circuit evaluation</strong> for logical operators:</p>
                    <ul>
                        <li><code>&&</code>: If the left operand is <code>false</code>, the right operand is <strong>not evaluated</strong> (result is already false).</li>
                        <li><code>||</code>: If the left operand is <code>true</code>, the right operand is <strong>not evaluated</strong> (result is already true).</li>
                    </ul>
                    <p>This is useful for safety checks like: <code>if (ptr != NULL && ptr->value > 0)</code> — if <code>ptr</code> is NULL, the second condition is never checked (avoiding a crash).</p>
                </div>

                <h4>d) Assignment Expressions</h4>
                <p>An assignment expression stores a value in a variable. In C++, assignment itself is an expression — it has a value (the value being assigned).</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Equivalent To</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>=</code></td><td>Simple assignment</td><td><code>x = 5</code></td></tr>
                        <tr><td><code>+=</code></td><td><code>x = x + y</code></td><td><code>x += 3</code></td></tr>
                        <tr><td><code>-=</code></td><td><code>x = x - y</code></td><td><code>x -= 2</code></td></tr>
                        <tr><td><code>*=</code></td><td><code>x = x * y</code></td><td><code>x *= 4</code></td></tr>
                        <tr><td><code>/=</code></td><td><code>x = x / y</code></td><td><code>x /= 2</code></td></tr>
                        <tr><td><code>%=</code></td><td><code>x = x % y</code></td><td><code>x %= 3</code></td></tr>
                    </tbody>
                </table>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int x = 10;

    x += 5;   // x = 10 + 5 = 15
    cout << "After x += 5: " << x << endl;

    x -= 3;   // x = 15 - 3 = 12
    cout << "After x -= 3: " << x << endl;

    x *= 2;   // x = 12 * 2 = 24
    cout << "After x *= 2: " << x << endl;

    x /= 4;   // x = 24 / 4 = 6
    cout << "After x /= 4: " << x << endl;

    x %= 4;   // x = 6 % 4 = 2
    cout << "After x %= 4: " << x << endl;

    return 0;
}`, `After x += 5: 15
After x -= 3: 12
After x *= 2: 24
After x /= 4: 6
After x %= 4: 2`, 'cpp', 'Compound Assignment Operators')}

                <h4>e) Mixed / Conditional Expressions</h4>
                <p>The <strong>ternary operator</strong> (<code>? :</code>) is the only operator that takes three operands. It provides a compact way to write simple if-else logic inside an expression.</p>
                <div class="math-display">\\[ \\text{condition} \\;?\\; \\text{value\\_if\\_true} \\;:\\; \\text{value\\_if\\_false} \\]</div>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;

    // Ternary expression to find the maximum
    int max_val = (a > b) ? a : b;
    cout << "Max of " << a << " and " << b << " is: " << max_val << endl;

    // Ternary for absolute value
    int x = -7;
    int abs_x = (x >= 0) ? x : -x;
    cout << "Absolute value of " << x << " is: " << abs_x << endl;

    return 0;
}`, `Max of 10 and 20 is: 20
Absolute value of -7 is: 7`, 'cpp', 'Ternary (Conditional) Expression')}

            </div>

            <!-- ============ SECTION: OPERATOR PRECEDENCE ============ -->
            <div class="theory-section">
                <h2>2. Operator Precedence & Associativity</h2>
                <p>When an expression has multiple operators, C++ uses <strong>precedence</strong> (priority) and <strong>associativity</strong> (direction) rules to determine the order of evaluation. Operators with higher precedence are evaluated first. When operators have the same precedence, associativity determines whether evaluation goes left-to-right or right-to-left.</p>

                <div class="concept-box">
                    <h4>Analogy: BODMAS/PEMDAS</h4>
                    <p>Just like in mathematics where multiplication is done before addition (BODMAS), C++ has its own order. But C++ has many more operators, so the precedence table is larger.</p>
                </div>

                <table class="styled-table">
                    <thead><tr><th>Precedence</th><th>Operator</th><th>Description</th><th>Associativity</th></tr></thead>
                    <tbody>
                        <tr><td>1 (highest)</td><td><code>()</code></td><td>Parentheses / Function call</td><td>Left → Right</td></tr>
                        <tr><td>2</td><td><code>++</code> <code>--</code> (postfix)</td><td>Post-increment, Post-decrement</td><td>Left → Right</td></tr>
                        <tr><td>3</td><td><code>++</code> <code>--</code> (prefix) <code>!</code> <code>-</code> (unary) <code>(type)</code></td><td>Pre-inc/dec, NOT, unary minus, cast</td><td>Right → Left</td></tr>
                        <tr><td>4</td><td><code>*</code> <code>/</code> <code>%</code></td><td>Multiplication, Division, Modulus</td><td>Left → Right</td></tr>
                        <tr><td>5</td><td><code>+</code> <code>-</code></td><td>Addition, Subtraction</td><td>Left → Right</td></tr>
                        <tr><td>6</td><td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td><td>Relational comparisons</td><td>Left → Right</td></tr>
                        <tr><td>7</td><td><code>==</code> <code>!=</code></td><td>Equality / Inequality</td><td>Left → Right</td></tr>
                        <tr><td>8</td><td><code>&&</code></td><td>Logical AND</td><td>Left → Right</td></tr>
                        <tr><td>9</td><td><code>||</code></td><td>Logical OR</td><td>Left → Right</td></tr>
                        <tr><td>10</td><td><code>?:</code></td><td>Ternary conditional</td><td>Right → Left</td></tr>
                        <tr><td>11</td><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code></td><td>Assignment operators</td><td>Right → Left</td></tr>
                        <tr><td>12 (lowest)</td><td><code>,</code></td><td>Comma operator</td><td>Left → Right</td></tr>
                    </tbody>
                </table>

                <h3>Step-by-Step Evaluation Example</h3>
                <p>Let us trace the expression <code>a = b + c * d / e - f</code> with values <code>b=6, c=4, d=3, e=2, f=1</code>:</p>

                <div class="example-box">
                    <h4>Evaluation Trace: <code>a = 6 + 4 * 3 / 2 - 1</code></h4>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-date">Step 1</div>
                            <h4>Evaluate <code>4 * 3</code> (precedence 4, left-to-right)</h4>
                            <p>Expression becomes: <code>a = 6 + <strong>12</strong> / 2 - 1</code></p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">Step 2</div>
                            <h4>Evaluate <code>12 / 2</code> (same precedence, left-to-right)</h4>
                            <p>Expression becomes: <code>a = 6 + <strong>6</strong> - 1</code></p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">Step 3</div>
                            <h4>Evaluate <code>6 + 6</code> (precedence 5, left-to-right)</h4>
                            <p>Expression becomes: <code>a = <strong>12</strong> - 1</code></p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">Step 4</div>
                            <h4>Evaluate <code>12 - 1</code> (same precedence, left-to-right)</h4>
                            <p>Expression becomes: <code>a = <strong>11</strong></code></p>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">Step 5</div>
                            <h4>Evaluate <code>a = 11</code> (precedence 11, assignment)</h4>
                            <p>Variable <code>a</code> is assigned the value <strong>11</strong>.</p>
                        </div>
                    </div>
                </div>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int a, b = 6, c = 4, d = 3, e = 2, f = 1;

    a = b + c * d / e - f;

    cout << "Expression: a = b + c * d / e - f" << endl;
    cout << "With b=6, c=4, d=3, e=2, f=1" << endl;
    cout << "Step 1: c * d = 4 * 3 = 12" << endl;
    cout << "Step 2: 12 / e = 12 / 2 = 6" << endl;
    cout << "Step 3: b + 6 = 6 + 6 = 12" << endl;
    cout << "Step 4: 12 - f = 12 - 1 = 11" << endl;
    cout << "Result: a = " << a << endl;

    return 0;
}`, `Expression: a = b + c * d / e - f
With b=6, c=4, d=3, e=2, f=1
Step 1: c * d = 4 * 3 = 12
Step 2: 12 / e = 12 / 2 = 6
Step 3: b + 6 = 6 + 6 = 12
Step 4: 12 - f = 12 - 1 = 11
Result: a = 11`, 'cpp', 'Verifying Evaluation Order')}
            </div>

            <!-- ============ SECTION: STATEMENTS ============ -->
            <div class="theory-section">
                <h2>3. Statements in C++</h2>
                <p>A <strong>statement</strong> is a complete instruction that tells the computer to perform an action. If an expression is like a phrase, a statement is like a complete sentence — it ends with a semicolon (<code>;</code>).</p>

                <h3>3.1 Simple Statements</h3>

                <h4>a) Expression Statement</h4>
                <p>An expression followed by a semicolon. The expression is evaluated and the result (if any) is discarded.</p>
${APP.codeBlock(`x = 5 + 3;        // Assignment expression statement
cout << x;         // Function call expression statement
i++;               // Increment expression statement`, 'cpp', 'Expression Statements')}

                <h4>b) Declaration Statement</h4>
                <p>Introduces a new variable (or function) into the program. It allocates memory and optionally initializes the variable.</p>
${APP.codeBlock(`int age = 20;              // Declare and initialize
double pi = 3.14159;       // Floating-point declaration
char grade;                // Declare without initialization (undefined value!)
string name = "Physics";   // String declaration`, 'cpp', 'Declaration Statements')}

                <h4>c) Null Statement</h4>
                <p>Just a semicolon by itself. It does nothing. This is useful in loops where all the work is done in the loop header.</p>
${APP.codeBlock(`; // This is a null statement

// Example: counting digits using a for loop
// All work is in the header; the body is a null statement
int n = 12345, count;
for (count = 0; n > 0; n /= 10, count++)
    ;  // null statement — body does nothing`, 'cpp', 'Null Statements')}

                <h3>3.2 Compound Statement (Block)</h3>
                <p>A group of statements enclosed in curly braces <code>{ }</code>. A block is treated as a single statement. Variables declared inside a block are <strong>local</strong> to that block.</p>
${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int x = 10;

    {   // Start of a block
        int y = 20;           // y exists only inside this block
        cout << "Inside block: x = " << x << ", y = " << y << endl;
    }   // End of block — y is destroyed here

    cout << "Outside block: x = " << x << endl;
    // cout << y;  // ERROR! y does not exist here

    return 0;
}`, `Inside block: x = 10, y = 20
Outside block: x = 10`, 'cpp', 'Compound Statements (Blocks)')}

                <h3>3.3 Flow Control Statements</h3>
                <p>These alter the normal sequential execution of code. They include:</p>
                <ul>
                    <li><strong>Selection</strong>: <code>if</code>, <code>if-else</code>, <code>switch</code> — choose which code to execute</li>
                    <li><strong>Iteration</strong>: <code>for</code>, <code>while</code>, <code>do-while</code> — repeat code</li>
                    <li><strong>Jump</strong>: <code>break</code>, <code>continue</code>, <code>return</code>, <code>goto</code> — transfer control elsewhere</li>
                </ul>
                <div class="info-box">
                    <h4>Coming Up</h4>
                    <p>Flow control statements are covered in detail in the <strong>Control Structures</strong> topic. Here we simply acknowledge that they exist as a category of statements.</p>
                </div>
            </div>

            <!-- ============ SECTION: TYPE CONVERSION ============ -->
            <div class="theory-section">
                <h2>4. Type Conversion in Expressions</h2>
                <p>When you mix different data types in an expression, C++ must convert them to a common type before performing the operation. This can happen <em>automatically</em> (implicit) or be requested <em>explicitly</em> by the programmer (casting).</p>

                <h3>4.1 Implicit Type Conversion (Type Promotion)</h3>
                <p>C++ automatically converts the "smaller" type to the "larger" type to prevent data loss. The promotion hierarchy is:</p>
                <div class="diagram-container">
                    <div style="display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
                        <div class="flow-node process">char / short</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">int</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">long</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">float</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">double</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">long double</div>
                    </div>
                    <p style="text-align:center; margin-top:8px; color: var(--text-secondary);">Promotion direction: smaller → larger</p>
                </div>

                <div class="tip-box">
                    <h4>Promotion Rules</h4>
                    <ul>
                        <li><code>int + float</code> → the int is promoted to float, result is float</li>
                        <li><code>float + double</code> → the float is promoted to double, result is double</li>
                        <li><code>char + int</code> → the char is promoted to int (using ASCII value), result is int</li>
                        <li><code>int / int</code> → stays int (no promotion needed, but fractional part is lost!)</li>
                    </ul>
                </div>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int i = 7;
    float f = 2.5;
    double d = 3.14;
    char c = 'A';  // ASCII value 65

    cout << "int + float:    " << i + f << endl;    // 9.5 (float)
    cout << "float + double: " << f + d << endl;    // 5.64 (double)
    cout << "char + int:     " << c + 1 << endl;    // 66 (int, 'B')
    cout << "int / int:      " << 7 / 2 << endl;    // 3 (integer division)
    cout << "int / double:   " << 7 / 2.0 << endl;  // 3.5 (double)

    return 0;
}`, `int + float:    9.5
float + double: 5.64
char + int:     66
int / int:      3
int / double:   3.5`, 'cpp', 'Implicit Type Promotion')}

                <h3>4.2 Explicit Type Casting</h3>
                <p>You can force a conversion using <strong>cast</strong> operators. This is needed when you want to convert from a larger type to a smaller type, or when you want to control the conversion precisely.</p>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    // C-style cast
    double pi = 3.14159;
    int truncated = (int)pi;        // C-style cast
    cout << "C-style cast: (int)3.14159 = " << truncated << endl;

    // C++ style cast (preferred)
    int a = 7, b = 2;
    double result = static_cast<double>(a) / b;
    cout << "static_cast: 7 / 2 = " << result << endl;

    // Character to integer
    char ch = 'Z';
    cout << "ASCII of 'Z' = " << static_cast<int>(ch) << endl;

    return 0;
}`, `C-style cast: (int)3.14159 = 3
static_cast: 7 / 2 = 3.5
ASCII of 'Z' = 90`, 'cpp', 'Explicit Type Casting')}

                <div class="warning-box">
                    <h4>Narrowing Conversions</h4>
                    <p>Converting from a larger type to a smaller type (e.g., <code>double</code> to <code>int</code>) can lose data. The compiler may warn you. Use explicit casts to show that you are aware of the potential data loss.</p>
                </div>
            </div>

            <!-- ============ INTERACTIVE: EXPRESSION EVALUATOR ============ -->
            <div class="interactive-area">
                <h3>Expression Step-Through Evaluator</h3>
                <p>Enter variable values and an arithmetic expression to see step-by-step evaluation with operator precedence applied.</p>

                <div class="controls-row">
                    <div class="control-field">
                        <label for="expr-vars">Variable Values (comma-separated)</label>
                        <input type="text" id="expr-vars" placeholder="a=6, b=4, c=3, d=2, e=1" value="a=6, b=4, c=3, d=2, e=1">
                    </div>
                </div>
                <div class="controls-row">
                    <div class="control-field">
                        <label for="expr-input">Expression</label>
                        <input type="text" id="expr-input" placeholder="a + b * c / d - e" value="a + b * c / d - e">
                    </div>
                    <div class="control-field" style="flex:0 0 auto; display:flex; align-items:flex-end;">
                        <button class="btn-primary" id="expr-eval-btn">Evaluate Step-by-Step</button>
                    </div>
                </div>
                <div id="expr-result" class="result-display" style="min-height:120px;">Click "Evaluate Step-by-Step" to see the trace.</div>
            </div>

            <!-- ============ SECTION: INCREMENT/DECREMENT ============ -->
            <div class="theory-section">
                <h2>5. Increment & Decrement Operators</h2>
                <p>The <code>++</code> and <code>--</code> operators increase or decrease a variable by 1. They come in two flavors:</p>
                <table class="styled-table">
                    <thead><tr><th>Form</th><th>Name</th><th>Action</th><th>Value of Expression</th></tr></thead>
                    <tbody>
                        <tr><td><code>i++</code></td><td>Post-increment</td><td>Use current value, THEN add 1</td><td>Old value of i</td></tr>
                        <tr><td><code>++i</code></td><td>Pre-increment</td><td>Add 1 FIRST, then use new value</td><td>New value of i</td></tr>
                        <tr><td><code>i--</code></td><td>Post-decrement</td><td>Use current value, THEN subtract 1</td><td>Old value of i</td></tr>
                        <tr><td><code>--i</code></td><td>Pre-decrement</td><td>Subtract 1 FIRST, then use new value</td><td>New value of i</td></tr>
                    </tbody>
                </table>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 5;

    cout << "Initial: a = " << a << ", b = " << b << endl;

    int x = a++;  // x gets 5 (old value), then a becomes 6
    int y = ++b;  // b becomes 6 first, then y gets 6

    cout << "After x = a++: x = " << x << ", a = " << a << endl;
    cout << "After y = ++b: y = " << y << ", b = " << b << endl;

    return 0;
}`, `Initial: a = 5, b = 5
After x = a++: x = 5, a = 6
After y = ++b: y = 6, b = 6`, 'cpp', 'Pre vs Post Increment')}
            </div>

            <!-- ============ SECTION: COMMA OPERATOR ============ -->
            <div class="theory-section">
                <h2>6. The Comma Operator</h2>
                <p>The comma operator <code>,</code> evaluates two expressions from left to right and returns the value of the <strong>rightmost</strong> expression. It has the lowest precedence of all operators.</p>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int x, y;

    // Comma operator: both expressions are evaluated,
    // but the result of the whole expression is the rightmost value
    x = (3 + 2, 4 + 1);  // 3+2=5 is evaluated and discarded, x = 4+1 = 5
    cout << "x = (3+2, 4+1) => x = " << x << endl;

    // Common use: multiple initializations in for loop
    for (x = 0, y = 10; x < 5; x++, y--)
        cout << "x=" << x << ", y=" << y << endl;

    return 0;
}`, `x = (3+2, 4+1) => x = 5
x=0, y=10
x=1, y=9
x=2, y=8
x=3, y=7
x=4, y=6`, 'cpp', 'Comma Operator')}
            </div>
            `;
        },

        init() {
            const evalBtn = document.getElementById('expr-eval-btn');
            if (!evalBtn) return;

            evalBtn.addEventListener('click', function () {
                const varsStr = document.getElementById('expr-vars').value.trim();
                const exprStr = document.getElementById('expr-input').value.trim();
                const resultDiv = document.getElementById('expr-result');

                if (!varsStr || !exprStr) {
                    resultDiv.innerHTML = '<span style="color:var(--accent-red);">Please enter variable values and an expression.</span>';
                    return;
                }

                // Parse variables
                const vars = {};
                try {
                    varsStr.split(',').forEach(function (pair) {
                        const parts = pair.trim().split('=');
                        if (parts.length === 2) {
                            vars[parts[0].trim()] = parseFloat(parts[1].trim());
                        }
                    });
                } catch (e) {
                    resultDiv.innerHTML = '<span style="color:var(--accent-red);">Invalid variable format. Use: a=6, b=4, c=3</span>';
                    return;
                }

                // Substitute variables into expression
                var substituted = exprStr;
                var sortedKeys = Object.keys(vars).sort(function (a, b) { return b.length - a.length; });
                for (var k = 0; k < sortedKeys.length; k++) {
                    var key = sortedKeys[k];
                    substituted = substituted.replace(new RegExp('\\b' + key + '\\b', 'g'), vars[key]);
                }

                // Tokenize and evaluate step by step
                var steps = [];
                var opPrecedence = { '+': 1, '-': 1, '*': 2, '/': 2, '%': 2 };
                var tokens = [];

                // Simple tokenizer for numbers and basic operators
                var numBuf = '';
                for (var ci = 0; ci < substituted.length; ci++) {
                    var ch = substituted[ci];
                    if (ch === ' ') {
                        if (numBuf) { tokens.push({ type: 'num', val: parseFloat(numBuf) }); numBuf = ''; }
                        continue;
                    }
                    if ('+-*/%'.indexOf(ch) !== -1 && numBuf) {
                        tokens.push({ type: 'num', val: parseFloat(numBuf) });
                        numBuf = '';
                        tokens.push({ type: 'op', val: ch });
                    } else if ('+-*/%'.indexOf(ch) !== -1 && !numBuf) {
                        // Unary case or start
                        if (tokens.length === 0 || tokens[tokens.length - 1].type === 'op') {
                            numBuf += ch;
                        } else {
                            tokens.push({ type: 'op', val: ch });
                        }
                    } else if ((ch >= '0' && ch <= '9') || ch === '.') {
                        numBuf += ch;
                    }
                }
                if (numBuf) tokens.push({ type: 'num', val: parseFloat(numBuf) });

                // Evaluate using precedence (flatten step-by-step)
                var stepNum = 0;
                var maxPrec = 2;
                var minPrec = 1;

                function formatTokens(tks) {
                    var s = '';
                    for (var ti = 0; ti < tks.length; ti++) {
                        if (ti > 0 && tks[ti].type === 'num' && tks[ti - 1].type === 'num') s += ' ';
                        s += (tks[ti].type === 'op' ? ' ' + tks[ti].val + ' ' : (Number.isInteger(tks[ti].val) ? tks[ti].val : tks[ti].val.toFixed(4).replace(/0+$/, '').replace(/\.$/, '')));
                    }
                    return s.trim();
                }

                for (var prec = maxPrec; prec >= minPrec; prec--) {
                    var idx = 0;
                    while (idx < tokens.length) {
                        if (tokens[idx].type === 'op' && opPrecedence[tokens[idx].val] === prec) {
                            var left = tokens[idx - 1].val;
                            var op = tokens[idx].val;
                            var right = tokens[idx + 1].val;
                            var res;
                            if (op === '+') res = left + right;
                            else if (op === '-') res = left - right;
                            else if (op === '*') res = left * right;
                            else if (op === '/') res = right !== 0 ? left / right : NaN;
                            else if (op === '%') res = left % right;
                            stepNum++;
                            var leftStr = Number.isInteger(left) ? left : left.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
                            var rightStr = Number.isInteger(right) ? right : right.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
                            var resStr = Number.isInteger(res) ? res : res.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
                            steps.push({
                                step: stepNum,
                                operation: leftStr + ' ' + op + ' ' + rightStr,
                                result: resStr,
                                reason: op === '*' || op === '/' || op === '%' ? 'Precedence ' + prec + ' (*/%)' : 'Precedence ' + prec + ' (+/-)',
                            });
                            tokens.splice(idx - 1, 3, { type: 'num', val: res });
                            idx = 0; // restart scan for same precedence
                        } else {
                            idx++;
                        }
                    }
                }

                // Build output
                var html = '<div style="margin-bottom:10px;"><strong>Variables:</strong> ';
                var vKeys = Object.keys(vars);
                for (var vi = 0; vi < vKeys.length; vi++) {
                    html += '<code>' + vKeys[vi] + '=' + vars[vKeys[vi]] + '</code>';
                    if (vi < vKeys.length - 1) html += ', ';
                }
                html += '</div>';
                html += '<div style="margin-bottom:10px;"><strong>Expression:</strong> <code>' + exprStr + '</code> → <code>' + substituted + '</code></div>';
                html += '<div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:8px;">';

                if (steps.length === 0 && tokens.length === 1) {
                    html += '<div>Result: <strong style="color:var(--accent-cyan);">' + tokens[0].val + '</strong></div>';
                } else {
                    for (var si = 0; si < steps.length; si++) {
                        var s = steps[si];
                        html += '<div style="margin:4px 0; padding:4px 8px; background:rgba(167,139,250,0.1); border-radius:6px;">';
                        html += '<strong style="color:var(--accent-purple);">Step ' + s.step + ':</strong> ';
                        html += '<code>' + s.operation + ' = <strong>' + s.result + '</strong></code>';
                        html += ' <span style="color:var(--text-secondary);font-size:0.85em;">(' + s.reason + ')</span>';
                        html += '</div>';
                    }
                    if (tokens.length === 1) {
                        var fv = tokens[0].val;
                        var fvStr = Number.isInteger(fv) ? fv : fv.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
                        html += '<div style="margin-top:8px; font-size:1.1em;">✅ <strong>Final Result = <span style="color:var(--accent-green);">' + fvStr + '</span></strong></div>';
                    }
                }
                html += '</div>';
                resultDiv.innerHTML = html;
            });
        }
    });


    /* ===================================================================
       TOPIC 2: I/O STATEMENTS
       =================================================================== */
    window.APP.register({
        id: 'io-statements',
        title: 'I/O Statements',
        unit: 1,
        icon: '⌨️',
        description: 'printf, scanf, cin, cout, streams and file I/O',

        content() {
            /* --- Build tabbed sub-sections --- */
            const cStyleContent = `
                <div class="theory-section">
                    <h2>C-Style I/O Functions</h2>
                    <p>C-style I/O functions come from the C language and are declared in the header <code>&lt;cstdio&gt;</code> (or <code>&lt;stdio.h&gt;</code>). They use <strong>format strings</strong> to control how data is displayed or read.</p>

                    <h3>printf() — Formatted Output</h3>
                    <p><code>printf()</code> prints formatted text to the standard output (screen). It takes a <strong>format string</strong> containing literal text and <strong>format specifiers</strong> (placeholders) that are replaced by the values of additional arguments.</p>

                    <div class="concept-box">
                        <h4>Syntax</h4>
                        <p><code>printf("format string", arg1, arg2, ...);</code></p>
                        <p>Each <code>%</code> specifier in the format string is matched to the corresponding argument in order.</p>
                    </div>

                    <h4>Format Specifiers</h4>
                    <table class="styled-table">
                        <thead><tr><th>Specifier</th><th>Data Type</th><th>Example</th><th>Output</th></tr></thead>
                        <tbody>
                            <tr><td><code>%d</code> or <code>%i</code></td><td>int (decimal)</td><td><code>printf("%d", 42);</code></td><td>42</td></tr>
                            <tr><td><code>%f</code></td><td>float / double</td><td><code>printf("%f", 3.14);</code></td><td>3.140000</td></tr>
                            <tr><td><code>%lf</code></td><td>double (scanf only)</td><td><code>scanf("%lf", &d);</code></td><td>—</td></tr>
                            <tr><td><code>%c</code></td><td>char</td><td><code>printf("%c", 'A');</code></td><td>A</td></tr>
                            <tr><td><code>%s</code></td><td>string (char array)</td><td><code>printf("%s", "Hi");</code></td><td>Hi</td></tr>
                            <tr><td><code>%e</code></td><td>Scientific notation</td><td><code>printf("%e", 0.0031);</code></td><td>3.100000e-03</td></tr>
                            <tr><td><code>%o</code></td><td>Octal</td><td><code>printf("%o", 255);</code></td><td>377</td></tr>
                            <tr><td><code>%x</code></td><td>Hexadecimal</td><td><code>printf("%x", 255);</code></td><td>ff</td></tr>
                            <tr><td><code>%u</code></td><td>unsigned int</td><td><code>printf("%u", 42);</code></td><td>42</td></tr>
                            <tr><td><code>%%</code></td><td>Literal %</td><td><code>printf("100%%");</code></td><td>100%</td></tr>
                        </tbody>
                    </table>

                    <h4>Width and Precision</h4>
                    <p>You can control the width and precision of output using modifiers between <code>%</code> and the specifier letter.</p>
                    <table class="styled-table">
                        <thead><tr><th>Format</th><th>Meaning</th><th>Example</th><th>Output</th></tr></thead>
                        <tbody>
                            <tr><td><code>%10d</code></td><td>Right-aligned, width 10</td><td><code>printf("%10d", 42);</code></td><td><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;42</code></td></tr>
                            <tr><td><code>%-10d</code></td><td>Left-aligned, width 10</td><td><code>printf("%-10d", 42);</code></td><td><code>42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code></td></tr>
                            <tr><td><code>%.2f</code></td><td>2 decimal places</td><td><code>printf("%.2f", 3.14159);</code></td><td>3.14</td></tr>
                            <tr><td><code>%8.3f</code></td><td>Width 8, 3 decimal places</td><td><code>printf("%8.3f", 3.14);</code></td><td><code>&nbsp;&nbsp;&nbsp;3.140</code></td></tr>
                            <tr><td><code>%05d</code></td><td>Zero-padded, width 5</td><td><code>printf("%05d", 42);</code></td><td>00042</td></tr>
                        </tbody>
                    </table>

                    <h4>Escape Sequences</h4>
                    <table class="styled-table">
                        <thead><tr><th>Sequence</th><th>Meaning</th></tr></thead>
                        <tbody>
                            <tr><td><code>\\n</code></td><td>Newline</td></tr>
                            <tr><td><code>\\t</code></td><td>Horizontal tab</td></tr>
                            <tr><td><code>\\\\</code></td><td>Backslash</td></tr>
                            <tr><td><code>\\"</code></td><td>Double quote</td></tr>
                            <tr><td><code>\\0</code></td><td>Null character</td></tr>
                            <tr><td><code>\\a</code></td><td>Alert (bell)</td></tr>
                            <tr><td><code>\\b</code></td><td>Backspace</td></tr>
                        </tbody>
                    </table>

${APP.codeWithOutput(`#include <cstdio>

int main() {
    int age = 21;
    float gpa = 8.75;
    char grade = 'A';

    printf("Student Report:\\n");
    printf("==============\\n");
    printf("Age:   %d years\\n", age);
    printf("GPA:   %.2f\\n", gpa);
    printf("Grade: %c\\n", grade);
    printf("\\nFormatted table:\\n");
    printf("%-15s %8s\\n", "Subject", "Marks");
    printf("%-15s %8d\\n", "Physics", 85);
    printf("%-15s %8d\\n", "Mathematics", 92);
    printf("%-15s %8d\\n", "Chemistry", 78);

    return 0;
}`, `Student Report:
==============
Age:   21 years
GPA:   8.75
Grade: A

Formatted table:
Subject            Marks
Physics               85
Mathematics            92
Chemistry              78`, 'cpp', 'printf() Complete Example')}

                    <h3>scanf() — Formatted Input</h3>
                    <p><code>scanf()</code> reads formatted input from the keyboard. It uses the same format specifiers as <code>printf()</code>, but requires the <strong>address</strong> of variables (using the <code>&</code> operator).</p>

                    <div class="warning-box">
                        <h4>The & Operator is Essential!</h4>
                        <p><code>scanf()</code> needs to know <em>where</em> to store the input, so you must pass the <strong>address</strong> of the variable using <code>&</code>. Forgetting <code>&</code> is a very common bug that causes crashes or garbage values.</p>
                    </div>

${APP.codeWithOutput(`#include <cstdio>

int main() {
    int age;
    float height;
    char initial;

    printf("Enter age: ");
    scanf("%d", &age);           // Note the & before age

    printf("Enter height (in m): ");
    scanf("%f", &height);        // Note the & before height

    printf("Enter first initial: ");
    scanf(" %c", &initial);      // Space before %c skips whitespace

    printf("\\nYou entered:\\n");
    printf("Age: %d, Height: %.2f m, Initial: %c\\n", age, height, initial);

    return 0;
}`, `Enter age: 21
Enter height (in m): 1.75
Enter first initial: R

You entered:
Age: 21, Height: 1.75 m, Initial: R`, 'cpp', 'scanf() Example')}

                    <h3>Character Input Functions</h3>
                    <p>C/C++ provides several functions to read individual characters. Each behaves slightly differently:</p>

                    <table class="styled-table">
                        <thead><tr><th>Function</th><th>Header</th><th>Echo?</th><th>Buffered?</th><th>Waits for Enter?</th><th>Description</th></tr></thead>
                        <tbody>
                            <tr><td><code>getchar()</code></td><td><code>&lt;cstdio&gt;</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Reads one char after Enter is pressed (standard C)</td></tr>
                            <tr><td><code>getc(stdin)</code></td><td><code>&lt;cstdio&gt;</code></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Same as getchar() but can read from any stream</td></tr>
                            <tr><td><code>getch()</code></td><td><code>&lt;conio.h&gt;</code></td><td>No</td><td>No</td><td>No</td><td>Reads one char immediately, no echo (non-standard, Windows)</td></tr>
                            <tr><td><code>getche()</code></td><td><code>&lt;conio.h&gt;</code></td><td>Yes</td><td>No</td><td>No</td><td>Reads one char immediately, with echo (non-standard, Windows)</td></tr>
                        </tbody>
                    </table>

                    <div class="info-box">
                        <h4>Note on Portability</h4>
                        <p><code>getch()</code> and <code>getche()</code> are <strong>non-standard</strong> — they only work on Windows with <code>&lt;conio.h&gt;</code>. They are not part of the C or C++ standard. For portable code, use <code>getchar()</code> or C++ stream input.</p>
                    </div>

${APP.codeWithOutput(`#include <cstdio>

int main() {
    char ch;

    printf("Enter a character: ");
    ch = getchar();  // Waits for Enter, shows typed char
    printf("You typed: %c (ASCII: %d)\\n", ch, ch);

    // getc(stdin) behaves identically to getchar()
    printf("Enter another: ");
    // Consume leftover newline from previous getchar
    getchar();
    ch = getc(stdin);
    printf("You typed: %c (ASCII: %d)\\n", ch, ch);

    return 0;
}`, `Enter a character: A
You typed: A (ASCII: 65)
Enter another: B
You typed: B (ASCII: 66)`, 'cpp', 'getchar() and getc()')}
                </div>
            `;

            const cppStyleContent = `
                <div class="theory-section">
                    <h2>C++ Stream I/O</h2>
                    <p>C++ introduces a more powerful and type-safe I/O system based on <strong>streams</strong>. A stream is an abstraction of a flow of data — like water flowing through a pipe. Data flows from a <strong>source</strong> (keyboard, file) into your program, or from your program to a <strong>destination</strong> (screen, file).</p>

                    <div class="concept-box">
                        <h4>The Stream Concept</h4>
                        <p>Think of a stream as a conveyor belt of characters:</p>
                        <ul>
                            <li><strong>Input stream (cin)</strong>: Characters flow FROM the keyboard INTO your variables</li>
                            <li><strong>Output stream (cout)</strong>: Characters flow FROM your variables ONTO the screen</li>
                        </ul>
                        <p>The <code>&lt;&lt;</code> and <code>&gt;&gt;</code> operators visually show the direction of data flow!</p>
                    </div>

                    <div class="diagram-container">
                        <div style="display:flex; align-items:center; justify-content:center; gap:12px; flex-wrap:wrap;">
                            <div class="flow-node start" style="min-width:100px;">Keyboard</div>
                            <div class="flow-arrow">→ &gt;&gt;</div>
                            <div class="flow-node process">cin</div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node decision">Variable</div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node process">cout</div>
                            <div class="flow-arrow">&lt;&lt; →</div>
                            <div class="flow-node end" style="min-width:100px;">Screen</div>
                        </div>
                    </div>

                    <h3>cout — Standard Output</h3>
                    <p><code>cout</code> (character output) sends data to the screen using the <strong>insertion operator</strong> <code>&lt;&lt;</code>. You can chain multiple <code>&lt;&lt;</code> operators to print several items in one statement.</p>

                    <div class="tip-box">
                        <h4>Advantages over printf()</h4>
                        <ul>
                            <li><strong>Type-safe</strong>: No need for format specifiers — <code>cout</code> automatically knows the type</li>
                            <li><strong>Extensible</strong>: You can overload <code>&lt;&lt;</code> for custom types</li>
                            <li><strong>Chainable</strong>: Print multiple items in one statement</li>
                            <li><strong>No & needed</strong>: No address-of operator required</li>
                        </ul>
                    </div>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int age = 21;
    double pi = 3.14159;
    string name = "Ramanujan";
    char grade = 'A';

    // Basic output
    cout << "Hello, World!" << endl;

    // Chaining multiple values
    cout << "Name: " << name << ", Age: " << age << endl;

    // Different data types — no format specifiers needed!
    cout << "Pi = " << pi << endl;
    cout << "Grade = " << grade << endl;

    // endl vs \\n
    cout << "Line 1" << endl;  // Flushes buffer
    cout << "Line 2\\n";        // Faster, no flush

    return 0;
}`, `Hello, World!
Name: Ramanujan, Age: 21
Pi = 3.14159
Grade = A
Line 1
Line 2`, 'cpp', 'cout Examples')}

                    <h3>cin — Standard Input</h3>
                    <p><code>cin</code> (character input) reads data from the keyboard using the <strong>extraction operator</strong> <code>&gt;&gt;</code>. It automatically converts the text typed by the user into the correct data type.</p>

                    <div class="warning-box">
                        <h4>cin stops at whitespace</h4>
                        <p>The <code>&gt;&gt;</code> operator stops reading at whitespace (space, tab, newline). To read a full line including spaces, use <code>getline(cin, variable)</code>.</p>
                    </div>

${APP.codeWithOutput(`#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    double height;
    string firstName, fullLine;

    // Reading single values
    cout << "Enter your age: ";
    cin >> age;

    cout << "Enter your height (m): ";
    cin >> height;

    cout << "Enter first name: ";
    cin >> firstName;   // Reads until whitespace

    // Clear the newline left in buffer
    cin.ignore();

    // Reading full line with spaces
    cout << "Enter your full address: ";
    getline(cin, fullLine);

    cout << "\\n--- Your Details ---\\n";
    cout << "Age: " << age << endl;
    cout << "Height: " << height << " m" << endl;
    cout << "Name: " << firstName << endl;
    cout << "Address: " << fullLine << endl;

    return 0;
}`, `Enter your age: 21
Enter your height (m): 1.75
Enter first name: Srinivasa
Enter your full address: 12 Sarangapani Street, Kumbakonam

--- Your Details ---
Age: 21
Height: 1.75 m
Name: Srinivasa
Address: 12 Sarangapani Street, Kumbakonam`, 'cpp', 'cin and getline() Examples')}

                    <h3>Chaining I/O Operations</h3>
                    <p>Both <code>cin</code> and <code>cout</code> support chaining — you can read or write multiple values in a single statement:</p>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

int main() {
    int a, b, c;

    cout << "Enter three numbers separated by spaces: ";
    cin >> a >> b >> c;  // Reads three ints in one statement

    int sum = a + b + c;

    cout << a << " + " << b << " + " << c << " = " << sum << endl;

    return 0;
}`, `Enter three numbers separated by spaces: 10 20 30
10 + 20 + 30 = 60`, 'cpp', 'Chaining cin and cout')}

                    <h3>cerr and clog</h3>
                    <p>C++ provides two additional output streams:</p>
                    <table class="styled-table">
                        <thead><tr><th>Stream</th><th>Purpose</th><th>Buffered?</th></tr></thead>
                        <tbody>
                            <tr><td><code>cout</code></td><td>Standard output</td><td>Yes</td></tr>
                            <tr><td><code>cerr</code></td><td>Standard error (immediate)</td><td>No</td></tr>
                            <tr><td><code>clog</code></td><td>Standard log</td><td>Yes</td></tr>
                        </tbody>
                    </table>

${APP.codeBlock(`#include <iostream>
using namespace std;

int main() {
    cout << "Normal output" << endl;
    cerr << "Error message!" << endl;   // Displayed immediately
    clog << "Log message" << endl;      // Buffered log

    return 0;
}`, 'cpp', 'cerr and clog')}
                </div>
            `;

            const fileStreamContent = `
                <div class="theory-section">
                    <h2>File Streams in C++</h2>
                    <p>File streams allow your program to read from and write to files on disk. They work just like <code>cin</code> and <code>cout</code>, but instead of the keyboard/screen, the data flows to/from a file.</p>
                    <p>File stream classes are declared in the <code>&lt;fstream&gt;</code> header:</p>

                    <table class="styled-table">
                        <thead><tr><th>Class</th><th>Purpose</th><th>Direction</th></tr></thead>
                        <tbody>
                            <tr><td><code>ifstream</code></td><td>Input file stream — read from file</td><td>File → Program</td></tr>
                            <tr><td><code>ofstream</code></td><td>Output file stream — write to file</td><td>Program → File</td></tr>
                            <tr><td><code>fstream</code></td><td>General file stream — read and write</td><td>Both directions</td></tr>
                        </tbody>
                    </table>

                    <h3>Writing to a File (ofstream)</h3>
                    <p>To write data to a file, create an <code>ofstream</code> object, open the file, write using <code>&lt;&lt;</code>, then close it.</p>

${APP.codeWithOutput(`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Create and open a file for writing
    ofstream outFile("student.txt");

    if (!outFile) {
        cerr << "Error: Could not create file!" << endl;
        return 1;
    }

    // Write data using << (just like cout!)
    outFile << "Student Record" << endl;
    outFile << "==============" << endl;
    outFile << "Name: Raman" << endl;
    outFile << "Roll: 101" << endl;
    outFile << "GPA: 9.2" << endl;

    outFile.close();  // Always close the file!
    cout << "Data written to student.txt successfully!" << endl;

    return 0;
}`, `Data written to student.txt successfully!

[File student.txt contains:]
Student Record
==============
Name: Raman
Roll: 101
GPA: 9.2`, 'cpp', 'Writing to a File')}

                    <h3>Reading from a File (ifstream)</h3>
                    <p>To read data from a file, create an <code>ifstream</code> object. You can read word-by-word with <code>&gt;&gt;</code> or line-by-line with <code>getline()</code>.</p>

${APP.codeWithOutput(`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream inFile("student.txt");

    if (!inFile) {
        cerr << "Error: Could not open file!" << endl;
        return 1;
    }

    // Read file line by line
    string line;
    cout << "Contents of student.txt:" << endl;
    cout << "------------------------" << endl;

    while (getline(inFile, line)) {
        cout << line << endl;
    }

    inFile.close();
    return 0;
}`, `Contents of student.txt:
------------------------
Student Record
==============
Name: Raman
Roll: 101
GPA: 9.2`, 'cpp', 'Reading from a File')}

                    <h3>Read and Write with fstream</h3>
                    <p><code>fstream</code> can do both reading and writing. You specify the mode when opening:</p>

                    <table class="styled-table">
                        <thead><tr><th>Mode</th><th>Meaning</th></tr></thead>
                        <tbody>
                            <tr><td><code>ios::in</code></td><td>Open for reading</td></tr>
                            <tr><td><code>ios::out</code></td><td>Open for writing (overwrites)</td></tr>
                            <tr><td><code>ios::app</code></td><td>Append to end of file</td></tr>
                            <tr><td><code>ios::ate</code></td><td>Open and seek to end</td></tr>
                            <tr><td><code>ios::binary</code></td><td>Binary mode</td></tr>
                            <tr><td><code>ios::trunc</code></td><td>Truncate (delete) existing content</td></tr>
                        </tbody>
                    </table>

${APP.codeWithOutput(`#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Write numbers to a file
    ofstream out("numbers.txt");
    for (int i = 1; i <= 5; i++) {
        out << i << " " << i * i << endl;
    }
    out.close();

    // Read numbers back from the file
    ifstream in("numbers.txt");
    int num, square;
    cout << "Number  Square" << endl;
    cout << "------  ------" << endl;
    while (in >> num >> square) {
        cout << "  " << num << "       " << square << endl;
    }
    in.close();

    // Append to the file
    ofstream app("numbers.txt", ios::app);
    app << 6 << " " << 36 << endl;
    app.close();
    cout << "\\nAppended 6 36 to file." << endl;

    return 0;
}`, `Number  Square
------  ------
  1       1
  2       4
  3       9
  4       16
  5       25

Appended 6 36 to file.`, 'cpp', 'Complete File I/O Example')}

                    <h3>Complete Program: Storing and Retrieving Student Data</h3>

${APP.codeWithOutput(`#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    int n;
    cout << "How many students? ";
    cin >> n;
    cin.ignore();

    // Write student data to file
    ofstream outFile("students.dat");

    for (int i = 0; i < n; i++) {
        string name;
        int roll;
        float marks;

        cout << "\\nStudent " << i + 1 << ":\\n";
        cout << "  Name: ";
        getline(cin, name);
        cout << "  Roll: ";
        cin >> roll;
        cout << "  Marks: ";
        cin >> marks;
        cin.ignore();

        outFile << name << endl;
        outFile << roll << " " << marks << endl;
    }
    outFile.close();

    // Read and display
    cout << "\\n====== Student Records ======\\n";
    ifstream inFile("students.dat");
    string name;
    int roll;
    float marks;

    while (getline(inFile, name)) {
        inFile >> roll >> marks;
        inFile.ignore();
        cout << "Name: " << name
             << ", Roll: " << roll
             << ", Marks: " << marks << endl;
    }
    inFile.close();

    return 0;
}`, `How many students? 2

Student 1:
  Name: C.V. Raman
  Roll: 101
  Marks: 95.5

Student 2:
  Name: Homi Bhabha
  Roll: 102
  Marks: 92.0

====== Student Records ======
Name: C.V. Raman, Roll: 101, Marks: 95.5
Name: Homi Bhabha, Roll: 102, Marks: 92`, 'cpp', 'Student Data File Example')}
                </div>
            `;

            /* --- Combine into tabs and full page --- */
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> <span>I/O Statements</span></div>
                <h1>⌨️ I/O Statements</h1>
                <p class="topic-subtitle">Input/Output operations in C and C++ — from printf to file streams</p>
            </div>

            <div class="theory-section">
                <h2>Introduction to I/O</h2>
                <p>Input/Output (I/O) operations are how a program communicates with the outside world. Without I/O, a program would just compute values internally with no way to show results or accept user data. C++ supports two styles of I/O:</p>

                <div class="diagram-container">
                    <div style="display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap;">
                        <div class="flow-node start">Input Device<br><small>(Keyboard / File)</small></div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node process">C++ Program</div>
                        <div class="flow-arrow">→</div>
                        <div class="flow-node end">Output Device<br><small>(Screen / File)</small></div>
                    </div>
                </div>

                <table class="styled-table">
                    <thead><tr><th>Feature</th><th>C-Style (printf/scanf)</th><th>C++ Style (cout/cin)</th></tr></thead>
                    <tbody>
                        <tr><td>Header</td><td><code>&lt;cstdio&gt;</code></td><td><code>&lt;iostream&gt;</code></td></tr>
                        <tr><td>Output</td><td><code>printf("...", args)</code></td><td><code>cout &lt;&lt; data</code></td></tr>
                        <tr><td>Input</td><td><code>scanf("...", &var)</code></td><td><code>cin &gt;&gt; var</code></td></tr>
                        <tr><td>Type Safety</td><td>None (wrong % causes bugs)</td><td>Full (automatic type detection)</td></tr>
                        <tr><td>Extensible</td><td>No</td><td>Yes (operator overloading)</td></tr>
                        <tr><td>Format Control</td><td>In format string</td><td>Using manipulators</td></tr>
                        <tr><td>Address Needed?</td><td>Yes (<code>&</code> for scanf)</td><td>No</td></tr>
                    </tbody>
                </table>
            </div>

            ${APP.createTabs('io-tabs', [
                { label: '📟 C-Style I/O', content: cStyleContent },
                { label: '🔷 C++ Streams', content: cppStyleContent },
                { label: '📁 File Streams', content: fileStreamContent }
            ])}

            <!-- ============ INTERACTIVE: SIMULATED CONSOLE ============ -->
            <div class="interactive-area">
                <h3>Simulated C++ Console</h3>
                <p>Type simple C++ output statements and see the simulated output. Supports <code>cout &lt;&lt;</code> and <code>printf()</code> statements.</p>

                <div class="controls-row">
                    <div class="control-field" style="flex:1;">
                        <label for="io-code-input">C++ Output Code (one statement per line)</label>
                        <textarea id="io-code-input" rows="6" style="width:100%; background:var(--bg-code); color:var(--text-primary); border:1px solid var(--glass-border); border-radius:var(--radius-sm); padding:12px; font-family:'JetBrains Mono',monospace; font-size:0.9em; resize:vertical;">cout << "Hello, World!" << endl;
cout << "Pi = " << 3.14159 << endl;
cout << "Sum = " << 10 + 20 << endl;
printf("Name: %s, Age: %d\\n", "Alice", 21);
cout << "Done!" << endl;</textarea>
                    </div>
                </div>
                <div class="controls-row">
                    <button class="btn-primary" id="io-run-btn">▶ Run Code</button>
                    <button class="btn-secondary" id="io-clear-btn">Clear Output</button>
                </div>
                <div id="io-output" class="result-display" style="min-height:100px; white-space:pre-wrap;">Output will appear here...</div>
            </div>

            <div class="theory-section">
                <h2>Summary of Key I/O Functions</h2>
                <table class="styled-table">
                    <thead><tr><th>Function / Object</th><th>Type</th><th>Purpose</th><th>Header</th></tr></thead>
                    <tbody>
                        <tr><td><code>printf()</code></td><td>C function</td><td>Formatted output to screen</td><td><code>&lt;cstdio&gt;</code></td></tr>
                        <tr><td><code>scanf()</code></td><td>C function</td><td>Formatted input from keyboard</td><td><code>&lt;cstdio&gt;</code></td></tr>
                        <tr><td><code>getchar()</code></td><td>C function</td><td>Read one character (buffered)</td><td><code>&lt;cstdio&gt;</code></td></tr>
                        <tr><td><code>getch()</code></td><td>C function</td><td>Read one char, no echo (Windows)</td><td><code>&lt;conio.h&gt;</code></td></tr>
                        <tr><td><code>cout</code></td><td>C++ stream</td><td>Output to screen</td><td><code>&lt;iostream&gt;</code></td></tr>
                        <tr><td><code>cin</code></td><td>C++ stream</td><td>Input from keyboard</td><td><code>&lt;iostream&gt;</code></td></tr>
                        <tr><td><code>cerr</code></td><td>C++ stream</td><td>Error output (unbuffered)</td><td><code>&lt;iostream&gt;</code></td></tr>
                        <tr><td><code>getline()</code></td><td>C++ function</td><td>Read full line with spaces</td><td><code>&lt;string&gt;</code></td></tr>
                        <tr><td><code>ifstream</code></td><td>C++ class</td><td>Read from files</td><td><code>&lt;fstream&gt;</code></td></tr>
                        <tr><td><code>ofstream</code></td><td>C++ class</td><td>Write to files</td><td><code>&lt;fstream&gt;</code></td></tr>
                        <tr><td><code>fstream</code></td><td>C++ class</td><td>Read and write files</td><td><code>&lt;fstream&gt;</code></td></tr>
                    </tbody>
                </table>
            </div>
            `;
        },

        init() {
            /* Simulated Console */
            var runBtn = document.getElementById('io-run-btn');
            var clearBtn = document.getElementById('io-clear-btn');

            if (!runBtn) return;

            runBtn.addEventListener('click', function () {
                var codeInput = document.getElementById('io-code-input').value;
                var outputDiv = document.getElementById('io-output');
                var lines = codeInput.split('\n');
                var output = '';

                for (var li = 0; li < lines.length; li++) {
                    var line = lines[li].trim();
                    if (!line || line.startsWith('//')) continue;

                    // Handle cout statements
                    if (line.indexOf('cout') !== -1) {
                        output += parseCoutLine(line);
                    }
                    // Handle printf statements
                    else if (line.indexOf('printf') !== -1) {
                        output += parsePrintfLine(line);
                    }
                }

                outputDiv.textContent = output || '(No output produced)';
            });

            clearBtn.addEventListener('click', function () {
                document.getElementById('io-output').textContent = 'Output will appear here...';
            });

            function parseCoutLine(line) {
                var result = '';
                // Remove cout and trailing semicolon
                var content = line.replace(/^\s*cout\s*/, '').replace(/;\s*$/, '');
                // Split by <<
                var parts = content.split('<<');
                for (var pi = 0; pi < parts.length; pi++) {
                    var part = parts[pi].trim();
                    if (!part) continue;

                    if (part === 'endl') {
                        result += '\n';
                    } else if (part.charAt(0) === '"' || part.charAt(0) === "'") {
                        // String literal — remove quotes and handle escape sequences
                        var str = part.slice(1, -1);
                        str = str.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
                        result += str;
                    } else {
                        // Try to evaluate as expression
                        try {
                            var val = Function('"use strict"; return (' + part + ')')();
                            result += String(val);
                        } catch (e) {
                            result += part;
                        }
                    }
                }
                return result;
            }

            function parsePrintfLine(line) {
                var result = '';
                // Extract content between parentheses
                var match = line.match(/printf\s*\(\s*(.*)\s*\)\s*;?\s*$/);
                if (!match) return '';

                var argsStr = match[1];
                // Split arguments respecting quotes
                var args = [];
                var current = '';
                var inQuote = false;
                var quoteChar = '';
                for (var ai = 0; ai < argsStr.length; ai++) {
                    var ch = argsStr[ai];
                    if (!inQuote && (ch === '"' || ch === "'")) {
                        inQuote = true;
                        quoteChar = ch;
                        current += ch;
                    } else if (inQuote && ch === quoteChar && argsStr[ai - 1] !== '\\') {
                        inQuote = false;
                        current += ch;
                    } else if (!inQuote && ch === ',') {
                        args.push(current.trim());
                        current = '';
                    } else {
                        current += ch;
                    }
                }
                if (current.trim()) args.push(current.trim());

                if (args.length === 0) return '';

                // First arg is format string
                var fmt = args[0];
                if (fmt.charAt(0) === '"') fmt = fmt.slice(1, -1);

                var argIdx = 1;
                var i = 0;
                while (i < fmt.length) {
                    if (fmt[i] === '\\' && i + 1 < fmt.length) {
                        if (fmt[i + 1] === 'n') { result += '\n'; i += 2; continue; }
                        if (fmt[i + 1] === 't') { result += '\t'; i += 2; continue; }
                        if (fmt[i + 1] === '\\') { result += '\\'; i += 2; continue; }
                        result += fmt[i + 1]; i += 2; continue;
                    }
                    if (fmt[i] === '%' && i + 1 < fmt.length) {
                        if (fmt[i + 1] === '%') { result += '%'; i += 2; continue; }
                        // Read format spec
                        var specEnd = i + 1;
                        while (specEnd < fmt.length && 'diouxXeEfgGcspn'.indexOf(fmt[specEnd]) === -1) specEnd++;
                        if (specEnd < fmt.length) {
                            var argVal = argIdx < args.length ? args[argIdx] : '';
                            // Remove quotes from string args
                            if (argVal.charAt(0) === '"') argVal = argVal.slice(1, -1);
                            try {
                                var evaluated = Function('"use strict"; return (' + argVal + ')')();
                                var spec = fmt[specEnd];
                                if (spec === 'd' || spec === 'i') {
                                    result += Math.floor(Number(evaluated));
                                } else if (spec === 'f') {
                                    var precision = 6;
                                    var fmtPart = fmt.substring(i, specEnd + 1);
                                    var precMatch = fmtPart.match(/\.(\d+)/);
                                    if (precMatch) precision = parseInt(precMatch[1]);
                                    result += Number(evaluated).toFixed(precision);
                                } else if (spec === 'c') {
                                    result += String(evaluated);
                                } else if (spec === 's') {
                                    result += String(evaluated);
                                } else if (spec === 'e' || spec === 'E') {
                                    result += Number(evaluated).toExponential(6);
                                } else {
                                    result += String(evaluated);
                                }
                            } catch (e2) {
                                result += argVal;
                            }
                            argIdx++;
                            i = specEnd + 1;
                            continue;
                        }
                    }
                    result += fmt[i];
                    i++;
                }
                return result;
            }
        }
    });


    /* ===================================================================
       TOPIC 3: PREPROCESSOR & MANIPULATORS
       =================================================================== */
    window.APP.register({
        id: 'preprocessor',
        title: 'Preprocessor & Manipulators',
        unit: 1,
        icon: '🔨',
        description: '#include, #define directives and output formatting manipulators',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> <span>Preprocessor & Manipulators</span></div>
                <h1>🔨 Preprocessor & Manipulators</h1>
                <p class="topic-subtitle">Understanding preprocessing directives and output formatting tools</p>
            </div>

            <!-- ============ SECTION: PREPROCESSOR ============ -->
            <div class="theory-section">
                <h2>1. The Preprocessor</h2>
                <p>Before your C++ code is compiled, it goes through a <strong>preprocessing stage</strong>. The preprocessor is a text-processing tool that modifies your source code based on special directives (lines beginning with <code>#</code>). It runs before the compiler sees your code.</p>

                <div class="concept-box">
                    <h4>The Compilation Pipeline</h4>
                    <div class="diagram-container">
                        <div style="display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;">
                            <div class="flow-node start">Source Code<br><small>(.cpp)</small></div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node process" style="border-color:var(--accent-orange);">Preprocessor<br><small>(#directives)</small></div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node process">Compiler<br><small>(syntax, types)</small></div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node process">Linker<br><small>(combine)</small></div>
                            <div class="flow-arrow">→</div>
                            <div class="flow-node end">Executable<br><small>(.exe)</small></div>
                        </div>
                    </div>
                    <p>The preprocessor handles <code>#include</code>, <code>#define</code>, <code>#ifdef</code>, and other <code>#</code> directives. The compiler never sees these directives — they are processed and removed before compilation begins.</p>
                </div>

                <h3>1.1 The #include Directive</h3>
                <p><code>#include</code> tells the preprocessor to insert the entire contents of another file at that point in your code. This is how you access library functions and declarations.</p>

                <table class="styled-table">
                    <thead><tr><th>Syntax</th><th>Searches</th><th>Use For</th></tr></thead>
                    <tbody>
                        <tr><td><code>#include &lt;filename&gt;</code></td><td>System/standard library directories</td><td>Standard library headers like <code>iostream</code>, <code>cmath</code></td></tr>
                        <tr><td><code>#include "filename"</code></td><td>Current directory first, then system directories</td><td>Your own header files</td></tr>
                    </tbody>
                </table>

                <h4>Common Header Files</h4>
                <table class="styled-table">
                    <thead><tr><th>Header</th><th>Provides</th><th>Key Functions/Objects</th></tr></thead>
                    <tbody>
                        <tr><td><code>&lt;iostream&gt;</code></td><td>Stream I/O</td><td><code>cin</code>, <code>cout</code>, <code>cerr</code>, <code>endl</code></td></tr>
                        <tr><td><code>&lt;cmath&gt;</code></td><td>Math functions</td><td><code>sqrt()</code>, <code>pow()</code>, <code>sin()</code>, <code>cos()</code>, <code>log()</code></td></tr>
                        <tr><td><code>&lt;cstdio&gt;</code></td><td>C-style I/O</td><td><code>printf()</code>, <code>scanf()</code>, <code>getchar()</code></td></tr>
                        <tr><td><code>&lt;cstring&gt;</code></td><td>C string functions</td><td><code>strlen()</code>, <code>strcpy()</code>, <code>strcmp()</code></td></tr>
                        <tr><td><code>&lt;string&gt;</code></td><td>C++ string class</td><td><code>string</code>, <code>getline()</code></td></tr>
                        <tr><td><code>&lt;fstream&gt;</code></td><td>File stream classes</td><td><code>ifstream</code>, <code>ofstream</code>, <code>fstream</code></td></tr>
                        <tr><td><code>&lt;iomanip&gt;</code></td><td>I/O manipulators</td><td><code>setw()</code>, <code>setprecision()</code>, <code>fixed</code></td></tr>
                        <tr><td><code>&lt;cstdlib&gt;</code></td><td>General utilities</td><td><code>rand()</code>, <code>srand()</code>, <code>abs()</code>, <code>exit()</code></td></tr>
                    </tbody>
                </table>

${APP.createTabs('preproc-include', [
    { label: 'Before Preprocessing', content: APP.codeBlock(`// File: main.cpp
#include <iostream>
#include "mymath.h"

int main() {
    cout << add(3, 4) << endl;
    return 0;
}

// File: mymath.h
int add(int a, int b) {
    return a + b;
}`, 'cpp', 'Source files as written') },
    { label: 'After Preprocessing', content: APP.codeBlock(`// [Thousands of lines from <iostream> inserted here]
// ... iostream declarations ...
// ... cin, cout, endl definitions ...

// [Contents of mymath.h inserted here]
int add(int a, int b) {
    return a + b;
}

int main() {
    cout << add(3, 4) << endl;
    return 0;
}`, 'cpp', 'What the compiler actually sees') + `
<div class="info-box">
    <h4>The #include is literally copy-paste</h4>
    <p>The preprocessor replaces the <code>#include</code> line with the entire contents of the specified file. For <code>&lt;iostream&gt;</code>, this can add thousands of lines! That's why compilation can be slow for large projects.</p>
</div>` }
])}

                <h3>1.2 The #define Directive</h3>
                <p><code>#define</code> creates <strong>macros</strong> — text substitution rules that the preprocessor applies before compilation. There are two types:</p>

                <h4>a) Object-like Macros (Symbolic Constants)</h4>
                <p>These define a name that gets replaced with a value everywhere it appears.</p>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

#define PI 3.14159265
#define MAX_SIZE 100
#define COURSE "Computational Physics"

int main() {
    double radius = 5.0;
    double area = PI * radius * radius;

    cout << "Course: " << COURSE << endl;
    cout << "Area of circle with radius " << radius
         << " = " << area << endl;
    cout << "Maximum array size: " << MAX_SIZE << endl;

    return 0;
}`, `Course: Computational Physics
Area of circle with radius 5 = 78.5398
Maximum array size: 100`, 'cpp', 'Object-like Macros')}

                <h4>b) Function-like Macros</h4>
                <p>These macros take parameters and expand like inline functions — but through text substitution, not function calls.</p>

${APP.codeWithOutput(`#include <iostream>
using namespace std;

#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define ABS(x) ((x) < 0 ? -(x) : (x))

int main() {
    cout << "SQUARE(5) = " << SQUARE(5) << endl;       // 25
    cout << "SQUARE(3+2) = " << SQUARE(3+2) << endl;   // 25 (correct!)
    cout << "MAX(10, 20) = " << MAX(10, 20) << endl;   // 20
    cout << "ABS(-7) = " << ABS(-7) << endl;           // 7

    return 0;
}`, `SQUARE(5) = 25
SQUARE(3+2) = 25
MAX(10, 20) = 20
ABS(-7) = 7`, 'cpp', 'Function-like Macros')}

                <div class="warning-box">
                    <h4>Macro Pitfall: Always Use Parentheses!</h4>
                    <p>Without proper parentheses, macros can produce unexpected results due to text substitution:</p>
                    <ul>
                        <li><code>#define SQUARE(x) x * x</code> → <code>SQUARE(3+2)</code> becomes <code>3+2 * 3+2 = 3+6+2 = 11</code> (WRONG!)</li>
                        <li><code>#define SQUARE(x) ((x) * (x))</code> → <code>SQUARE(3+2)</code> becomes <code>((3+2) * (3+2)) = 5 * 5 = 25</code> (CORRECT!)</li>
                    </ul>
                    <p>Rule: Always wrap each parameter AND the entire expansion in parentheses.</p>
                </div>

                <div class="tip-box">
                    <h4>Modern C++ Alternative</h4>
                    <p>In modern C++, prefer <code>const</code> variables and <code>inline</code> functions over macros:</p>
                    <ul>
                        <li><code>const double PI = 3.14159265;</code> (type-safe, debuggable)</li>
                        <li><code>inline int square(int x) { return x * x; }</code> (type-checked, no macro pitfalls)</li>
                    </ul>
                </div>

                <h3>1.3 Conditional Compilation</h3>
                <p>These directives allow you to include or exclude code based on conditions. This is useful for platform-specific code, debugging, and preventing duplicate includes.</p>

${APP.codeBlock(`// Prevent multiple inclusions of a header file
#ifndef MYMATH_H      // If MYMATH_H is NOT defined...
#define MYMATH_H      // ...define it

int add(int a, int b);
int subtract(int a, int b);

#endif                // End of conditional block

// ----- Another example: debug mode -----
#define DEBUG 1

#include <iostream>
using namespace std;

int main() {
    int x = 42;

    #ifdef DEBUG
        cout << "[DEBUG] x = " << x << endl;   // Only compiled if DEBUG is defined
    #endif

    cout << "Result: " << x * 2 << endl;

    #if DEBUG == 1
        cout << "[VERBOSE DEBUG] Detailed info here" << endl;
    #endif

    return 0;
}`, 'cpp', 'Conditional Compilation')}

                <h3>1.4 Other Preprocessor Directives</h3>
                <table class="styled-table">
                    <thead><tr><th>Directive</th><th>Purpose</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>#ifdef</code></td><td>If macro is defined</td><td><code>#ifdef DEBUG ... #endif</code></td></tr>
                        <tr><td><code>#ifndef</code></td><td>If macro is NOT defined</td><td><code>#ifndef HEADER_H ... #endif</code></td></tr>
                        <tr><td><code>#endif</code></td><td>End conditional block</td><td>Closes <code>#ifdef</code>/<code>#ifndef</code>/<code>#if</code></td></tr>
                        <tr><td><code>#undef</code></td><td>Undefine a macro</td><td><code>#undef PI</code></td></tr>
                        <tr><td><code>#pragma once</code></td><td>Include file only once</td><td>Modern alternative to include guards</td></tr>
                        <tr><td><code>#pragma</code></td><td>Compiler-specific instructions</td><td><code>#pragma warning(disable: 4996)</code></td></tr>
                        <tr><td><code>#error</code></td><td>Generate compilation error</td><td><code>#error "Unsupported platform"</code></td></tr>
                    </tbody>
                </table>
            </div>

            <!-- ============ SECTION: MANIPULATORS ============ -->
            <div class="theory-section">
                <h2>2. I/O Manipulators</h2>
                <p>Manipulators are special functions and objects that modify the behavior of I/O streams. They control how data is formatted when displayed. Most manipulators are in the <code>&lt;iomanip&gt;</code> header.</p>

                <div class="concept-box">
                    <h4>Why Manipulators?</h4>
                    <p>While <code>printf()</code> uses format specifiers like <code>%8.2f</code>, C++ streams use manipulators to achieve the same formatting. Manipulators are inserted into the stream using <code>&lt;&lt;</code> just like data.</p>
                </div>

                <h3>2.1 setw(n) — Set Field Width</h3>
                <p><code>setw(n)</code> sets the minimum width of the <strong>next</strong> output field. If the data is shorter than <code>n</code> characters, it is padded with spaces (or a fill character). Unlike other manipulators, <code>setw()</code> only affects the <strong>very next</strong> output item.</p>

${APP.codeWithOutput(`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << "Default alignment (right):" << endl;
    cout << setw(10) << 42 << endl;
    cout << setw(10) << 1234 << endl;
    cout << setw(10) << 7 << endl;

    cout << "\\nTable with setw:" << endl;
    cout << setw(15) << "Item" << setw(10) << "Price" << endl;
    cout << setw(15) << "Apple" << setw(10) << 1.50 << endl;
    cout << setw(15) << "Banana" << setw(10) << 0.75 << endl;
    cout << setw(15) << "Cherry" << setw(10) << 3.20 << endl;

    return 0;
}`, `Default alignment (right):
        42
      1234
         7

Table with setw:
           Item     Price
          Apple       1.5
         Banana      0.75
         Cherry       3.2`, 'cpp', 'setw() — Field Width')}

                <h3>2.2 setprecision(n) — Decimal Precision</h3>
                <p><code>setprecision(n)</code> controls how many digits are shown for floating-point numbers. Its behavior depends on whether <code>fixed</code> or <code>scientific</code> mode is active:</p>
                <ul>
                    <li><strong>Default mode</strong>: <code>n</code> = total number of significant digits</li>
                    <li><strong>fixed mode</strong>: <code>n</code> = number of digits after the decimal point</li>
                    <li><strong>scientific mode</strong>: <code>n</code> = number of digits after the decimal point</li>
                </ul>

${APP.codeWithOutput(`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double pi = 3.14159265358979;

    cout << "Default precision:" << endl;
    cout << "  setprecision(3): " << setprecision(3) << pi << endl;
    cout << "  setprecision(5): " << setprecision(5) << pi << endl;
    cout << "  setprecision(10): " << setprecision(10) << pi << endl;

    cout << "\\nWith fixed:" << endl;
    cout << fixed;
    cout << "  setprecision(2): " << setprecision(2) << pi << endl;
    cout << "  setprecision(4): " << setprecision(4) << pi << endl;
    cout << "  setprecision(8): " << setprecision(8) << pi << endl;

    cout << "\\nWith scientific:" << endl;
    cout << scientific;
    cout << "  setprecision(3): " << setprecision(3) << pi << endl;
    cout << "  setprecision(6): " << setprecision(6) << pi << endl;

    return 0;
}`, `Default precision:
  setprecision(3): 3.14
  setprecision(5): 3.1416
  setprecision(10): 3.141592654

With fixed:
  setprecision(2): 3.14
  setprecision(4): 3.1416
  setprecision(8): 3.14159265

With scientific:
  setprecision(3): 3.142e+00
  setprecision(6): 3.141593e+00`, 'cpp', 'setprecision() with fixed and scientific')}

                <h3>2.3 fixed and scientific</h3>
                <p>These manipulators control the floating-point output format. Once set, they remain active for all subsequent output (they are "sticky").</p>
                <table class="styled-table">
                    <thead><tr><th>Manipulator</th><th>Format</th><th>Example (pi = 3.14159)</th></tr></thead>
                    <tbody>
                        <tr><td>(default)</td><td>Automatic</td><td><code>3.14159</code></td></tr>
                        <tr><td><code>fixed</code></td><td>Fixed-point</td><td><code>3.141593</code> (6 decimal places by default)</td></tr>
                        <tr><td><code>scientific</code></td><td>Scientific notation</td><td><code>3.141593e+00</code></td></tr>
                    </tbody>
                </table>

                <h3>2.4 setfill(ch) — Fill Character</h3>
                <p>Changes the padding character used by <code>setw()</code>. By default it's a space. This is "sticky" — once set, it stays until changed.</p>

${APP.codeWithOutput(`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << "Zero-padded numbers:" << endl;
    cout << setfill('0');
    cout << setw(5) << 42 << endl;    // 00042
    cout << setw(5) << 7 << endl;     // 00007
    cout << setw(5) << 123 << endl;   // 00123

    cout << "\\nCustom fill characters:" << endl;
    cout << setfill('*') << setw(20) << "Hello" << endl;
    cout << setfill('-') << setw(20) << "World" << endl;
    cout << setfill('.') << setw(20) << 3.14 << endl;

    return 0;
}`, `Zero-padded numbers:
00042
00007
00123

Custom fill characters:
***************Hello
---------------World
................3.14`, 'cpp', 'setfill() — Custom Padding')}

                <h3>2.5 left and right — Alignment</h3>
                <p>Control whether output is left-aligned or right-aligned within the field width set by <code>setw()</code>.</p>

${APP.codeWithOutput(`#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    cout << "Right-aligned (default):" << endl;
    cout << right;
    cout << setw(15) << "Name" << setw(10) << "Marks" << endl;
    cout << setw(15) << "Raman" << setw(10) << 95 << endl;
    cout << setw(15) << "Bose" << setw(10) << 88 << endl;

    cout << "\\nLeft-aligned:" << endl;
    cout << left;
    cout << setw(15) << "Name" << setw(10) << "Marks" << endl;
    cout << setw(15) << "Raman" << setw(10) << 95 << endl;
    cout << setw(15) << "Bose" << setw(10) << 88 << endl;

    return 0;
}`, `Right-aligned (default):
           Name     Marks
          Raman        95
           Bose        88

Left-aligned:
Name            Marks
Raman           95
Bose            88`, 'cpp', 'left and right Alignment')}

                <h3>2.6 endl — End Line</h3>
                <p><code>endl</code> inserts a newline character <strong>and</strong> flushes the output buffer. This means the output is guaranteed to appear on screen immediately.</p>

                <div class="info-box">
                    <h4>endl vs \\n</h4>
                    <ul>
                        <li><code>endl</code> = newline + flush (slower but guaranteed immediate display)</li>
                        <li><code>\\n</code> = newline only (faster, buffer may delay display)</li>
                    </ul>
                    <p>For most programs, the difference is negligible. Use <code>\\n</code> in performance-critical loops and <code>endl</code> when you want to be sure output appears immediately (e.g., before waiting for input).</p>
                </div>

                <h3>2.7 Manipulator Summary Table</h3>
                <table class="styled-table">
                    <thead><tr><th>Manipulator</th><th>Header</th><th>Sticky?</th><th>Purpose</th></tr></thead>
                    <tbody>
                        <tr><td><code>setw(n)</code></td><td><code>&lt;iomanip&gt;</code></td><td>No (next item only)</td><td>Set minimum field width</td></tr>
                        <tr><td><code>setprecision(n)</code></td><td><code>&lt;iomanip&gt;</code></td><td>Yes</td><td>Set decimal precision</td></tr>
                        <tr><td><code>fixed</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Fixed-point float format</td></tr>
                        <tr><td><code>scientific</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Scientific float format</td></tr>
                        <tr><td><code>setfill(ch)</code></td><td><code>&lt;iomanip&gt;</code></td><td>Yes</td><td>Set padding character</td></tr>
                        <tr><td><code>left</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Left alignment</td></tr>
                        <tr><td><code>right</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Right alignment</td></tr>
                        <tr><td><code>endl</code></td><td><code>&lt;iostream&gt;</code></td><td>No</td><td>Newline + flush buffer</td></tr>
                        <tr><td><code>boolalpha</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Print bool as true/false</td></tr>
                        <tr><td><code>showpoint</code></td><td><code>&lt;iostream&gt;</code></td><td>Yes</td><td>Always show decimal point</td></tr>
                    </tbody>
                </table>

                <h3>Complete Formatting Example</h3>
${APP.codeWithOutput(`#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

int main() {
    cout << "╔════════════════════════════════════╗" << endl;
    cout << "║   PHYSICS CONSTANTS TABLE          ║" << endl;
    cout << "╠════════════════════════════════════╣" << endl;

    cout << left << setfill(' ');
    cout << "║ " << setw(18) << "Constant"
         << right << setw(15) << "Value" << " ║" << endl;
    cout << "╠════════════════════════════════════╣" << endl;

    cout << fixed << setprecision(6);
    cout << "║ " << left << setw(18) << "Pi"
         << right << setw(15) << M_PI << " ║" << endl;
    cout << "║ " << left << setw(18) << "e (Euler)"
         << right << setw(15) << M_E << " ║" << endl;

    cout << scientific << setprecision(3);
    cout << "║ " << left << setw(18) << "Speed of Light"
         << right << setw(15) << 2.998e8 << " ║" << endl;
    cout << "║ " << left << setw(18) << "Planck const"
         << right << setw(15) << 6.626e-34 << " ║" << endl;
    cout << "║ " << left << setw(18) << "Boltzmann"
         << right << setw(15) << 1.381e-23 << " ║" << endl;

    cout << "╚════════════════════════════════════╝" << endl;

    return 0;
}`, `╔════════════════════════════════════╗
║   PHYSICS CONSTANTS TABLE          ║
╠════════════════════════════════════╣
║ Constant                  Value ║
╠════════════════════════════════════╣
║ Pi                     3.141593 ║
║ e (Euler)              2.718282 ║
║ Speed of Light        2.998e+08 ║
║ Planck const          6.626e-34 ║
║ Boltzmann             1.381e-23 ║
╚════════════════════════════════════╝`, 'cpp', 'Complete Formatting Example')}
            </div>

            <!-- ============ INTERACTIVE: FORMAT VISUALIZER ============ -->
            <div class="interactive-area">
                <h3>Formatted Output Visualizer</h3>
                <p>Enter a number and choose formatting options. See the formatted output and the C++ code that produces it.</p>

                <div class="controls-row">
                    <div class="control-field">
                        <label for="pp-number">Number</label>
                        <input type="text" id="pp-number" value="3.14159265" placeholder="e.g. 3.14159">
                    </div>
                    <div class="control-field">
                        <label for="pp-width">setw (width)</label>
                        <input type="number" id="pp-width" value="15" min="0" max="40">
                    </div>
                    <div class="control-field">
                        <label for="pp-precision">setprecision</label>
                        <input type="number" id="pp-precision" value="4" min="0" max="15">
                    </div>
                </div>
                <div class="controls-row">
                    <div class="control-field">
                        <label for="pp-format">Format</label>
                        <select id="pp-format">
                            <option value="default">Default</option>
                            <option value="fixed" selected>fixed</option>
                            <option value="scientific">scientific</option>
                        </select>
                    </div>
                    <div class="control-field">
                        <label for="pp-align">Alignment</label>
                        <select id="pp-align">
                            <option value="right" selected>right</option>
                            <option value="left">left</option>
                        </select>
                    </div>
                    <div class="control-field">
                        <label for="pp-fill">setfill character</label>
                        <input type="text" id="pp-fill" value=" " maxlength="1" style="width:60px; text-align:center;">
                    </div>
                </div>
                <div class="controls-row">
                    <button class="btn-primary" id="pp-format-btn">Format Number</button>
                </div>
                <div id="pp-output" class="result-display" style="min-height:100px;">Click "Format Number" to see the result.</div>
            </div>
            `;
        },

        init() {
            var fmtBtn = document.getElementById('pp-format-btn');
            if (!fmtBtn) return;

            fmtBtn.addEventListener('click', function () {
                var numStr = document.getElementById('pp-number').value.trim();
                var width = parseInt(document.getElementById('pp-width').value) || 0;
                var precision = parseInt(document.getElementById('pp-precision').value) || 0;
                var format = document.getElementById('pp-format').value;
                var align = document.getElementById('pp-align').value;
                var fill = document.getElementById('pp-fill').value || ' ';
                var outputDiv = document.getElementById('pp-output');

                var num = parseFloat(numStr);
                if (isNaN(num)) {
                    outputDiv.innerHTML = '<span style="color:var(--accent-red);">Please enter a valid number.</span>';
                    return;
                }

                // Format the number
                var formatted = '';
                if (format === 'fixed') {
                    formatted = num.toFixed(precision);
                } else if (format === 'scientific') {
                    formatted = num.toExponential(precision);
                } else {
                    // Default: toPrecision
                    formatted = num.toPrecision(precision > 0 ? precision : 6);
                }

                // Apply width and alignment
                var padded = formatted;
                if (width > formatted.length) {
                    var padding = '';
                    for (var pi = 0; pi < width - formatted.length; pi++) {
                        padding += fill;
                    }
                    if (align === 'right') {
                        padded = padding + formatted;
                    } else {
                        padded = formatted + padding;
                    }
                }

                // Build the equivalent C++ code
                var cppCode = '#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nint main() {\n    double num = ' + numStr + ';\n    cout';

                if (format === 'fixed') cppCode += ' &lt;&lt; fixed';
                if (format === 'scientific') cppCode += ' &lt;&lt; scientific';
                cppCode += ' &lt;&lt; setprecision(' + precision + ')';
                if (fill !== ' ') cppCode += '\n         &lt;&lt; setfill(\'' + fill.replace(/'/g, "\\'") + '\')';
                if (align === 'left') cppCode += '\n         &lt;&lt; left';
                else cppCode += '\n         &lt;&lt; right';
                if (width > 0) cppCode += '\n         &lt;&lt; setw(' + width + ')';
                cppCode += '\n         &lt;&lt; num &lt;&lt; endl;\n    return 0;\n}';

                // Visualize with visible fill chars
                var visualPadded = padded;
                if (fill === ' ') {
                    // Show spaces as visible dots for visualization
                    var vis = '';
                    for (var vi = 0; vi < padded.length; vi++) {
                        if (padded[vi] === ' ') vis += '<span style="color:var(--accent-orange);">·</span>';
                        else vis += padded[vi];
                    }
                    visualPadded = vis;
                }

                var html = '';
                html += '<div style="margin-bottom:12px;">';
                html += '<strong>Formatted Output:</strong>';
                html += '<div style="background:var(--bg-code); padding:12px; border-radius:8px; margin-top:6px; font-family:\'JetBrains Mono\',monospace; font-size:1.1em; letter-spacing:1px;">';
                html += '<code style="color:var(--accent-green);">' + visualPadded + '</code>';
                html += '</div>';
                html += '<div style="margin-top:4px; color:var(--text-secondary); font-size:0.85em;">Total width: ' + padded.length + ' characters</div>';
                html += '</div>';

                html += '<div style="margin-bottom:8px;">';
                html += '<strong>Equivalent C++ Code:</strong>';
                html += '<pre style="background:var(--bg-code); padding:12px; border-radius:8px; margin-top:6px; overflow-x:auto;"><code style="color:var(--text-primary); font-size:0.9em;">' + cppCode + '</code></pre>';
                html += '</div>';

                html += '<div style="display:flex; gap:16px; flex-wrap:wrap; margin-top:8px;">';
                html += '<div><span style="color:var(--text-secondary);">Format:</span> <code>' + format + '</code></div>';
                html += '<div><span style="color:var(--text-secondary);">Precision:</span> <code>' + precision + '</code></div>';
                html += '<div><span style="color:var(--text-secondary);">Width:</span> <code>' + width + '</code></div>';
                html += '<div><span style="color:var(--text-secondary);">Align:</span> <code>' + align + '</code></div>';
                html += '<div><span style="color:var(--text-secondary);">Fill:</span> <code>\'' + (fill === ' ' ? 'space' : fill) + '\'</code></div>';
                html += '</div>';

                outputDiv.innerHTML = html;
            });

            // Auto-run on load
            document.getElementById('pp-format-btn').click();
        }
    });

})();
