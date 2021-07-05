export interface User {
  id: string;
  enabled: boolean;
  display_name: string;
  email: string;
  picture: string;
  identities: Identity[];
  applications: Application;
  attr: {
    department: string;
    manager: string;
    title: string;
  };
  metadata:Metadata;
}

interface Identification {
  type: string;
  provider: string;
  verified: boolean;
}

interface Identity {
  [id: string]: Identification
}

interface Application {
  [id: string]: {
    attr: string | null,
    roles: string[],
    scopes: string[]
  }
}

interface Metadata {
  created_at: string;
  updated_at: string;
}
