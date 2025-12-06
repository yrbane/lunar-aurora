/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                    LUNAR AURORA - THEME SWITCHER                          ║
 * ║                                                                           ║
 * ║  JavaScript module for theme switching functionality.                     ║
 * ║  Supports 20+ themes with light/dark variants.                           ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

const LunarThemes = {
    // Theme definitions with metadata
    themes: {
        // Base themes
        'dark': { name: 'Dark', group: 'base', variant: 'dark' },
        'light': { name: 'Light', group: 'base', variant: 'light' },

        // Color themes
        'cyberpunk': { name: 'Cyberpunk', group: 'colors', variant: 'dark' },
        'ocean': { name: 'Ocean', group: 'colors', variant: 'dark' },
        'forest': { name: 'Forest', group: 'colors', variant: 'dark' },
        'sunset': { name: 'Sunset', group: 'colors', variant: 'dark' },
        'aurora': { name: 'Aurora', group: 'colors', variant: 'dark' },
        'lavender': { name: 'Lavender', group: 'colors', variant: 'light' },
        'mono': { name: 'Mono', group: 'colors', variant: 'light' },
        'mono-dark': { name: 'Mono', group: 'colors', variant: 'dark' },

        // Retro/Arcade themes
        '8bits': { name: '8-Bits', group: 'retro', variant: 'light' },
        '8bits-dark': { name: '8-Bits', group: 'retro', variant: 'dark' },
        'bubble': { name: 'Bubble Bobble', group: 'retro', variant: 'light' },
        'bubble-dark': { name: 'Bubble Bobble', group: 'retro', variant: 'dark' },
        'galaxian': { name: 'Galaxian', group: 'retro', variant: 'dark' },
        'galaxian-light': { name: 'Galaxian', group: 'retro', variant: 'light' },
        'mario': { name: 'Mario', group: 'retro', variant: 'light' },
        'mario-dark': { name: 'Mario', group: 'retro', variant: 'dark' },

        // Geek themes
        'web90': { name: 'Web 90s', group: 'geek', variant: 'light' },
        'web90-dark': { name: 'Web 90s', group: 'geek', variant: 'dark' },
        'geek': { name: 'Geek', group: 'geek', variant: 'light' },
        'geek-dark': { name: 'Geek', group: 'geek', variant: 'dark' },
        'hacker': { name: 'Hacker', group: 'geek', variant: 'dark' },
        'hacker-light': { name: 'Hacker', group: 'geek', variant: 'light' },
        'eco': { name: 'Eco', group: 'geek', variant: 'light' },
        'eco-dark': { name: 'Eco', group: 'geek', variant: 'dark' },

        // System themes
        'win95': { name: 'Windows 95', group: 'system', variant: 'light' },
        'win95-dark': { name: 'Windows 95', group: 'system', variant: 'dark' },
        'bsod': { name: 'BSOD', group: 'system', variant: 'dark' },
        'bsod-light': { name: 'BSOD', group: 'system', variant: 'light' },
    },

    // Group labels
    groups: {
        'base': 'Base',
        'colors': 'Couleurs',
        'retro': 'Rétro / Arcade',
        'geek': 'Geek',
        'system': 'Système'
    },

    // Storage key
    storageKey: 'lunar-theme',

    /**
     * Initialize the theme switcher
     */
    init() {
        // Load saved theme or use default
        const savedTheme = localStorage.getItem(this.storageKey);
        if (savedTheme && this.themes[savedTheme]) {
            this.setTheme(savedTheme, false);
        }

        // Initialize all switcher instances on the page
        document.querySelectorAll('.la-theme-switcher').forEach(switcher => {
            this.initSwitcher(switcher);
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.la-theme-switcher')) {
                document.querySelectorAll('.la-theme-dropdown.is-open').forEach(dropdown => {
                    dropdown.classList.remove('is-open');
                });
            }
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.la-theme-dropdown.is-open').forEach(dropdown => {
                    dropdown.classList.remove('is-open');
                });
            }
        });
    },

    /**
     * Initialize a single theme switcher instance
     */
    initSwitcher(container) {
        const trigger = container.querySelector('.la-theme-trigger');
        const dropdown = container.querySelector('.la-theme-dropdown');

        if (!trigger || !dropdown) {
            console.warn('Theme switcher missing trigger or dropdown');
            return;
        }

        // Toggle dropdown on trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('is-open');

            // Close all other dropdowns
            document.querySelectorAll('.la-theme-dropdown.is-open').forEach(d => {
                if (d !== dropdown) d.classList.remove('is-open');
            });

            dropdown.classList.toggle('is-open', !isOpen);
        });

        // Handle theme option clicks
        dropdown.querySelectorAll('.la-theme-option').forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                if (theme) {
                    this.setTheme(theme);
                    dropdown.classList.remove('is-open');
                }
            });
        });

        // Update active state
        this.updateActiveState(container);
    },

    /**
     * Set the current theme
     */
    setTheme(themeName, save = true) {
        if (!this.themes[themeName]) {
            console.warn(`Unknown theme: ${themeName}`);
            return;
        }

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', themeName);

        // Save to localStorage
        if (save) {
            localStorage.setItem(this.storageKey, themeName);
        }

        // Update all switcher instances
        document.querySelectorAll('.la-theme-switcher').forEach(switcher => {
            this.updateActiveState(switcher);
            this.updateTriggerLabel(switcher, themeName);
        });

        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('themechange', {
            detail: {
                theme: themeName,
                ...this.themes[themeName]
            }
        }));
    },

    /**
     * Get the current theme
     */
    getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    },

    /**
     * Update active state in dropdown
     */
    updateActiveState(container) {
        const currentTheme = this.getTheme();
        container.querySelectorAll('.la-theme-option').forEach(option => {
            const isActive = option.dataset.theme === currentTheme;
            option.classList.toggle('is-active', isActive);
        });
    },

    /**
     * Update trigger button label
     */
    updateTriggerLabel(container, themeName) {
        const trigger = container.querySelector('.la-theme-trigger');
        const labelSpan = trigger?.querySelector('.la-theme-current');
        if (labelSpan && this.themes[themeName]) {
            labelSpan.textContent = this.themes[themeName].name;
        }
    },

    /**
     * Generate the dropdown HTML
     */
    generateDropdownHTML() {
        const groupedThemes = {};

        // Group themes
        Object.entries(this.themes).forEach(([key, theme]) => {
            if (!groupedThemes[theme.group]) {
                groupedThemes[theme.group] = [];
            }
            groupedThemes[theme.group].push({ key, ...theme });
        });

        let html = '';

        Object.entries(this.groups).forEach(([groupKey, groupName]) => {
            if (groupedThemes[groupKey]) {
                html += `
                    <div class="la-theme-group">
                        <div class="la-theme-group-title">${groupName}</div>
                        ${groupedThemes[groupKey].map(theme => `
                            <button class="la-theme-option" data-theme="${theme.key}">
                                <span class="la-theme-preview"></span>
                                <span class="la-theme-name">${theme.name}</span>
                                <span class="la-theme-variant">${theme.variant === 'dark' ? 'Sombre' : 'Clair'}</span>
                                <span class="la-icon sm la-theme-check">check</span>
                            </button>
                        `).join('')}
                    </div>
                `;
            }
        });

        return html;
    },

    /**
     * Create a complete theme switcher element
     */
    createSwitcher() {
        const currentTheme = this.getTheme();
        const currentThemeData = this.themes[currentTheme] || this.themes['dark'];

        const switcher = document.createElement('div');
        switcher.className = 'la-theme-switcher';
        switcher.innerHTML = `
            <button class="la-theme-trigger" aria-haspopup="true" aria-expanded="false">
                <span class="la-icon">palette</span>
                <span class="la-theme-current">${currentThemeData.name}</span>
                <span class="la-icon sm">expand_more</span>
            </button>
            <div class="la-theme-dropdown">
                ${this.generateDropdownHTML()}
            </div>
        `;

        return switcher;
    },

    /**
     * Auto-inject theme switcher into elements with data-lunar-theme-switcher
     */
    autoInject() {
        document.querySelectorAll('[data-lunar-theme-switcher]').forEach(container => {
            if (!container.querySelector('.la-theme-switcher')) {
                container.appendChild(this.createSwitcher());
            }
        });
        this.init();
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LunarThemes.init());
} else {
    LunarThemes.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LunarThemes;
}
