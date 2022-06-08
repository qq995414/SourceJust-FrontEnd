import { ApiClient } from "./ApiClient";
import { OpenAPI } from "./core/OpenAPI";
import { LoginRequest } from "./models/LoginRequest";

OpenAPI.BASE="https://serp.source-test.com:443/"

const apiClient=new ApiClient();

const LoginRequest ={
    password: "123456",
    username: "admin"
}

const response = async () => {
    let data = await apiClient.accountController.loginUsingPost(LoginRequest);
    return data;
}           