import { renderWithTheme } from '../../../tests/render-with-theme';
import FilledIconButton from '../filled-icon-button/filled-icon-button';
import AppBar from './app-bar';

describe('AppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithTheme(<AppBar />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with back button', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { baseElement, container } = renderWithTheme(
      <AppBar
        onBackClick={() => {
          return;
        }}
      />
    );
    expect(container.querySelector('[aria-label="back"]')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully without back button', () => {
    const { baseElement, container } = renderWithTheme(<AppBar onBackClick={undefined} />);
    console.log(FilledIconButton.name);
    expect(container.querySelector('[aria-label="back"]')).toBeFalsy();
    expect(baseElement).toBeTruthy();
  });
});
