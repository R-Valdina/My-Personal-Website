// Optional enhancement: the complete prompts remain selectable without JS.
for (const button of document.querySelectorAll('[data-copy-prompt]')) {
  const prompt = document.getElementById(button.dataset.copyPrompt);
  const status = document.getElementById(button.getAttribute('aria-describedby'));
  if (!prompt || !status) continue;
  const initialLabel = button.textContent;
  let restoreTimer;
  button.hidden = false;
  button.addEventListener('click', async () => {
    clearTimeout(restoreTimer);
    status.textContent = '';
    button.disabled = true;
    button.textContent = initialLabel;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(prompt.textContent);
      button.textContent = 'Copied';
      status.textContent = 'Prompt copied to clipboard.';
      restoreTimer = setTimeout(() => {
        button.textContent = initialLabel;
        status.textContent = '';
      }, 2500);
    } catch {
      status.textContent = 'Copy unavailable — select the prompt text to copy.';
    } finally {
      button.disabled = false;
    }
  });
}
