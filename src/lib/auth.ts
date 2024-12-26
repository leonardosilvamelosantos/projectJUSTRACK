// Temporary auth for testing - in production this would use proper auth service
const TEST_USER = {
  email: 'admin@admin.com',
  password: 'admin123'
};

const REGISTERED_EMAILS = [
  'admin@admin.com',
  'admin@teste.com' // Added for first login testing
];

export const authenticateUser = (email: string, password: string) => {
  return email === TEST_USER.email && password === TEST_USER.password;
};

export const isEmailRegistered = (email: string) => {
  return REGISTERED_EMAILS.includes(email);
};