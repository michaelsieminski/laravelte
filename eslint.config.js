import prettier from 'eslint-config-prettier';
import svelteConfig from '@sveltejs/eslint-config';

export default [
    ...svelteConfig,
    {
        ignores: ['vendor', 'node_modules', 'public', 'bootstrap/ssr', 'tailwind.config.js', 'resources/js/components/ui/*'],
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    prettier,
]
