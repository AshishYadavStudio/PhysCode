/* ======================================================
   COMPPHYS - Core App (Router, Sidebar, Home, Utilities)
   ====================================================== */
(function () {
    'use strict';

    const APP = {
        topics: [],
        topicMap: {},
        currentSubject: 'physics', // Default subject

        /* --- Register a topic from content modules --- */
        register(topic) {
            this.topics.push(topic);
            this.topicMap[topic.id] = topic;
        },

        /* --- Initialize the application --- */
        init() {
            this.setupSubjectSelector();
            this.buildSidebar();
            this.setupRouter();
            this.setupSearch();
            this.setupSidebarToggle();
            this.route();
        },

        /* --- Setup Subject Selector --- */
        setupSubjectSelector() {
            const selector = document.getElementById('subject-selector');
            if (selector) {
                selector.addEventListener('change', (e) => {
                    this.currentSubject = e.target.value;
                    this.buildSidebar();
                    // Go to home when switching subjects to avoid 404s
                    window.location.hash = 'home';
                });
            }
        },

        /* --- Build sidebar navigation from registered topics --- */
        buildSidebar() {
            const nav = document.getElementById('nav-menu');
            const units = {};
            
            // Filter topics by current subject (default to 'physics' if no subject defined)
            const filteredTopics = this.topics.filter(t => {
                const subj = t.subject || 'physics';
                return subj === this.currentSubject;
            });

            filteredTopics.forEach(t => {
                const key = t.unit || 0;
                if (!units[key]) units[key] = [];
                units[key].push(t);
            });

            let html = `<a href="#home" class="nav-item active" data-id="home">🏠 Home</a>`;

            let unitLabels = {};
            if (this.currentSubject === 'physics') {
                unitLabels = {
                    1: 'Unit I – Fundamentals & C++',
                    2: 'Unit II – Control Flow & Data'
                };
            } else if (this.currentSubject === 'web') {
                unitLabels = {
                    1: 'Unit I – Intro & Internet Tech',
                    2: 'Unit II – PHP & Strings',
                    3: 'Unit III – Forms & Backend',
                    4: 'Unit IV – MySQL Database'
                };
            } else if (this.currentSubject === 'os') {
                unitLabels = {
                    1: 'Unit I – OS Concepts & Arch',
                    2: 'Unit II – Processes & Deadlocks',
                    3: 'Unit III – Memory Management',
                    4: 'Unit IV – I/O & Storage'
                };
            }

            for (const unit of Object.keys(units).sort()) {
                html += `<div class="nav-section">${unitLabels[unit] || 'Unit ' + unit}</div>`;
                units[unit].forEach(t => {
                    html += `<a href="#${t.id}" class="nav-item" data-id="${t.id}">${t.icon || '📄'} ${t.title}</a>`;
                });
            }

            nav.innerHTML = html;
            
            // Re-apply search filter if there's an active query
            const searchInput = document.getElementById('topic-search');
            if (searchInput && searchInput.value) {
                searchInput.dispatchEvent(new Event('input'));
            }
        },

        /* --- Hash-based router --- */
        setupRouter() {
            window.addEventListener('hashchange', () => this.route());
        },

        route() {
            const id = window.location.hash.slice(1) || 'home';
            this.navigate(id);
        },

        navigate(id) {
            const main = document.getElementById('main-content');

            // Update sidebar active state
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.toggle('active', item.dataset.id === id);
            });

            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');

            if (id === 'home') {
                main.innerHTML = this.renderGlobalHome();
                main.scrollTop = 0;
                return;
            }
            
            if (id === 'physics' || id === 'web' || id === 'os') {
                this.currentSubject = id;
                const selector = document.getElementById('subject-selector');
                if (selector) selector.value = id;
                this.buildSidebar();
                main.innerHTML = this.renderSubjectHome();
                main.scrollTop = 0;
                return;
            }

            const topic = this.topicMap[id];
            if (!topic) {
                main.innerHTML = `
                    <div class="topic-header"><h1>Coming Soon 🚧</h1>
                    <p class="topic-subtitle">This module is under active development.</p></div>`;
                return;
            }

            // Render content
            main.innerHTML = topic.content();

            // Init interactivity
            if (topic.init) {
                try { topic.init(); } catch (e) { console.error('Topic init error:', e); }
            }

            // Re-render math (KaTeX auto-render)
            if (window.renderMathInElement) {
                renderMathInElement(main, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '\\[', right: '\\]', display: true },
                        { left: '\\(', right: '\\)', display: false },
                        { left: '$', right: '$', display: false },
                    ],
                    throwOnError: false
                });
            }

            // Syntax-highlight code blocks
            if (window.hljs) {
                main.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightElement(block);
                });
            }

            // Init tabs in this section
            this.initTabs(main);

            main.scrollTop = 0;
            window.scrollTo(0, 0);
        },

        /* --- Search filter --- */
        setupSearch() {
            const input = document.getElementById('topic-search');
            if (!input) return;
            input.addEventListener('input', () => {
                const query = input.value.toLowerCase().trim();
                document.querySelectorAll('.nav-item').forEach(item => {
                    if (item.dataset.id === 'home') return;
                    const text = item.textContent.toLowerCase();
                    item.classList.toggle('hidden', query.length > 0 && !text.includes(query));
                });
            });
        },

        /* --- Mobile sidebar toggle --- */
        setupSidebarToggle() {
            const btn = document.getElementById('sidebar-toggle');
            const sidebar = document.getElementById('sidebar');
            if (!btn) return;
            btn.addEventListener('click', () => sidebar.classList.toggle('open'));
        },

        /* --- Tab system initialization --- */
        initTabs(container) {
            container.querySelectorAll('.tabs').forEach(tabGroup => {
                const buttons = tabGroup.querySelectorAll('.tab-btn');
                const contents = tabGroup.querySelectorAll('.tab-content');

                buttons.forEach(btn => {
                    btn.addEventListener('click', () => {
                        buttons.forEach(b => b.classList.remove('active'));
                        contents.forEach(c => c.classList.remove('active'));
                        btn.classList.add('active');
                        const target = tabGroup.querySelector(`.tab-content[data-tab="${btn.dataset.tab}"]`);
                        if (target) target.classList.add('active');
                    });
                });
            });
        },

        /* ===== GLOBAL HOME PAGE ===== */
        renderGlobalHome() {
            return `
                <div class="home-hero">
                    <h1 class="gradient-text">PhysCode Learning Platform</h1>
                    <p class="subtitle">Interactive educational modules for B.Sc. Semester 5</p>
                </div>
                <div class="cards-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); margin-top:2rem;">
                    <div class="topic-card glass-panel" data-gradient="purple" onclick="location.hash='physics'">
                        <span class="card-emoji">⚛</span>
                        <h3>Computational Physics</h3>
                        <p>Learn C++ basics and apply them to physics algorithms and equations.</p>
                    </div>
                    <div class="topic-card glass-panel" data-gradient="ocean" onclick="location.hash='web'">
                        <span class="card-emoji">🌐</span>
                        <h3>Internet Technologies</h3>
                        <p>Master Web Programming, PHP, HTML Forms, and MySQL Databases.</p>
                    </div>
                    <div class="topic-card glass-panel" data-gradient="sunset" onclick="location.hash='os'">
                        <span class="card-emoji">💻</span>
                        <h3>Operating Systems</h3>
                        <p>Explore Process Management, Deadlocks, Memory, and I/O Architecture.</p>
                    </div>
                </div>
            `;
        },

        /* ===== SUBJECT HOME PAGE ===== */
        renderSubjectHome() {
            const filteredTopics = this.topics.filter(t => (t.subject || 'physics') === this.currentSubject);
            const unitTopics = { 1: [], 2: [], 3: [], 4: [] };
            filteredTopics.forEach(t => {
                if (unitTopics[t.unit]) unitTopics[t.unit].push(t);
            });

            const gradients = ['purple', 'cool', 'warm', 'sunset', 'ocean'];

            function renderCards(topics) {
                if (!topics || topics.length === 0) return '<p style="color:var(--text-secondary)">No topics available yet.</p>';
                return topics.map((t, i) => `
                    <div class="topic-card glass-panel" data-gradient="${gradients[i % gradients.length]}" onclick="location.hash='${t.id}'">
                        <span class="card-emoji">${t.icon || '📄'}</span>
                        <h3>${t.title}</h3>
                        <p>${t.description || ''}</p>
                    </div>
                `).join('');
            }

            let subjectTitles = {
                'physics': 'Computational Physics',
                'web': 'Internet Technologies',
                'os': 'Operating Systems'
            };

            let html = `
                <div class="home-hero">
                    <div class="topic-breadcrumb"><a href="#home" style="color:var(--text-secondary);text-decoration:none;">&larr; Back to Global Home</a></div>
                    <h1 class="gradient-text">${subjectTitles[this.currentSubject]}</h1>
                    <p class="subtitle">Select a topic below to begin learning.</p>
                </div>
            `;
            
            let unitLabels = {};
            if (this.currentSubject === 'physics') {
                unitLabels = { 1: 'Fundamentals & C++', 2: 'Control Flow & Data' };
            } else if (this.currentSubject === 'web') {
                unitLabels = { 1: 'Intro & Internet Tech', 2: 'PHP & Strings', 3: 'Forms & Backend', 4: 'MySQL Database' };
            } else {
                unitLabels = { 1: 'OS Concepts & Arch', 2: 'Processes & Deadlocks', 3: 'Memory Management', 4: 'I/O & Storage' };
            }

            for (let i = 1; i <= 4; i++) {
                if (unitTopics[i] && unitTopics[i].length > 0) {
                    html += `
                        <div class="unit-section">
                            <h2><span class="unit-badge u${i}">Unit ${'I,II,III,IV'.split(',')[i-1]}</span> ${unitLabels[i]}</h2>
                            <div class="cards-grid">${renderCards(unitTopics[i])}</div>
                        </div>
                    `;
                }
            }
            return html;
        }
    };

    /* ===== UTILITY FUNCTIONS (available globally for content modules) ===== */

    /* Create a syntax-highlighted code block */
    APP.codeBlock = function (code, lang = 'cpp', title = '') {
        const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `
            <div class="code-wrapper">
                <div class="code-header">
                    <span>${title}</span>
                    <span class="lang-badge">${lang}</span>
                </div>
                <pre><code class="language-${lang}">${escaped}</code></pre>
            </div>`;
    };

    /* Create a code block with output */
    APP.codeWithOutput = function (code, output, lang = 'cpp', title = '') {
        return APP.codeBlock(code, lang, title) + `<div class="output-box">${output}</div>`;
    };

    /* Create a tabbed component */
    APP.createTabs = function (tabId, tabs) {
        const buttons = tabs.map((t, i) =>
            `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${tabId}-${i}">${t.label}</button>`
        ).join('');
        const contents = tabs.map((t, i) =>
            `<div class="tab-content ${i === 0 ? 'active' : ''}" data-tab="${tabId}-${i}">${t.content}</div>`
        ).join('');
        return `<div class="tabs"><div class="tab-buttons">${buttons}</div>${contents}</div>`;
    };

    /* Expose globally */
    window.APP = APP;

    /* Initialize after all scripts have loaded */
    document.addEventListener('DOMContentLoaded', () => {
        // Small delay so content module scripts register their topics first
        setTimeout(() => APP.init(), 80);
    });

})();
