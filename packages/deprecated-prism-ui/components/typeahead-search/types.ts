export interface IdentityResult {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  preferredName: string;
  email: string;
  manager: {
    firstName: string;
    lastName: string;
  };
  errors?: Error;
}
