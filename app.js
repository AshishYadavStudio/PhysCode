/* ======================================================
   COMPPHYS - Core App (Router, Sidebar, Home, Utilities)
   ====================================================== */
(function () {
    'use strict';

    const APP = {
        topics: [],
        topicMap: {},

        /* --- Register a topic from content modules --- */
        register(topic) {
            this.topics.push(topic);
            this.topicMap[topic.id] = topic;
        },

        /* --- Initialize the application --- */
        init() {
            this.buildSidebar();
            this.setupRouter();
            this.setupSearch();
            this.setupSidebarToggle();
            this.route();
        },

        /* --- Build sidebar navigation from registered topics --- */
        buildSidebar() {
            const nav = document.getElementById('nav-menu');
            const units = {};
            this.topics.forEach(t => {
                const key = t.unit || 0;
                if (!units[key]) units[key] = [];
                units[key].push(t);
            });

            let html = `<a href="#home" class="nav-item active" data-id="home">🏠 Home</a>`;

            const unitLabels = {
                1: 'Unit I – Fundamentals & C++',
                2: 'Unit II – Control Flow & Data'
            };

            for (const unit of Object.keys(units).sort()) {
                html += `<div class="nav-section">${unitLabels[unit] || 'Unit ' + unit}</div>`;
                units[unit].forEach(t => {
                    html += `<a href="#${t.id}" class="nav-item" data-id="${t.id}">${t.icon || '📄'} ${t.title}</a>`;
                });
            }

            nav.innerHTML = html;
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
                main.innerHTML = this.renderHome();
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

        /* ===== HOME PAGE ===== */
        renderHome() {
            const unitTopics = { 1: [], 2: [] };
            this.topics.forEach(t => {
                if (unitTopics[t.unit]) unitTopics[t.unit].push(t);
            });

            const gradients = ['purple', 'cool', 'warm', 'sunset', 'ocean'];

            function renderCards(topics) {
                return topics.map((t, i) => `
                    <div class="topic-card glass-panel" data-gradient="${gradients[i % gradients.length]}" onclick="location.hash='${t.id}'">
                        <span class="card-emoji">${t.icon || '📄'}</span>
                        <h3>${t.title}</h3>
                        <p>${t.description || ''}</p>
                    </div>
                `).join('');
            }

            return `
                <div class="home-hero">
                    <h1 class="gradient-text">Computational Physics</h1>
                    <p class="subtitle">Interactive lessons, visualizations, and hands-on examples for B.Sc. Semester 5</p>
                    <div class="home-stats">
                        <div class="home-stat">
                            <div class="stat-number gradient-text">${this.topics.length}</div>
                            <div class="stat-label">Topics</div>
                        </div>
                        <div class="home-stat">
                            <div class="stat-number gradient-text">2</div>
                            <div class="stat-label">Units</div>
                        </div>
                        <div class="home-stat">
                            <div class="stat-number gradient-text">50+</div>
                            <div class="stat-label">Examples</div>
                        </div>
                    </div>
                </div>

                <div class="unit-section">
                    <h2><span class="unit-badge u1">Unit I</span> Fundamentals & C++ Programming</h2>
                    <div class="cards-grid">${renderCards(unitTopics[1])}</div>
                </div>

                <div class="unit-section">
                    <h2><span class="unit-badge u2">Unit II</span> Control Flow, Arrays & Programs</h2>
                    <div class="cards-grid">${renderCards(unitTopics[2])}</div>
                </div>
            `;
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
