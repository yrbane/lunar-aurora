/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                         LUNAR AURORA - DISMISSIBLE                          ║
 * ║                                                                           ║
 * ║  Logic for dismissing alerts, toasts, etc.                               ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

export default class Dismissible {
    static init() {
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-dismiss]');
            if (!trigger) return;

            const targetSelector = trigger.getAttribute('data-dismiss');
            const target = targetSelector ? 
                document.querySelector(targetSelector) : 
                trigger.closest('.la-alert, .la-toast');

            if (target) {
                target.style.opacity = '0';
                target.style.transform = 'scale(0.9)';
                target.style.transition = 'opacity 0.2s, transform 0.2s';
                
                setTimeout(() => {
                    target.remove();
                }, 200);
            }
        });
    }
}
