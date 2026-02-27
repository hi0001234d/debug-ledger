export type ContextLevel = "minimal" | "normal" | "deep";
 
/** 
  POLICY = prefix based configuration
 * NO filenames here
 * ONLY category prefixes
 */
 
export const CONTEXT_POLICY: Record<ContextLevel, string[]> = {
  minimal: [
    "constraints-",
  ],
 
  normal: [
    "constraints-",
    "regressions-",
  ],
 
  deep: [
    "constraints-",
    "regressions-",
    "incidents-",
    "rejected_fixes-",
  ],
};
 
export const DEFAULT_CONTEXT_LEVEL: ContextLevel = "normal";
 
export function isValidContextLevel(level: string): level is ContextLevel {
  return level === "minimal" || level === "normal" || level === "deep";
}