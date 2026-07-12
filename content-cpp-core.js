/* ======================================================
   CONTENT MODULE: C++ Core Topics
   Topics: cpp-intro, datatypes, operators, variables
   ====================================================== */
(function () {
    'use strict';

    // =====================================================
    // TOPIC 1: Introduction to C++
    // =====================================================
    window.APP.register({
        id: 'cpp-intro',
        title: 'Introduction to C++',
        unit: 1,
        icon: '⚙️',
        description: 'History, features and first program in C++',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rarr; Introduction to C++</div>
                <h1>Introduction to C++</h1>
                <p class="topic-subtitle">The origin of one of the most powerful programming languages ever created, its key features, your first program, and understanding the compilation pipeline.</p>
            </div>

            <!-- ========== HISTORY ========== -->
            <div class="theory-section">
                <h2>📜 History of C++</h2>
                <p>C++ is one of the most influential programming languages in the history of computing. It was designed to combine the efficiency and low-level power of <strong>C</strong> with high-level features like <strong>classes and objects</strong>, making it suitable for both system programming and application development.</p>

                <div class="concept-box">
                    <h4>🔑 Key Fact</h4>
                    <p><strong>C++</strong> was developed by <strong>Bjarne Stroustrup</strong> starting in <strong>1979</strong> at <strong>Bell Labs</strong> (Murray Hill, New Jersey, USA). It was originally called <strong>"C with Classes"</strong> and was renamed to <strong>C++</strong> in 1983. The "++" comes from the C increment operator, symbolising an evolution of C.</p>
                </div>

                <p>Stroustrup's motivation came from his PhD work, where he used a language called <strong>Simula</strong> — the first language to support object-oriented programming. Simula had elegant features for organising code, but it was too slow for real systems programming. On the other hand, <strong>C</strong> was extremely fast but lacked the organisational features of Simula. C++ was born to bridge this gap: the <em>speed of C</em> with the <em>structure of Simula</em>.</p>

                <h3>Timeline of C++ Evolution</h3>
                <div class="timeline">
                    <div class="timeline-item">
                        <span class="timeline-date">1979</span>
                        <h4>C with Classes</h4>
                        <p>Bjarne Stroustrup begins work on "C with Classes" at Bell Labs, adding classes, basic inheritance, inlining, and default function arguments to C.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">1983</span>
                        <h4>Renamed to C++</h4>
                        <p>The language is renamed to C++. New features include virtual functions, function overloading, references, and the const keyword.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">1985</span>
                        <h4>First Commercial Release</h4>
                        <p>Cfront 1.0, the first commercial implementation, is released. Stroustrup publishes "The C++ Programming Language" book.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">1989</span>
                        <h4>C++ 2.0</h4>
                        <p>Added multiple inheritance, abstract classes, static member functions, and protected access specifier.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">1998</span>
                        <h4>C++98 (ISO Standard)</h4>
                        <p>First ISO standard (ISO/IEC 14882:1998). Included the Standard Template Library (STL), templates, exceptions, and namespaces.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">2011</span>
                        <h4>C++11 (Modern C++)</h4>
                        <p>A massive update: auto keyword, range-based for loops, lambda expressions, smart pointers, move semantics, and threading.</p>
                    </div>
                    <div class="timeline-item">
                        <span class="timeline-date">2014 – 2023</span>
                        <h4>C++14, C++17, C++20, C++23</h4>
                        <p>Continuous modernisation with modules, concepts, coroutines, ranges, and many quality-of-life improvements.</p>
                    </div>
                </div>
            </div>

            <!-- ========== FEATURES ========== -->
            <div class="theory-section">
                <h2>🌟 Features of C++</h2>
                <p>C++ stands out among programming languages because it supports multiple programming paradigms and offers fine-grained control over hardware while providing high-level abstractions. Here are the key features:</p>

                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Object-Oriented</strong></td><td>Supports classes, objects, inheritance, polymorphism, encapsulation, and abstraction — allowing modular and reusable code design.</td></tr>
                        <tr><td><strong>Platform Independent</strong></td><td>C++ source code can be compiled and run on different platforms (Windows, Linux, macOS) with little or no modification.</td></tr>
                        <tr><td><strong>High Performance</strong></td><td>Compiles directly to machine code, offering performance close to assembly language. No virtual machine overhead.</td></tr>
                        <tr><td><strong>Rich Library</strong></td><td>The Standard Template Library (STL) provides ready-made data structures (vectors, maps, sets) and algorithms (sort, search, transform).</td></tr>
                        <tr><td><strong>Low-Level Manipulation</strong></td><td>Provides pointers, bitwise operators, and direct memory management for systems-level programming.</td></tr>
                        <tr><td><strong>Multi-Paradigm</strong></td><td>Supports procedural, object-oriented, generic, and functional programming styles.</td></tr>
                        <tr><td><strong>Compiled Language</strong></td><td>Source code is translated to machine code before execution, unlike interpreted languages (Python, JavaScript).</td></tr>
                        <tr><td><strong>Memory Management</strong></td><td>Gives the programmer direct control over memory allocation and deallocation using <code>new</code> and <code>delete</code>.</td></tr>
                        <tr><td><strong>Scalability</strong></td><td>Used to build everything from tiny embedded systems to massive applications like game engines, browsers, and databases.</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>💡 Where is C++ Used?</h4>
                    <ul>
                        <li><strong>Operating Systems</strong> — Windows, Linux kernel modules, macOS components</li>
                        <li><strong>Game Engines</strong> — Unreal Engine, Unity (native plugins), CryEngine</li>
                        <li><strong>Browsers</strong> — Google Chrome, Mozilla Firefox</li>
                        <li><strong>Scientific Computing</strong> — ROOT (CERN), physics simulations, numerical analysis</li>
                        <li><strong>Embedded Systems</strong> — IoT devices, automotive software, robotics</li>
                        <li><strong>Databases</strong> — MySQL, MongoDB, PostgreSQL (partially)</li>
                    </ul>
                </div>
            </div>

            <!-- ========== FIRST PROGRAM ========== -->
            <div class="theory-section">
                <h2>👋 Your First C++ Program: Hello World</h2>
                <p>Every programmer's journey begins with the classic "Hello, World!" program. Let us write it and understand <strong>every single line</strong>:</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
`Hello, World!`, 'cpp', 'hello.cpp — Your First C++ Program')}

                <h3>Line-by-Line Explanation</h3>

                <div class="concept-box">
                    <h4>Line 1: <code>#include &lt;iostream&gt;</code></h4>
                    <p>This is a <strong>preprocessor directive</strong>. The <code>#include</code> command tells the preprocessor to insert the contents of the file <code>iostream</code> (Input/Output Stream) into your program <em>before</em> compilation begins. This header file contains definitions for <code>cout</code>, <code>cin</code>, <code>endl</code>, and other I/O objects. Without this line, the compiler would not know what <code>cout</code> is.</p>
                    <p>Think of it like importing a toolkit: you need the "iostream toolkit" to be able to print to the screen.</p>
                </div>

                <div class="concept-box">
                    <h4>Line 2: <code>using namespace std;</code></h4>
                    <p>The C++ Standard Library puts all its names (like <code>cout</code>, <code>cin</code>, <code>string</code>, <code>vector</code>) inside a <strong>namespace</strong> called <code>std</code>. A namespace is like a container that prevents name collisions. Without this line, you would have to write <code>std::cout</code> instead of just <code>cout</code>.</p>
                    <p>This line says: "I want to use everything from the <code>std</code> namespace directly, without the <code>std::</code> prefix."</p>
                </div>

                <div class="concept-box">
                    <h4>Line 4: <code>int main() {</code></h4>
                    <p>This is the <strong>main function</strong> — the entry point of every C++ program. When you run a C++ program, the operating system calls this function first. The <code>int</code> before <code>main</code> means this function will return an integer value to the operating system. The empty parentheses <code>()</code> mean the function takes no parameters. The opening brace <code>{</code> marks the beginning of the function body.</p>
                </div>

                <div class="concept-box">
                    <h4>Line 5: <code>cout &lt;&lt; "Hello, World!" &lt;&lt; endl;</code></h4>
                    <p><code>cout</code> (pronounced "see-out") is the <strong>standard output stream</strong> object. It represents the console/terminal screen. The <code>&lt;&lt;</code> operator is called the <strong>insertion operator</strong> (or stream insertion operator) — it inserts data into the output stream. <code>"Hello, World!"</code> is a <strong>string literal</strong>. <code>endl</code> is a manipulator that inserts a newline character and flushes the output buffer. The semicolon <code>;</code> terminates the statement.</p>
                </div>

                <div class="concept-box">
                    <h4>Line 6: <code>return 0;</code></h4>
                    <p>This statement returns the value <code>0</code> to the operating system, indicating that the program executed <strong>successfully</strong>. By convention, returning <code>0</code> means "no errors". A non-zero return value (like <code>1</code>) typically indicates an error occurred.</p>
                </div>
            </div>

            <!-- ========== COMPILATION PROCESS ========== -->
            <div class="theory-section">
                <h2>🔧 The Compilation Process</h2>
                <p>Unlike interpreted languages (like Python), C++ is a <strong>compiled language</strong>. Your human-readable source code must be transformed into machine code (binary instructions) that the CPU can execute. This transformation happens through a multi-stage pipeline:</p>

                <div class="diagram-container">
                    <div class="flow-node start">Source Code<br><small>(.cpp file)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Preprocessor<br><small>#include, #define</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Compiler<br><small>C++ → Assembly</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Assembler<br><small>Assembly → Object</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node decision">Linker<br><small>Link Libraries</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node end">Executable<br><small>(.exe / a.out)</small></div>
                </div>

                <h3>Stage-by-Stage Breakdown</h3>

                <ol>
                    <li><strong>Preprocessor:</strong> Processes all lines beginning with <code>#</code>. It handles <code>#include</code> (copies header file contents), <code>#define</code> (replaces macros), and <code>#ifdef</code> (conditional compilation). The output is a "translation unit" — a single, expanded source file.</li>
                    <li><strong>Compiler:</strong> Takes the preprocessed source code and translates it into <strong>assembly language</strong> specific to your target CPU architecture (x86, ARM, etc.). This stage also performs syntax checking, type checking, and optimisations.</li>
                    <li><strong>Assembler:</strong> Converts the assembly language into <strong>object code</strong> (machine code). The output is an object file (<code>.o</code> or <code>.obj</code>) containing binary instructions, but with unresolved references to external functions.</li>
                    <li><strong>Linker:</strong> Combines one or more object files with library code (like the standard library's implementation of <code>cout</code>) to produce the final <strong>executable</strong> file. It resolves all external references and assigns final memory addresses.</li>
                </ol>

                <div class="tip-box">
                    <h4>💻 Compiling from the Command Line</h4>
                    <p>If you have <code>g++</code> (GNU C++ compiler) installed, you can compile and run your program like this:</p>
                </div>

                ${APP.codeWithOutput(
`// To compile:
// g++ hello.cpp -o hello

// To run:
// ./hello     (Linux/Mac)
// hello.exe   (Windows)`,
`Hello, World!`, 'cpp', 'Compiling & Running')}
            </div>

            <!-- ========== STRUCTURE OF C++ PROGRAM ========== -->
            <div class="theory-section">
                <h2>📐 Structure of a C++ Program</h2>
                <p>Every C++ program follows a general structure. Understanding this structure helps you organise your code properly:</p>

                ${APP.codeBlock(
`// 1. Preprocessor Directives
#include <iostream>    // For input/output
#include <cmath>       // For math functions

// 2. Namespace Declaration
using namespace std;

// 3. Global Declarations (optional)
const double PI = 3.14159;

// 4. Function Prototypes (optional)
void greet(string name);

// 5. Main Function (required - entry point)
int main() {
    greet("Student");
    cout << "PI = " << PI << endl;
    return 0;
}

// 6. Function Definitions
void greet(string name) {
    cout << "Welcome to C++, " << name << "!" << endl;
}`, 'cpp', 'General Structure of a C++ Program')}

                <div class="info-box">
                    <h4>📌 Key Points to Remember</h4>
                    <ul>
                        <li>Every C++ program <strong>must</strong> have exactly one <code>main()</code> function.</li>
                        <li>Statements end with a <strong>semicolon</strong> (<code>;</code>).</li>
                        <li>C++ is <strong>case-sensitive</strong>: <code>Main</code> is not the same as <code>main</code>.</li>
                        <li>Curly braces <code>{ }</code> define <strong>blocks</strong> (scope of functions, loops, etc.).</li>
                        <li>Comments start with <code>//</code> for single-line or <code>/* ... */</code> for multi-line.</li>
                    </ul>
                </div>
            </div>

            <!-- ========== INTERACTIVE ========== -->
            <div class="interactive-area">
                <h3>Simulated cout Output</h3>
                <p style="margin-bottom:1rem;color:var(--text-secondary);">Type a message below to see how <code>cout</code> would display it. You can also use <code>\\n</code> for newlines and <code>\\t</code> for tabs.</p>
                <div class="controls-row">
                    <div class="control-field" style="flex:3;">
                        <label for="cpp-intro-msg">Your Message</label>
                        <input type="text" id="cpp-intro-msg" placeholder='e.g. Hello, C++ World!\\nThis is line 2' value="Hello, World!">
                    </div>
                    <div class="control-field" style="flex:1;">
                        <label>&nbsp;</label>
                        <button class="btn btn-primary" id="cpp-intro-run">▶ Run cout</button>
                    </div>
                </div>
                <div style="margin-top:0.5rem;">
                    <strong style="font-size:0.85rem;color:var(--text-secondary);">C++ Code:</strong>
                    <div id="cpp-intro-code" class="result-display" style="color:var(--accent-cyan);margin-top:0.3rem;"></div>
                </div>
                <div style="margin-top:0.75rem;">
                    <strong style="font-size:0.85rem;color:var(--text-secondary);">Console Output:</strong>
                    <div id="cpp-intro-output" class="result-display" style="margin-top:0.3rem;"></div>
                </div>
            </div>

            <div class="theory-section">
                <h2>📝 Summary</h2>
                <ul>
                    <li>C++ was created by <strong>Bjarne Stroustrup</strong> at <strong>Bell Labs</strong> in <strong>1979</strong>, evolving from C.</li>
                    <li>It combines the <strong>efficiency of C</strong> with <strong>OOP features</strong> from Simula.</li>
                    <li>Key features include: OOP, portability, performance, rich libraries, and multi-paradigm support.</li>
                    <li>The <code>Hello World</code> program introduces: <code>#include</code>, <code>using namespace</code>, <code>main()</code>, <code>cout</code>, and <code>return</code>.</li>
                    <li>Compilation involves four stages: <strong>Preprocessor → Compiler → Assembler → Linker</strong>.</li>
                </ul>
            </div>
            `;
        },

        init() {
            var runBtn = document.getElementById('cpp-intro-run');
            var msgInput = document.getElementById('cpp-intro-msg');
            var codeDisplay = document.getElementById('cpp-intro-code');
            var outputDisplay = document.getElementById('cpp-intro-output');

            function simulate() {
                var msg = msgInput.value;
                // Show the C++ code
                codeDisplay.textContent = 'cout << "' + msg + '" << endl;';
                // Process escape sequences for output
                var processed = msg.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
                outputDisplay.textContent = processed;
            }

            if (runBtn) {
                runBtn.addEventListener('click', simulate);
                msgInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') simulate();
                });
                // Run once on load
                simulate();
            }
        }
    });


    // =====================================================
    // TOPIC 2: Data Types in C++
    // =====================================================
    window.APP.register({
        id: 'datatypes',
        title: 'Data Types in C++',
        unit: 1,
        icon: '📊',
        description: 'Integer, character, floating point, Boolean and void data types',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rarr; Data Types in C++</div>
                <h1>Data Types in C++</h1>
                <p class="topic-subtitle">Understanding how C++ stores different kinds of data in memory — integers, characters, decimals, booleans, and beyond.</p>
            </div>

            <!-- ========== INTRODUCTION ========== -->
            <div class="theory-section">
                <h2>📌 What are Data Types?</h2>
                <p>A <strong>data type</strong> tells the compiler two essential things about a variable:</p>
                <ol>
                    <li><strong>How much memory</strong> to allocate (e.g., 1 byte, 4 bytes, 8 bytes).</li>
                    <li><strong>How to interpret</strong> the binary data stored in that memory (e.g., as an integer, a character, a floating-point number).</li>
                </ol>
                <p>Every variable in C++ <em>must</em> have a declared data type. This is because C++ is a <strong>statically-typed</strong> language — the type of every variable is determined at compile time and cannot change during execution.</p>

                <div class="concept-box">
                    <h4>🧠 Analogy</h4>
                    <p>Think of memory as a row of empty boxes. The <strong>data type</strong> determines how many boxes a variable occupies and what kind of label is on them. An <code>int</code> might occupy 4 boxes (bytes), while a <code>char</code> occupies just 1 box. The labels tell the CPU how to read the bits inside — as a number, a letter, or a decimal value.</p>
                </div>

                <p>C++ data types fall into three broad categories:</p>
                <ul>
                    <li><strong>Fundamental (Primitive) Types:</strong> <code>int</code>, <code>char</code>, <code>float</code>, <code>double</code>, <code>bool</code>, <code>void</code></li>
                    <li><strong>Derived Types:</strong> Arrays, Pointers, References, Functions</li>
                    <li><strong>User-Defined Types:</strong> Classes, Structures, Unions, Enumerations</li>
                </ul>
                <p>In this topic, we focus on the <strong>fundamental types</strong> in depth.</p>
            </div>

            <!-- ========== INT ========== -->
            <div class="theory-section">
                <h2>🔢 Integer Type (<code>int</code>)</h2>
                <p>The <code>int</code> data type stores <strong>whole numbers</strong> (no decimal point). It is the most commonly used data type for counting, indexing, and general-purpose integer arithmetic.</p>

                <h3>Size and Range</h3>
                <p>The size of <code>int</code> depends on the platform, but on most modern systems (32-bit and 64-bit), an <code>int</code> occupies <strong>4 bytes (32 bits)</strong>. This gives it the following range:</p>

                <div class="math-display">
                    \\[ \\text{Range of signed int} = -2^{31} \\text{ to } 2^{31} - 1 = -2{,}147{,}483{,}648 \\text{ to } 2{,}147{,}483{,}647 \\]
                </div>

                <h3>Integer Variants</h3>
                <p>C++ provides several integer variants with different sizes to give you control over memory usage and range:</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>Type</th><th>Size (bytes)</th><th>Range</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>short</code></td><td>2</td><td>-32,768 to 32,767</td><td><code>short s = 100;</code></td></tr>
                        <tr><td><code>unsigned short</code></td><td>2</td><td>0 to 65,535</td><td><code>unsigned short us = 50000;</code></td></tr>
                        <tr><td><code>int</code></td><td>4</td><td>-2,147,483,648 to 2,147,483,647</td><td><code>int x = 42;</code></td></tr>
                        <tr><td><code>unsigned int</code></td><td>4</td><td>0 to 4,294,967,295</td><td><code>unsigned int ui = 3000000000;</code></td></tr>
                        <tr><td><code>long</code></td><td>4 or 8</td><td>At least -2,147,483,648 to 2,147,483,647</td><td><code>long l = 100000L;</code></td></tr>
                        <tr><td><code>unsigned long</code></td><td>4 or 8</td><td>At least 0 to 4,294,967,295</td><td><code>unsigned long ul = 4000000000UL;</code></td></tr>
                        <tr><td><code>long long</code></td><td>8</td><td>-9.2 &times; 10<sup>18</sup> to 9.2 &times; 10<sup>18</sup></td><td><code>long long ll = 9000000000LL;</code></td></tr>
                        <tr><td><code>unsigned long long</code></td><td>8</td><td>0 to 1.8 &times; 10<sup>19</sup></td><td><code>unsigned long long ull = 18000000000ULL;</code></td></tr>
                    </tbody>
                </table>

                ${APP.codeWithOutput(
`#include <iostream>
#include <climits>    // For INT_MIN, INT_MAX, etc.
using namespace std;

int main() {
    int age = 20;
    short temp = -5;
    long population = 1400000000L;
    long long stars = 100000000000LL;
    unsigned int distance = 4000000000U;

    cout << "int age = " << age << endl;
    cout << "short temp = " << temp << endl;
    cout << "long population = " << population << endl;
    cout << "long long stars = " << stars << endl;
    cout << "unsigned int distance = " << distance << endl;

    cout << "\\nSize of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of short: " << sizeof(short) << " bytes" << endl;
    cout << "Size of long: " << sizeof(long) << " bytes" << endl;
    cout << "Size of long long: " << sizeof(long long) << " bytes" << endl;

    cout << "\\nINT_MIN = " << INT_MIN << endl;
    cout << "INT_MAX = " << INT_MAX << endl;

    return 0;
}`,
`int age = 20
short temp = -5
long population = 1400000000
long long stars = 100000000000
unsigned int distance = 4000000000

Size of int: 4 bytes
Size of short: 2 bytes
Size of long: 4 bytes
Size of long long: 8 bytes

INT_MIN = -2147483648
INT_MAX = 2147483647`, 'cpp', 'Integer Types Demo')}

                <div class="warning-box">
                    <h4>⚠️ Integer Overflow</h4>
                    <p>If you store a value larger than the maximum range of an integer type, it <strong>wraps around</strong> (overflow). For example, adding 1 to <code>INT_MAX</code> (2,147,483,647) gives <code>INT_MIN</code> (-2,147,483,648). This is undefined behaviour for signed integers and modular arithmetic for unsigned integers. Always choose a type large enough for your expected values!</p>
                </div>
            </div>

            <!-- ========== CHAR ========== -->
            <div class="theory-section">
                <h2>🔤 Character Type (<code>char</code>)</h2>
                <p>The <code>char</code> data type stores a <strong>single character</strong>. Internally, it stores the <strong>ASCII code</strong> (a number) of that character. A <code>char</code> occupies exactly <strong>1 byte (8 bits)</strong> of memory.</p>

                <div class="info-box">
                    <h4>📖 ASCII (American Standard Code for Information Interchange)</h4>
                    <p>ASCII is a character encoding standard that assigns a numeric code to each character. For example: <code>'A'</code> = 65, <code>'a'</code> = 97, <code>'0'</code> = 48, <code>' '</code> (space) = 32. Since a <code>char</code> is stored as a number, you can do arithmetic on characters!</p>
                </div>

                <p><strong>Character Literals</strong> are enclosed in <strong>single quotes</strong>: <code>'A'</code>, <code>'z'</code>, <code>'5'</code>, <code>'@'</code>. Note that <code>'5'</code> (the character) is different from <code>5</code> (the integer). The character <code>'5'</code> has ASCII value 53.</p>

                <h3>Escape Sequences</h3>
                <p>Some special characters cannot be typed directly in code. C++ uses <strong>escape sequences</strong> (starting with a backslash) to represent them:</p>

                <table class="styled-table">
                    <thead><tr><th>Escape Sequence</th><th>Meaning</th><th>ASCII Code</th></tr></thead>
                    <tbody>
                        <tr><td><code>\\n</code></td><td>Newline (line feed)</td><td>10</td></tr>
                        <tr><td><code>\\t</code></td><td>Horizontal tab</td><td>9</td></tr>
                        <tr><td><code>\\\\</code></td><td>Backslash</td><td>92</td></tr>
                        <tr><td><code>\\'</code></td><td>Single quote</td><td>39</td></tr>
                        <tr><td><code>\\"</code></td><td>Double quote</td><td>34</td></tr>
                        <tr><td><code>\\0</code></td><td>Null character</td><td>0</td></tr>
                        <tr><td><code>\\a</code></td><td>Alert (bell/beep)</td><td>7</td></tr>
                        <tr><td><code>\\b</code></td><td>Backspace</td><td>8</td></tr>
                    </tbody>
                </table>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    char letter = 'A';
    char digit = '5';
    char newline = '\\n';

    cout << "Character: " << letter << endl;
    cout << "ASCII value of 'A': " << (int)letter << endl;
    cout << "ASCII value of '5': " << (int)digit << endl;
    cout << "Size of char: " << sizeof(char) << " byte" << endl;

    // Character arithmetic
    char next = letter + 1;   // 'A' + 1 = 'B'
    cout << "Next letter: " << next << endl;

    // Converting lowercase to uppercase
    char lower = 'g';
    char upper = lower - 32;  // 'g' (103) - 32 = 'G' (71)
    cout << lower << " -> " << upper << endl;

    return 0;
}`,
`Character: A
ASCII value of 'A': 65
ASCII value of '5': 53
Size of char: 1 byte
Next letter: B
g -> G`, 'cpp', 'Character Type Demo')}
            </div>

            <!-- ========== FLOAT/DOUBLE ========== -->
            <div class="theory-section">
                <h2>🔬 Floating-Point Types (<code>float</code> and <code>double</code>)</h2>
                <p>Floating-point types store <strong>decimal numbers</strong> (numbers with a fractional part). They use the <strong>IEEE 754</strong> standard for representation, which stores numbers in scientific notation internally.</p>

                <table class="styled-table">
                    <thead><tr><th>Type</th><th>Size (bytes)</th><th>Precision (digits)</th><th>Range (approx.)</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>float</code></td><td>4</td><td>6–7</td><td>&plusmn;3.4 &times; 10<sup>&plusmn;38</sup></td><td><code>float pi = 3.14f;</code></td></tr>
                        <tr><td><code>double</code></td><td>8</td><td>15–16</td><td>&plusmn;1.7 &times; 10<sup>&plusmn;308</sup></td><td><code>double pi = 3.14159265;</code></td></tr>
                        <tr><td><code>long double</code></td><td>8, 12, or 16</td><td>18–19</td><td>Extended range</td><td><code>long double x = 3.14L;</code></td></tr>
                    </tbody>
                </table>

                <div class="concept-box">
                    <h4>🧮 IEEE 754 Representation (Brief)</h4>
                    <p>A floating-point number is stored as three parts: <strong>Sign bit</strong> (0 = positive, 1 = negative), <strong>Exponent</strong> (determines the magnitude), and <strong>Mantissa/Significand</strong> (stores the significant digits). For a 32-bit <code>float</code>: 1 sign bit + 8 exponent bits + 23 mantissa bits. For a 64-bit <code>double</code>: 1 sign bit + 11 exponent bits + 52 mantissa bits.</p>
                </div>

                <h3>When to Use <code>float</code> vs <code>double</code></h3>
                <ul>
                    <li>Use <code>double</code> by default — it is the standard for scientific computation and offers sufficient precision for most applications.</li>
                    <li>Use <code>float</code> when memory is critical (e.g., large arrays in graphics/simulations) or when speed matters on hardware that handles 32-bit faster.</li>
                    <li>Use <code>long double</code> when you need extra precision (rare in most applications).</li>
                </ul>

                ${APP.codeWithOutput(
`#include <iostream>
#include <iomanip>   // For setprecision
using namespace std;

int main() {
    float f = 3.141592653589793f;
    double d = 3.141592653589793;
    long double ld = 3.141592653589793L;

    cout << "float:       " << setprecision(15) << f << endl;
    cout << "double:      " << setprecision(15) << d << endl;
    cout << "long double: " << setprecision(15) << ld << endl;

    cout << "\\nSize of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of long double: " << sizeof(long double) << " bytes" << endl;

    // Precision loss example
    float a = 1.0f / 3.0f;
    double b = 1.0 / 3.0;
    cout << "\\n1/3 as float:  " << setprecision(20) << a << endl;
    cout << "1/3 as double: " << setprecision(20) << b << endl;

    return 0;
}`,
`float:       3.14159274101257
double:      3.14159265358979
long double: 3.14159265358979

Size of float: 4 bytes
Size of double: 8 bytes
Size of long double: 16 bytes

1/3 as float:  0.33333334326744079590
1/3 as double: 0.33333333333333331483`, 'cpp', 'Floating-Point Precision Demo')}

                <div class="warning-box">
                    <h4>⚠️ Floating-Point Pitfall</h4>
                    <p>Never compare floating-point numbers for exact equality using <code>==</code>. Due to precision limitations, <code>0.1 + 0.2</code> might not exactly equal <code>0.3</code>. Instead, compare using a small tolerance (epsilon): <code>if (abs(a - b) < 1e-9)</code>.</p>
                </div>
            </div>

            <!-- ========== BOOL ========== -->
            <div class="theory-section">
                <h2>✅ Boolean Type (<code>bool</code>)</h2>
                <p>The <code>bool</code> data type stores a <strong>logical value</strong>: either <code>true</code> or <code>false</code>. Internally, <code>true</code> is stored as <code>1</code> and <code>false</code> is stored as <code>0</code>. A <code>bool</code> occupies <strong>1 byte</strong> of memory (even though it only needs 1 bit — this is because the smallest addressable unit in most architectures is a byte).</p>

                <h3>Implicit Conversions</h3>
                <p>C++ automatically converts between <code>bool</code> and numeric types:</p>
                <ul>
                    <li><strong>Any non-zero value</strong> is implicitly converted to <code>true</code>.</li>
                    <li><strong>Zero (0)</strong> is implicitly converted to <code>false</code>.</li>
                    <li><code>true</code> converts to <code>1</code> when used in arithmetic.</li>
                    <li><code>false</code> converts to <code>0</code> when used in arithmetic.</li>
                </ul>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    bool isStudent = true;
    bool hasPassed = false;

    cout << "isStudent = " << isStudent << endl;     // Prints 1
    cout << "hasPassed = " << hasPassed << endl;     // Prints 0
    cout << boolalpha;  // Enable text output
    cout << "isStudent = " << isStudent << endl;     // Prints true
    cout << "hasPassed = " << hasPassed << endl;     // Prints false

    cout << "Size of bool: " << sizeof(bool) << " byte" << endl;

    // Implicit conversions
    bool fromInt = 42;       // Non-zero -> true
    bool fromZero = 0;       // Zero -> false
    bool fromNeg = -1;       // Non-zero -> true
    bool fromFloat = 0.001;  // Non-zero -> true

    cout << boolalpha;
    cout << "bool from 42: " << fromInt << endl;
    cout << "bool from 0: " << fromZero << endl;
    cout << "bool from -1: " << fromNeg << endl;
    cout << "bool from 0.001: " << fromFloat << endl;

    return 0;
}`,
`isStudent = 1
hasPassed = 0
isStudent = true
hasPassed = false
Size of bool: 1 byte
bool from 42: true
bool from 0: false
bool from -1: true
bool from 0.001: true`, 'cpp', 'Boolean Type Demo')}
            </div>

            <!-- ========== VOID ========== -->
            <div class="theory-section">
                <h2>🚫 Void Type (<code>void</code>)</h2>
                <p>The <code>void</code> type represents the <strong>absence of a type</strong>. You cannot create a variable of type <code>void</code>. It has two primary uses:</p>

                <ol>
                    <li><strong>Functions that return nothing:</strong> A function declared as <code>void</code> does not return any value.</li>
                    <li><strong>Void pointers (<code>void*</code>):</strong> A generic pointer that can point to data of any type. It must be cast to the appropriate type before being dereferenced.</li>
                </ol>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

// Function that returns nothing
void printGreeting() {
    cout << "Hello from a void function!" << endl;
    // No return statement needed
}

// Function that takes no parameters
void printLine(void) {
    cout << "-------------------" << endl;
}

int main() {
    printGreeting();
    printLine();

    // void pointer example
    int num = 10;
    void* ptr = &num;      // void* can point to any type
    cout << "Value via void*: " << *(int*)ptr << endl;

    return 0;
}`,
`Hello from a void function!
-------------------
Value via void*: 10`, 'cpp', 'Void Type Demo')}
            </div>

            <!-- ========== COMPREHENSIVE TABLE ========== -->
            <div class="theory-section">
                <h2>📋 Complete Data Type Reference Table</h2>
                <table class="styled-table">
                    <thead>
                        <tr><th>Type</th><th>Size</th><th>Range</th><th>Use Case</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><code>bool</code></td><td>1 byte</td><td>true / false</td><td>Flags, conditions</td><td><code>bool ok = true;</code></td></tr>
                        <tr><td><code>char</code></td><td>1 byte</td><td>-128 to 127</td><td>Single characters</td><td><code>char c = 'A';</code></td></tr>
                        <tr><td><code>unsigned char</code></td><td>1 byte</td><td>0 to 255</td><td>Raw byte data</td><td><code>unsigned char b = 200;</code></td></tr>
                        <tr><td><code>short</code></td><td>2 bytes</td><td>-32,768 to 32,767</td><td>Small integers</td><td><code>short s = -100;</code></td></tr>
                        <tr><td><code>unsigned short</code></td><td>2 bytes</td><td>0 to 65,535</td><td>Small positive values</td><td><code>unsigned short u = 60000;</code></td></tr>
                        <tr><td><code>int</code></td><td>4 bytes</td><td>&approx; &plusmn;2.1 billion</td><td>General integers</td><td><code>int x = 42;</code></td></tr>
                        <tr><td><code>unsigned int</code></td><td>4 bytes</td><td>0 to &approx;4.3 billion</td><td>Positive-only integers</td><td><code>unsigned int n = 3000000000U;</code></td></tr>
                        <tr><td><code>long</code></td><td>4/8 bytes</td><td>At least &plusmn;2.1 billion</td><td>Large integers</td><td><code>long l = 100000L;</code></td></tr>
                        <tr><td><code>long long</code></td><td>8 bytes</td><td>&approx; &plusmn;9.2 &times; 10<sup>18</sup></td><td>Very large integers</td><td><code>long long ll = 9000000000LL;</code></td></tr>
                        <tr><td><code>float</code></td><td>4 bytes</td><td>&plusmn;3.4 &times; 10<sup>38</sup></td><td>Low-precision decimals</td><td><code>float f = 3.14f;</code></td></tr>
                        <tr><td><code>double</code></td><td>8 bytes</td><td>&plusmn;1.7 &times; 10<sup>308</sup></td><td>High-precision decimals</td><td><code>double d = 3.14159265;</code></td></tr>
                        <tr><td><code>long double</code></td><td>8–16 bytes</td><td>Extended</td><td>Extra precision</td><td><code>long double ld = 3.14L;</code></td></tr>
                        <tr><td><code>void</code></td><td>0 bytes</td><td>N/A</td><td>No-return functions</td><td><code>void func();</code></td></tr>
                    </tbody>
                </table>
            </div>

            <!-- ========== TYPE MODIFIERS ========== -->
            <div class="theory-section">
                <div class="tip-box">
                    <h4>🏷️ Type Modifiers: signed, unsigned, short, long</h4>
                    <p>Type modifiers alter the range and/or size of fundamental types:</p>
                    <ul>
                        <li><strong><code>signed</code></strong> (default for <code>int</code> and <code>char</code> on most systems): allows both positive and negative values. One bit is used for the sign, reducing the positive range.</li>
                        <li><strong><code>unsigned</code></strong>: only non-negative values (0 and positive). All bits are used for magnitude, doubling the positive range compared to signed.</li>
                        <li><strong><code>short</code></strong>: reduces size (and range) — typically 2 bytes for integers.</li>
                        <li><strong><code>long</code></strong>: increases size (and range) — at least 4 bytes. <code>long long</code> guarantees at least 8 bytes.</li>
                    </ul>
                    <p>These modifiers can be combined: <code>unsigned long long int</code> is a valid type. The keyword <code>int</code> can be omitted when a modifier is present: <code>short</code> means <code>short int</code>, <code>long</code> means <code>long int</code>.</p>
                </div>
            </div>

            <!-- ========== INTERACTIVE MEMORY VISUALIZER ========== -->
            <div class="interactive-area">
                <h3>Memory Layout Visualizer</h3>
                <p style="margin-bottom:1rem;color:var(--text-secondary);">Select a data type to see its memory layout — how many bytes it uses and what the bits look like for a sample value.</p>

                <div class="controls-row">
                    <div class="control-field">
                        <label for="dt-type-select">Data Type</label>
                        <select id="dt-type-select">
                            <option value="bool">bool</option>
                            <option value="char">char</option>
                            <option value="short">short (2 bytes)</option>
                            <option value="int" selected>int (4 bytes)</option>
                            <option value="long long">long long (8 bytes)</option>
                            <option value="float">float (4 bytes)</option>
                            <option value="double">double (8 bytes)</option>
                        </select>
                    </div>
                    <div class="control-field">
                        <label for="dt-value-input">Value</label>
                        <input type="text" id="dt-value-input" placeholder="e.g. 42" value="42">
                    </div>
                    <div class="control-field" style="flex:0.5;">
                        <label>&nbsp;</label>
                        <button class="btn btn-primary" id="dt-visualize-btn">Visualize</button>
                    </div>
                </div>

                <div id="dt-info-display" style="margin:0.75rem 0;color:var(--text-secondary);font-size:0.9rem;"></div>

                <div class="diagram-container" id="dt-memory-diagram" style="min-height:80px;">
                    <p style="color:var(--text-muted);">Click "Visualize" to see the memory layout.</p>
                </div>

                <div id="dt-bits-display" class="result-display" style="margin-top:0.75rem;min-height:30px;"></div>
            </div>

            <div class="theory-section">
                <h2>📝 Summary</h2>
                <ul>
                    <li><code>int</code> stores whole numbers (4 bytes, range &approx; &plusmn;2.1 billion). Variants: <code>short</code>, <code>long</code>, <code>long long</code>.</li>
                    <li><code>char</code> stores single characters using ASCII (1 byte). Supports escape sequences.</li>
                    <li><code>float</code> (4 bytes, 7-digit precision) and <code>double</code> (8 bytes, 15-digit precision) store decimals.</li>
                    <li><code>bool</code> stores <code>true</code>/<code>false</code> (1 byte). Non-zero values are <code>true</code>.</li>
                    <li><code>void</code> means "no type" — used for functions that return nothing.</li>
                    <li>Use <code>sizeof()</code> to check the size of any type on your system.</li>
                </ul>
            </div>
            `;
        },

        init() {
            var typeSelect = document.getElementById('dt-type-select');
            var valueInput = document.getElementById('dt-value-input');
            var visualizeBtn = document.getElementById('dt-visualize-btn');
            var memoryDiagram = document.getElementById('dt-memory-diagram');
            var bitsDisplay = document.getElementById('dt-bits-display');
            var infoDisplay = document.getElementById('dt-info-display');

            var typeInfo = {
                'bool':      { bytes: 1, label: 'bool',      desc: '1 byte — stores true (1) or false (0)' },
                'char':      { bytes: 1, label: 'char',      desc: '1 byte — stores a single ASCII character (0–127)' },
                'short':     { bytes: 2, label: 'short',     desc: '2 bytes — small integer (-32,768 to 32,767)' },
                'int':       { bytes: 4, label: 'int',       desc: '4 bytes — standard integer (~±2.1 billion)' },
                'long long': { bytes: 8, label: 'long long', desc: '8 bytes — very large integer (~±9.2 × 10¹⁸)' },
                'float':     { bytes: 4, label: 'float',     desc: '4 bytes — single-precision floating point (IEEE 754)' },
                'double':    { bytes: 8, label: 'double',    desc: '8 bytes — double-precision floating point (IEEE 754)' }
            };

            function intToBinaryBytes(val, numBytes) {
                // Convert integer to binary representation as array of byte strings
                var totalBits = numBytes * 8;
                var bigVal = BigInt(val);
                // Handle negative numbers via two's complement
                if (bigVal < 0n) {
                    bigVal = (1n << BigInt(totalBits)) + bigVal;
                }
                var binStr = bigVal.toString(2).padStart(totalBits, '0');
                if (binStr.length > totalBits) binStr = binStr.slice(-totalBits);
                var bytes = [];
                for (var i = 0; i < numBytes; i++) {
                    bytes.push(binStr.substring(i * 8, (i + 1) * 8));
                }
                return bytes;
            }

            function floatToBinaryBytes(val) {
                var buf = new ArrayBuffer(4);
                new Float32Array(buf)[0] = val;
                var view = new Uint8Array(buf);
                var bytes = [];
                for (var i = 3; i >= 0; i--) {
                    bytes.push(view[i].toString(2).padStart(8, '0'));
                }
                return bytes;
            }

            function doubleToBinaryBytes(val) {
                var buf = new ArrayBuffer(8);
                new Float64Array(buf)[0] = val;
                var view = new Uint8Array(buf);
                var bytes = [];
                for (var i = 7; i >= 0; i--) {
                    bytes.push(view[i].toString(2).padStart(8, '0'));
                }
                return bytes;
            }

            function visualize() {
                var type = typeSelect.value;
                var rawVal = valueInput.value.trim();
                var info = typeInfo[type];

                if (!info) return;

                infoDisplay.innerHTML = '<strong>' + info.label + '</strong>: ' + info.desc;

                var numVal;
                var displayVal = rawVal;
                var byteValues;

                if (type === 'bool') {
                    numVal = (rawVal === '0' || rawVal.toLowerCase() === 'false') ? 0 : 1;
                    displayVal = numVal ? 'true (1)' : 'false (0)';
                    byteValues = intToBinaryBytes(numVal, 1);
                } else if (type === 'char') {
                    if (rawVal.length === 1) {
                        numVal = rawVal.charCodeAt(0);
                        displayVal = "'" + rawVal + "' (ASCII " + numVal + ')';
                    } else {
                        numVal = parseInt(rawVal) || 0;
                        displayVal = String.fromCharCode(numVal) + ' (ASCII ' + numVal + ')';
                    }
                    byteValues = intToBinaryBytes(numVal, 1);
                } else if (type === 'float') {
                    numVal = parseFloat(rawVal) || 0;
                    displayVal = numVal.toString();
                    byteValues = floatToBinaryBytes(numVal);
                } else if (type === 'double') {
                    numVal = parseFloat(rawVal) || 0;
                    displayVal = numVal.toString();
                    byteValues = doubleToBinaryBytes(numVal);
                } else {
                    numVal = parseInt(rawVal) || 0;
                    displayVal = numVal.toString();
                    byteValues = intToBinaryBytes(numVal, info.bytes);
                }

                // Build memory cell visualization
                var html = '<div style="margin-bottom:0.5rem;color:var(--accent-cyan);font-size:0.9rem;font-weight:600;">' +
                    info.label + ' value: ' + displayVal + ' &nbsp;(' + info.bytes + ' byte' + (info.bytes > 1 ? 's' : '') + ')</div>';
                html += '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.25rem;">';
                for (var i = 0; i < byteValues.length; i++) {
                    html += '<div class="memory-cell">' +
                        '<div class="cell-box" style="width:80px;font-size:0.72rem;">' + byteValues[i] + '</div>' +
                        '<div class="cell-label">Byte ' + i + '</div>' +
                    '</div>';
                }
                html += '</div>';
                memoryDiagram.innerHTML = html;

                // Full binary representation
                bitsDisplay.textContent = 'Full binary: ' + byteValues.join(' ') +
                    '  (' + (info.bytes * 8) + ' bits total)';
            }

            if (visualizeBtn) {
                visualizeBtn.addEventListener('click', visualize);
                valueInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') visualize();
                });
                typeSelect.addEventListener('change', visualize);
                visualize();
            }
        }
    });


    // =====================================================
    // TOPIC 3: Operators in C++
    // =====================================================
    window.APP.register({
        id: 'operators',
        title: 'Operators in C++',
        unit: 1,
        icon: '➕',
        description: 'All types of operators with examples',

        content() {
            // Helper for building tab content
            var assignmentTab = `
                <h3>Assignment Operator (<code>=</code>)</h3>
                <p>The assignment operator stores the value on its right side into the variable on its left side. The left side must be an <strong>lvalue</strong> (a named memory location like a variable), and the right side can be any expression that produces a value.</p>
                <p>Assignment in C++ is a <strong>right-to-left</strong> operation: first the right side is evaluated, then the result is stored into the left-side variable.</p>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int x = 10;        // Initialize x with 10
    int y = 20;        // Initialize y with 20
    int z;

    z = x + y;         // z gets 30
    cout << "z = " << z << endl;

    // Chained assignment (right to left)
    int a, b, c;
    a = b = c = 100;   // c=100, then b=c, then a=b
    cout << "a=" << a << " b=" << b << " c=" << c << endl;

    // Assignment returns the assigned value
    int m;
    cout << "m = " << (m = 55) << endl;

    return 0;
}`,
`z = 30
a=100 b=100 c=100
m = 55`, 'cpp', 'Assignment Operator')}
            `;

            var arithmeticTab = `
                <h3>Arithmetic Operators</h3>
                <p>Arithmetic operators perform mathematical calculations. C++ provides five basic arithmetic operators:</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Name</th><th>Example</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr><td><code>+</code></td><td>Addition</td><td><code>5 + 3</code></td><td>8</td></tr>
                        <tr><td><code>-</code></td><td>Subtraction</td><td><code>10 - 4</code></td><td>6</td></tr>
                        <tr><td><code>*</code></td><td>Multiplication</td><td><code>6 * 7</code></td><td>42</td></tr>
                        <tr><td><code>/</code></td><td>Division</td><td><code>15 / 4</code></td><td>3 (integer division!)</td></tr>
                        <tr><td><code>%</code></td><td>Modulus (remainder)</td><td><code>15 % 4</code></td><td>3</td></tr>
                    </tbody>
                </table>
                <div class="warning-box">
                    <h4>⚠️ Integer Division</h4>
                    <p>When both operands are integers, <code>/</code> performs <strong>integer division</strong> — the result is truncated (decimal part discarded). <code>15 / 4 = 3</code>, not 3.75. To get a decimal result, at least one operand must be a floating-point type: <code>15.0 / 4 = 3.75</code>.</p>
                </div>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int a = 17, b = 5;

    cout << "a + b = " << (a + b) << endl;
    cout << "a - b = " << (a - b) << endl;
    cout << "a * b = " << (a * b) << endl;
    cout << "a / b = " << (a / b) << endl;     // Integer division
    cout << "a % b = " << (a % b) << endl;     // Remainder

    // Floating-point division
    cout << "17.0 / 5 = " << (17.0 / 5) << endl;

    // Unary minus
    int c = -a;
    cout << "-a = " << c << endl;

    return 0;
}`,
`a + b = 22
a - b = 12
a * b = 85
a / b = 3
a % b = 2
17.0 / 5 = 3.4
-a = -17`, 'cpp', 'Arithmetic Operators')}
            `;

            var compoundTab = `
                <h3>Compound Assignment Operators</h3>
                <p>Compound assignment operators combine an arithmetic (or bitwise) operation with assignment into a single operator. They are a shorthand that makes code more concise and sometimes slightly more efficient.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Equivalent To</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>+=</code></td><td><code>a = a + b</code></td><td><code>x += 5;</code> &rarr; adds 5 to x</td></tr>
                        <tr><td><code>-=</code></td><td><code>a = a - b</code></td><td><code>x -= 3;</code> &rarr; subtracts 3 from x</td></tr>
                        <tr><td><code>*=</code></td><td><code>a = a * b</code></td><td><code>x *= 2;</code> &rarr; doubles x</td></tr>
                        <tr><td><code>/=</code></td><td><code>a = a / b</code></td><td><code>x /= 4;</code> &rarr; divides x by 4</td></tr>
                        <tr><td><code>%=</code></td><td><code>a = a % b</code></td><td><code>x %= 3;</code> &rarr; remainder when x is divided by 3</td></tr>
                    </tbody>
                </table>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int x = 20;
    cout << "Initial x = " << x << endl;

    x += 5;   // x = 20 + 5 = 25
    cout << "After x += 5:  x = " << x << endl;

    x -= 8;   // x = 25 - 8 = 17
    cout << "After x -= 8:  x = " << x << endl;

    x *= 3;   // x = 17 * 3 = 51
    cout << "After x *= 3:  x = " << x << endl;

    x /= 10;  // x = 51 / 10 = 5 (integer division)
    cout << "After x /= 10: x = " << x << endl;

    x %= 3;   // x = 5 % 3 = 2
    cout << "After x %= 3:  x = " << x << endl;

    return 0;
}`,
`Initial x = 20
After x += 5:  x = 25
After x -= 8:  x = 17
After x *= 3:  x = 51
After x /= 10: x = 5
After x %= 3:  x = 2`, 'cpp', 'Compound Assignment')}
            `;

            var incrDecrTab = `
                <h3>Increment &amp; Decrement Operators (<code>++</code>, <code>--</code>)</h3>
                <p>These unary operators increase or decrease a variable's value by 1. They come in two forms:</p>
                <table class="styled-table">
                    <thead><tr><th>Form</th><th>Name</th><th>Behaviour</th></tr></thead>
                    <tbody>
                        <tr><td><code>++x</code></td><td>Pre-increment</td><td><strong>First</strong> increments x, <strong>then</strong> returns the new value.</td></tr>
                        <tr><td><code>x++</code></td><td>Post-increment</td><td><strong>First</strong> returns the current value, <strong>then</strong> increments x.</td></tr>
                        <tr><td><code>--x</code></td><td>Pre-decrement</td><td><strong>First</strong> decrements x, <strong>then</strong> returns the new value.</td></tr>
                        <tr><td><code>x--</code></td><td>Post-decrement</td><td><strong>First</strong> returns the current value, <strong>then</strong> decrements x.</td></tr>
                    </tbody>
                </table>

                <div class="concept-box">
                    <h4>🧠 Pre vs Post: Step-by-Step</h4>
                    <p>Consider <code>int a = 5;</code></p>
                    <p><code>int b = ++a;</code> — Step 1: a becomes 6. Step 2: b gets the value 6. &rarr; <strong>a=6, b=6</strong></p>
                    <p><code>int a = 5;</code> (reset)</p>
                    <p><code>int c = a++;</code> — Step 1: c gets the current value 5. Step 2: a becomes 6. &rarr; <strong>a=6, c=5</strong></p>
                </div>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int a = 5;

    // Pre-increment: increment first, then use
    cout << "a = " << a << endl;
    cout << "++a = " << (++a) << endl;   // a becomes 6, prints 6
    cout << "a is now: " << a << endl;

    a = 5;  // Reset

    // Post-increment: use first, then increment
    cout << "\\na = " << a << endl;
    cout << "a++ = " << (a++) << endl;   // prints 5, THEN a becomes 6
    cout << "a is now: " << a << endl;

    // Pre vs Post in expressions
    int x = 10;
    int y = ++x * 2;   // x becomes 11, then y = 11*2 = 22
    cout << "\\nx=" << x << " y=" << y << endl;

    x = 10;
    int z = x++ * 2;   // z = 10*2 = 20, then x becomes 11
    cout << "x=" << x << " z=" << z << endl;

    return 0;
}`,
`a = 5
++a = 6
a is now: 6

a = 5
a++ = 5
a is now: 6

x=11 y=22
x=11 z=20`, 'cpp', 'Pre vs Post Increment/Decrement')}
            `;

            var relationalTab = `
                <h3>Relational (Comparison) Operators</h3>
                <p>Relational operators compare two values and return a <code>bool</code> result (<code>true</code> or <code>false</code>). They are essential for making decisions in <code>if</code> statements and loops.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Meaning</th><th>Example</th><th>Result</th></tr></thead>
                    <tbody>
                        <tr><td><code>==</code></td><td>Equal to</td><td><code>5 == 5</code></td><td>true</td></tr>
                        <tr><td><code>!=</code></td><td>Not equal to</td><td><code>5 != 3</code></td><td>true</td></tr>
                        <tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 5</code></td><td>true</td></tr>
                        <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>5 &gt; 3</code></td><td>true</td></tr>
                        <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>5 &lt;= 5</code></td><td>true</td></tr>
                        <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>3 &gt;= 5</code></td><td>false</td></tr>
                    </tbody>
                </table>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;

    cout << boolalpha;  // Print true/false instead of 1/0
    cout << "a == b: " << (a == b) << endl;
    cout << "a != b: " << (a != b) << endl;
    cout << "a < b:  " << (a < b) << endl;
    cout << "a > b:  " << (a > b) << endl;
    cout << "a <= 10: " << (a <= 10) << endl;
    cout << "a >= 15: " << (a >= 15) << endl;

    return 0;
}`,
`a == b: false
a != b: true
a < b:  true
a > b:  false
a <= 10: true
a >= 15: false`, 'cpp', 'Relational Operators')}
                <div class="warning-box">
                    <h4>⚠️ Common Mistake: <code>=</code> vs <code>==</code></h4>
                    <p><code>=</code> is <strong>assignment</strong> (sets a value), while <code>==</code> is <strong>comparison</strong> (checks equality). Writing <code>if (x = 5)</code> assigns 5 to x (always true!), while <code>if (x == 5)</code> checks if x equals 5. This is one of the most common bugs in C++.</p>
                </div>
            `;

            var logicalTab = `
                <h3>Logical Operators</h3>
                <p>Logical operators combine boolean expressions. They are used to build complex conditions from simpler ones.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Name</th><th>Description</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td><code>&&</code></td><td>Logical AND</td><td>True only if <strong>both</strong> operands are true</td><td><code>(x > 0) && (x < 100)</code></td></tr>
                        <tr><td><code>||</code></td><td>Logical OR</td><td>True if <strong>at least one</strong> operand is true</td><td><code>(x == 0) || (x == 1)</code></td></tr>
                        <tr><td><code>!</code></td><td>Logical NOT</td><td><strong>Inverts</strong> the truth value</td><td><code>!isReady</code></td></tr>
                    </tbody>
                </table>

                <h4>Truth Table</h4>
                <table class="styled-table">
                    <thead><tr><th>A</th><th>B</th><th>A && B</th><th>A || B</th><th>!A</th></tr></thead>
                    <tbody>
                        <tr><td>true</td><td>true</td><td>true</td><td>true</td><td>false</td></tr>
                        <tr><td>true</td><td>false</td><td>false</td><td>true</td><td>false</td></tr>
                        <tr><td>false</td><td>true</td><td>false</td><td>true</td><td>true</td></tr>
                        <tr><td>false</td><td>false</td><td>false</td><td>false</td><td>true</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>💡 Short-Circuit Evaluation</h4>
                    <p><code>&&</code> and <code>||</code> use <strong>short-circuit evaluation</strong>: if the result can be determined from the first operand alone, the second operand is <em>not evaluated</em>. For <code>&&</code>, if the first operand is false, the whole expression is false. For <code>||</code>, if the first operand is true, the whole expression is true. This is useful for avoiding errors like <code>if (ptr != NULL && *ptr > 0)</code> — if <code>ptr</code> is NULL, the dereference is never executed.</p>
                </div>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int age = 20;
    bool hasID = true;

    cout << boolalpha;

    // AND: both conditions must be true
    cout << "age >= 18 && hasID: "
         << (age >= 18 && hasID) << endl;

    // OR: at least one must be true
    cout << "age < 18 || hasID: "
         << (age < 18 || hasID) << endl;

    // NOT: inverts the value
    cout << "!hasID: " << (!hasID) << endl;

    // Complex condition
    int score = 85;
    bool isActive = true;
    bool eligible = (score >= 80) && isActive && (age >= 18);
    cout << "Eligible: " << eligible << endl;

    return 0;
}`,
`age >= 18 && hasID: true
age < 18 || hasID: true
!hasID: false
Eligible: true`, 'cpp', 'Logical Operators')}
            `;

            var bitwiseTab = `
                <h3>Bitwise Operators</h3>
                <p>Bitwise operators work on individual <strong>bits</strong> of integer values. They are essential for low-level programming, embedded systems, graphics, and physics simulations that require efficient flag manipulation.</p>
                <table class="styled-table">
                    <thead><tr><th>Operator</th><th>Name</th><th>Description</th></tr></thead>
                    <tbody>
                        <tr><td><code>&</code></td><td>Bitwise AND</td><td>1 if both bits are 1</td></tr>
                        <tr><td><code>|</code></td><td>Bitwise OR</td><td>1 if at least one bit is 1</td></tr>
                        <tr><td><code>^</code></td><td>Bitwise XOR</td><td>1 if bits are different</td></tr>
                        <tr><td><code>~</code></td><td>Bitwise NOT</td><td>Inverts all bits</td></tr>
                        <tr><td><code>&lt;&lt;</code></td><td>Left Shift</td><td>Shifts bits left (multiplies by 2)</td></tr>
                        <tr><td><code>&gt;&gt;</code></td><td>Right Shift</td><td>Shifts bits right (divides by 2)</td></tr>
                    </tbody>
                </table>

                <div class="concept-box">
                    <h4>Binary Representation Example</h4>
                    <p>Let <code>a = 12</code> (binary: <code>00001100</code>) and <code>b = 10</code> (binary: <code>00001010</code>):</p>
                    <ul>
                        <li><code>a & b</code> = <code>00001000</code> = <strong>8</strong> (AND: 1 only where both have 1)</li>
                        <li><code>a | b</code> = <code>00001110</code> = <strong>14</strong> (OR: 1 where either has 1)</li>
                        <li><code>a ^ b</code> = <code>00000110</code> = <strong>6</strong> (XOR: 1 where bits differ)</li>
                        <li><code>a &lt;&lt; 2</code> = <code>00110000</code> = <strong>48</strong> (shift left by 2 = multiply by 4)</li>
                        <li><code>a &gt;&gt; 2</code> = <code>00000011</code> = <strong>3</strong> (shift right by 2 = divide by 4)</li>
                    </ul>
                </div>

                ${APP.codeWithOutput(
`#include <iostream>
#include <bitset>    // For binary representation
using namespace std;

int main() {
    int a = 12;  // 00001100
    int b = 10;  // 00001010

    cout << "a      = " << bitset<8>(a) << " (" << a << ")" << endl;
    cout << "b      = " << bitset<8>(b) << " (" << b << ")" << endl;
    cout << "a & b  = " << bitset<8>(a & b) << " (" << (a & b) << ")" << endl;
    cout << "a | b  = " << bitset<8>(a | b) << " (" << (a | b) << ")" << endl;
    cout << "a ^ b  = " << bitset<8>(a ^ b) << " (" << (a ^ b) << ")" << endl;
    cout << "~a     = " << bitset<8>(~a) << " (" << (int)(unsigned char)(~a) << " as unsigned char)" << endl;
    cout << "a << 2 = " << bitset<8>(a << 2) << " (" << (a << 2) << ")" << endl;
    cout << "a >> 2 = " << bitset<8>(a >> 2) << " (" << (a >> 2) << ")" << endl;

    return 0;
}`,
`a      = 00001100 (12)
b      = 00001010 (10)
a & b  = 00001000 (8)
a | b  = 00001110 (14)
a ^ b  = 00000110 (6)
~a     = 11110011 (243 as unsigned char)
a << 2 = 00110000 (48)
a >> 2 = 00000011 (3)`, 'cpp', 'Bitwise Operators with Binary Output')}
            `;

            var ternaryTab = `
                <h3>Conditional (Ternary) Operator (<code>? :</code>)</h3>
                <p>The ternary operator is the only C++ operator that takes <strong>three operands</strong>. It is a compact alternative to an <code>if-else</code> statement for simple conditions.</p>

                <div class="math-display">
                    \\( \\texttt{condition ? value\\_if\\_true : value\\_if\\_false} \\)
                </div>

                <p>How it works: First, the <code>condition</code> is evaluated. If it is <code>true</code>, the expression evaluates to <code>value_if_true</code>. If it is <code>false</code>, the expression evaluates to <code>value_if_false</code>.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 20;

    // Simple usage: find the larger value
    int max = (a > b) ? a : b;
    cout << "Max of " << a << " and " << b << " = " << max << endl;

    // Directly in cout
    int age = 20;
    cout << "You are " << ((age >= 18) ? "an adult" : "a minor") << endl;

    // Nested ternary (use sparingly — less readable)
    int score = 85;
    string grade = (score >= 90) ? "A" :
                   (score >= 80) ? "B" :
                   (score >= 70) ? "C" : "F";
    cout << "Score " << score << " = Grade " << grade << endl;

    // Assigning based on condition
    int x = 7;
    string parity = (x % 2 == 0) ? "even" : "odd";
    cout << x << " is " << parity << endl;

    return 0;
}`,
`Max of 15 and 20 = 20
You are an adult
Score 85 = Grade B
7 is odd`, 'cpp', 'Ternary Operator')}
            `;

            var sizeofCastTab = `
                <h3>sizeof Operator</h3>
                <p>The <code>sizeof</code> operator returns the <strong>size in bytes</strong> of a type or variable. It is evaluated at <strong>compile time</strong> (not runtime), making it very efficient. It can be used with types, variables, and expressions.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    cout << "sizeof(char):      " << sizeof(char) << " byte" << endl;
    cout << "sizeof(short):     " << sizeof(short) << " bytes" << endl;
    cout << "sizeof(int):       " << sizeof(int) << " bytes" << endl;
    cout << "sizeof(long):      " << sizeof(long) << " bytes" << endl;
    cout << "sizeof(long long): " << sizeof(long long) << " bytes" << endl;
    cout << "sizeof(float):     " << sizeof(float) << " bytes" << endl;
    cout << "sizeof(double):    " << sizeof(double) << " bytes" << endl;
    cout << "sizeof(bool):      " << sizeof(bool) << " byte" << endl;

    // Using with variables
    double pi = 3.14159;
    cout << "\\nsizeof(pi): " << sizeof(pi) << " bytes" << endl;

    // Using with expressions
    int x = 5;
    cout << "sizeof(x + 1.0): " << sizeof(x + 1.0) << " bytes" << endl;
    // int + double = double, so result is 8 bytes

    return 0;
}`,
`sizeof(char):      1 byte
sizeof(short):     2 bytes
sizeof(int):       4 bytes
sizeof(long):      4 bytes
sizeof(long long): 8 bytes
sizeof(float):     4 bytes
sizeof(double):    8 bytes
sizeof(bool):      1 byte

sizeof(pi): 8 bytes
sizeof(x + 1.0): 8 bytes`, 'cpp', 'sizeof Operator')}

                <h3>Type Casting (Type Conversion)</h3>
                <p>Type casting converts a value from one data type to another. C++ supports both <strong>implicit</strong> (automatic) and <strong>explicit</strong> (manual) type conversion.</p>

                <h4>Implicit Conversion (Coercion)</h4>
                <p>The compiler automatically converts smaller/less precise types to larger/more precise types when they are mixed in expressions. This follows the hierarchy: <code>bool → char → short → int → long → long long → float → double → long double</code>.</p>

                <h4>Explicit Casting</h4>
                <table class="styled-table">
                    <thead><tr><th>Style</th><th>Syntax</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td>C-style cast</td><td><code>(type)expression</code></td><td><code>(int)3.7</code> &rarr; 3</td></tr>
                        <tr><td>C++ static_cast</td><td><code>static_cast&lt;type&gt;(expr)</code></td><td><code>static_cast&lt;int&gt;(3.7)</code> &rarr; 3</td></tr>
                    </tbody>
                </table>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    // Implicit conversion
    int i = 42;
    double d = i;    // int -> double (automatic)
    cout << "int to double: " << d << endl;

    // Explicit C-style cast
    double pi = 3.14159;
    int truncated = (int)pi;   // Loses decimal part
    cout << "C-style cast: (int)" << pi << " = " << truncated << endl;

    // C++ static_cast (preferred)
    double val = 9.99;
    int rounded_down = static_cast<int>(val);
    cout << "static_cast<int>(" << val << ") = " << rounded_down << endl;

    // Fixing integer division
    int a = 7, b = 2;
    cout << "7 / 2 (int):    " << (a / b) << endl;
    cout << "7 / 2 (double): " << (static_cast<double>(a) / b) << endl;

    // char to int (ASCII)
    char ch = 'A';
    cout << "char 'A' as int: " << static_cast<int>(ch) << endl;

    return 0;
}`,
`int to double: 42
C-style cast: (int)3.14159 = 3
static_cast<int>(9.99) = 9
7 / 2 (int):    3
7 / 2 (double): 3.5
char 'A' as int: 65`, 'cpp', 'Type Casting')}

                <div class="tip-box">
                    <h4>💡 Best Practice</h4>
                    <p>Prefer <code>static_cast&lt;type&gt;()</code> over C-style casts <code>(type)</code>. The C++ cast is more explicit, easier to search for in code, and the compiler can check it more carefully. Reserve C-style casts only for very simple conversions.</p>
                </div>
            `;

            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rarr; Operators in C++</div>
                <h1>Operators in C++</h1>
                <p class="topic-subtitle">A comprehensive guide to every type of C++ operator — from basic arithmetic to bitwise manipulation, with complete examples and an interactive expression evaluator.</p>
            </div>

            <div class="theory-section">
                <h2>📌 What are Operators?</h2>
                <p>An <strong>operator</strong> is a special symbol that tells the compiler to perform a specific mathematical, logical, or manipulative operation on one or more <strong>operands</strong> (values or variables). For example, in the expression <code>a + b</code>, <code>+</code> is the operator and <code>a</code> and <code>b</code> are the operands.</p>
                <p>C++ has one of the richest sets of operators among programming languages. Operators are classified by:</p>
                <ul>
                    <li><strong>Number of operands</strong>: Unary (1 operand, e.g., <code>-x</code>), Binary (2 operands, e.g., <code>a + b</code>), Ternary (3 operands, <code>? :</code>).</li>
                    <li><strong>Type of operation</strong>: Arithmetic, Relational, Logical, Bitwise, Assignment, etc.</li>
                </ul>
            </div>

            <div class="theory-section">
                <h2>📂 Operators by Category</h2>
                <p>Click on each tab to explore a category of operators with explanations and code examples:</p>

                ${APP.createTabs('operators-tabs', [
                    { label: '📝 Assignment', content: assignmentTab },
                    { label: '🔢 Arithmetic', content: arithmeticTab },
                    { label: '⚡ Compound', content: compoundTab },
                    { label: '🔄 ++/--', content: incrDecrTab },
                    { label: '⚖️ Relational', content: relationalTab },
                    { label: '🧠 Logical', content: logicalTab },
                    { label: '💾 Bitwise', content: bitwiseTab },
                    { label: '❓ Ternary', content: ternaryTab },
                    { label: '📏 sizeof & Cast', content: sizeofCastTab }
                ])}
            </div>

            <!-- ========== OPERATOR PRECEDENCE TABLE ========== -->
            <div class="theory-section">
                <h2>📊 Operator Precedence Table</h2>
                <p>When multiple operators appear in a single expression, C++ uses <strong>precedence</strong> (priority) and <strong>associativity</strong> (direction) rules to determine the order of evaluation. Higher precedence operators are evaluated first.</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>Priority</th><th>Operator(s)</th><th>Description</th><th>Associativity</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1 (highest)</td><td><code>()</code></td><td>Parentheses (grouping)</td><td>Left to Right</td></tr>
                        <tr><td>2</td><td><code>++</code> <code>--</code> (postfix)</td><td>Post-increment, Post-decrement</td><td>Left to Right</td></tr>
                        <tr><td>3</td><td><code>++</code> <code>--</code> (prefix) <code>!</code> <code>~</code> <code>-</code> <code>sizeof</code></td><td>Unary operators</td><td>Right to Left</td></tr>
                        <tr><td>4</td><td><code>(type)</code> <code>static_cast</code></td><td>Type casting</td><td>Right to Left</td></tr>
                        <tr><td>5</td><td><code>*</code> <code>/</code> <code>%</code></td><td>Multiplication, Division, Modulus</td><td>Left to Right</td></tr>
                        <tr><td>6</td><td><code>+</code> <code>-</code></td><td>Addition, Subtraction</td><td>Left to Right</td></tr>
                        <tr><td>7</td><td><code>&lt;&lt;</code> <code>&gt;&gt;</code></td><td>Bitwise shifts</td><td>Left to Right</td></tr>
                        <tr><td>8</td><td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td><td>Relational</td><td>Left to Right</td></tr>
                        <tr><td>9</td><td><code>==</code> <code>!=</code></td><td>Equality</td><td>Left to Right</td></tr>
                        <tr><td>10</td><td><code>&</code></td><td>Bitwise AND</td><td>Left to Right</td></tr>
                        <tr><td>11</td><td><code>^</code></td><td>Bitwise XOR</td><td>Left to Right</td></tr>
                        <tr><td>12</td><td><code>|</code></td><td>Bitwise OR</td><td>Left to Right</td></tr>
                        <tr><td>13</td><td><code>&&</code></td><td>Logical AND</td><td>Left to Right</td></tr>
                        <tr><td>14</td><td><code>||</code></td><td>Logical OR</td><td>Left to Right</td></tr>
                        <tr><td>15</td><td><code>?:</code></td><td>Conditional (ternary)</td><td>Right to Left</td></tr>
                        <tr><td>16</td><td><code>=</code> <code>+=</code> <code>-=</code> <code>*=</code> <code>/=</code> <code>%=</code></td><td>Assignment operators</td><td>Right to Left</td></tr>
                    </tbody>
                </table>

                <div class="tip-box">
                    <h4>💡 Tip: When in Doubt, Use Parentheses!</h4>
                    <p>You don't need to memorise the entire precedence table. When an expression could be ambiguous, simply use parentheses <code>()</code> to make your intention clear. This also makes your code more readable for other programmers (and your future self).</p>
                </div>
            </div>

            <!-- ========== INTERACTIVE EXPRESSION EVALUATOR ========== -->
            <div class="interactive-area">
                <h3>Expression Evaluator</h3>
                <p style="margin-bottom:1rem;color:var(--text-secondary);">Enter a C++ arithmetic/logical expression and see the result with a step-by-step evaluation showing operator precedence. Supports: <code>+ - * / % ** ( )</code> and comparisons.</p>

                <div class="controls-row">
                    <div class="control-field" style="flex:3;">
                        <label for="op-expr-input">C++ Expression</label>
                        <input type="text" id="op-expr-input" placeholder="e.g. 5 + 3 * 2" value="5 + 3 * 2">
                    </div>
                    <div class="control-field" style="flex:1;">
                        <label>&nbsp;</label>
                        <button class="btn btn-primary" id="op-eval-btn">Evaluate</button>
                    </div>
                </div>

                <div class="btn-group" style="margin-bottom:0.75rem;">
                    <button class="btn btn-secondary btn-sm" data-op-example="5 + 3 * 2">5 + 3 * 2</button>
                    <button class="btn btn-secondary btn-sm" data-op-example="(5 + 3) * 2">(5 + 3) * 2</button>
                    <button class="btn btn-secondary btn-sm" data-op-example="10 / 3">10 / 3</button>
                    <button class="btn btn-secondary btn-sm" data-op-example="2 + 3 * 4 - 1">2 + 3 * 4 - 1</button>
                    <button class="btn btn-secondary btn-sm" data-op-example="17 % 5">17 % 5</button>
                    <button class="btn btn-secondary btn-sm" data-op-example="100 / 3 * 3 + 100 % 3">100 / 3 * 3 + 100 % 3</button>
                </div>

                <div id="op-eval-result" class="result-display" style="min-height:50px;"></div>
            </div>

            <div class="theory-section">
                <h2>📝 Summary</h2>
                <ul>
                    <li><strong>Assignment</strong> (<code>=</code>): stores a value in a variable.</li>
                    <li><strong>Arithmetic</strong> (<code>+ - * / %</code>): perform math; beware of integer division.</li>
                    <li><strong>Compound Assignment</strong> (<code>+= -= *= /= %=</code>): shorthand for operation + assignment.</li>
                    <li><strong>Increment/Decrement</strong> (<code>++ --</code>): pre (change then use) vs post (use then change).</li>
                    <li><strong>Relational</strong> (<code>== != &lt; &gt; &lt;= &gt;=</code>): compare values, return bool.</li>
                    <li><strong>Logical</strong> (<code>&& || !</code>): combine boolean conditions; use short-circuit evaluation.</li>
                    <li><strong>Bitwise</strong> (<code>& | ^ ~ &lt;&lt; &gt;&gt;</code>): operate on individual bits.</li>
                    <li><strong>Ternary</strong> (<code>? :</code>): compact if-else for simple conditions.</li>
                    <li><strong>sizeof</strong>: returns byte count of a type/variable (compile-time).</li>
                    <li><strong>Type Casting</strong>: prefer <code>static_cast&lt;&gt;</code> over C-style casts.</li>
                    <li>Use <strong>parentheses</strong> to clarify precedence in complex expressions.</li>
                </ul>
            </div>
            `;
        },

        init() {
            var exprInput = document.getElementById('op-expr-input');
            var evalBtn = document.getElementById('op-eval-btn');
            var resultDisplay = document.getElementById('op-eval-result');

            // Example buttons
            document.querySelectorAll('[data-op-example]').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    exprInput.value = this.getAttribute('data-op-example');
                    evaluateExpression();
                });
            });

            function tokenize(expr) {
                var tokens = [];
                var i = 0;
                while (i < expr.length) {
                    if (expr[i] === ' ') { i++; continue; }
                    if ('0123456789.'.indexOf(expr[i]) !== -1) {
                        var num = '';
                        while (i < expr.length && '0123456789.'.indexOf(expr[i]) !== -1) {
                            num += expr[i]; i++;
                        }
                        tokens.push({ type: 'num', value: parseFloat(num) });
                    } else if ('+-*/%()'.indexOf(expr[i]) !== -1) {
                        tokens.push({ type: 'op', value: expr[i] });
                        i++;
                    } else {
                        i++;
                    }
                }
                return tokens;
            }

            function getPrecedence(op) {
                if (op === '+' || op === '-') return 1;
                if (op === '*' || op === '/' || op === '%') return 2;
                return 0;
            }

            function applyOp(a, op, b) {
                switch (op) {
                    case '+': return a + b;
                    case '-': return a - b;
                    case '*': return a * b;
                    case '/': return b !== 0 ? (Number.isInteger(a) && Number.isInteger(b) ? Math.trunc(a / b) : a / b) : NaN;
                    case '%': return b !== 0 ? a % b : NaN;
                    default: return NaN;
                }
            }

            function evaluateExpression() {
                var expr = exprInput.value.trim();
                if (!expr) {
                    resultDisplay.textContent = 'Please enter an expression.';
                    return;
                }

                var steps = [];
                steps.push('Expression: ' + expr);

                try {
                    // Use a safe evaluator with step tracking
                    var tokens = tokenize(expr);
                    var values = [];
                    var ops = [];

                    function compute() {
                        var b = values.pop();
                        var a = values.pop();
                        var op = ops.pop();
                        var result = applyOp(a, op, b);
                        steps.push('  ' + a + ' ' + op + ' ' + b + ' = ' + result);
                        values.push(result);
                    }

                    for (var i = 0; i < tokens.length; i++) {
                        var t = tokens[i];
                        if (t.type === 'num') {
                            values.push(t.value);
                        } else if (t.value === '(') {
                            ops.push('(');
                        } else if (t.value === ')') {
                            while (ops.length > 0 && ops[ops.length - 1] !== '(') {
                                compute();
                            }
                            ops.pop(); // remove '('
                        } else {
                            while (ops.length > 0 && ops[ops.length - 1] !== '(' &&
                                   getPrecedence(ops[ops.length - 1]) >= getPrecedence(t.value)) {
                                compute();
                            }
                            ops.push(t.value);
                        }
                    }

                    while (ops.length > 0) {
                        compute();
                    }

                    var finalResult = values[0];
                    steps.push('');
                    steps.push('Step-by-step evaluation (by precedence):');
                    // Re-evaluate with clearer steps
                    steps.push('');
                    steps.push('Final Result: ' + expr + ' = ' + finalResult);

                    resultDisplay.textContent = steps.join('\n');
                } catch (e) {
                    resultDisplay.textContent = 'Error: Invalid expression. Please use numeric values and operators (+ - * / %).';
                }
            }

            if (evalBtn) {
                evalBtn.addEventListener('click', evaluateExpression);
                exprInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') evaluateExpression();
                });
                evaluateExpression();
            }
        }
    });


    // =====================================================
    // TOPIC 4: Variables & Scope
    // =====================================================
    window.APP.register({
        id: 'variables',
        title: 'Variables & Scope',
        unit: 1,
        icon: '📦',
        description: 'Constants, variables, scope and storage classes',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rarr; Variables &amp; Scope</div>
                <h1>Variables &amp; Scope</h1>
                <p class="topic-subtitle">Understanding constants, variable declaration, naming rules, scope rules (local, global, block), and storage classes (auto, static, extern).</p>
            </div>

            <!-- ========== CONSTANTS ========== -->
            <div class="theory-section">
                <h2>🔒 Constants</h2>
                <p>A <strong>constant</strong> is a named value that <em>cannot be changed</em> after it is initialised. Constants make code safer (preventing accidental modification), more readable (giving names to magic numbers), and easier to maintain (change the value in one place).</p>

                <h3>1. The <code>const</code> Keyword</h3>
                <p>The <code>const</code> keyword declares a variable whose value cannot be modified after initialisation. It must be initialised at the time of declaration.</p>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159265;
    const int MAX_SIZE = 100;
    const char NEWLINE = '\\n';

    cout << "PI = " << PI << endl;
    cout << "MAX_SIZE = " << MAX_SIZE << endl;

    // PI = 3.14;  // ERROR! Cannot modify a const variable
    // Uncommenting the line above would cause a compilation error:
    // "assignment of read-only variable 'PI'"

    // const must be initialized at declaration
    // const int x;  // ERROR! Uninitialized const

    return 0;
}`,
`PI = 3.14159265
MAX_SIZE = 100`, 'cpp', 'const Keyword')}

                <h3>2. The <code>#define</code> Preprocessor Directive</h3>
                <p><code>#define</code> creates a <strong>macro</strong> — a text replacement performed by the preprocessor <em>before</em> compilation. It has no type and no memory allocation; it simply substitutes text.</p>
                ${APP.codeWithOutput(
`#include <iostream>
#define PI 3.14159265
#define SQUARE(x) ((x) * (x))
#define MAX_SIZE 100
using namespace std;

int main() {
    cout << "PI = " << PI << endl;
    cout << "Area of circle (r=5): " << PI * SQUARE(5) << endl;
    cout << "MAX_SIZE = " << MAX_SIZE << endl;

    // After preprocessing, the compiler sees:
    // cout << "PI = " << 3.14159265 << endl;
    // cout << "Area of circle (r=5): " << 3.14159265 * ((5) * (5)) << endl;

    return 0;
}`,
`PI = 3.14159265
Area of circle (r=5): 78.5398
MAX_SIZE = 100`, 'cpp', '#define Macros')}

                <div class="warning-box">
                    <h4>⚠️ <code>const</code> vs <code>#define</code></h4>
                    <p><code>const</code> is preferred in modern C++ because:</p>
                    <ul>
                        <li><code>const</code> has a <strong>type</strong>, so the compiler can check type correctness.</li>
                        <li><code>const</code> variables have <strong>scope</strong> and follow normal scoping rules.</li>
                        <li><code>#define</code> performs blind text replacement, which can cause subtle bugs (e.g., <code>#define SQUARE(x) x*x</code> gives wrong results for <code>SQUARE(1+2)</code> = <code>1+2*1+2</code> = 5 instead of 9).</li>
                        <li><code>const</code> appears in the debugger; <code>#define</code> does not.</li>
                    </ul>
                </div>

                <h3>3. Literal Constants</h3>
                <p>Literal constants are fixed values written directly in the code. They have an inherent type:</p>
                <table class="styled-table">
                    <thead><tr><th>Type</th><th>Examples</th><th>Notes</th></tr></thead>
                    <tbody>
                        <tr><td>Integer</td><td><code>42</code>, <code>-10</code>, <code>0xFF</code>, <code>077</code></td><td><code>0x</code> = hex, <code>0</code> prefix = octal, <code>0b</code> = binary</td></tr>
                        <tr><td>Floating</td><td><code>3.14</code>, <code>2.0e10</code>, <code>1.5f</code></td><td>Default is <code>double</code>; suffix <code>f</code> for <code>float</code></td></tr>
                        <tr><td>Character</td><td><code>'A'</code>, <code>'\\n'</code>, <code>'\\t'</code></td><td>Single quotes, includes escape sequences</td></tr>
                        <tr><td>String</td><td><code>"Hello"</code>, <code>"C++"</code></td><td>Double quotes, null-terminated</td></tr>
                        <tr><td>Boolean</td><td><code>true</code>, <code>false</code></td><td>Keywords, not strings</td></tr>
                    </tbody>
                </table>

                <h3>4. <code>constexpr</code> (C++11)</h3>
                <p><code>constexpr</code> declares a constant whose value can be computed at <strong>compile time</strong>. This is even stronger than <code>const</code> — the compiler guarantees the value is known before the program runs, enabling optimisations.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

constexpr double PI = 3.14159265;
constexpr int square(int x) { return x * x; }
constexpr double circleArea(double r) { return PI * r * r; }

int main() {
    constexpr int side = 5;
    constexpr int area = square(side);  // Computed at compile time!

    cout << "Square of " << side << " = " << area << endl;
    cout << "Circle area (r=3): " << circleArea(3.0) << endl;

    // Can be used where compile-time constants are required
    int arr[square(3)];  // Array of size 9 - valid!
    cout << "Array size: " << sizeof(arr)/sizeof(arr[0]) << endl;

    return 0;
}`,
`Square of 5 = 25
Circle area (r=3): 28.2743
Array size: 9`, 'cpp', 'constexpr Constants')}
            </div>

            <!-- ========== VARIABLES ========== -->
            <div class="theory-section">
                <h2>📝 Variables</h2>
                <p>A <strong>variable</strong> is a named storage location in memory that holds a value which can change during program execution. Every variable has a <strong>name</strong>, a <strong>type</strong>, a <strong>value</strong>, and a <strong>memory address</strong>.</p>

                <h3>Declaration and Initialisation</h3>
                ${APP.codeBlock(
`// Declaration: tells the compiler the type and name
int age;           // Declared but uninitialized (contains garbage!)
double salary;

// Initialization: giving a variable its first value
age = 25;          // Assignment initialization
salary = 50000.0;

// Declaration + Initialization (preferred)
int count = 0;
double pi = 3.14159;
char grade = 'A';
bool passed = true;

// Multiple declarations of same type
int x = 1, y = 2, z = 3;

// C++11 uniform initialization (brace initialization)
int a{10};
double b{3.14};
int c{};           // Zero-initialized (c = 0)`, 'cpp', 'Variable Declaration & Initialization')}

                <div class="warning-box">
                    <h4>⚠️ Uninitialized Variables</h4>
                    <p>In C++, local variables are <strong>not</strong> automatically initialised. An uninitialised variable contains whatever random data was previously in that memory location (called "garbage value"). Always initialise your variables!</p>
                </div>

                <h3>Variable Naming Rules and Conventions</h3>
                <div class="info-box">
                    <h4>📏 Rules (Enforced by Compiler)</h4>
                    <ul>
                        <li>Must begin with a <strong>letter</strong> (a–z, A–Z) or an <strong>underscore</strong> (<code>_</code>).</li>
                        <li>Can contain letters, digits (0–9), and underscores after the first character.</li>
                        <li><strong>Cannot</strong> contain spaces, hyphens, or special characters (<code>@</code>, <code>#</code>, <code>!</code>, etc.).</li>
                        <li><strong>Cannot</strong> be a C++ keyword (<code>int</code>, <code>return</code>, <code>class</code>, <code>for</code>, etc.).</li>
                        <li>C++ is <strong>case-sensitive</strong>: <code>age</code>, <code>Age</code>, and <code>AGE</code> are three different variables.</li>
                    </ul>
                </div>

                <table class="styled-table">
                    <thead><tr><th>Valid Names ✅</th><th>Invalid Names ❌</th><th>Reason</th></tr></thead>
                    <tbody>
                        <tr><td><code>studentAge</code></td><td><code>2ndPlace</code></td><td>Cannot start with a digit</td></tr>
                        <tr><td><code>_count</code></td><td><code>my-var</code></td><td>Hyphens not allowed</td></tr>
                        <tr><td><code>totalScore2</code></td><td><code>my var</code></td><td>Spaces not allowed</td></tr>
                        <tr><td><code>MAX_VALUE</code></td><td><code>int</code></td><td>Reserved keyword</td></tr>
                        <tr><td><code>x</code></td><td><code>class</code></td><td>Reserved keyword</td></tr>
                    </tbody>
                </table>

                <div class="tip-box">
                    <h4>🎨 Naming Conventions (Best Practices)</h4>
                    <ul>
                        <li><strong>camelCase</strong> for variables and functions: <code>studentAge</code>, <code>totalScore</code>, <code>calculateArea</code></li>
                        <li><strong>UPPER_CASE</strong> for constants and macros: <code>MAX_SIZE</code>, <code>PI</code>, <code>NUM_STUDENTS</code></li>
                        <li><strong>PascalCase</strong> for classes and structs: <code>Student</code>, <code>PhysicsEngine</code></li>
                        <li>Use <strong>descriptive names</strong>: <code>velocity</code> is better than <code>v</code>; <code>particleCount</code> is better than <code>pc</code></li>
                    </ul>
                </div>
            </div>

            <!-- ========== SCOPE ========== -->
            <div class="theory-section">
                <h2>🔭 Variable Scope</h2>
                <p><strong>Scope</strong> defines the region of the program where a variable is accessible (visible). When you try to use a variable outside its scope, the compiler gives an error. C++ has three primary scope levels:</p>

                <h3>1. Global Scope</h3>
                <p>Variables declared <strong>outside all functions</strong> (including <code>main()</code>) have global scope. They can be accessed from <em>any function</em> in the file and exist for the <strong>entire lifetime</strong> of the program.</p>

                <h3>2. Local Scope (Function Scope)</h3>
                <p>Variables declared <strong>inside a function</strong> have local scope. They can only be accessed within that function and are <strong>created when the function is called</strong> and <strong>destroyed when the function returns</strong>.</p>

                <h3>3. Block Scope</h3>
                <p>Variables declared <strong>inside any block</strong> (a pair of <code>{ }</code>) — such as inside an <code>if</code>, <code>for</code>, or <code>while</code> — have block scope. They only exist within that specific block.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

// Global variable - accessible everywhere
int globalVar = 100;

void display() {
    // Can access globalVar here
    cout << "In display(): globalVar = " << globalVar << endl;

    // Local variable - only in this function
    int localVar = 50;
    cout << "In display(): localVar = " << localVar << endl;
}

int main() {
    cout << "In main(): globalVar = " << globalVar << endl;

    // Local variable to main
    int mainVar = 200;
    cout << "In main(): mainVar = " << mainVar << endl;

    // Block scope
    {
        int blockVar = 300;
        cout << "In block: blockVar = " << blockVar << endl;
        cout << "In block: mainVar = " << mainVar << endl;  // OK!
    }
    // cout << blockVar;  // ERROR! blockVar is out of scope here

    display();

    // cout << localVar;  // ERROR! localVar only exists in display()

    // Modifying global variable
    globalVar = 999;
    cout << "Modified globalVar = " << globalVar << endl;

    return 0;
}`,
`In main(): globalVar = 100
In main(): mainVar = 200
In block: blockVar = 300
In block: mainVar = 200
In display(): globalVar = 100
In display(): localVar = 50
Modified globalVar = 999`, 'cpp', 'Scope Demo — Global, Local, Block')}
            </div>

            <!-- ========== SCOPE VISUALIZER ========== -->
            <div class="theory-section">
                <h2>🎨 Scope Visualizer</h2>
                <p>This diagram shows how variables exist within nested scopes. Each coloured border represents a scope level. Variables are only accessible within their scope and any inner (nested) scopes.</p>

                <div class="diagram-container" style="text-align:left;padding:1.5rem;">
                    <div style="border:2px solid var(--accent-red);border-radius:12px;padding:1.25rem;margin-bottom:0;">
                        <div style="font-weight:700;color:var(--accent-red);margin-bottom:0.75rem;font-size:0.9rem;">🌐 GLOBAL SCOPE (file level)</div>
                        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
                            <span style="background:rgba(248,113,113,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-red);">int globalVar = 100</span>
                            <span style="background:rgba(248,113,113,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-red);">const double PI = 3.14</span>
                        </div>

                        <div style="border:2px solid var(--accent-blue);border-radius:12px;padding:1.25rem;margin-bottom:1rem;">
                            <div style="font-weight:700;color:var(--accent-blue);margin-bottom:0.75rem;font-size:0.9rem;">🔧 FUNCTION SCOPE: int main()</div>
                            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;">
                                <span style="background:rgba(96,165,250,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-blue);">int x = 10</span>
                                <span style="background:rgba(96,165,250,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-blue);">double y = 3.5</span>
                            </div>

                            <div style="border:2px solid var(--accent-green);border-radius:12px;padding:1rem;margin-bottom:0.5rem;">
                                <div style="font-weight:700;color:var(--accent-green);margin-bottom:0.5rem;font-size:0.85rem;">📦 BLOCK SCOPE: if (x > 5) { }</div>
                                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                                    <span style="background:rgba(52,211,153,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-green);">int temp = x * 2</span>
                                </div>
                                <div style="color:var(--text-muted);font-size:0.78rem;margin-top:0.5rem;">✅ Can access: temp, x, y, globalVar, PI</div>
                            </div>
                            <div style="color:var(--text-muted);font-size:0.78rem;margin-top:0.5rem;">✅ Can access: x, y, globalVar, PI &nbsp;&nbsp; ❌ Cannot access: temp</div>
                        </div>

                        <div style="border:2px solid var(--accent-purple);border-radius:12px;padding:1.25rem;">
                            <div style="font-weight:700;color:var(--accent-purple);margin-bottom:0.75rem;font-size:0.9rem;">🔧 FUNCTION SCOPE: void display()</div>
                            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                                <span style="background:rgba(139,92,246,0.15);padding:0.3rem 0.75rem;border-radius:6px;font-family:JetBrains Mono,monospace;font-size:0.82rem;color:var(--accent-purple);">int localVar = 50</span>
                            </div>
                            <div style="color:var(--text-muted);font-size:0.78rem;margin-top:0.5rem;">✅ Can access: localVar, globalVar, PI &nbsp;&nbsp; ❌ Cannot access: x, y, temp</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ========== NAME HIDING ========== -->
            <div class="theory-section">
                <h3>Variable Shadowing (Name Hiding)</h3>
                <p>When a local variable has the <strong>same name</strong> as a global variable, the local variable <strong>shadows</strong> (hides) the global one within its scope. You can still access the global variable using the <strong>scope resolution operator</strong> <code>::</code>.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int x = 100;   // Global x

int main() {
    int x = 50;   // Local x (shadows global x)

    cout << "Local x: " << x << endl;       // Uses local x
    cout << "Global x: " << ::x << endl;    // Uses global x (:: operator)

    {
        int x = 10;   // Block x (shadows local x)
        cout << "Block x: " << x << endl;
        cout << "Global x: " << ::x << endl;
    }

    cout << "Local x again: " << x << endl; // Back to local x

    return 0;
}`,
`Local x: 50
Global x: 100
Block x: 10
Global x: 100
Local x again: 50`, 'cpp', 'Variable Shadowing')}
            </div>

            <!-- ========== STORAGE CLASSES ========== -->
            <div class="theory-section">
                <h2>🗃️ Storage Classes</h2>
                <p>A <strong>storage class</strong> determines the <strong>lifetime</strong> (how long the variable exists in memory), <strong>scope</strong> (where it can be accessed), and <strong>default initial value</strong> of a variable.</p>

                <table class="styled-table">
                    <thead><tr><th>Storage Class</th><th>Keyword</th><th>Lifetime</th><th>Scope</th><th>Default Value</th></tr></thead>
                    <tbody>
                        <tr><td>Automatic</td><td><code>auto</code></td><td>Function/block execution</td><td>Local</td><td>Garbage (undefined)</td></tr>
                        <tr><td>Static</td><td><code>static</code></td><td>Entire program</td><td>Local (but persists)</td><td>0</td></tr>
                        <tr><td>External</td><td><code>extern</code></td><td>Entire program</td><td>Global (across files)</td><td>0</td></tr>
                    </tbody>
                </table>

                <h3>1. <code>auto</code> — Automatic Storage</h3>
                <p><code>auto</code> is the <strong>default</strong> storage class for local variables. You rarely need to write it explicitly because all local variables are automatically <code>auto</code>. The variable is created when the function/block is entered and destroyed when it exits.</p>

                <div class="info-box">
                    <h4>📌 Note on Modern C++</h4>
                    <p>In C++11 and later, the <code>auto</code> keyword was repurposed for <strong>type deduction</strong> (the compiler determines the type automatically from the initialiser). So <code>auto x = 42;</code> makes <code>x</code> an <code>int</code>. The old meaning of "automatic storage class" is now implicit.</p>
                </div>

                ${APP.codeBlock(
`#include <iostream>
using namespace std;

int main() {
    // auto (implicit - all local variables are auto by default)
    int count = 0;        // Same as: auto int count = 0; (old C++)

    // C++11 auto for type deduction:
    auto age = 25;        // int (deduced from 25)
    auto pi = 3.14;       // double (deduced from 3.14)
    auto ch = 'A';        // char (deduced from 'A')
    auto flag = true;     // bool (deduced from true)

    cout << "age: " << age << " (int)" << endl;
    cout << "pi:  " << pi << " (double)" << endl;
    cout << "ch:  " << ch << " (char)" << endl;
    cout << "flag: " << flag << " (bool)" << endl;

    return 0;
}`, 'cpp', 'auto Storage / Type Deduction')}

                <h3>2. <code>static</code> — Static Storage</h3>
                <p>A <code>static</code> local variable <strong>persists across function calls</strong>. Unlike normal local variables, a static variable is only initialised <strong>once</strong> (the first time the function is called) and retains its value between calls. It is <strong>not</strong> destroyed when the function returns.</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

void counter() {
    // auto variable: re-created each call
    int autoCount = 0;
    autoCount++;
    cout << "auto count: " << autoCount;

    // static variable: persists across calls
    static int staticCount = 0;   // Initialized only ONCE
    staticCount++;
    cout << "  |  static count: " << staticCount << endl;
}

int main() {
    cout << "Calling counter() 5 times:" << endl;
    cout << "----------------------------" << endl;
    for (int i = 0; i < 5; i++) {
        counter();
    }
    return 0;
}`,
`Calling counter() 5 times:
----------------------------
auto count: 1  |  static count: 1
auto count: 1  |  static count: 2
auto count: 1  |  static count: 3
auto count: 1  |  static count: 4
auto count: 1  |  static count: 5`, 'cpp', 'static vs auto — Counter Example')}

                <div class="concept-box">
                    <h4>🔑 Key Observations</h4>
                    <ul>
                        <li><code>autoCount</code> is <strong>reset to 0</strong> every time <code>counter()</code> is called because it is created fresh each time.</li>
                        <li><code>staticCount</code> <strong>retains its value</strong> between calls. The initialisation <code>= 0</code> only happens the first time.</li>
                        <li><code>static</code> variables are automatically initialised to <strong>0</strong> if no initialiser is provided.</li>
                        <li>Despite persisting in memory, <code>staticCount</code> is still <strong>local in scope</strong> — it cannot be accessed from <code>main()</code> or any other function.</li>
                    </ul>
                </div>

                <h3>3. <code>extern</code> — External Storage</h3>
                <p>The <code>extern</code> keyword declares a variable that is <strong>defined in another file</strong> (or elsewhere in the same file). It tells the compiler: "this variable exists, but don't allocate memory here — it's defined somewhere else." This is used to share global variables across multiple source files.</p>

                ${APP.codeBlock(
`// ===== file1.cpp =====
#include <iostream>
using namespace std;

int sharedVar = 42;    // Definition (allocates memory)

void printShared() {
    cout << "sharedVar = " << sharedVar << endl;
}

// ===== file2.cpp =====
#include <iostream>
using namespace std;

extern int sharedVar;   // Declaration only (no memory allocated)
                         // Links to the definition in file1.cpp

extern void printShared();  // Function declaration

int main() {
    cout << "Accessing from file2: " << sharedVar << endl;
    sharedVar = 100;
    printShared();   // Prints the modified value
    return 0;
}

// Compile: g++ file1.cpp file2.cpp -o program`, 'cpp', 'extern — Sharing Variables Across Files')}

                <div class="tip-box">
                    <h4>💡 When to Use Each Storage Class</h4>
                    <ul>
                        <li><strong><code>auto</code></strong> (default): Use for normal local variables. They exist only when needed and are cleaned up automatically.</li>
                        <li><strong><code>static</code></strong>: Use when a function needs to "remember" something between calls (counters, caches, one-time initialization flags).</li>
                        <li><strong><code>extern</code></strong>: Use when you need to share a global variable or function across multiple <code>.cpp</code> files.</li>
                    </ul>
                </div>
            </div>

            <!-- ========== COMPREHENSIVE EXAMPLE ========== -->
            <div class="theory-section">
                <h2>📄 Complete Example: All Concepts Together</h2>
                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

// Global variables
int globalCounter = 0;
const string PROGRAM_NAME = "Scope Demo";

// Function with static variable
void trackCalls() {
    static int callCount = 0;
    int localTemp = 100;    // auto - recreated each time

    callCount++;
    globalCounter += 10;

    cout << "  Call #" << callCount
         << " | globalCounter = " << globalCounter
         << " | localTemp = " << localTemp << endl;
}

int main() {
    cout << PROGRAM_NAME << endl;
    cout << "==================" << endl;

    // Local variables
    int x = 5;
    const int MAX = 3;

    cout << "Initial globalCounter: " << globalCounter << endl;
    cout << endl;

    // Calling function multiple times
    for (int i = 0; i < MAX; i++) {
        // Block scope: i only exists here
        trackCalls();
    }
    // cout << i;  // ERROR: i is out of scope

    cout << endl;
    cout << "Final globalCounter: " << globalCounter << endl;

    // Block scope demonstration
    {
        int blockVar = 999;
        cout << "Inside block: blockVar = " << blockVar << endl;
        cout << "Inside block: x = " << x << endl;   // OK: outer scope
    }
    // cout << blockVar;  // ERROR: out of scope

    return 0;
}`,
`Scope Demo
==================
Initial globalCounter: 0

  Call #1 | globalCounter = 10 | localTemp = 100
  Call #2 | globalCounter = 20 | localTemp = 100
  Call #3 | globalCounter = 30 | localTemp = 100

Final globalCounter: 30
Inside block: blockVar = 999
Inside block: x = 5`, 'cpp', 'All Concepts Together')}
            </div>

            <!-- ========== INTERACTIVE SCOPE STEPPER ========== -->
            <div class="interactive-area">
                <h3>Code Scope Stepper</h3>
                <p style="margin-bottom:1rem;color:var(--text-secondary);">Step through a C++ program line by line and see which variables are currently in scope, their values, and which scope they belong to.</p>

                <div class="controls-row">
                    <div class="control-field" style="flex:0 0 auto;">
                        <label>&nbsp;</label>
                        <div class="btn-group">
                            <button class="btn btn-secondary" id="var-reset-btn">⏮ Reset</button>
                            <button class="btn btn-primary" id="var-step-btn">▶ Step Forward</button>
                        </div>
                    </div>
                    <div class="control-field" style="flex:1;">
                        <label>Step: <span id="var-step-counter">0</span> / <span id="var-step-total">0</span></label>
                        <div style="color:var(--accent-cyan);font-size:0.85rem;font-weight:600;" id="var-step-desc">Click "Step Forward" to begin</div>
                    </div>
                </div>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;">
                    <div>
                        <div style="font-weight:600;font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.5rem;">📜 Code (current line highlighted):</div>
                        <div id="var-code-display" style="background:var(--bg-code);border-radius:var(--radius-sm);padding:1rem;font-family:JetBrains Mono,monospace;font-size:0.82rem;line-height:1.8;border:1px solid var(--glass-border);max-height:400px;overflow-y:auto;"></div>
                    </div>
                    <div>
                        <div style="font-weight:600;font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.5rem;">🔍 Variables in Scope:</div>
                        <div id="var-scope-display" class="result-display" style="min-height:200px;white-space:pre;font-size:0.82rem;max-height:400px;overflow-y:auto;"></div>
                    </div>
                </div>
            </div>

            <div class="theory-section">
                <h2>📝 Summary</h2>
                <ul>
                    <li><strong>Constants</strong>: Use <code>const</code> (typed, scoped) or <code>constexpr</code> (compile-time). Avoid <code>#define</code> for simple constants.</li>
                    <li><strong>Variables</strong>: Must be declared with a type before use. Always initialise variables.</li>
                    <li><strong>Naming Rules</strong>: Start with letter/underscore, no spaces or special characters, case-sensitive, no keywords.</li>
                    <li><strong>Global Scope</strong>: Variables outside functions — accessible everywhere, live for entire program.</li>
                    <li><strong>Local Scope</strong>: Variables inside functions — accessible only in that function.</li>
                    <li><strong>Block Scope</strong>: Variables inside <code>{ }</code> — destroyed when block ends.</li>
                    <li><strong><code>auto</code></strong>: Default storage class for locals — created and destroyed with the block.</li>
                    <li><strong><code>static</code></strong>: Persists across function calls; initialised only once.</li>
                    <li><strong><code>extern</code></strong>: Declares a variable defined in another file.</li>
                </ul>
            </div>
            `;
        },

        init() {
            var stepBtn = document.getElementById('var-step-btn');
            var resetBtn = document.getElementById('var-reset-btn');
            var codeDisplay = document.getElementById('var-code-display');
            var scopeDisplay = document.getElementById('var-scope-display');
            var stepCounter = document.getElementById('var-step-counter');
            var stepTotal = document.getElementById('var-step-total');
            var stepDesc = document.getElementById('var-step-desc');

            // Define the program steps
            var codeLines = [
                'int globalVar = 100;         // global',
                '',
                'void helper() {',
                '    static int count = 0;',
                '    int temp = 10;',
                '    count++;',
                '    temp += count;',
                '}',
                '',
                'int main() {',
                '    int x = 5;',
                '    int y = 20;',
                '    {',
                '        int z = x + y;',
                '        z = z * 2;',
                '    }',
                '    helper();',
                '    helper();',
                '    x = x + globalVar;',
                '    return 0;',
                '}'
            ];

            var steps = [
                { line: 0, desc: 'Declare global variable globalVar = 100',
                  scopes: { 'Global': { 'globalVar (int)': 100 } } },
                { line: 9, desc: 'Enter main() function',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': {} } },
                { line: 10, desc: 'Declare local variable x = 5',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5 } } },
                { line: 11, desc: 'Declare local variable y = 20',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 } } },
                { line: 12, desc: 'Enter new block scope { }',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'Block { }': {} } },
                { line: 13, desc: 'Declare block variable z = x + y = 25',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'Block { }': { 'z (int)': 25 } } },
                { line: 14, desc: 'z = z * 2 = 50',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'Block { }': { 'z (int)': 50 } } },
                { line: 15, desc: 'Exit block — z is DESTROYED (out of scope)',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 } } },
                { line: 16, desc: 'Call helper() — enter helper function (1st call)',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 0, 'temp (int)': 10 } } },
                { line: 5, desc: 'count++ → count = 1 (static — persists!)',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 1, 'temp (int)': 10 } } },
                { line: 6, desc: 'temp += count → temp = 11',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 1, 'temp (int)': 11 } } },
                { line: 7, desc: 'Exit helper() — temp destroyed, count PERSISTS (static)',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 } } },
                { line: 17, desc: 'Call helper() — enter helper (2nd call). count still = 1!',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 1, 'temp (int)': 10 } } },
                { line: 5, desc: 'count++ → count = 2 (continued from last call)',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 2, 'temp (int)': 10 } } },
                { line: 6, desc: 'temp += count → temp = 12',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 }, 'helper()': { 'count (static int)': 2, 'temp (int)': 12 } } },
                { line: 7, desc: 'Exit helper() — temp destroyed, count stays at 2',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 5, 'y (int)': 20 } } },
                { line: 18, desc: 'x = x + globalVar = 5 + 100 = 105',
                  scopes: { 'Global': { 'globalVar (int)': 100 }, 'main()': { 'x (int)': 105, 'y (int)': 20 } } },
                { line: 19, desc: 'return 0 — program ends. All variables destroyed.',
                  scopes: {} }
            ];

            var currentStep = -1;

            function renderCode(highlightLine) {
                var html = '';
                for (var i = 0; i < codeLines.length; i++) {
                    var isHighlighted = (i === highlightLine);
                    var lineNum = String(i + 1).padStart(2, ' ');
                    var lineStyle = isHighlighted
                        ? 'background:rgba(139,92,246,0.2);border-left:3px solid var(--accent-purple);padding-left:8px;margin-left:-11px;display:block;'
                        : 'display:block;padding-left:0;';
                    var textColor = isHighlighted ? 'color:var(--text-bright);' : 'color:var(--text-secondary);';
                    html += '<span style="' + lineStyle + textColor + '">' +
                        '<span style="color:var(--text-muted);margin-right:1rem;">' + lineNum + '</span>' +
                        escapeHtml(codeLines[i]) +
                        '</span>';
                }
                codeDisplay.innerHTML = html;
            }

            function escapeHtml(str) {
                return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            }

            function renderScopes(scopes) {
                if (!scopes || Object.keys(scopes).length === 0) {
                    return '(program ended — no variables in scope)';
                }
                var lines = [];
                var scopeColors = {
                    'Global': '🌐',
                    'main()': '🔧',
                    'helper()': '🔩',
                    'Block { }': '📦'
                };
                for (var scopeName in scopes) {
                    var icon = scopeColors[scopeName] || '📌';
                    lines.push(icon + ' ' + scopeName + ':');
                    var vars = scopes[scopeName];
                    var keys = Object.keys(vars);
                    if (keys.length === 0) {
                        lines.push('   (no variables yet)');
                    } else {
                        for (var j = 0; j < keys.length; j++) {
                            var marker = keys[j].indexOf('static') !== -1 ? ' ⭐' : '';
                            lines.push('   ' + keys[j] + ' = ' + vars[keys[j]] + marker);
                        }
                    }
                    lines.push('');
                }
                return lines.join('\n');
            }

            function doStep() {
                currentStep++;
                if (currentStep >= steps.length) {
                    currentStep = steps.length - 1;
                }
                var step = steps[currentStep];
                stepCounter.textContent = (currentStep + 1);
                stepDesc.textContent = step.desc;
                renderCode(step.line);
                scopeDisplay.textContent = renderScopes(step.scopes);
            }

            function doReset() {
                currentStep = -1;
                stepCounter.textContent = '0';
                stepDesc.textContent = 'Click "Step Forward" to begin';
                renderCode(-1);
                scopeDisplay.textContent = '(click Step to begin)';
            }

            if (stepBtn) {
                stepTotal.textContent = steps.length;
                stepBtn.addEventListener('click', doStep);
                resetBtn.addEventListener('click', doReset);
                renderCode(-1);
                scopeDisplay.textContent = '(click Step Forward to begin)';
            }
        }
    });

})();
