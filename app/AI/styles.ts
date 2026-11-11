// Maps `styles.foo` to the plain, prefixed class `ai-foo` defined in ai.css.
// A prefixed global stylesheet is used (rather than a CSS module) so the page
// behaves the same however the host project's CSS pipeline is configured, and
// so nothing here can collide with the rest of the site.
export const styles: Record<string, string> = new Proxy(
  {},
  { get: (_target, key) => (typeof key === "string" ? `ai-${key}` : undefined) },
) as Record<string, string>;
