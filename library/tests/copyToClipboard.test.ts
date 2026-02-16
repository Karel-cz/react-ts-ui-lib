import { copyToClipboard } from '../utilities/copyToClipboard';

describe('copyToClipboard', () => {
  let clipboardWriteTextMock: jest.Mock;

  beforeEach(() => {
    clipboardWriteTextMock = jest.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });
  });

  it('should copy text to clipboard using modern API', async () => {
    const text = 'Hello World';
    const result = await copyToClipboard(text);

    expect(result).toBe(true);
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(text);
  });

  describe('with callbacks', () => {
    it('should call onSuccess callback when copy succeeds', async () => {
      const text = 'Hello World';
      const onSuccess = jest.fn();
      const onError = jest.fn();

      const result = await copyToClipboard(text, { onSuccess, onError });

      expect(result).toBe(true);
      expect(onSuccess).toHaveBeenCalledTimes(1);
      expect(onError).not.toHaveBeenCalled();
      expect(clipboardWriteTextMock).toHaveBeenCalledWith(text);
    });

    it('should call onError callback when copy fails', async () => {
      const text = 'Hello World';
      const error = new Error('Clipboard write failed');
      clipboardWriteTextMock.mockRejectedValue(error);
      const onSuccess = jest.fn();
      const onError = jest.fn();

      const result = await copyToClipboard(text, { onSuccess, onError });

      expect(result).toBe(false);
      expect(onSuccess).not.toHaveBeenCalled();
      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith(error);
    });

    it('should work with only onSuccess callback', async () => {
      const text = 'Hello World';
      const onSuccess = jest.fn();

      const result = await copyToClipboard(text, { onSuccess });

      expect(result).toBe(true);
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });

    it('should work with only onError callback', async () => {
      const text = 'Hello World';
      const error = new Error('Clipboard write failed');
      clipboardWriteTextMock.mockRejectedValue(error);
      const onError = jest.fn();

      const result = await copyToClipboard(text, { onError });

      expect(result).toBe(false);
      expect(onError).toHaveBeenCalledTimes(1);
      expect(onError).toHaveBeenCalledWith(error);
    });
  });
})



