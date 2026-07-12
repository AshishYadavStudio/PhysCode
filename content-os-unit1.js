/* ======================================================
   OS UNIT 1 – Introduction to Operating Systems
   Topics: os-intro, os-types, os-structure, virtualization
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. OS Intro & Functions
    window.APP.register({
        subject: 'os',
        unit: 1,
        id: 'os-intro',
        title: 'Introduction & Functions',
        icon: '🖥️',
        description: 'Needs, services, and functions of an OS',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit I</div>',
                    '<h1>🖥️ Introduction to Operating Systems</h1>',
                    '<p class="topic-subtitle">The software that manages computer hardware and provides common services for computer programs.</p>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>What is an OS?</h2>',
                    '<p>An Operating System (OS) is system software that acts as an intermediary between users and the computer hardware. Its primary goals are to make the computer system convenient to use and to use the hardware efficiently.</p>',
                    
                    '<h3>Functions of an Operating System</h3>',
                    '<ul>',
                        '<li><strong>Process Management:</strong> Creating, scheduling, and terminating processes.</li>',
                        '<li><strong>Memory Management:</strong> Keeping track of primary memory and allocating/deallocating it.</li>',
                        '<li><strong>File Management:</strong> Managing files, directories, access control, and storage.</li>',
                        '<li><strong>Device Management:</strong> Managing device drivers and I/O operations.</li>',
                        '<li><strong>Security & Protection:</strong> Preventing unauthorized access to data and resources.</li>',
                    '</ul>',
                '</div>',
                
                '<div class="diagram-container">',
                    '<p style="margin-bottom:1rem; color: var(--text-muted); font-size:0.85rem;">Hardware - OS - User Relationship</p>',
                    '<div class="flow-node process">User / Applications</div>',
                    '<span class="flow-arrow">&uarr;&darr;</span>',
                    '<div class="flow-node decision">Operating System</div>',
                    '<span class="flow-arrow">&uarr;&darr;</span>',
                    '<div class="flow-node end">Hardware (CPU, RAM, Disk)</div>',
                '</div>'
            );
        }
    });

    // 2. Types of OS
    window.APP.register({
        subject: 'os',
        unit: 1,
        id: 'os-types',
        title: 'Types of Operating Systems',
        icon: '🔀',
        description: 'Batch, Multiprogramming, RTOS, Distributed',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit I</div>',
                    '<h1>🔀 Types of Operating Systems</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<table class="styled-table">',
                        '<thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><strong>Batch OS</strong></td><td>Users do not interact directly. Jobs with similar needs are batched together and run as a group.</td><td>Mainframes (IBM OS/360)</td></tr>',
                            '<tr><td><strong>Multiprogramming</strong></td><td>Keeps multiple programs in memory. If one waits for I/O, CPU switches to another.</td><td>Windows, Linux</td></tr>',
                            '<tr><td><strong>Multiprocessing</strong></td><td>Systems with more than one CPU sharing the same memory and bus.</td><td>Modern Desktop/Server OS</td></tr>',
                            '<tr><td><strong>Real-Time (RTOS)</strong></td><td>Strict timing constraints. Processing must happen within a defined time limit.</td><td>Air traffic control, Pacemakers</td></tr>',
                        '</tbody>',
                    '</table>',
                    
                    '<h3>Distributed Systems</h3>',
                    '<p>A distributed OS manages a group of independent computers and makes them appear to be a single computer.</p>',
                    '<ul>',
                        '<li><strong>Client-Server:</strong> Server provides resources; clients request them.</li>',
                        '<li><strong>Peer-to-Peer (P2P):</strong> All nodes have equal status and share resources directly.</li>',
                    '</ul>',
                '</div>'
            );
        }
    });

    // 3. OS Structure
    window.APP.register({
        subject: 'os',
        unit: 1,
        id: 'os-structure',
        title: 'OS Structure',
        icon: '🏗️',
        description: 'Monolithic, Layered, Microkernel, Hybrid',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit I</div>',
                    '<h1>🏗️ Operating System Structure</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Kernel Architecture</h2>',
                    '<p>The kernel is the core component of an OS. Different operating systems structure their kernels differently.</p>',
                    '<ul>',
                        '<li><strong>Monolithic:</strong> The entire OS runs in kernel space. High performance but large and difficult to maintain (e.g., Linux, MS-DOS).</li>',
                        '<li><strong>Microkernel:</strong> Only absolutely essential core functions (IPC, basic scheduling) run in kernel space. Other services (file systems, drivers) run in user space. Slower due to IPC overhead but highly stable (e.g., MINIX, QNX).</li>',
                        '<li><strong>Layered:</strong> OS is divided into layers, each built on top of lower layers.</li>',
                        '<li><strong>Hybrid:</strong> Combines aspects of Monolithic and Microkernel (e.g., macOS, Windows NT).</li>',
                    '</ul>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Architecture Visualizer</h3>',
                    '<p>Click to see how a system call travels in different architectures.</p>',
                    '<div class="controls-row">',
                        '<button class="btn btn-primary" onclick="simArch(\'mono\')">Monolithic OS</button>',
                        '<button class="btn btn-secondary" onclick="simArch(\'micro\')">Microkernel OS</button>',
                    '</div>',
                    '<div id="arch-result" class="result-display" style="font-family: monospace; min-height:100px; white-space:pre-wrap;">Select an architecture.</div>',
                '</div>'
            );
        },
        init() {
            window.simArch = function(type) {
                const res = document.getElementById('arch-result');
                if (type === 'mono') {
                    res.innerHTML = `<strong>Monolithic Execution (Fast):</strong>\nUser App -> System Call -> [ Kernel Space: VFS -> Ext4 -> Disk Driver ] -> Hardware\n<em>Result: 1 Context Switch. Fast, but if Disk Driver crashes, whole OS crashes.</em>`;
                } else {
                    res.innerHTML = `<strong>Microkernel Execution (Stable):</strong>\nUser App -> System Call -> [ Microkernel IPC ] -> [ User Space: File Server ] -> [ Microkernel IPC ] -> [ User Space: Disk Driver ] -> Hardware\n<em>Result: Multiple Context Switches (Slower). If Disk Driver crashes, OS survives.</em>`;
                }
            };
        }
    });

    // 4. Virtualization
    window.APP.register({
        subject: 'os',
        unit: 1,
        id: 'virtualization',
        title: 'Virtualization',
        icon: '☁️',
        description: 'Concept and purpose of virtualization',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit I</div>',
                    '<h1>☁️ Virtualization</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Concept and Purpose</h2>',
                    '<p>Virtualization is the process of creating a software-based (virtual) representation of something rather than a physical one (e.g., virtual computer hardware, storage, networks).</p>',
                    '<p>A <strong>Hypervisor</strong> (Virtual Machine Monitor) is the software that creates and runs virtual machines (VMs). It isolates the VMs from each other and allocates physical resources to them.</p>',
                    
                    '<h3>Why use Virtualization?</h3>',
                    '<ul>',
                        '<li><strong>Resource Efficiency:</strong> Run multiple OS environments on a single physical server (Server Consolidation).</li>',
                        '<li><strong>Isolation & Security:</strong> If one VM is compromised, others remain safe.</li>',
                        '<li><strong>Testing:</strong> Safely test dangerous software without risking the host OS.</li>',
                    '</ul>',
                '</div>'
            );
        }
    });

})();
