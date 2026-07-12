/* ======================================================
   OS UNIT 4 – I/O Systems and Device Management
   Topics: io-systems, disk-scheduling, raid
   ====================================================== */
(function () {
    'use strict';

    function concat(...args) { return args.join(''); }

    // 1. I/O Systems
    window.APP.register({
        subject: 'os',
        unit: 4,
        id: 'io-systems',
        title: 'I/O Systems Management',
        icon: '🖨️',
        description: 'Hardware, Interrupts, Buffering, Spooling',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit IV</div>',
                    '<h1>🖨️ I/O Systems & Management</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>I/O Hardware & Communication</h2>',
                    '<p>The OS manages the flow of data between the computer and external devices (keyboard, mouse, printer, disk drives).</p>',
                    '<ul>',
                        '<li><strong>Polling:</strong> The CPU repeatedly checks the status of an I/O device to see if it is ready. Wastes CPU cycles.</li>',
                        '<li><strong>Interrupt Handling:</strong> The device sends a hardware signal (interrupt) to the CPU when it needs attention. Much more efficient than polling.</li>',
                    '</ul>',
                    
                    '<h2>Software Concepts</h2>',
                    '<ul>',
                        '<li><strong>Buffering:</strong> Storing data temporarily while it is being moved between devices (copes with speed mismatches).</li>',
                        '<li><strong>Spooling (Simultaneous Peripheral Operations On-Line):</strong> A buffer that holds output for a device, such as a printer, that cannot accept interleaved data streams.</li>',
                        '<li><strong>Caching:</strong> Keeping a copy of data in a faster memory system to speed up subsequent accesses.</li>',
                    '</ul>',
                '</div>'
            );
        }
    });

    // 2. Disk Scheduling
    window.APP.register({
        subject: 'os',
        unit: 4,
        id: 'disk-scheduling',
        title: 'Disk Scheduling',
        icon: '💿',
        description: 'Algorithms (FCFS, SSTF, SCAN, LOOK)',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit IV</div>',
                    '<h1>💿 Disk Scheduling Algorithms</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>Why Disk Scheduling?</h2>',
                    '<p>For HDD (Hard Disk Drives), reading/writing data requires moving the disk arm/head to the correct cylinder (seek time). Disk scheduling algorithms minimize the total head movement.</p>',
                    
                    '<h3>Algorithms</h3>',
                    '<ul>',
                        '<li><strong>FCFS (First Come First Serve):</strong> Processes requests in the exact order they arrive. Simple but often causes erratic head movement.</li>',
                        '<li><strong>SSTF (Shortest Seek Time First):</strong> Selects the request closest to the current head position. Better performance, but can cause starvation.</li>',
                        '<li><strong>SCAN (Elevator Algorithm):</strong> Head moves continuously from one end of the disk to the other, servicing requests along the way.</li>',
                        '<li><strong>C-SCAN (Circular SCAN):</strong> Like SCAN, but when it reaches one end, it immediately returns to the beginning without servicing requests on the return trip.</li>',
                        '<li><strong>LOOK & C-LOOK:</strong> Similar to SCAN/C-SCAN, but the head only goes as far as the last request in that direction, rather than the absolute edge of the disk.</li>',
                    '</ul>',
                '</div>',

                '<div class="interactive-area">',
                    '<h3>Disk Simulator</h3>',
                    '<p>Head at: <strong>50</strong>. Requests: <strong>82, 170, 43, 140, 24, 16, 190</strong></p>',
                    '<div class="controls-row">',
                        '<button class="btn btn-primary" onclick="simDisk(\'fcfs\')">Simulate FCFS</button>',
                        '<button class="btn btn-secondary" onclick="simDisk(\'sstf\')">Simulate SSTF</button>',
                    '</div>',
                    '<div id="disk-result" class="result-display" style="font-family: monospace; min-height:80px;"></div>',
                '</div>'
            );
        },
        init() {
            window.simDisk = function(algo) {
                const res = document.getElementById('disk-result');
                if (algo === 'fcfs') {
                    res.innerHTML = `<strong>FCFS Path:</strong> 50 -> 82 -> 170 -> 43 -> 140 -> 24 -> 16 -> 190<br>Total Head Movement: 642 cylinders`;
                } else {
                    res.innerHTML = `<strong>SSTF Path:</strong> 50 -> 43 -> 24 -> 16 -> 82 -> 140 -> 170 -> 190<br>Total Head Movement: 208 cylinders <em>(Massive improvement!)</em>`;
                }
            };
        }
    });

    // 3. RAID
    window.APP.register({
        subject: 'os',
        unit: 4,
        id: 'raid',
        title: 'RAID Levels',
        icon: '🗄️',
        description: 'Redundant Array of Independent Disks',

        content() {
            return concat(
                '<div class="topic-header">',
                    '<div class="topic-breadcrumb"><span>Operating Systems</span> &rsaquo; Unit IV</div>',
                    '<h1>🗄️ RAID Architecture</h1>',
                '</div>',

                '<div class="theory-section">',
                    '<h2>What is RAID?</h2>',
                    '<p>RAID (Redundant Array of Independent Disks) is a data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both.</p>',
                    
                    '<table class="styled-table">',
                        '<thead><tr><th>Level</th><th>Name</th><th>Pros</th><th>Cons</th></tr></thead>',
                        '<tbody>',
                            '<tr><td><strong>RAID 0</strong></td><td>Striping</td><td>High performance, full capacity</td><td>No fault tolerance. If 1 drive fails, all data is lost.</td></tr>',
                            '<tr><td><strong>RAID 1</strong></td><td>Mirroring</td><td>Excellent fault tolerance. Read speeds are fast.</td><td>50% capacity loss (costly).</td></tr>',
                            '<tr><td><strong>RAID 5</strong></td><td>Striping with Parity</td><td>Good performance, fault tolerance for 1 drive loss.</td><td>Slower write speeds due to parity calculation.</td></tr>',
                            '<tr><td><strong>RAID 10</strong></td><td>Mirroring + Striping</td><td>Very fast, very fault tolerant.</td><td>Requires at least 4 drives, 50% capacity loss.</td></tr>',
                        '</tbody>',
                    '</table>',
                '</div>'
            );
        }
    });

})();
