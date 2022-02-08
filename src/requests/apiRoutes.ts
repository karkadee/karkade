const BASE = "http://localhost:5000";
const API_BASE = `${BASE}/api`;

const USER_BASE = `${API_BASE}/user`;

const REGISTER_ROUTE = `${USER_BASE}/auth/register`;
const LOGIN_ROUTE = `${USER_BASE}/auth/login`;
const LOGOUT_ROUTE = `${USER_BASE}/auth/logout`;
const ACCESS_TOKEN_ROUTE = `${USER_BASE}/access_token`;
const USER_INFO_ROUTE = `${USER_BASE}/info`;

const CATEGORY_ROUTE = `${API_BASE}/categories`;

const PRODUCT_ROUTE = `${API_BASE}/products`;

const ORDER_ROUTE = `${API_BASE}/orders`;

const UPLOAD_ROUTE = `${API_BASE}/orders`;

export {
    REGISTER_ROUTE,
    LOGIN_ROUTE,
    USER_BASE,
    ACCESS_TOKEN_ROUTE,
    LOGOUT_ROUTE,
    USER_INFO_ROUTE,
    CATEGORY_ROUTE,
    PRODUCT_ROUTE,
    ORDER_ROUTE,
    UPLOAD_ROUTE
};