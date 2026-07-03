import http from "./http";

export const AuthAPI = {
    login: (email, password) =>
        http("/api/auth/login", { method: "POST", body: { email, password } }),

    register: (data) =>
        http("/api/auth/register", { method: "POST", body: data }),

    registerProducer: (data) =>
        http("/api/auth/register-producer", { method: "POST", body: data }),

    logout: () =>
        http("/api/auth/logout", { method: "POST" }),

    me: () => http("/api/auth/me")
};
