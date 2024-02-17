import React from 'react';
import { render } from '@testing-library/react';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  let matchMediaMock;

  beforeEach(() => {
    matchMediaMock = jest.fn();
    window.matchMedia = matchMediaMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return false initially if media query does not match', () => {
    matchMediaMock.mockReturnValueOnce({ matches: false });
    const TestComponent = () => {
      const matches = useMediaQuery('(min-width: 768px)');
      return <div>{matches ? 'true' : 'false'}</div>;
    };
    const { container } = render(<TestComponent />);
    expect(container.textContent).toBe('false');
  });

  // it('should return true initially if media query matches', () => {
  //   matchMediaMock.mockReturnValueOnce({ matches: true });
  //   const TestComponent = () => {
  //     const matches = useMediaQuery('(min-width: 768px)');
  //     return <div>{matches ? 'true' : 'false'}</div>;
  //   };
  //   const { container } = render(<TestComponent />);
  //   expect(container.textContent).toBe('true');
  // });

  it('should remove event listener on unmount', () => {
    matchMediaMock.mockReturnValueOnce({ matches: false });
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const TestComponent = () => {
      const matches = useMediaQuery('(min-width: 768px)');
      return <div>{matches ? 'true' : 'false'}</div>;
    };
    const { unmount } = render(<TestComponent />);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});