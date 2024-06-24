export function parseContent(text: string) {
  return text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
}