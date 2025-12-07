/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LUNAR AURORA - MAIN ENTRY                           ║
 * ║                                                                           ║
 * ║  Exports all modules and auto-initializes components.                    ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

import LunarThemes from './theme-switcher.js';
import Tabs from './js/tabs.js';
import Accordion from './js/accordion.js';
import Modal from './js/modal.js';
import Dismissible from './js/dismissible.js';

const LunarAurora = {
    Themes: LunarThemes,
    Tabs,
    Accordion,
    Modal,
    Dismissible,

    init() {
        LunarThemes.init();
        Tabs.initAll();
        Accordion.initAll();
        Modal.initAll();
        Dismissible.init();
    }
};

// Auto-initialize if not imported as module (browser script tag)
if (typeof window !== 'undefined') {
    window.LunarAurora = LunarAurora;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => LunarAurora.init());
    } else {
        LunarAurora.init();
    }
}

export default LunarAurora;
