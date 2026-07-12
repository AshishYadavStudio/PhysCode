/* ======================================================
   CONTENT MODULE: Fundamentals (Unit 1)
   Topics: history, hardware, memory, software, languages
   ====================================================== */
(function () {
    'use strict';

    // ─────────────────────────────────────────────────────────
    // TOPIC 1: History of Computers
    // ─────────────────────────────────────────────────────────
    window.APP.register({
        id: 'history',
        title: 'History of Computers',
        unit: 1,
        icon: '🖥️',
        description: 'Fundamentals and history of computer systems',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rsaquo; Fundamentals</div>
                <h1>🖥️ History of Computers</h1>
                <p class="topic-subtitle">From ancient calculating tools to modern intelligent machines &mdash; tracing the remarkable evolution of computing.</p>
            </div>

            <!-- What is a Computer? -->
            <div class="theory-section">
                <h2>What is a Computer?</h2>
                <p>A <strong>computer</strong> is an electronic device that accepts data as input, processes it according to a set of instructions (called a <strong>program</strong>), and produces meaningful information as output. The word "computer" derives from the Latin word <em>computare</em>, meaning "to calculate."</p>

                <div class="concept-box">
                    <h4>📌 Formal Definition</h4>
                    <p>A computer is a programmable electronic machine that can store, retrieve, and process data to perform arithmetic and logical operations at high speed with accuracy.</p>
                </div>

                <h3>Basic Purpose of a Computer</h3>
                <p>Every computer, regardless of its size or era, performs four fundamental operations:</p>
                <ol>
                    <li><strong>Input:</strong> Accepting raw data from the user or another device (keyboard, mouse, sensors).</li>
                    <li><strong>Processing:</strong> Performing arithmetic and logical operations on the data using the CPU.</li>
                    <li><strong>Storage:</strong> Saving data and results for future use (RAM, hard disk).</li>
                    <li><strong>Output:</strong> Presenting the processed information in a human-readable form (monitor, printer).</li>
                </ol>

                <div class="diagram-container">
                    <p style="margin-bottom:1rem; color: var(--text-muted); font-size:0.85rem;">The Four Functions of a Computer</p>
                    <div class="flow-node start">Input</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Processing (CPU)</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node decision">Storage</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node end">Output</div>
                </div>
            </div>

            <!-- Von Neumann Architecture -->
            <div class="theory-section">
                <h2>Von Neumann Architecture</h2>
                <p>In 1945, mathematician <strong>John von Neumann</strong> proposed a revolutionary computer architecture that forms the basis of nearly all modern computers. Before this, computers like ENIAC had to be physically rewired to change programs. Von Neumann's key insight was the <strong>stored-program concept</strong> &mdash; both the program instructions and data should be stored in the same memory.</p>

                <div class="info-box">
                    <h4>💡 The Stored-Program Concept</h4>
                    <p>Instead of rewiring the machine for each new task, the program (sequence of instructions) is stored in memory alongside the data. The CPU fetches instructions one by one from memory, decodes them, and executes them. This makes the computer <strong>general-purpose</strong> and <strong>reprogrammable</strong>.</p>
                </div>

                <h3>Key Components of Von Neumann Architecture</h3>
                <ul>
                    <li><strong>Central Processing Unit (CPU):</strong> Contains the Arithmetic Logic Unit (ALU) and Control Unit (CU).</li>
                    <li><strong>Memory Unit:</strong> Stores both instructions and data in the same address space.</li>
                    <li><strong>Input Device:</strong> Used to feed data and instructions into the computer.</li>
                    <li><strong>Output Device:</strong> Displays or outputs the results of processing.</li>
                    <li><strong>Bus System:</strong> Connects all components &mdash; data bus, address bus, and control bus.</li>
                </ul>

                <div class="diagram-container">
                    <p style="margin-bottom:1rem; color: var(--text-muted); font-size:0.85rem;">Von Neumann Architecture Block Diagram</p>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:0.5rem;">
                        <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap; justify-content:center;">
                            <div class="flow-node start">Input</div>
                            <span class="flow-arrow">→</span>
                            <div style="border:2px solid var(--accent-purple); border-radius:12px; padding:1rem; background:rgba(139,92,246,0.05);">
                                <div style="font-size:0.75rem; color:var(--accent-purple); font-weight:700; margin-bottom:0.5rem;">CPU</div>
                                <div style="display:flex; gap:0.5rem;">
                                    <div class="flow-node process" style="font-size:0.8rem;">ALU</div>
                                    <div class="flow-node process" style="font-size:0.8rem;">CU</div>
                                </div>
                            </div>
                            <span class="flow-arrow">→</span>
                            <div class="flow-node end">Output</div>
                        </div>
                        <span class="flow-arrow">↕</span>
                        <div class="flow-node decision">Memory (Data + Instructions)</div>
                    </div>
                </div>

                <div class="warning-box">
                    <h4>⚠️ Von Neumann Bottleneck</h4>
                    <p>Since instructions and data share the same memory and bus, they cannot be fetched simultaneously. This creates a performance bottleneck called the <strong>Von Neumann Bottleneck</strong>. The Harvard Architecture (used in some embedded systems) addresses this by using separate memory and buses for instructions and data.</p>
                </div>
            </div>

            <!-- Early Computing Devices -->
            <div class="theory-section">
                <h2>Early Computing Devices (Pre-Electronic Era)</h2>
                <p>Before electronic computers, humans invented various mechanical devices to aid in calculations:</p>

                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Device</th>
                            <th>Year</th>
                            <th>Inventor</th>
                            <th>Significance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Abacus</td><td>~3000 BC</td><td>Ancient China/Mesopotamia</td><td>First known calculating tool; uses beads on rods for arithmetic</td></tr>
                        <tr><td>Napier's Bones</td><td>1617</td><td>John Napier</td><td>Multiplication aid using numbered rods</td></tr>
                        <tr><td>Pascaline</td><td>1642</td><td>Blaise Pascal</td><td>First mechanical calculator (addition &amp; subtraction)</td></tr>
                        <tr><td>Leibniz Wheel</td><td>1694</td><td>Gottfried Leibniz</td><td>Could perform all four arithmetic operations</td></tr>
                        <tr><td>Jacquard Loom</td><td>1801</td><td>Joseph Jacquard</td><td>Used punch cards to control weaving patterns (first programmable machine)</td></tr>
                        <tr><td>Difference Engine</td><td>1822</td><td>Charles Babbage</td><td>Mechanical calculator for polynomial functions</td></tr>
                        <tr><td>Analytical Engine</td><td>1837</td><td>Charles Babbage</td><td>First general-purpose computer design (had ALU, memory, I/O)</td></tr>
                        <tr><td>Tabulating Machine</td><td>1890</td><td>Herman Hollerith</td><td>Used punch cards for US Census; led to founding of IBM</td></tr>
                    </tbody>
                </table>

                <div class="tip-box">
                    <h4>🏆 Father of Computers</h4>
                    <p><strong>Charles Babbage</strong> is known as the "Father of Computers" because his Analytical Engine (1837) had all the key components of a modern computer: an ALU (the "mill"), memory (the "store"), input/output, and was programmable. <strong>Ada Lovelace</strong> wrote the first algorithm for it, making her the world's first computer programmer.</p>
                </div>
            </div>

            <!-- Generations of Computers -->
            <div class="theory-section">
                <h2>Five Generations of Computers</h2>
                <p>Modern electronic computers are classified into five generations based on the underlying technology used. Each generation brought dramatic improvements in speed, size, cost, reliability, and capability.</p>

                <div class="timeline">
                    <div class="timeline-item">
                        <span class="timeline-date">1940 – 1956</span>
                        <h4>1st Generation: Vacuum Tubes</h4>
                        <p><strong>Technology:</strong> Vacuum tubes (thermionic valves) were used as the basic electronic component for circuitry and magnetic drums for memory.</p>
                        <p style="margin-top:0.5rem;"><strong>Characteristics:</strong></p>
                        <ul style="margin:0.25rem 0 0 1.5rem; color:var(--text-secondary);">
                            <li>Enormous in size (filled entire rooms)</li>
                            <li>Generated tremendous heat, required air conditioning</li>
                            <li>Consumed huge amounts of electricity (up to 150 kW)</li>
                            <li>Very expensive to build and maintain</li>
                            <li>Used machine language (binary) for programming</li>
                            <li>Unreliable &mdash; tubes burned out frequently</li>
                            <li>Speed: a few thousand operations per second</li>
                        </ul>
                        <p style="margin-top:0.5rem;"><strong>Examples:</strong> ENIAC (1946), UNIVAC I (1951), EDVAC, IBM 701</p>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">1956 – 1964</span>
                        <h4>2nd Generation: Transistors</h4>
                        <p><strong>Technology:</strong> Transistors replaced vacuum tubes. Invented at Bell Labs (1947) by Bardeen, Brattain, and Shockley.</p>
                        <p style="margin-top:0.5rem;"><strong>Characteristics:</strong></p>
                        <ul style="margin:0.25rem 0 0 1.5rem; color:var(--text-secondary);">
                            <li>Much smaller, faster, and more reliable than vacuum tubes</li>
                            <li>Consumed less power and generated less heat</li>
                            <li>Used assembly language and early high-level languages (FORTRAN, COBOL)</li>
                            <li>Magnetic core memory was introduced</li>
                            <li>Batch operating systems appeared</li>
                            <li>Speed: hundreds of thousands of operations per second</li>
                        </ul>
                        <p style="margin-top:0.5rem;"><strong>Examples:</strong> IBM 1401, IBM 7094, CDC 1604, UNIVAC 1108</p>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">1964 – 1971</span>
                        <h4>3rd Generation: Integrated Circuits (ICs)</h4>
                        <p><strong>Technology:</strong> Integrated Circuits (ICs), invented by Jack Kilby and Robert Noyce, packed multiple transistors onto a single silicon chip.</p>
                        <p style="margin-top:0.5rem;"><strong>Characteristics:</strong></p>
                        <ul style="margin:0.25rem 0 0 1.5rem; color:var(--text-secondary);">
                            <li>Significantly smaller and cheaper than 2nd generation</li>
                            <li>High-level languages became widespread (C, Pascal, BASIC)</li>
                            <li>Time-sharing operating systems allowed multiple users</li>
                            <li>Keyboards and monitors replaced punch cards and printouts</li>
                            <li>More reliable and energy efficient</li>
                            <li>Speed: millions of operations per second (MIPS)</li>
                        </ul>
                        <p style="margin-top:0.5rem;"><strong>Examples:</strong> IBM 360/370 series, PDP-8, Honeywell 6000</p>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">1971 – Present</span>
                        <h4>4th Generation: Microprocessors</h4>
                        <p><strong>Technology:</strong> Very Large Scale Integration (VLSI) placed thousands (later billions) of transistors on a single chip &mdash; the <strong>microprocessor</strong>. Intel 4004 (1971) was the first commercial microprocessor.</p>
                        <p style="margin-top:0.5rem;"><strong>Characteristics:</strong></p>
                        <ul style="margin:0.25rem 0 0 1.5rem; color:var(--text-secondary);">
                            <li>Birth of Personal Computers (PCs) &mdash; Apple, IBM PC</li>
                            <li>GUIs (Graphical User Interfaces) developed &mdash; Windows, Mac OS</li>
                            <li>Internet and networking revolution</li>
                            <li>Object-oriented programming (C++, Java)</li>
                            <li>Laptops, tablets, and smartphones emerged</li>
                            <li>Speed: billions of operations per second (GFLOPS)</li>
                        </ul>
                        <p style="margin-top:0.5rem;"><strong>Examples:</strong> IBM PC, Apple Macintosh, Intel Pentium, AMD processors</p>
                    </div>

                    <div class="timeline-item">
                        <span class="timeline-date">Present – Future</span>
                        <h4>5th Generation: Artificial Intelligence</h4>
                        <p><strong>Technology:</strong> Based on AI, machine learning, neural networks, natural language processing, and potentially quantum computing.</p>
                        <p style="margin-top:0.5rem;"><strong>Characteristics:</strong></p>
                        <ul style="margin:0.25rem 0 0 1.5rem; color:var(--text-secondary);">
                            <li>Parallel processing and superconducting technology</li>
                            <li>Natural language understanding and voice recognition</li>
                            <li>Expert systems and intelligent robotics</li>
                            <li>Quantum computing in development</li>
                            <li>Self-learning systems (deep learning, neural networks)</li>
                            <li>Goal: machines that can think, learn, and reason like humans</li>
                        </ul>
                        <p style="margin-top:0.5rem;"><strong>Examples:</strong> IBM Watson, Google DeepMind, self-driving cars, ChatGPT, quantum computers (IBM Quantum)</p>
                    </div>
                </div>
            </div>

            <!-- Generations Summary Table -->
            <div class="theory-section">
                <h2>Generations at a Glance</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>1st Gen</th>
                            <th>2nd Gen</th>
                            <th>3rd Gen</th>
                            <th>4th Gen</th>
                            <th>5th Gen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Technology</strong></td><td>Vacuum Tubes</td><td>Transistors</td><td>ICs</td><td>Microprocessors</td><td>AI / Quantum</td></tr>
                        <tr><td><strong>Speed</strong></td><td>Slow (kHz)</td><td>Moderate</td><td>Fast (MHz)</td><td>Very Fast (GHz)</td><td>Ultra Fast</td></tr>
                        <tr><td><strong>Size</strong></td><td>Room-sized</td><td>Cabinet-sized</td><td>Desk-sized</td><td>Handheld</td><td>Varied</td></tr>
                        <tr><td><strong>Memory</strong></td><td>Magnetic Drum</td><td>Magnetic Core</td><td>RAM (IC)</td><td>VLSI RAM</td><td>Advanced</td></tr>
                        <tr><td><strong>Language</strong></td><td>Machine Code</td><td>Assembly</td><td>High-Level</td><td>OOP, 4GL</td><td>Natural Lang.</td></tr>
                        <tr><td><strong>Cost</strong></td><td>Very High</td><td>High</td><td>Moderate</td><td>Low</td><td>Varied</td></tr>
                        <tr><td><strong>Reliability</strong></td><td>Poor</td><td>Good</td><td>Very Good</td><td>Excellent</td><td>Excellent</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- A Simple C++ Example -->
            <div class="theory-section">
                <h2>Your First C++ Program</h2>
                <p>Now that you understand what computers are and how they evolved, here is a simple C++ program that prints a message about computer generations. This is the kind of program you will learn to write throughout this course!</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    cout << "=== Computer Generations ===" << endl;
    cout << "1st: Vacuum Tubes   (1940-1956)" << endl;
    cout << "2nd: Transistors     (1956-1964)" << endl;
    cout << "3rd: ICs             (1964-1971)" << endl;
    cout << "4th: Microprocessors (1971-Now)"  << endl;
    cout << "5th: AI & Quantum    (Present)"   << endl;
    return 0;
}`,
`=== Computer Generations ===
1st: Vacuum Tubes   (1940-1956)
2nd: Transistors     (1956-1964)
3rd: ICs             (1964-1971)
4th: Microprocessors (1971-Now)
5th: AI & Quantum    (Present)`,
                    'cpp', 'Generations Overview Program')}
            </div>

            <!-- Interactive Quiz -->
            <div class="interactive-area">
                <h3>Test Your Knowledge: Computer Generations Quiz</h3>
                <p style="margin-bottom:1rem; color:var(--text-secondary);">Answer each question by selecting the correct option. Click "Check Answers" when you are done!</p>

                <div id="history-quiz-container">
                    <div style="margin-bottom:1.25rem; padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
                        <p style="font-weight:600; margin-bottom:0.5rem;">Q1: Which technology was used in the first generation of computers?</p>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q1" value="a"> Transistors</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q1" value="b"> Vacuum Tubes</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q1" value="c"> Integrated Circuits</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q1" value="d"> Microprocessors</label>
                    </div>

                    <div style="margin-bottom:1.25rem; padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
                        <p style="font-weight:600; margin-bottom:0.5rem;">Q2: Who is known as the "Father of Computers"?</p>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q2" value="a"> Alan Turing</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q2" value="b"> John von Neumann</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q2" value="c"> Charles Babbage</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q2" value="d"> Blaise Pascal</label>
                    </div>

                    <div style="margin-bottom:1.25rem; padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
                        <p style="font-weight:600; margin-bottom:0.5rem;">Q3: The Intel 4004, the first commercial microprocessor, belongs to which generation?</p>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q3" value="a"> 2nd Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q3" value="b"> 3rd Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q3" value="c"> 4th Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q3" value="d"> 5th Generation</label>
                    </div>

                    <div style="margin-bottom:1.25rem; padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
                        <p style="font-weight:600; margin-bottom:0.5rem;">Q4: Which concept allows the same memory to store both instructions and data?</p>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q4" value="a"> Harvard Architecture</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q4" value="b"> Stored-Program Concept</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q4" value="c"> Parallel Processing</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q4" value="d"> Pipelining</label>
                    </div>

                    <div style="margin-bottom:1.25rem; padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border);">
                        <p style="font-weight:600; margin-bottom:0.5rem;">Q5: Which generation of computers focuses on Artificial Intelligence?</p>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q5" value="a"> 3rd Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q5" value="b"> 4th Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q5" value="c"> 5th Generation</label>
                        <label style="display:block; padding:0.3rem 0; cursor:pointer;"><input type="radio" name="history-q5" value="d"> 1st Generation</label>
                    </div>
                </div>

                <button class="btn btn-primary" id="history-quiz-check">Check Answers</button>
                <button class="btn btn-secondary" id="history-quiz-reset" style="margin-left:0.5rem;">Reset Quiz</button>
                <div class="result-display" id="history-quiz-result" style="margin-top:1rem;">Click "Check Answers" to see your score.</div>
            </div>
            `;
        },

        init() {
            const answers = { 'history-q1': 'b', 'history-q2': 'c', 'history-q3': 'c', 'history-q4': 'b', 'history-q5': 'c' };

            document.getElementById('history-quiz-check').addEventListener('click', function () {
                let score = 0;
                const total = Object.keys(answers).length;
                const explanations = {
                    'history-q1': 'Vacuum Tubes were used in the 1st generation (1940-1956).',
                    'history-q2': 'Charles Babbage designed the Analytical Engine, the first general-purpose computer concept.',
                    'history-q3': 'Intel 4004 (1971) marked the beginning of the 4th generation (microprocessors).',
                    'history-q4': 'The Stored-Program Concept (Von Neumann) stores both instructions and data in the same memory.',
                    'history-q5': 'The 5th generation focuses on AI, machine learning, and natural language processing.'
                };
                let details = '';
                for (var q in answers) {
                    var selected = document.querySelector('input[name="' + q + '"]:checked');
                    if (selected && selected.value === answers[q]) {
                        score++;
                        details += '✅ ' + q.replace('history-', '').toUpperCase() + ': Correct! ' + explanations[q] + '\n';
                    } else {
                        details += '❌ ' + q.replace('history-', '').toUpperCase() + ': Incorrect. ' + explanations[q] + '\n';
                    }
                }
                var pct = Math.round((score / total) * 100);
                document.getElementById('history-quiz-result').textContent =
                    'Score: ' + score + '/' + total + ' (' + pct + '%)\n\n' + details +
                    (pct === 100 ? '\n🎉 Perfect Score! Excellent work!' : pct >= 60 ? '\n👍 Good job! Review the ones you missed.' : '\n📖 Keep studying! Review the material above.');
            });

            document.getElementById('history-quiz-reset').addEventListener('click', function () {
                var radios = document.querySelectorAll('#history-quiz-container input[type="radio"]');
                radios.forEach(function (r) { r.checked = false; });
                document.getElementById('history-quiz-result').textContent = 'Click "Check Answers" to see your score.';
            });
        }
    });

    // ─────────────────────────────────────────────────────────
    // TOPIC 2: Hardware Components
    // ─────────────────────────────────────────────────────────
    window.APP.register({
        id: 'hardware',
        title: 'Hardware Components',
        unit: 1,
        icon: '🔧',
        description: 'Basic hardware components of a computer system',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rsaquo; Fundamentals</div>
                <h1>🔧 Hardware Components</h1>
                <p class="topic-subtitle">Understanding the physical building blocks that make a computer work &mdash; from input devices to the CPU and beyond.</p>
            </div>

            <!-- What is Hardware? -->
            <div class="theory-section">
                <h2>What is Computer Hardware?</h2>
                <p><strong>Hardware</strong> refers to the physical, tangible components of a computer system &mdash; the parts you can see and touch. Without hardware, software has nothing to run on. Hardware components work together in a coordinated manner to accept data, process it, store it, and produce output.</p>

                <div class="concept-box">
                    <h4>📌 Definition</h4>
                    <p>Hardware is the collection of all physical parts of a computer system that perform input, processing, storage, and output functions. It includes electronic circuits, chips, cables, keyboards, monitors, and all other physical devices.</p>
                </div>

                <p>A computer system can be broadly divided into these hardware categories:</p>
                <ol>
                    <li><strong>Input Devices</strong> &mdash; Accept data from the outside world</li>
                    <li><strong>Central Processing Unit (CPU)</strong> &mdash; Processes data (the "brain")</li>
                    <li><strong>Memory / Storage</strong> &mdash; Stores data and programs</li>
                    <li><strong>Output Devices</strong> &mdash; Present results to the user</li>
                    <li><strong>Bus System</strong> &mdash; Connects all components for communication</li>
                </ol>
            </div>

            <!-- Block Diagram -->
            <div class="theory-section">
                <h2>Block Diagram of a Computer</h2>
                <p>The following diagram shows how the major hardware components are interconnected:</p>

                <div class="diagram-container">
                    <p style="margin-bottom:1rem; color:var(--text-muted); font-size:0.85rem;">Computer System Block Diagram</p>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:0.75rem;">
                        <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap; justify-content:center;">
                            <div style="display:flex; flex-direction:column; gap:0.5rem; align-items:center;">
                                <div class="flow-node start" style="min-width:130px;">⌨️ Keyboard</div>
                                <div class="flow-node start" style="min-width:130px;">🖱️ Mouse</div>
                                <div class="flow-node start" style="min-width:130px;">🎤 Microphone</div>
                                <div style="font-size:0.75rem; color:var(--accent-green); font-weight:600;">INPUT DEVICES</div>
                            </div>

                            <span class="flow-arrow" style="font-size:2rem;">→</span>

                            <div style="border:2px solid var(--accent-purple); border-radius:16px; padding:1.25rem; background:rgba(139,92,246,0.05); min-width:200px;">
                                <div style="text-align:center; font-size:0.8rem; color:var(--accent-purple); font-weight:700; margin-bottom:0.75rem;">CENTRAL PROCESSING UNIT (CPU)</div>
                                <div style="display:flex; flex-direction:column; gap:0.5rem; align-items:center;">
                                    <div class="flow-node process" style="font-size:0.8rem; width:100%;">Control Unit (CU)</div>
                                    <div class="flow-node process" style="font-size:0.8rem; width:100%;">ALU (Arithmetic Logic Unit)</div>
                                    <div class="flow-node process" style="font-size:0.8rem; width:100%;">Registers</div>
                                </div>
                            </div>

                            <span class="flow-arrow" style="font-size:2rem;">→</span>

                            <div style="display:flex; flex-direction:column; gap:0.5rem; align-items:center;">
                                <div class="flow-node end" style="min-width:130px;">🖥️ Monitor</div>
                                <div class="flow-node end" style="min-width:130px;">🖨️ Printer</div>
                                <div class="flow-node end" style="min-width:130px;">🔊 Speakers</div>
                                <div style="font-size:0.75rem; color:var(--accent-red); font-weight:600;">OUTPUT DEVICES</div>
                            </div>
                        </div>

                        <div style="display:flex; align-items:center; gap:0.5rem;">
                            <span class="flow-arrow">↕</span>
                        </div>

                        <div class="flow-node decision" style="min-width:250px;">💾 Memory (RAM / ROM / Storage)</div>

                        <div style="width:80%; max-width:500px; height:3px; background:var(--gradient-primary); border-radius:2px; margin-top:0.5rem;"></div>
                        <div style="font-size:0.75rem; color:var(--accent-cyan); font-weight:600;">SYSTEM BUS (Data + Address + Control)</div>
                    </div>
                </div>
            </div>

            <!-- Input Devices -->
            <div class="theory-section">
                <h2>Input Devices</h2>
                <p>Input devices allow users to send data and instructions to the computer. They convert human-readable information into a form the computer can process (binary electrical signals).</p>

                <h3>Common Input Devices</h3>
                <ul>
                    <li><strong>Keyboard:</strong> The most common input device. It has keys for alphabets, numbers, function keys (F1–F12), and special keys (Ctrl, Alt, Shift). Standard keyboards have 101–104 keys.</li>
                    <li><strong>Mouse:</strong> A pointing device that controls the cursor on screen. Types include mechanical (ball-based), optical, and wireless mice.</li>
                    <li><strong>Scanner:</strong> Converts printed documents and images into digital format by optically scanning them.</li>
                    <li><strong>Microphone:</strong> Captures audio input. Used in voice recognition, VoIP calls, and audio recording.</li>
                    <li><strong>Webcam:</strong> Captures video input. Used in video conferencing and surveillance.</li>
                    <li><strong>Joystick:</strong> A lever-based device for controlling movement in games and simulations.</li>
                    <li><strong>Barcode Reader:</strong> Reads barcodes (series of lines) on products for identification.</li>
                    <li><strong>Touch Screen:</strong> Acts as both input and output &mdash; detects finger touch for interaction.</li>
                </ul>
            </div>

            <!-- Output Devices -->
            <div class="theory-section">
                <h2>Output Devices</h2>
                <p>Output devices present processed data to the user in a human-readable form. They convert the computer's binary signals into text, images, sound, or physical objects.</p>

                <h3>Common Output Devices</h3>
                <ul>
                    <li><strong>Monitor:</strong> The primary visual output device. Types: CRT (old), LCD, LED, OLED. Displays text, graphics, and video.</li>
                    <li><strong>Printer:</strong> Produces hard copies on paper. Types: Inkjet (high quality, color), Laser (fast, precise), Dot Matrix (impact, multi-copy).</li>
                    <li><strong>Speakers:</strong> Produce audio output (sound, music, alerts).</li>
                    <li><strong>Projector:</strong> Projects display onto a large screen or wall. Used in presentations and classrooms.</li>
                    <li><strong>Headphones:</strong> Personal audio output device worn over or in the ears.</li>
                    <li><strong>Plotter:</strong> Produces large-format drawings and blueprints. Used in engineering and architecture.</li>
                </ul>

                <h3>Input vs Output Devices Comparison</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Input Devices</th>
                            <th>Output Devices</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Purpose</strong></td><td>Send data to the computer</td><td>Receive processed data from the computer</td></tr>
                        <tr><td><strong>Data Direction</strong></td><td>User → Computer</td><td>Computer → User</td></tr>
                        <tr><td><strong>Examples</strong></td><td>Keyboard, Mouse, Scanner</td><td>Monitor, Printer, Speakers</td></tr>
                        <tr><td><strong>Signal Conversion</strong></td><td>Human-readable → Binary</td><td>Binary → Human-readable</td></tr>
                        <tr><td><strong>User Interaction</strong></td><td>User actively operates</td><td>User passively receives</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- CPU -->
            <div class="theory-section">
                <h2>Central Processing Unit (CPU)</h2>
                <p>The <strong>CPU</strong> is the brain of the computer. It fetches instructions from memory, decodes them, and executes them. The CPU determines how fast a computer can operate and is measured in clock speed (GHz).</p>

                <div class="concept-box">
                    <h4>📌 CPU = CU + ALU + Registers</h4>
                    <p>The CPU consists of three main sub-components that work together in a cycle called the <strong>Fetch-Decode-Execute</strong> cycle.</p>
                </div>

                <h3>1. Control Unit (CU)</h3>
                <p>The Control Unit is the <strong>manager</strong> of the CPU. It does not process data itself, but directs and coordinates all the operations of the computer. Think of it as a traffic controller that tells every other component what to do and when.</p>
                <ul>
                    <li>Fetches instructions from memory</li>
                    <li>Decodes instructions to determine what operation to perform</li>
                    <li>Sends control signals to the ALU, memory, and I/O devices</li>
                    <li>Manages the timing and sequence of operations</li>
                </ul>

                <h3>2. Arithmetic Logic Unit (ALU)</h3>
                <p>The ALU is the <strong>calculator</strong> of the CPU. It performs all mathematical and logical operations.</p>
                <ul>
                    <li><strong>Arithmetic operations:</strong> Addition (+), Subtraction (−), Multiplication (×), Division (÷)</li>
                    <li><strong>Logical operations:</strong> AND, OR, NOT, XOR, comparisons (&lt;, &gt;, ==, !=)</li>
                    <li>Operates on binary data using digital circuits called adders, multiplexers, etc.</li>
                </ul>

                <h3>3. Registers</h3>
                <p>Registers are the <strong>fastest and smallest memory</strong> locations located inside the CPU itself. They temporarily hold data, instructions, and addresses during processing.</p>

                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Register</th>
                            <th>Full Name</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><code>PC</code></td><td>Program Counter</td><td>Holds the address of the next instruction to fetch</td></tr>
                        <tr><td><code>IR</code></td><td>Instruction Register</td><td>Holds the current instruction being executed</td></tr>
                        <tr><td><code>ACC</code></td><td>Accumulator</td><td>Stores intermediate results from the ALU</td></tr>
                        <tr><td><code>MAR</code></td><td>Memory Address Register</td><td>Holds the address of data to read/write in memory</td></tr>
                        <tr><td><code>MDR</code></td><td>Memory Data Register</td><td>Holds data being transferred to/from memory</td></tr>
                        <tr><td><code>SP</code></td><td>Stack Pointer</td><td>Points to the top of the stack in memory</td></tr>
                    </tbody>
                </table>

                <h3>The Fetch-Decode-Execute Cycle</h3>
                <p>The CPU continuously performs this cycle billions of times per second:</p>
                <div class="diagram-container">
                    <div class="flow-node start">FETCH</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">DECODE</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node decision">EXECUTE</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">STORE</div>
                    <span class="flow-arrow">→</span>
                    <div style="display:inline-block; font-size:0.85rem; color:var(--text-muted);">(Repeat)</div>
                </div>
                <ol>
                    <li><strong>Fetch:</strong> CU fetches the next instruction from memory using the Program Counter (PC).</li>
                    <li><strong>Decode:</strong> CU decodes the instruction to understand what operation is required.</li>
                    <li><strong>Execute:</strong> ALU performs the computation; data may be read/written to registers or memory.</li>
                    <li><strong>Store:</strong> Results are stored back in a register or memory.</li>
                </ol>
            </div>

            <!-- Bus System -->
            <div class="theory-section">
                <h2>Bus System</h2>
                <p>A <strong>bus</strong> is a set of parallel wires (conductors) that carry data, addresses, and control signals between hardware components. Think of it as the highway system of the computer.</p>

                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Bus Type</th>
                            <th>What It Carries</th>
                            <th>Direction</th>
                            <th>Purpose</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Data Bus</strong></td>
                            <td>Actual data/instructions</td>
                            <td>Bidirectional</td>
                            <td>Transfers data between CPU, memory, and I/O</td>
                        </tr>
                        <tr>
                            <td><strong>Address Bus</strong></td>
                            <td>Memory addresses</td>
                            <td>Unidirectional (CPU → Memory)</td>
                            <td>Specifies which memory location to access</td>
                        </tr>
                        <tr>
                            <td><strong>Control Bus</strong></td>
                            <td>Control signals</td>
                            <td>Bidirectional</td>
                            <td>Carries read/write, interrupt, and clock signals</td>
                        </tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>💡 Bus Width</h4>
                    <p>The width of the data bus determines how much data can be transferred at once. A 32-bit bus can transfer 32 bits (4 bytes) simultaneously, while a 64-bit bus can transfer 8 bytes. The address bus width determines how much memory the CPU can address: a 32-bit address bus can address \\(2^{32} = 4\\) GB of memory.</p>
                </div>
            </div>

            <!-- C++ Example -->
            <div class="theory-section">
                <h2>C++ Example: Displaying System Info</h2>
                <p>This C++ program demonstrates printing information about CPU and hardware components:</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    cout << "=== Computer Hardware Components ===" << endl;
    cout << endl;

    // CPU sub-components
    cout << "CPU Components:" << endl;
    cout << "  1. Control Unit (CU)    - Directs operations" << endl;
    cout << "  2. ALU                  - Performs calculations" << endl;
    cout << "  3. Registers            - Fast temp storage" << endl;
    cout << endl;

    // Size of data types shows how the CPU handles data
    cout << "Data sizes on this system:" << endl;
    cout << "  sizeof(char)   = " << sizeof(char)   << " byte"  << endl;
    cout << "  sizeof(int)    = " << sizeof(int)    << " bytes" << endl;
    cout << "  sizeof(float)  = " << sizeof(float)  << " bytes" << endl;
    cout << "  sizeof(double) = " << sizeof(double) << " bytes" << endl;

    return 0;
}`,
`=== Computer Hardware Components ===

CPU Components:
  1. Control Unit (CU)    - Directs operations
  2. ALU                  - Performs calculations
  3. Registers            - Fast temp storage

Data sizes on this system:
  sizeof(char)   = 1 byte
  sizeof(int)    = 4 bytes
  sizeof(float)  = 4 bytes
  sizeof(double) = 8 bytes`,
                    'cpp', 'Hardware Info Program')}
            </div>

            <!-- Interactive Component Explorer -->
            <div class="interactive-area">
                <h3>Explore Hardware Components</h3>
                <p style="margin-bottom:1rem; color:var(--text-secondary);">Click on any component below to learn more about it!</p>

                <div class="btn-group" style="margin-bottom:1rem; flex-wrap:wrap;">
                    <button class="btn btn-secondary btn-sm" data-hw-component="cpu" id="hw-btn-cpu">🧠 CPU</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="alu" id="hw-btn-alu">➕ ALU</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="cu" id="hw-btn-cu">🎛️ Control Unit</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="registers" id="hw-btn-registers">📋 Registers</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="ram" id="hw-btn-ram">💾 RAM</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="keyboard" id="hw-btn-keyboard">⌨️ Keyboard</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="monitor" id="hw-btn-monitor">🖥️ Monitor</button>
                    <button class="btn btn-secondary btn-sm" data-hw-component="databus" id="hw-btn-databus">🔀 Data Bus</button>
                </div>

                <div class="result-display" id="hw-component-detail" style="min-height:80px;">
Click a component above to see its details here.</div>
            </div>
            `;
        },

        init() {
            var componentInfo = {
                cpu: '🧠 CENTRAL PROCESSING UNIT (CPU)\n\nThe CPU is the "brain" of the computer. It executes all instructions from programs.\n\n• Clock Speed: Measured in GHz (e.g., 3.5 GHz = 3.5 billion cycles/second)\n• Cores: Modern CPUs have 4-16+ cores for parallel processing\n• Cache: Small, ultra-fast memory inside the CPU (L1, L2, L3)\n• Examples: Intel Core i7, AMD Ryzen 9, Apple M2\n\nThe CPU performs the Fetch-Decode-Execute cycle billions of times per second.',
                alu: '➕ ARITHMETIC LOGIC UNIT (ALU)\n\nThe ALU is the computational engine inside the CPU.\n\n• Arithmetic: Addition, subtraction, multiplication, division\n• Logic: AND, OR, NOT, XOR operations\n• Comparison: Greater than, less than, equal to\n• Built from: Logic gates (AND, OR, NOT gates) on silicon chips\n\nEvery calculation your computer performs — from a simple 2+2 to rendering 3D graphics — goes through the ALU.',
                cu: '🎛️ CONTROL UNIT (CU)\n\nThe Control Unit manages and coordinates all CPU operations.\n\n• Fetches instructions from memory using the Program Counter\n• Decodes instructions to determine the operation\n• Generates control signals for ALU, memory, and I/O\n• Manages timing using the system clock\n• Does NOT perform calculations — it directs traffic\n\nAnalogy: The CU is like an orchestra conductor — it doesn\'t play any instrument but tells everyone else when and what to play.',
                registers: '📋 REGISTERS\n\nRegisters are the fastest storage locations in a computer (inside the CPU).\n\n• Speed: Accessible in < 1 nanosecond\n• Size: Typically 32-bit or 64-bit each\n• Types:\n  - PC (Program Counter): Address of next instruction\n  - IR (Instruction Register): Current instruction\n  - ACC (Accumulator): ALU results\n  - MAR/MDR: Memory address/data interface\n\nThere are typically 16-32 general-purpose registers in modern CPUs.',
                ram: '💾 RAM (Random Access Memory)\n\nRAM is the primary working memory of the computer.\n\n• Volatile: Data is lost when power is turned off\n• Random Access: Any location can be accessed equally fast\n• Types: DDR4, DDR5 (Double Data Rate)\n• Typical Size: 8 GB - 64 GB in modern PCs\n• Speed: ~10-100 nanoseconds access time\n\nWhen you open a program, it is loaded from the hard drive into RAM for fast access by the CPU.',
                keyboard: '⌨️ KEYBOARD (Input Device)\n\nThe keyboard is the primary text input device.\n\n• Standard Layout: QWERTY (101-104 keys)\n• Key Types:\n  - Alphanumeric keys (A-Z, 0-9)\n  - Function keys (F1-F12)\n  - Modifier keys (Ctrl, Alt, Shift)\n  - Navigation keys (arrows, Home, End)\n  - Numeric keypad\n• Types: Membrane, Mechanical, Scissor-switch\n• Connection: USB, Wireless (Bluetooth/RF)',
                monitor: '🖥️ MONITOR (Output Device)\n\nThe monitor is the primary visual output device.\n\n• Types: LCD, LED, OLED, IPS\n• Resolution: 1080p (Full HD), 1440p (QHD), 2160p (4K)\n• Refresh Rate: 60Hz, 144Hz, 240Hz\n• Size: Measured diagonally (24", 27", 32")\n• Pixel: Smallest addressable element on screen\n  Each pixel has Red, Green, Blue sub-pixels (RGB)\n\nA 1920×1080 monitor has over 2 million pixels, each controlled individually.',
                databus: '🔀 DATA BUS\n\nThe Data Bus transfers actual data between CPU, memory, and I/O.\n\n• Direction: Bidirectional (data flows both ways)\n• Width: 32-bit or 64-bit in modern systems\n• 64-bit bus = transfers 8 bytes per clock cycle\n• Part of the System Bus (along with Address Bus and Control Bus)\n\nOther buses:\n• Address Bus: CPU tells memory WHICH location (unidirectional)\n• Control Bus: Carries read/write/interrupt signals (bidirectional)\n\nBus speed is a key factor in overall system performance.'
            };

            var buttons = document.querySelectorAll('[data-hw-component]');
            buttons.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    var key = btn.getAttribute('data-hw-component');
                    document.getElementById('hw-component-detail').textContent = componentInfo[key] || 'Details not available.';
                    // Highlight active button
                    buttons.forEach(function (b) { b.classList.remove('btn-primary'); b.classList.add('btn-secondary'); });
                    btn.classList.remove('btn-secondary');
                    btn.classList.add('btn-primary');
                });
            });
        }
    });

    // ─────────────────────────────────────────────────────────
    // TOPIC 3: Computer Memory
    // ─────────────────────────────────────────────────────────
    window.APP.register({
        id: 'memory',
        title: 'Computer Memory',
        unit: 1,
        icon: '💾',
        description: 'Primary memory, secondary memory and memory hierarchy',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rsaquo; Fundamentals</div>
                <h1>💾 Computer Memory</h1>
                <p class="topic-subtitle">Understanding how computers store data &mdash; from the fastest registers inside the CPU to the largest hard drives.</p>
            </div>

            <!-- What is Memory? -->
            <div class="theory-section">
                <h2>What is Computer Memory?</h2>
                <p><strong>Computer memory</strong> refers to any physical device or medium capable of storing data and instructions, either temporarily or permanently. Memory is essential because the CPU needs to access data and instructions quickly during processing.</p>

                <div class="concept-box">
                    <h4>📌 Why Memory Matters</h4>
                    <p>Without memory, a computer would have no way to store programs or data. The CPU would have nothing to process. Memory acts as the workspace where active programs and data reside during operation, and as long-term storage for files when the computer is turned off.</p>
                </div>

                <p>Computer memory is organized in a <strong>hierarchy</strong> based on speed, cost, and capacity. Faster memory is more expensive and smaller in size, while slower memory is cheaper and available in much larger capacities.</p>
            </div>

            <!-- Memory Hierarchy -->
            <div class="theory-section">
                <h2>Memory Hierarchy</h2>
                <p>The memory hierarchy is a pyramid-shaped organization where each level represents a trade-off between speed, size, and cost:</p>

                <div class="diagram-container" id="memory-hierarchy-pyramid">
                    <p style="margin-bottom:1rem; color:var(--text-muted); font-size:0.85rem;">Memory Hierarchy Pyramid (hover over each level for details)</p>
                    <div style="display:flex; flex-direction:column; align-items:center; gap:0;">
                        <div class="mem-pyramid-level" data-mem-level="registers" style="width:120px; padding:0.75rem; background:rgba(248,113,113,0.2); border:2px solid var(--accent-red); border-radius:8px 8px 0 0; cursor:pointer; text-align:center; font-weight:600; font-size:0.85rem; color:var(--accent-red); transition: all 0.3s;">
                            Registers
                        </div>
                        <div class="mem-pyramid-level" data-mem-level="cache" style="width:200px; padding:0.75rem; background:rgba(251,191,36,0.15); border:2px solid var(--accent-orange); border-top:none; cursor:pointer; text-align:center; font-weight:600; font-size:0.85rem; color:var(--accent-orange); transition: all 0.3s;">
                            Cache (L1, L2, L3)
                        </div>
                        <div class="mem-pyramid-level" data-mem-level="ram" style="width:300px; padding:0.75rem; background:rgba(96,165,250,0.15); border:2px solid var(--accent-blue); border-top:none; cursor:pointer; text-align:center; font-weight:600; font-size:0.85rem; color:var(--accent-blue); transition: all 0.3s;">
                            RAM (Main Memory)
                        </div>
                        <div class="mem-pyramid-level" data-mem-level="secondary" style="width:420px; padding:0.75rem; background:rgba(52,211,153,0.15); border:2px solid var(--accent-green); border-top:none; border-radius:0 0 8px 8px; cursor:pointer; text-align:center; font-weight:600; font-size:0.85rem; color:var(--accent-green); transition: all 0.3s;">
                            Secondary Storage (HDD, SSD)
                        </div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:1rem; font-size:0.75rem; color:var(--text-muted); max-width:420px; width:100%; margin-left:auto; margin-right:auto;">
                        <span>⚡ Fastest, Smallest, Most Expensive</span>
                        <span>💰 Slowest, Largest, Cheapest</span>
                    </div>
                    <div class="result-display" id="mem-pyramid-info" style="margin-top:1rem; min-height:50px; text-align:left;">
Hover over or click a level in the pyramid to see its details.</div>
                </div>
            </div>

            <!-- Primary Memory -->
            <div class="theory-section">
                <h2>Primary Memory (Main Memory)</h2>
                <p>Primary memory is directly accessible by the CPU. It is fast but has limited capacity compared to secondary storage. It is divided into two main types: <strong>RAM</strong> and <strong>ROM</strong>.</p>

                <h3>RAM (Random Access Memory)</h3>
                <p>RAM is the <strong>working memory</strong> of the computer. When you open a program or file, it is loaded from the hard drive into RAM for fast access by the CPU. RAM is <strong>volatile</strong> &mdash; it loses all stored data when the power is turned off.</p>

                <div class="info-box">
                    <h4>💡 Why "Random Access"?</h4>
                    <p>The term "random access" means that any memory location can be accessed directly in the same amount of time, regardless of its position. This is in contrast to sequential access (like a tape drive), where you must read through all preceding data to reach a specific location.</p>
                </div>

                <h4>Types of RAM</h4>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>SRAM (Static RAM)</th>
                            <th>DRAM (Dynamic RAM)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Storage</strong></td><td>Uses flip-flops (6 transistors/bit)</td><td>Uses capacitors (1 transistor + 1 capacitor/bit)</td></tr>
                        <tr><td><strong>Speed</strong></td><td>Very fast (~1-10 ns)</td><td>Slower (~50-70 ns)</td></tr>
                        <tr><td><strong>Refresh Needed?</strong></td><td>No (static)</td><td>Yes (must refresh every few ms)</td></tr>
                        <tr><td><strong>Cost</strong></td><td>Expensive</td><td>Cheaper</td></tr>
                        <tr><td><strong>Density</strong></td><td>Low (fewer bits per chip)</td><td>High (more bits per chip)</td></tr>
                        <tr><td><strong>Usage</strong></td><td>CPU Cache (L1, L2, L3)</td><td>Main Memory (RAM sticks)</td></tr>
                        <tr><td><strong>Power</strong></td><td>Low power consumption</td><td>Higher power (refresh cycles)</td></tr>
                    </tbody>
                </table>

                <h3>ROM (Read Only Memory)</h3>
                <p>ROM is <strong>non-volatile</strong> memory that retains data even when power is off. It contains permanent instructions that are essential for starting the computer (like the BIOS/UEFI firmware).</p>

                <h4>Types of ROM</h4>
                <ul>
                    <li><strong>PROM (Programmable ROM):</strong> Can be programmed once after manufacturing using a special device. Once written, it cannot be changed.</li>
                    <li><strong>EPROM (Erasable PROM):</strong> Can be erased by exposing the chip to ultraviolet (UV) light through a small window on the chip, then reprogrammed.</li>
                    <li><strong>EEPROM (Electrically Erasable PROM):</strong> Can be erased and reprogrammed electrically, byte by byte. Slower but more convenient than EPROM.</li>
                    <li><strong>Flash Memory:</strong> A type of EEPROM that can be erased and reprogrammed in blocks. Used in USB drives, SSDs, and memory cards. Much faster than traditional EEPROM.</li>
                </ul>
            </div>

            <!-- Secondary Memory -->
            <div class="theory-section">
                <h2>Secondary Memory (Storage)</h2>
                <p>Secondary memory provides <strong>non-volatile, long-term storage</strong> for data and programs. It is much cheaper per byte than primary memory but significantly slower. Data persists even when the computer is powered off.</p>

                <h3>Types of Secondary Storage</h3>

                <h4>Hard Disk Drive (HDD)</h4>
                <ul>
                    <li>Uses spinning magnetic platters and a read/write head</li>
                    <li>Typical speeds: 5400 or 7200 RPM (Revolutions Per Minute)</li>
                    <li>Capacity: 500 GB to 20+ TB</li>
                    <li>Access time: ~5-10 milliseconds</li>
                    <li>Affordable but mechanical parts make it susceptible to damage from drops</li>
                </ul>

                <h4>Solid State Drive (SSD)</h4>
                <ul>
                    <li>Uses NAND flash memory (no moving parts)</li>
                    <li>Much faster than HDD (read/write speeds of 500-7000 MB/s)</li>
                    <li>Access time: ~0.1 milliseconds</li>
                    <li>More durable and shock-resistant</li>
                    <li>More expensive per GB than HDD</li>
                    <li>Types: SATA SSD, NVMe SSD (faster, uses PCIe)</li>
                </ul>

                <h4>Other Storage Media</h4>
                <ul>
                    <li><strong>Optical Discs:</strong> CD (700 MB), DVD (4.7-8.5 GB), Blu-ray (25-50 GB). Use laser to read/write data on disc surface.</li>
                    <li><strong>USB Flash Drives:</strong> Portable NAND flash storage. Typically 8 GB to 1 TB. Plug into USB ports.</li>
                    <li><strong>Memory Cards:</strong> SD, microSD cards used in cameras, phones. Up to 1 TB.</li>
                </ul>

                <h3>Storage Comparison Table</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Storage Type</th>
                            <th>Speed</th>
                            <th>Capacity</th>
                            <th>Cost/GB</th>
                            <th>Volatile?</th>
                            <th>Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>Registers</td><td>~0.3 ns</td><td>A few KB</td><td>Very High</td><td>Yes</td><td>Inside CPU</td></tr>
                        <tr><td>Cache</td><td>~1-10 ns</td><td>1-64 MB</td><td>Very High</td><td>Yes</td><td>CPU Cache</td></tr>
                        <tr><td>RAM</td><td>~50-100 ns</td><td>4-128 GB</td><td>High</td><td>Yes</td><td>Main Memory</td></tr>
                        <tr><td>SSD</td><td>~0.1 ms</td><td>128 GB-8 TB</td><td>Moderate</td><td>No</td><td>Primary Storage</td></tr>
                        <tr><td>HDD</td><td>~5-10 ms</td><td>500 GB-20 TB</td><td>Low</td><td>No</td><td>Mass Storage</td></tr>
                        <tr><td>Optical Disc</td><td>~100 ms</td><td>700 MB-50 GB</td><td>Very Low</td><td>No</td><td>Backups, Media</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Visual Memory Layout -->
            <div class="theory-section">
                <h2>Visual Memory Layout</h2>
                <p>Here is a simplified visualization of how memory addresses and data are organized. Each cell represents a byte in memory:</p>

                <div class="diagram-container">
                    <p style="margin-bottom:1rem; color:var(--text-muted); font-size:0.85rem;">Sample Memory Layout (8 bytes shown)</p>
                    <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:0.25rem;">
                        <div class="memory-cell"><div class="cell-box">72</div><div class="cell-label">0x00</div></div>
                        <div class="memory-cell"><div class="cell-box">101</div><div class="cell-label">0x01</div></div>
                        <div class="memory-cell"><div class="cell-box">108</div><div class="cell-label">0x02</div></div>
                        <div class="memory-cell"><div class="cell-box">108</div><div class="cell-label">0x03</div></div>
                        <div class="memory-cell"><div class="cell-box">111</div><div class="cell-label">0x04</div></div>
                        <div class="memory-cell"><div class="cell-box">33</div><div class="cell-label">0x05</div></div>
                        <div class="memory-cell"><div class="cell-box">0</div><div class="cell-label">0x06</div></div>
                        <div class="memory-cell"><div class="cell-box">255</div><div class="cell-label">0x07</div></div>
                    </div>
                    <p style="margin-top:0.75rem; font-size:0.8rem; color:var(--text-secondary);">Values 72, 101, 108, 108, 111, 33 = ASCII codes for "Hello!" &middot; 0 = null terminator &middot; 255 = max unsigned byte value</p>
                </div>

                <div class="tip-box">
                    <h4>💡 Memory Units</h4>
                    <p>Computer memory is measured in bytes. Here is the hierarchy of units:</p>
                    <ul>
                        <li>1 <strong>Bit</strong> = 0 or 1 (smallest unit)</li>
                        <li>1 <strong>Nibble</strong> = 4 bits</li>
                        <li>1 <strong>Byte</strong> = 8 bits</li>
                        <li>1 <strong>KB</strong> (Kilobyte) = 1,024 bytes = \\(2^{10}\\) bytes</li>
                        <li>1 <strong>MB</strong> (Megabyte) = 1,024 KB = \\(2^{20}\\) bytes</li>
                        <li>1 <strong>GB</strong> (Gigabyte) = 1,024 MB = \\(2^{30}\\) bytes</li>
                        <li>1 <strong>TB</strong> (Terabyte) = 1,024 GB = \\(2^{40}\\) bytes</li>
                    </ul>
                </div>
            </div>

            <!-- C++ Example -->
            <div class="theory-section">
                <h2>C++ Example: Memory Sizes of Data Types</h2>
                <p>This program shows how much memory different C++ data types occupy:</p>

                ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    cout << "=== Memory Size of C++ Data Types ===" << endl;
    cout << "char:        " << sizeof(char)        << " byte(s)" << endl;
    cout << "short:       " << sizeof(short)       << " byte(s)" << endl;
    cout << "int:         " << sizeof(int)         << " byte(s)" << endl;
    cout << "long:        " << sizeof(long)        << " byte(s)" << endl;
    cout << "long long:   " << sizeof(long long)   << " byte(s)" << endl;
    cout << "float:       " << sizeof(float)       << " byte(s)" << endl;
    cout << "double:      " << sizeof(double)      << " byte(s)" << endl;
    cout << "long double: " << sizeof(long double) << " byte(s)" << endl;
    cout << "bool:        " << sizeof(bool)        << " byte(s)" << endl;

    // Total memory for an array
    int arr[100];
    cout << endl;
    cout << "int arr[100] occupies: " << sizeof(arr) << " bytes" << endl;
    cout << "That is " << sizeof(arr) / 1024.0 << " KB" << endl;

    return 0;
}`,
`=== Memory Size of C++ Data Types ===
char:        1 byte(s)
short:       2 byte(s)
int:         4 byte(s)
long:        4 byte(s)
long long:   8 byte(s)
float:       4 byte(s)
double:      8 byte(s)
long double: 16 byte(s)
bool:        1 byte(s)

int arr[100] occupies: 400 bytes
That is 0.390625 KB`,
                    'cpp', 'sizeof Operator Demo')}
            </div>

            <!-- Interactive Size Converter -->
            <div class="interactive-area">
                <h3>Memory Size Converter</h3>
                <p style="margin-bottom:1rem; color:var(--text-secondary);">Enter a value and select its unit. The converter will show the equivalent in all other units.</p>

                <div class="controls-row">
                    <div class="control-field">
                        <label for="mem-conv-value">Value</label>
                        <input type="number" id="mem-conv-value" value="1" min="0" step="any">
                    </div>
                    <div class="control-field">
                        <label for="mem-conv-unit">Unit</label>
                        <select id="mem-conv-unit">
                            <option value="bits">Bits</option>
                            <option value="bytes">Bytes</option>
                            <option value="kb" selected>Kilobytes (KB)</option>
                            <option value="mb">Megabytes (MB)</option>
                            <option value="gb">Gigabytes (GB)</option>
                            <option value="tb">Terabytes (TB)</option>
                        </select>
                    </div>
                    <div class="control-field" style="flex:0;">
                        <label>&nbsp;</label>
                        <button class="btn btn-primary" id="mem-conv-btn">Convert</button>
                    </div>
                </div>

                <div class="result-display" id="mem-conv-result">Enter a value and click Convert.</div>
            </div>
            `;
        },

        init() {
            // Memory hierarchy pyramid hover
            var pyramidLevels = document.querySelectorAll('.mem-pyramid-level');
            var pyramidInfo = {
                registers: '⚡ REGISTERS\n\nSpeed: ~0.3 ns (fastest!)\nSize: A few hundred bytes to a few KB\nLocation: Inside the CPU chip itself\nVolatile: Yes\n\nRegisters are the fastest memory in a computer. They hold the data the CPU is actively working on — current instructions, operands, and results. There are only a handful of registers (16-32 in most CPUs), each typically 64 bits wide.',
                cache: '🔶 CACHE MEMORY (L1, L2, L3)\n\nSpeed: 1-10 nanoseconds\nSize: L1: 32-64 KB | L2: 256 KB-1 MB | L3: 4-64 MB\nLocation: On or near the CPU chip\nVolatile: Yes\nType: SRAM (Static RAM)\n\nCache stores frequently accessed data and instructions so the CPU doesn\'t have to fetch them from slower RAM. L1 is fastest but smallest; L3 is slowest but largest.',
                ram: '🔵 RAM (Main Memory)\n\nSpeed: 50-100 nanoseconds\nSize: 4 GB - 128 GB (typical)\nLocation: Memory sticks on the motherboard\nVolatile: Yes (data lost when power off)\nType: DRAM (Dynamic RAM) — DDR4/DDR5\n\nRAM is where currently running programs and their data are stored. When you open an app, it loads from the hard drive into RAM. More RAM = more programs running simultaneously.',
                secondary: '🟢 SECONDARY STORAGE (HDD / SSD)\n\nSpeed: HDD: 5-10 ms | SSD: 0.05-0.1 ms\nSize: 256 GB - 20 TB\nLocation: Inside or connected to the computer\nVolatile: No (data persists without power)\n\nSecondary storage holds all your files, programs, and the operating system permanently. SSDs are replacing HDDs due to much faster speeds and better reliability (no moving parts).'
            };

            pyramidLevels.forEach(function (level) {
                function showInfo() {
                    var key = level.getAttribute('data-mem-level');
                    document.getElementById('mem-pyramid-info').textContent = pyramidInfo[key] || '';
                    // Highlight
                    pyramidLevels.forEach(function (l) { l.style.transform = 'scale(1)'; l.style.zIndex = '1'; });
                    level.style.transform = 'scale(1.05)';
                    level.style.zIndex = '10';
                }
                level.addEventListener('mouseenter', showInfo);
                level.addEventListener('click', showInfo);
                level.addEventListener('mouseleave', function () {
                    level.style.transform = 'scale(1)';
                    level.style.zIndex = '1';
                });
            });

            // Size converter
            function convertMemory() {
                var val = parseFloat(document.getElementById('mem-conv-value').value);
                var unit = document.getElementById('mem-conv-unit').value;
                if (isNaN(val) || val < 0) {
                    document.getElementById('mem-conv-result').textContent = 'Please enter a valid positive number.';
                    return;
                }

                // Convert to bytes first
                var bytes;
                switch (unit) {
                    case 'bits': bytes = val / 8; break;
                    case 'bytes': bytes = val; break;
                    case 'kb': bytes = val * 1024; break;
                    case 'mb': bytes = val * 1024 * 1024; break;
                    case 'gb': bytes = val * 1024 * 1024 * 1024; break;
                    case 'tb': bytes = val * 1024 * 1024 * 1024 * 1024; break;
                    default: bytes = val;
                }

                function fmt(n) {
                    if (n === 0) return '0';
                    if (n >= 1 && n === Math.floor(n)) return n.toLocaleString();
                    if (n >= 0.01) return n.toFixed(4).replace(/\.?0+$/, '');
                    return n.toExponential(4);
                }

                var result = '=== Conversion Results ===\n\n';
                result += 'Bits:       ' + fmt(bytes * 8) + ' bits\n';
                result += 'Bytes:      ' + fmt(bytes) + ' bytes\n';
                result += 'Kilobytes:  ' + fmt(bytes / 1024) + ' KB\n';
                result += 'Megabytes:  ' + fmt(bytes / (1024 * 1024)) + ' MB\n';
                result += 'Gigabytes:  ' + fmt(bytes / (1024 * 1024 * 1024)) + ' GB\n';
                result += 'Terabytes:  ' + fmt(bytes / (1024 * 1024 * 1024 * 1024)) + ' TB';

                document.getElementById('mem-conv-result').textContent = result;
            }

            document.getElementById('mem-conv-btn').addEventListener('click', convertMemory);
            // Also convert on Enter key
            document.getElementById('mem-conv-value').addEventListener('keydown', function (e) {
                if (e.key === 'Enter') convertMemory();
            });
        }
    });

    // ─────────────────────────────────────────────────────────
    // TOPIC 4: Introduction to Software
    // ─────────────────────────────────────────────────────────
    window.APP.register({
        id: 'software',
        title: 'Introduction to Software',
        unit: 1,
        icon: '💿',
        description: 'System software, application software and utility software',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rsaquo; Fundamentals</div>
                <h1>💿 Introduction to Software</h1>
                <p class="topic-subtitle">The invisible instructions that bring hardware to life &mdash; exploring system, application, and utility software.</p>
            </div>

            <!-- What is Software? -->
            <div class="theory-section">
                <h2>What is Software?</h2>
                <p><strong>Software</strong> is a set of instructions, programs, and data that tells the computer hardware what to do and how to do it. Unlike hardware, software is intangible &mdash; you cannot physically touch it. Software bridges the gap between the user and the hardware.</p>

                <div class="concept-box">
                    <h4>📌 Formal Definition</h4>
                    <p>Software is a collection of programs, procedures, algorithms, and documentation that instructs a computer to perform specific tasks. It is the logical component of a computer system, as opposed to hardware (the physical component).</p>
                </div>

                <div class="definition">
                    <dt>Program</dt>
                    <dd>A specific set of instructions written in a programming language to accomplish a particular task.</dd>
                </div>
                <div class="definition">
                    <dt>Software</dt>
                    <dd>A broader term that includes programs, data, libraries, documentation, and everything needed for them to function.</dd>
                </div>

                <h3>Hardware vs. Software</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Hardware</th>
                            <th>Software</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Nature</strong></td><td>Physical, tangible</td><td>Logical, intangible</td></tr>
                        <tr><td><strong>Examples</strong></td><td>CPU, Monitor, Keyboard</td><td>Windows, Chrome, MS Word</td></tr>
                        <tr><td><strong>Wear &amp; Tear</strong></td><td>Yes, degrades over time</td><td>No physical degradation</td></tr>
                        <tr><td><strong>Replacement</strong></td><td>Physical replacement</td><td>Reinstall / update</td></tr>
                        <tr><td><strong>Development</strong></td><td>Manufactured in factories</td><td>Written by programmers</td></tr>
                        <tr><td><strong>Dependency</strong></td><td>Needs software to function</td><td>Needs hardware to run</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Types of Software -->
            <div class="theory-section">
                <h2>Types of Software</h2>
                <p>Software is broadly classified into three major categories. Each type serves a different purpose in the computing ecosystem:</p>

                <div class="diagram-container">
                    <p style="margin-bottom:1rem; color:var(--text-muted); font-size:0.85rem;">Software Classification</p>
                    <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                        <div class="flow-node process" style="min-width:160px;">🖥️ System Software</div>
                        <div class="flow-node decision" style="min-width:160px;">📱 Application Software</div>
                        <div class="flow-node start" style="min-width:160px;">🔧 Utility Software</div>
                    </div>
                </div>

                ${APP.createTabs('sw-types', [
                    {
                        label: '🖥️ System Software',
                        content: `
                            <h3>System Software</h3>
                            <p><strong>System software</strong> is the foundational layer that manages hardware resources and provides a platform for application software to run. Without system software, you cannot use a computer at all. It acts as an intermediary between the user/applications and the hardware.</p>

                            <h4>1. Operating System (OS)</h4>
                            <p>The most important system software. It manages all hardware and software resources, provides a user interface, and enables programs to run.</p>
                            <ul>
                                <li><strong>Resource Management:</strong> Manages CPU time, memory allocation, disk space, and device access</li>
                                <li><strong>Process Management:</strong> Creates, schedules, and terminates processes</li>
                                <li><strong>File Management:</strong> Organizes files into directories, handles read/write operations</li>
                                <li><strong>User Interface:</strong> Provides CLI (Command Line Interface) or GUI (Graphical User Interface)</li>
                                <li><strong>Security:</strong> User authentication, access control, firewalls</li>
                                <li><strong>Examples:</strong> Windows, macOS, Linux, Android, iOS</li>
                            </ul>

                            <h4>2. Language Translators</h4>
                            <p>These convert programs written in human-readable languages into machine code that the CPU can execute:</p>
                            <ul>
                                <li><strong>Compiler:</strong> Translates the entire source code into machine code at once before execution. Produces an executable file. (Used by C, C++, Java)</li>
                                <li><strong>Interpreter:</strong> Translates and executes code line by line. No separate executable is created. (Used by Python, JavaScript, Ruby)</li>
                                <li><strong>Assembler:</strong> Translates assembly language (mnemonics like MOV, ADD) into machine code (binary). One-to-one translation.</li>
                            </ul>

                            <h4>3. Linker</h4>
                            <p>Combines multiple object files and libraries into a single executable program. When you write a C++ program using functions from different files or libraries, the linker joins them together.</p>

                            <h4>4. Loader</h4>
                            <p>Loads the executable program from disk into RAM so the CPU can execute it. It handles memory allocation and address relocation.</p>

                            <h4>5. Device Drivers</h4>
                            <p>Small programs that enable the OS to communicate with specific hardware devices (printer drivers, graphics drivers, audio drivers).</p>
                        `
                    },
                    {
                        label: '📱 Application Software',
                        content: `
                            <h3>Application Software</h3>
                            <p><strong>Application software</strong> is designed to help users perform specific tasks. These are the programs that end users interact with directly. Application software runs on top of system software.</p>

                            <h4>Categories of Application Software</h4>

                            <p><strong>Productivity Software:</strong></p>
                            <ul>
                                <li><strong>Word Processors:</strong> Create and edit text documents (MS Word, Google Docs, LibreOffice Writer)</li>
                                <li><strong>Spreadsheets:</strong> Organize data in tables, perform calculations (MS Excel, Google Sheets)</li>
                                <li><strong>Presentation Software:</strong> Create slideshows (MS PowerPoint, Google Slides)</li>
                                <li><strong>Database Management:</strong> Store and query structured data (MS Access, MySQL Workbench)</li>
                            </ul>

                            <p><strong>Communication Software:</strong></p>
                            <ul>
                                <li><strong>Web Browsers:</strong> Access websites (Chrome, Firefox, Edge, Safari)</li>
                                <li><strong>Email Clients:</strong> Send/receive emails (Outlook, Thunderbird, Gmail)</li>
                                <li><strong>Messaging Apps:</strong> Instant messaging (WhatsApp, Telegram, Slack)</li>
                                <li><strong>Video Conferencing:</strong> Virtual meetings (Zoom, Teams, Google Meet)</li>
                            </ul>

                            <p><strong>Creative Software:</strong></p>
                            <ul>
                                <li><strong>Image Editors:</strong> Photo editing (Adobe Photoshop, GIMP)</li>
                                <li><strong>Video Editors:</strong> Video production (Adobe Premiere, DaVinci Resolve)</li>
                                <li><strong>Audio Editors:</strong> Sound editing (Audacity, FL Studio)</li>
                                <li><strong>3D Modeling:</strong> 3D design (Blender, AutoCAD, Maya)</li>
                            </ul>

                            <p><strong>Scientific/Engineering Software:</strong></p>
                            <ul>
                                <li><strong>Numerical Computing:</strong> MATLAB, Octave, Mathematica</li>
                                <li><strong>Data Analysis:</strong> Python (NumPy, Pandas), R, SPSS</li>
                                <li><strong>Simulation:</strong> COMSOL, ANSYS, LabVIEW</li>
                                <li><strong>IDEs:</strong> VS Code, Code::Blocks, Dev-C++ (for programming)</li>
                            </ul>
                        `
                    },
                    {
                        label: '🔧 Utility Software',
                        content: `
                            <h3>Utility Software</h3>
                            <p><strong>Utility software</strong> (also called service programs or tools) helps maintain, optimize, and protect the computer system. Utilities fill the gap between system software and application software &mdash; they are not full applications but essential tools for system health.</p>

                            <h4>Common Utility Software</h4>

                            <p><strong>Security Utilities:</strong></p>
                            <ul>
                                <li><strong>Antivirus:</strong> Detects and removes viruses, malware, trojans, and spyware (Windows Defender, Norton, Avast, Malwarebytes)</li>
                                <li><strong>Firewall:</strong> Monitors and controls network traffic to prevent unauthorized access</li>
                                <li><strong>Encryption Tools:</strong> Encrypt files and drives for data protection (BitLocker, VeraCrypt)</li>
                            </ul>

                            <p><strong>Disk Utilities:</strong></p>
                            <ul>
                                <li><strong>Disk Cleanup:</strong> Removes temporary files, cache, and unused data to free up space</li>
                                <li><strong>Disk Defragmenter:</strong> Reorganizes fragmented data on HDD for faster access (not needed for SSDs)</li>
                                <li><strong>Disk Partitioning:</strong> Creates, resizes, and manages disk partitions (Disk Management, GParted)</li>
                                <li><strong>Disk Check:</strong> Scans for and fixes disk errors (chkdsk, fsck)</li>
                            </ul>

                            <p><strong>File Management Utilities:</strong></p>
                            <ul>
                                <li><strong>File Managers:</strong> Browse, copy, move, and delete files (Windows Explorer, Finder)</li>
                                <li><strong>Compression Tools:</strong> Compress files to save space (WinRAR, 7-Zip, WinZip)</li>
                                <li><strong>Backup Tools:</strong> Create copies of important data for recovery</li>
                            </ul>

                            <p><strong>System Utilities:</strong></p>
                            <ul>
                                <li><strong>Task Manager:</strong> Monitor running processes, CPU and memory usage</li>
                                <li><strong>System Information:</strong> View hardware specs, OS version, and device details</li>
                                <li><strong>Registry Cleaners:</strong> Clean invalid registry entries (Windows)</li>
                            </ul>
                        `
                    }
                ])}
            </div>

            <!-- Comparison Table -->
            <div class="theory-section">
                <h2>Comparison: System vs Application vs Utility</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>System Software</th>
                            <th>Application Software</th>
                            <th>Utility Software</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Purpose</strong></td><td>Manage hardware &amp; platform</td><td>Perform specific user tasks</td><td>Maintain &amp; optimize system</td></tr>
                        <tr><td><strong>User Interaction</strong></td><td>Indirect (runs in background)</td><td>Direct (user operates it)</td><td>Occasional (run as needed)</td></tr>
                        <tr><td><strong>Examples</strong></td><td>Windows, Linux, Compilers</td><td>Word, Excel, Chrome</td><td>Antivirus, WinRAR, Defrag</td></tr>
                        <tr><td><strong>Dependency</strong></td><td>Runs independently on hardware</td><td>Needs system software</td><td>Needs system software</td></tr>
                        <tr><td><strong>Complexity</strong></td><td>Very complex</td><td>Moderate to complex</td><td>Simple to moderate</td></tr>
                        <tr><td><strong>Essentialness</strong></td><td>Mandatory for operation</td><td>Optional (task-specific)</td><td>Optional (maintenance)</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- C++ Example -->
            <div class="theory-section">
                <h2>C++ Example: Software Categories</h2>
                <p>Here is a C++ program that categorizes different software:</p>

                ${APP.codeWithOutput(
`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Arrays of software names by category
    string system_sw[]  = {"Windows", "Linux", "GCC Compiler", "NASM Assembler"};
    string app_sw[]     = {"MS Word", "Chrome", "Photoshop", "MATLAB"};
    string utility_sw[] = {"Antivirus", "WinRAR", "Disk Cleanup", "Task Manager"};

    cout << "=== Software Classification ===" << endl;
    cout << endl;

    cout << "SYSTEM SOFTWARE:" << endl;
    for (int i = 0; i < 4; i++)
        cout << "  " << (i+1) << ". " << system_sw[i] << endl;

    cout << endl << "APPLICATION SOFTWARE:" << endl;
    for (int i = 0; i < 4; i++)
        cout << "  " << (i+1) << ". " << app_sw[i] << endl;

    cout << endl << "UTILITY SOFTWARE:" << endl;
    for (int i = 0; i < 4; i++)
        cout << "  " << (i+1) << ". " << utility_sw[i] << endl;

    return 0;
}`,
`=== Software Classification ===

SYSTEM SOFTWARE:
  1. Windows
  2. Linux
  3. GCC Compiler
  4. NASM Assembler

APPLICATION SOFTWARE:
  1. MS Word
  2. Chrome
  3. Photoshop
  4. MATLAB

UTILITY SOFTWARE:
  1. Antivirus
  2. WinRAR
  3. Disk Cleanup
  4. Task Manager`,
                    'cpp', 'Software Categories Program')}
            </div>

            <!-- Interactive Categorization Exercise -->
            <div class="interactive-area">
                <h3>Software Categorization Exercise</h3>
                <p style="margin-bottom:1rem; color:var(--text-secondary);">Classify each software item into the correct category by clicking the appropriate button. Get all 10 correct to earn a perfect score!</p>

                <div id="sw-exercise-container">
                    <div style="padding:1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); margin-bottom:1rem; text-align:center;">
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">Current Item:</p>
                        <p style="font-size:1.3rem; font-weight:700; color:var(--text-bright);" id="sw-current-item">Loading...</p>
                        <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:0.25rem;" id="sw-item-counter">Item 1 of 10</p>
                    </div>

                    <div class="btn-group" style="justify-content:center; margin-bottom:1rem;">
                        <button class="btn btn-secondary" id="sw-btn-system" style="min-width:140px;">🖥️ System</button>
                        <button class="btn btn-secondary" id="sw-btn-application" style="min-width:140px;">📱 Application</button>
                        <button class="btn btn-secondary" id="sw-btn-utility" style="min-width:140px;">🔧 Utility</button>
                    </div>

                    <div id="sw-feedback" style="text-align:center; min-height:1.5rem; font-weight:600; margin-bottom:0.5rem;"></div>
                </div>

                <div class="result-display" id="sw-exercise-result">Classify each item by clicking the correct category button above.</div>
            </div>
            `;
        },

        init() {
            var items = [
                { name: 'Linux', category: 'system', hint: 'An operating system' },
                { name: 'Microsoft Excel', category: 'application', hint: 'A spreadsheet program' },
                { name: 'WinRAR', category: 'utility', hint: 'A file compression tool' },
                { name: 'GCC Compiler', category: 'system', hint: 'Translates C/C++ to machine code' },
                { name: 'Google Chrome', category: 'application', hint: 'A web browser' },
                { name: 'Norton Antivirus', category: 'utility', hint: 'Protects against malware' },
                { name: 'Device Driver', category: 'system', hint: 'Enables OS to talk to hardware' },
                { name: 'Adobe Photoshop', category: 'application', hint: 'An image editing tool' },
                { name: 'Disk Defragmenter', category: 'utility', hint: 'Reorganizes HDD data' },
                { name: 'Assembler', category: 'system', hint: 'Converts assembly to machine code' }
            ];

            // Shuffle
            for (var i = items.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = items[i]; items[i] = items[j]; items[j] = temp;
            }

            var currentIndex = 0;
            var score = 0;
            var answers = [];

            function showItem() {
                if (currentIndex < items.length) {
                    document.getElementById('sw-current-item').textContent = items[currentIndex].name;
                    document.getElementById('sw-item-counter').textContent = 'Item ' + (currentIndex + 1) + ' of ' + items.length;
                    document.getElementById('sw-feedback').textContent = '';
                } else {
                    showFinalResult();
                }
            }

            function handleAnswer(choice) {
                if (currentIndex >= items.length) return;
                var correct = items[currentIndex].category;
                var isCorrect = choice === correct;
                if (isCorrect) {
                    score++;
                    document.getElementById('sw-feedback').innerHTML = '<span style="color:var(--accent-green);">✅ Correct!</span>';
                } else {
                    document.getElementById('sw-feedback').innerHTML = '<span style="color:var(--accent-red);">❌ Wrong! It is <strong>' + correct.charAt(0).toUpperCase() + correct.slice(1) + '</strong> software. (' + items[currentIndex].hint + ')</span>';
                }
                answers.push({ name: items[currentIndex].name, correct: correct, chosen: choice, isCorrect: isCorrect });
                currentIndex++;
                setTimeout(showItem, 1200);
            }

            function showFinalResult() {
                document.getElementById('sw-current-item').textContent = 'Exercise Complete!';
                document.getElementById('sw-item-counter').textContent = '';
                document.getElementById('sw-feedback').textContent = '';

                var pct = Math.round((score / items.length) * 100);
                var result = 'Final Score: ' + score + '/' + items.length + ' (' + pct + '%)\n\n';
                answers.forEach(function (a) {
                    result += (a.isCorrect ? '✅' : '❌') + ' ' + a.name + ' → ' + a.correct.charAt(0).toUpperCase() + a.correct.slice(1);
                    if (!a.isCorrect) result += ' (you chose: ' + a.chosen + ')';
                    result += '\n';
                });
                result += '\n' + (pct === 100 ? '🎉 Perfect! You know your software categories!' : pct >= 70 ? '👍 Good job!' : '📖 Keep studying the categories above.');
                document.getElementById('sw-exercise-result').textContent = result;

                // Show restart button
                document.getElementById('sw-feedback').innerHTML = '<button class="btn btn-primary btn-sm" id="sw-restart">🔄 Try Again</button>';
                document.getElementById('sw-restart').addEventListener('click', function () {
                    currentIndex = 0; score = 0; answers = [];
                    // Reshuffle
                    for (var i = items.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = items[i]; items[i] = items[j]; items[j] = temp;
                    }
                    document.getElementById('sw-exercise-result').textContent = 'Classify each item by clicking the correct category button above.';
                    showItem();
                });
            }

            document.getElementById('sw-btn-system').addEventListener('click', function () { handleAnswer('system'); });
            document.getElementById('sw-btn-application').addEventListener('click', function () { handleAnswer('application'); });
            document.getElementById('sw-btn-utility').addEventListener('click', function () { handleAnswer('utility'); });

            showItem();
        }
    });

    // ─────────────────────────────────────────────────────────
    // TOPIC 5: Programming Languages
    // ─────────────────────────────────────────────────────────
    window.APP.register({
        id: 'languages',
        title: 'Programming Languages',
        unit: 1,
        icon: '🔤',
        description: 'Low level, high level and middle level languages',

        content() {
            return `
            <div class="topic-header">
                <div class="topic-breadcrumb"><span>Unit I</span> &rsaquo; Fundamentals</div>
                <h1>🔤 Programming Languages</h1>
                <p class="topic-subtitle">How humans communicate with computers &mdash; from raw binary to elegant high-level languages.</p>
            </div>

            <!-- What is a Programming Language? -->
            <div class="theory-section">
                <h2>What is a Programming Language?</h2>
                <p>A <strong>programming language</strong> is a formal set of rules, syntax, and semantics used to write instructions (programs) that a computer can understand and execute. Programming languages allow humans to express algorithms and computational logic in a structured way.</p>

                <div class="concept-box">
                    <h4>📌 Why Do We Need Programming Languages?</h4>
                    <p>Computers only understand <strong>machine language</strong> (sequences of 0s and 1s). Writing directly in binary is extremely tedious and error-prone. Programming languages provide an abstraction layer that lets programmers express ideas in a more human-readable form, which is then translated into machine code by compilers or interpreters.</p>
                </div>

                <p>Programming languages can be broadly classified into three levels based on how close they are to the hardware:</p>
                <ol>
                    <li><strong>Low-Level Languages</strong> &mdash; Close to hardware, difficult for humans</li>
                    <li><strong>High-Level Languages</strong> &mdash; Close to human language, far from hardware</li>
                    <li><strong>Middle-Level Languages</strong> &mdash; A blend of both (like C, C++)</li>
                </ol>
            </div>

            <!-- Low-Level Languages -->
            <div class="theory-section">
                <h2>Low-Level Languages</h2>
                <p>Low-level languages are closely related to the hardware and provide little or no abstraction from the computer's architecture. They are fast and efficient but very difficult for humans to read, write, and debug.</p>

                <h3>1. Machine Language (First Generation)</h3>
                <p>Machine language is the <strong>only language a CPU can directly understand</strong>. It consists entirely of binary digits (0s and 1s). Every instruction, every data value, every memory address is expressed as a pattern of bits.</p>

                <div class="example-box">
                    <h4>Example: Adding Two Numbers in Machine Language (x86)</h4>
                    <p style="font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
                        10110000 00000101  &nbsp;&nbsp;(MOV AL, 5 &mdash; load 5 into register AL)<br>
                        00000100 00000011  &nbsp;&nbsp;(ADD AL, 3 &mdash; add 3 to register AL)<br>
                    </p>
                    <p style="font-size:0.85rem; margin-top:0.5rem;">Result: Register AL now contains 8 (binary: 00001000)</p>
                </div>

                <p><strong>Advantages of Machine Language:</strong></p>
                <ul>
                    <li>Directly executed by CPU &mdash; no translation needed, fastest execution</li>
                    <li>Full control over hardware resources</li>
                </ul>
                <p><strong>Disadvantages of Machine Language:</strong></p>
                <ul>
                    <li>Extremely difficult to read, write, and remember</li>
                    <li>Error-prone &mdash; a single wrong bit can crash the program</li>
                    <li>Not portable &mdash; different CPUs have different machine codes</li>
                    <li>No meaningful variable names, labels, or structure</li>
                </ul>

                <h3>2. Assembly Language (Second Generation)</h3>
                <p>Assembly language uses short, human-readable abbreviations called <strong>mnemonics</strong> (like MOV, ADD, SUB, JMP) instead of raw binary. Each mnemonic maps directly to a machine instruction. An <strong>assembler</strong> translates assembly code into machine code.</p>

                ${APP.codeBlock(
`; Adding two numbers in x86 Assembly Language
section .data
    num1 db 5          ; First number = 5
    num2 db 3          ; Second number = 3
    result db 0        ; Result variable

section .text
    global _start

_start:
    mov al, [num1]     ; Load num1 into register AL
    add al, [num2]     ; Add num2 to AL
    mov [result], al   ; Store result (AL = 8)

    ; Exit program
    mov eax, 1         ; System call: exit
    xor ebx, ebx       ; Exit code: 0
    int 0x80           ; Call kernel`, 'x86asm', 'Assembly Language: Adding Two Numbers')}

                <p><strong>Advantages of Assembly Language:</strong></p>
                <ul>
                    <li>More readable than machine language (uses mnemonics)</li>
                    <li>Direct hardware control with near-maximum performance</li>
                    <li>Useful for writing device drivers, OS kernels, embedded systems</li>
                </ul>
                <p><strong>Disadvantages of Assembly Language:</strong></p>
                <ul>
                    <li>Still machine-dependent &mdash; assembly for Intel differs from ARM</li>
                    <li>Tedious to write &mdash; many instructions for simple tasks</li>
                    <li>Difficult to debug and maintain</li>
                    <li>Not portable across different processor architectures</li>
                </ul>
            </div>

            <!-- High-Level Languages -->
            <div class="theory-section">
                <h2>High-Level Languages</h2>
                <p>High-level languages (HLLs) are designed for humans. They use English-like syntax, mathematical notation, and meaningful variable names. A <strong>compiler</strong> or <strong>interpreter</strong> translates them into machine code.</p>

                <div class="info-box">
                    <h4>💡 Key Advantage</h4>
                    <p>High-level languages are <strong>portable</strong> &mdash; the same source code can run on different hardware platforms (Windows, Mac, Linux) as long as a suitable compiler or interpreter exists. They also dramatically increase programmer productivity.</p>
                </div>

                <h3>Popular High-Level Languages</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Language</th>
                            <th>Year</th>
                            <th>Paradigm</th>
                            <th>Primary Use</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>FORTRAN</td><td>1957</td><td>Procedural</td><td>Scientific/numerical computing</td></tr>
                        <tr><td>COBOL</td><td>1959</td><td>Procedural</td><td>Business applications</td></tr>
                        <tr><td>BASIC</td><td>1964</td><td>Procedural</td><td>Education, beginners</td></tr>
                        <tr><td>Pascal</td><td>1970</td><td>Procedural</td><td>Education, structured programming</td></tr>
                        <tr><td>Python</td><td>1991</td><td>Multi-paradigm</td><td>Web, AI/ML, scripting, science</td></tr>
                        <tr><td>Java</td><td>1995</td><td>Object-Oriented</td><td>Enterprise, Android, web</td></tr>
                        <tr><td>C#</td><td>2000</td><td>Object-Oriented</td><td>Windows apps, games (Unity)</td></tr>
                        <tr><td>JavaScript</td><td>1995</td><td>Multi-paradigm</td><td>Web development (front &amp; back)</td></tr>
                    </tbody>
                </table>

                <p><strong>Advantages of High-Level Languages:</strong></p>
                <ul>
                    <li>Easy to learn, read, write, and maintain</li>
                    <li>Portable across different platforms</li>
                    <li>Built-in error checking and debugging tools</li>
                    <li>Rich standard libraries save development time</li>
                    <li>Support advanced features: OOP, generics, exceptions</li>
                </ul>
                <p><strong>Disadvantages of High-Level Languages:</strong></p>
                <ul>
                    <li>Slower than low-level languages (translation overhead)</li>
                    <li>Less direct control over hardware</li>
                    <li>Requires a compiler or interpreter to be installed</li>
                </ul>
            </div>

            <!-- Middle-Level Languages -->
            <div class="theory-section">
                <h2>Middle-Level Languages</h2>
                <p><strong>Middle-level languages</strong> (sometimes called "system programming languages") combine the power and efficiency of low-level languages with the readability and features of high-level languages. They allow both high-level abstractions (variables, functions, loops) and low-level operations (memory addresses, bit manipulation, pointers).</p>

                <div class="concept-box">
                    <h4>📌 C and C++ as Middle-Level Languages</h4>
                    <p><strong>C</strong> (1972, Dennis Ritchie) and <strong>C++</strong> (1979, Bjarne Stroustrup) are the quintessential middle-level languages. They are used to write operating systems (Linux, Windows kernel), game engines, embedded systems, and performance-critical applications. C++ adds object-oriented programming to C.</p>
                </div>

                <p><strong>Why are C/C++ called "middle-level"?</strong></p>
                <ul>
                    <li><strong>High-level features:</strong> Functions, loops, variables, strings, classes (C++), templates</li>
                    <li><strong>Low-level features:</strong> Pointers, direct memory access, bitwise operators, inline assembly</li>
                    <li>Can write an entire operating system OR a simple calculator with the same language</li>
                </ul>

                <div class="tip-box">
                    <h4>🏆 Why C++ for Computational Physics?</h4>
                    <p>C++ is ideal for scientific computing because it offers:</p>
                    <ul>
                        <li><strong>Performance:</strong> Near-hardware speed for number crunching</li>
                        <li><strong>Control:</strong> Fine-grained memory management for large datasets</li>
                        <li><strong>Libraries:</strong> Rich ecosystem (Eigen, GSL, ROOT, Boost) for physics simulations</li>
                        <li><strong>Portability:</strong> Runs on any platform with a C++ compiler</li>
                    </ul>
                </div>
            </div>

            <!-- Same Operation in Different Levels -->
            <div class="theory-section">
                <h2>Same Task in Different Languages</h2>
                <p>Let's see how the simple task of <strong>"adding two numbers (5 + 3) and displaying the result"</strong> looks in each level of programming language:</p>

                ${APP.createTabs('lang-comparison', [
                    {
                        label: '⚙️ Machine Language',
                        content: `
                            <h4>Machine Language (Binary)</h4>
                            <p>Pure binary instructions. This is what the CPU actually executes.</p>
                            ${APP.codeBlock(
`; Conceptual machine code (simplified x86)
; Each line is a binary instruction

10110000 00000101    ; MOV AL, 5   (load 5 into AL)
00000100 00000011    ; ADD AL, 3   (add 3 to AL)
; AL now contains 00001000 (decimal 8)

; Display would require dozens more binary
; instructions for system calls...`, 'plaintext', 'Machine Code (Binary)')}
                            <p style="color:var(--text-secondary); font-size:0.85rem;">
                                Note: Displaying output requires many more instructions to invoke operating system functions. Even this simple addition takes multiple carefully crafted binary sequences.
                            </p>
                        `
                    },
                    {
                        label: '📝 Assembly',
                        content: `
                            <h4>Assembly Language (x86 NASM)</h4>
                            <p>Mnemonics replace binary. Still hardware-specific but readable.</p>
                            ${APP.codeBlock(
`section .data
    msg db "Sum = 8", 10   ; Output string with newline
    len equ $ - msg         ; Length of string

section .text
    global _start

_start:
    ; Calculate 5 + 3
    mov al, 5              ; Load 5 into AL register
    add al, 3              ; Add 3: AL = 8

    ; Print result (Linux system call)
    mov eax, 4             ; sys_write
    mov ebx, 1             ; stdout
    mov ecx, msg           ; message address
    mov edx, len           ; message length
    int 0x80               ; call kernel

    ; Exit
    mov eax, 1             ; sys_exit
    xor ebx, ebx           ; exit code 0
    int 0x80`, 'x86asm', 'Assembly: Adding Two Numbers')}
                        `
                    },
                    {
                        label: '🔷 C (Middle)',
                        content: `
                            <h4>C Language (Middle-Level)</h4>
                            <p>Concise, powerful, and close to hardware when needed.</p>
                            ${APP.codeWithOutput(
`#include <stdio.h>

int main() {
    int a = 5, b = 3;
    int sum = a + b;
    printf("Sum = %d\\n", sum);
    return 0;
}`, 'Sum = 8', 'c', 'C: Adding Two Numbers')}
                        `
                    },
                    {
                        label: '🔶 C++ (Middle)',
                        content: `
                            <h4>C++ Language (Middle-Level)</h4>
                            <p>Object-oriented extension of C with rich standard library.</p>
                            ${APP.codeWithOutput(
`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 3;
    int sum = a + b;
    cout << "Sum = " << sum << endl;
    return 0;
}`, 'Sum = 8', 'cpp', 'C++: Adding Two Numbers')}
                        `
                    },
                    {
                        label: '🐍 Python (High)',
                        content: `
                            <h4>Python (High-Level)</h4>
                            <p>Extremely readable and concise. Ideal for rapid prototyping.</p>
                            ${APP.codeWithOutput(
`a = 5
b = 3
total = a + b
print(f"Sum = {total}")`, 'Sum = 8', 'python', 'Python: Adding Two Numbers')}
                            <p style="color:var(--text-secondary); font-size:0.85rem;">
                                Notice how Python needs no includes, no main function, no type declarations, and no semicolons. This simplicity comes at the cost of runtime speed.
                            </p>
                        `
                    },
                    {
                        label: '☕ Java (High)',
                        content: `
                            <h4>Java (High-Level)</h4>
                            <p>Object-oriented, platform-independent via JVM (Java Virtual Machine).</p>
                            ${APP.codeWithOutput(
`public class AddNumbers {
    public static void main(String[] args) {
        int a = 5, b = 3;
        int sum = a + b;
        System.out.println("Sum = " + sum);
    }
}`, 'Sum = 8', 'java', 'Java: Adding Two Numbers')}
                        `
                    }
                ])}
            </div>

            <!-- Comparison Table -->
            <div class="theory-section">
                <h2>Comparison: Low vs Middle vs High Level</h2>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Low-Level</th>
                            <th>Middle-Level</th>
                            <th>High-Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Abstraction</strong></td><td>None or very little</td><td>Moderate</td><td>High</td></tr>
                        <tr><td><strong>Readability</strong></td><td>Very difficult</td><td>Moderate</td><td>Easy (English-like)</td></tr>
                        <tr><td><strong>Speed</strong></td><td>Fastest</td><td>Fast</td><td>Slower</td></tr>
                        <tr><td><strong>Portability</strong></td><td>Not portable</td><td>Somewhat portable</td><td>Highly portable</td></tr>
                        <tr><td><strong>Hardware Access</strong></td><td>Direct</td><td>Direct + Abstract</td><td>Abstract only</td></tr>
                        <tr><td><strong>Memory Control</strong></td><td>Manual (registers)</td><td>Manual (pointers)</td><td>Automatic (GC)</td></tr>
                        <tr><td><strong>Translation</strong></td><td>Assembler</td><td>Compiler</td><td>Compiler/Interpreter</td></tr>
                        <tr><td><strong>Examples</strong></td><td>Binary, Assembly</td><td>C, C++</td><td>Python, Java, C#</td></tr>
                        <tr><td><strong>Use Cases</strong></td><td>OS kernels, drivers</td><td>Games, OS, embedded</td><td>Web, AI, apps</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Compilation vs Interpretation -->
            <div class="theory-section">
                <h2>Compilation vs. Interpretation</h2>
                <p>High-level source code must be translated into machine code. There are two primary approaches:</p>

                <h3>Compilation</h3>
                <p>A <strong>compiler</strong> reads the entire source code, checks for errors, and translates it all at once into a separate machine code file (executable). The executable can then run independently without the compiler.</p>

                <div class="diagram-container">
                    <p style="margin-bottom:0.75rem; color:var(--text-muted); font-size:0.85rem;">Compilation Process</p>
                    <div class="flow-node start">Source Code<br><small>(.cpp file)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Compiler<br><small>(g++)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Object Code<br><small>(.o file)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Linker</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node end">Executable<br><small>(.exe file)</small></div>
                </div>

                <h3>Interpretation</h3>
                <p>An <strong>interpreter</strong> reads and executes the source code line by line. There is no separate executable file. The interpreter must be present every time the program runs.</p>

                <div class="diagram-container">
                    <p style="margin-bottom:0.75rem; color:var(--text-muted); font-size:0.85rem;">Interpretation Process</p>
                    <div class="flow-node start">Source Code<br><small>(.py file)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node process">Interpreter<br><small>(python)</small></div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-node end">Output<br><small>(direct)</small></div>
                </div>

                <h3>Compiler vs. Interpreter</h3>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Compiler</th>
                            <th>Interpreter</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Translation</strong></td><td>Entire program at once</td><td>Line by line</td></tr>
                        <tr><td><strong>Output</strong></td><td>Executable file</td><td>No separate file</td></tr>
                        <tr><td><strong>Execution Speed</strong></td><td>Fast (pre-compiled)</td><td>Slow (translates each time)</td></tr>
                        <tr><td><strong>Error Detection</strong></td><td>All errors shown after compilation</td><td>Stops at first error</td></tr>
                        <tr><td><strong>Memory Usage</strong></td><td>More (stores object code)</td><td>Less</td></tr>
                        <tr><td><strong>Debugging</strong></td><td>Harder (compile, run, check)</td><td>Easier (immediate feedback)</td></tr>
                        <tr><td><strong>Languages</strong></td><td>C, C++, Rust, Go</td><td>Python, JavaScript, Ruby</td></tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <h4>⚠️ Hybrid Approach</h4>
                    <p>Some languages use a <strong>hybrid</strong> approach. Java compiles source code to <strong>bytecode</strong> (intermediate form), which is then interpreted/JIT-compiled by the <strong>Java Virtual Machine (JVM)</strong>. Python also compiles to bytecode (.pyc files) before interpretation. This gives a balance of portability and performance.</p>
                </div>
            </div>

            <!-- Interactive Matching Exercise -->
            <div class="interactive-area">
                <h3>Language Matching Exercise</h3>
                <p style="margin-bottom:1rem; color:var(--text-secondary);">Match each description with the correct language level. Select the appropriate level for each statement.</p>

                <div id="lang-match-container">
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">Uses binary code (0s and 1s)</span>
                        <select id="lang-match-1" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">Supports both pointers and OOP classes</span>
                        <select id="lang-match-2" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">Uses automatic garbage collection</span>
                        <select id="lang-match-3" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">Uses mnemonics like MOV, ADD, SUB</span>
                        <select id="lang-match-4" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">Highly portable across different platforms</span>
                        <select id="lang-match-5" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                    <div style="margin-bottom:0.75rem; padding:0.75rem 1rem; background:var(--bg-elevated); border-radius:var(--radius-sm); border:1px solid var(--glass-border); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                        <span style="flex:1; min-width:200px;">C++ is an example of this level</span>
                        <select id="lang-match-6" style="padding:0.4rem 0.8rem; background:var(--bg-surface); border:1px solid var(--glass-border); border-radius:var(--radius-sm); color:var(--text-primary); font-family:inherit;">
                            <option value="">Select...</option>
                            <option value="low">Low-Level</option>
                            <option value="middle">Middle-Level</option>
                            <option value="high">High-Level</option>
                        </select>
                    </div>
                </div>

                <div style="margin-top:1rem;">
                    <button class="btn btn-primary" id="lang-match-check">Check Answers</button>
                    <button class="btn btn-secondary" id="lang-match-reset" style="margin-left:0.5rem;">Reset</button>
                </div>
                <div class="result-display" id="lang-match-result" style="margin-top:1rem;">Select an answer for each statement, then click "Check Answers".</div>
            </div>
            `;
        },

        init() {
            var matchAnswers = {
                'lang-match-1': 'low',
                'lang-match-2': 'middle',
                'lang-match-3': 'high',
                'lang-match-4': 'low',
                'lang-match-5': 'high',
                'lang-match-6': 'middle'
            };
            var matchDescriptions = {
                'lang-match-1': 'Binary code (0s and 1s) → Low-Level (Machine Language)',
                'lang-match-2': 'Pointers + OOP → Middle-Level (like C++)',
                'lang-match-3': 'Automatic garbage collection → High-Level (like Java, Python)',
                'lang-match-4': 'Mnemonics (MOV, ADD) → Low-Level (Assembly Language)',
                'lang-match-5': 'Highly portable → High-Level (platform independent)',
                'lang-match-6': 'C++ → Middle-Level (combines high and low features)'
            };

            document.getElementById('lang-match-check').addEventListener('click', function () {
                var score = 0;
                var total = Object.keys(matchAnswers).length;
                var result = '=== Matching Results ===\n\n';

                for (var id in matchAnswers) {
                    var select = document.getElementById(id);
                    var chosen = select.value;
                    var correct = matchAnswers[id];
                    var isCorrect = chosen === correct;
                    if (isCorrect) score++;

                    var selectParent = select.closest('div');
                    selectParent.style.borderLeftWidth = '4px';

                    if (chosen === '') {
                        result += '⚠️ ' + matchDescriptions[id] + ' — Not answered\n';
                        selectParent.style.borderLeftColor = 'var(--accent-orange)';
                    } else if (isCorrect) {
                        result += '✅ ' + matchDescriptions[id] + '\n';
                        selectParent.style.borderLeftColor = 'var(--accent-green)';
                    } else {
                        result += '❌ ' + matchDescriptions[id] + ' (you chose: ' + chosen + ')\n';
                        selectParent.style.borderLeftColor = 'var(--accent-red)';
                    }
                }

                var pct = Math.round((score / total) * 100);
                result += '\nScore: ' + score + '/' + total + ' (' + pct + '%)';
                result += '\n' + (pct === 100 ? '🎉 Perfect! You understand language levels!' : pct >= 67 ? '👍 Good work! Review the missed ones.' : '📖 Review the comparison table above.');

                document.getElementById('lang-match-result').textContent = result;
            });

            document.getElementById('lang-match-reset').addEventListener('click', function () {
                for (var id in matchAnswers) {
                    var select = document.getElementById(id);
                    select.value = '';
                    var selectParent = select.closest('div');
                    selectParent.style.borderLeftWidth = '1px';
                    selectParent.style.borderLeftColor = '';
                }
                document.getElementById('lang-match-result').textContent = 'Select an answer for each statement, then click "Check Answers".';
            });
        }
    });

})();
