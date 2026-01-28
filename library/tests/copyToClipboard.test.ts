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


  it("should copy text to clipboard using modern API", async () => {
    const text = "Hello World";
    const result = await copyToClipboard(text);
  
    expect(result).toBe(true); 
    expect(clipboardWriteTextMock).toHaveBeenCalledWith(text); 
  });
})



