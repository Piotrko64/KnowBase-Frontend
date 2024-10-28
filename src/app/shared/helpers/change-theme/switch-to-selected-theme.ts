import { ThemeOptions } from 'app/shared/types/enums/ThemeOptions.enum';

export function switchToSelectedMode(theme: ThemeOptions) {
  const htmlSelector = document.querySelector('html');

  if (
    theme === ThemeOptions.DARK &&
    !htmlSelector?.classList.contains('dark')
  ) {
    htmlSelector?.classList.add('dark');
  } else if (theme === ThemeOptions.WHITE) {
    htmlSelector?.classList.remove('dark');
  }
}
