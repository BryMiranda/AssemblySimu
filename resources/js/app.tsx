/// <reference types="vite/client" />
import './bootstrap';
import '../css/app.css';
import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from "react-dom/client";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        router.on('navigate', (event: any) => {
            if (event.detail.page.url === '/') {
                window.scrollTo(0, 0);
            }
        });

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
