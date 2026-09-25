// В vitest.config.ts включён globals: true, но tsc --noEmit (CI step "TypeScript check")
// не знает об этих глобалах без подключения типов. Подключаем их здесь,
// чтобы describe/it/expect/beforeEach были видны во всех *.test.tsx.
/// <reference types="vitest/globals" />
