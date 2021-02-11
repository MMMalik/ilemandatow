/**
 * Provide colors as Tachyons skins except for charts, where colors must be provided as hex values.
 */
export interface Theme {
  /**
   * Primary color.
   */
  primary: string;
  /**
   * Primary background color.
   */
  bgPrimary: string;
  /**
   * Secondary background color.
   */
  bgSecondary: string;
  /**
   * Tertiary background color.
   */
  bgTertiary: string;
  /**
   * Primary text color.
   */
  textPrimary: string;
  /**
   * Text color on primary color.
   */
  textOnPrimary: string;
  /**
   * Text color on tertiary background color.
   */
  textOnBgTertiary: string;
  /**
   * Muted text color.
   */
  textMuted: string;
  /**
   * Color for disabled text.
   */
  textDisabled: string;
  /**
   * Color of dividers between texts, e.g. horizontal lines.
   */
  textDivider: string;
  /**
   * Chart colors.
   */
  chart: {
    /**
     * Background fill color as hex value.
     */
    bgFill: string;
    /**
     * Muted color for charts as hex value.
     */
    muted: string;
  };
}
