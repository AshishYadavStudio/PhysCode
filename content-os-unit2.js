/* ======================================================
   OS UNIT 2 – Process Management & Deadlocks
   Topics: process-intro, cpu-scheduling, deadlocks
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. Process Management
    window.APP.register({
        subject: 'os',
        unit: 2,
        id: 'process-intro',
        title: 'Process Management',
        icon: '⚙️',
        description: 'Program vs Process, PCB, Process States',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit II</div>',
                    '<h1>⚙️ Process Management</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Program vs. Process</h2>',
                    '<p>A <strong>Program</strong> is a passive entity (an executable file stored on disk). A <strong>Process</strong> is an active entity (a program in execution loaded into RAM). A process includes the program counter, registers, stack, data section, and heap.</p>',
                    
                    '<h2>Process Control Block (PCB)</h2>',
                    '<p>The OS represents each process using a data structure called the PCB. It contains:</p>',
                    '<ul>',
                        '<li>Process State (Ready, Running, Waiting)</li>',
                        '<li>Program Counter (Address of next instruction)</li>',
                        '<li>CPU Registers</li>',
                        '<li>Memory Management Information</li>',
                        '<li>Accounting & I/O Status Information</li>',
                    '</ul>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Process State Transition</h3>',
                    '<div class="diagram-container">',
                        '<div class="flow-node start">New</div> &rarr; ',
                        '<div class="flow-node process">Ready</div> &harr; ',
                        '<div class="flow-node process" style="background:#ffc107;">Running</div> &rarr; ',
                        '<div class="flow-node end">Terminated</div>',
                        '<br><br>',
                        '<div style="text-align:center;">',
                            'Running &rarr; (I/O Request) &rarr; <div class="flow-node decision" style="display:inline-block;">Waiting</div> &rarr; (I/O Complete) &rarr; Ready',
                        '</div>',
                    '</div>',
                '</div>'
            );
        }
    });

    // 2. CPU Scheduling
    window.APP.register({
        subject: 'os',
        unit: 2,
        id: 'cpu-scheduling',
        title: 'CPU Scheduling',
        icon: '⏱️',
        description: 'Schedulers, Algorithms (FCFS, SJF, RR)',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit II</div>',
                    '<h1>⏱️ CPU Scheduling</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Types of Schedulers</h2>',
                    '<ul>',
                        '<li><strong>Long-term (Job Scheduler):</strong> Selects processes from the pool and loads them into memory. Controls the degree of multiprogramming.</li>',
                        '<li><strong>Short-term (CPU Scheduler):</strong> Selects a process from the ready queue and allocates the CPU to it. Runs very frequently.</li>',
                        '<li><strong>Medium-term:</strong> Swaps processes out of memory to disk to free up RAM, and swaps them back in later.</li>',
                    '</ul>',

                    '<h2>Preemptive vs Non-Preemptive</h2>',
                    '<p><strong>Non-preemptive:</strong> Once a process gets the CPU, it keeps it until it terminates or blocks for I/O (e.g., FCFS).</p>',
                    '<p><strong>Preemptive:</strong> The OS can forcefully take the CPU away from a running process (e.g., Round Robin, preemptive SJF/Priority).</p>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>CPU Scheduling Simulator</h3>',
                    '<p>Assume 3 processes arrive at time 0 with burst times: P1=4, P2=2, P3=1.</p>',
                    '<div class="controls-row">',
                        '<button class="btn btn-primary" onclick="simSched(\'fcfs\')">FCFS (First Come First Serve)</button>',
                        '<button class="btn btn-secondary" onclick="simSched(\'sjf\')">SJF (Shortest Job First)</button>',
                    '</div>',
                    '<div id="sched-result" class="result-display" style="font-family: monospace; min-height:100px;"></div>',
                '</div>'
            );
        },
        init() {
            window.simSched = function(algo) {
                const res = document.getElementById('sched-result');
                if (algo === 'fcfs') {
                    res.innerHTML = `<strong>FCFS Order: P1 -> P2 -> P3</strong>\n[0]---P1---[4]---P2---[6]---P3---[7]\nWaiting Times: P1=0, P2=4, P3=6 (Avg: 3.33)`;
                } else {
                    res.innerHTML = `<strong>SJF Order: P3 -> P2 -> P1</strong>\n[0]---P3---[1]---P2---[3]---P1---[7]\nWaiting Times: P3=0, P2=1, P1=3 (Avg: 1.33)\n<em>Notice how SJF drastically reduces average waiting time!</em>`;
                }
            };
        }
    });

    // 3. Deadlocks
    window.APP.register({
        subject: 'os',
        unit: 2,
        id: 'deadlocks',
        title: 'Deadlocks',
        icon: '🔒',
        description: 'Conditions, Prevention, Avoidance (Banker\'s)',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit II</div>',
                    '<h1>🔒 Deadlocks</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>What is a Deadlock?</h2>',
                    '<p>A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.</p>',
                    
                    '<h3>Coffman\'s 4 Necessary Conditions</h3>',
                    '<p>A deadlock ONLY occurs if ALL 4 conditions hold simultaneously:</p>',
                    '<ol>',
                        '<li><strong>Mutual Exclusion:</strong> At least one resource is held in a non-sharable mode.</li>',
                        '<li><strong>Hold and Wait:</strong> A process holds a resource while waiting for another.</li>',
                        '<li><strong>No Preemption:</strong> Resources cannot be forcefully taken away.</li>',
                        '<li><strong>Circular Wait:</strong> P1 waits for P2, P2 waits for P3... Pn waits for P1.</li>',
                    '</ol>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Handling Deadlocks</h2>',
                    '<ul>',
                        '<li><strong>Prevention:</strong> Ensure at least one of the 4 conditions cannot occur (e.g., force processes to request all resources at once to prevent Hold and Wait).</li>',
                        '<li><strong>Avoidance:</strong> Use algorithms (like Dijkstra\'s Banker\'s Algorithm) to dynamically check if granting a resource leads to an unsafe state.</li>',
                        '<li><strong>Detection & Recovery:</strong> Let deadlocks happen, detect them via Resource Allocation Graphs (RAG) or Wait-for Graphs, and recover by aborting processes or preempting resources.</li>',
                    '</ul>',
                '</div>'
            );
        }
    });

})();
