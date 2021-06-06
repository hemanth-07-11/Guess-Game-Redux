export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;

export const alpha = value =>
  value && /[^a-zA-Z ]/i.test(value) ? 'A-Z only' : undefined;

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
