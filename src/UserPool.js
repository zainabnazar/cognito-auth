import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.REACT_APP_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID
}

console.log('!!!!!!', process.env.REACT_APP_POOL_ID, process.env.REACT_APP_CLIENT_ID)
export default new CognitoUserPool(poolData);