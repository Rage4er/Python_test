/**
 * Централизованный логгер для отладки операций редактора.
 * В DEV пишет в консоль с префиксом [scope]; в prod — молчит
 * (записи попадают только во внутренний буфер, доступный через window.__LOGGER__).
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: number;
  level: LogLevel;
  scope: string;
  message: string;
  data?: unknown;
}

const MAX_BUFFER = 500;
const buffer: LogEntry[] = [];

type Listener = (entry: LogEntry) => void;
const listeners = new Set<Listener>();

const isDev = import.meta.env.DEV;

function log(level: LogLevel, scope: string, message: string, data?: unknown) {
  const entry: LogEntry = { timestamp: Date.now(), level, scope, message, data };

  buffer.push(entry);
  if (buffer.length > MAX_BUFFER) buffer.shift();
  listeners.forEach((l) => l(entry));

  if (!isDev) return;

  const prefix = `[${scope}]`;
  const args: unknown[] = [prefix, message];
  if (data !== undefined) args.push(data);

  switch (level) {
    case 'debug': console.debug(...args); break;
    case 'info':  console.info(...args);  break;
    case 'warn':  console.warn(...args);  break;
    case 'error': console.error(...args); break;
  }
}

export const logger = {
  debug: (scope: string, message: string, data?: unknown) => log('debug', scope, message, data),
  info:  (scope: string, message: string, data?: unknown) => log('info', scope, message, data),
  warn:  (scope: string, message: string, data?: unknown) => log('warn', scope, message, data),
  error: (scope: string, message: string, data?: unknown) => log('error', scope, message, data),
  getBuffer: () => [...buffer],
  clear: () => { buffer.length = 0; },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => { listeners.delete(l); };
  },
};

if (isDev && typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).__LOGGER__ = logger;
}
