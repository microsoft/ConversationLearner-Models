export class KeyGen {
  public static MakeKey(address: string) {
    return this.HashCode(address).toString()
  }

  private static HashCode(text: string): number {
    var hash = 0,
      i,
      chr
    if (text.length === 0) return hash
    for (i = 0; i < text.length; i++) {
      chr = text.charCodeAt(i)
      hash = (hash << 5) - hash + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  }
}
