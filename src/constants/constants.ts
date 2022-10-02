export const ROUTES = {
  DEFAULT: {
    APP: "/",
    LOGIN: "/login",
    SIGNUP: "/sign-up",
    REGISTRATION: "/registration",
    UNAUTHORIZED: "/unauthorized",
  },
  PRIVATE: {
    DASHBOARD: "/dashboard",
    PAYMENTS: "/payments",
  },
};

export enum ROLES {
  ADMIN = "admin",
  USER = "user",
  ASSISTANT = "assistant",
  SUPPORT = "support",
  DEVELOPER = "developer",
  CUSTOMER = "customer",
  SELLER = "seller",
}
