/**
 * api接口统一管理
 * @param baseUrl
 */

 import { post, get } from "./index.js";

export const getAdminInfo = (v: any)=> get("http://localhost:3400", v)

