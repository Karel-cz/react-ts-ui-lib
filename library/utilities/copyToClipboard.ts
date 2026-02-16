export interface CopyToClipboardOptions {
  /**
   * Callback function invoked when the copy operation succeeds
   */
  onSuccess?: () => void;
  /**
   * Callback function invoked when the copy operation fails
   * @param error - The error that occurred during the copy operation
   */
  onError?: (error: unknown) => void;
}

/**
 * Copies text to the clipboard with optional success and error callbacks
 * 
 * @param text - The text to copy to the clipboard
 * @param options - Optional callbacks for success and error handling
 * @returns A promise that resolves to true if successful, false otherwise
 * 
 * @example
 * // With both callbacks
 * await copyToClipboard('Hello World', {
 *   onSuccess: () => showToast('Copied to clipboard!'),
 *   onError: (error) => showToast('Failed to copy: ' + error),
 * });
 */
export const copyToClipboard = async (
  text: string,
  options?: CopyToClipboardOptions
): Promise<boolean> => {
  const { onSuccess, onError } = options || {};

  if (typeof navigator === "undefined") {
    onError?.(new Error("Navigator is not available"));
    return false;
  }

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      onSuccess?.();
      return true;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (success) {
      onSuccess?.();
    } else {
      onError?.(new Error("Failed to copy using execCommand"));
    }

    return success;
  } catch (error) {
    onError?.(error);
    return false;
  }
};
