/**
 * Generate `className` from base class name and modifiers, based on MindBEMing.
 * @example mapClassModifiers('a-button', 'primary') => 'a-button a-button--primary'
 * @example mapClassModifiers('a-button', ['primary', 'inline']) => 'a-button a-button--primary a-button--inline'
 * @ref https://en.bem.info/methodology/naming-convention/#naming-rules
 */
export function mapClassModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map(m => `--${m}`)
    .reduce<string>(
      /* eslint-disable no-return-assign */
      // eslint-disable-next-line no-param-reassign
      (classNames, m) => (classNames += ` ${baseClassName}${m}`),
      baseClassName,
    );
}
