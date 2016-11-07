import DDPClient from 'node-ddp-client';
import {
  AsyncStorage
} from 'react-native';

let ddpClient = new DDPClient();

/*
  注册 ： 用户名 密码
 */
ddpClient.signUpWithUsername = (username, password, cb) => {
  let params = {
    username: username,
    password: password
  };

  return ddpClient.call('createUser', [params], cb);
};

/*
  登陆 ： 用户名 密码
 */
ddpClient.loginWithUsername = (username, password, cb) => {
  let params = {
    user: {
      username: username
    },
    password: password
  };

  return ddpClient.call("login", [params], cb)
};

/* 
  存储用户数据
*/
ddpClient.onAuthResponse = (err, res) => {
  if (res) {
    let {
      id,
      token,
      tokenExpires
    } = res;

    AsyncStorage.setItem('userId', id.toString());
    AsyncStorage.setItem('loginToken', token.toString());
    AsyncStorage.setItem('loginTokenExpires', tokenExpires.toString());
  } else {
    AsyncStorage.multiRemove(['userId', 'loginToken', 'loginTokenExpires']);
  }
}

/*
  登陆 ： resumeToken
 */
ddpClient.loginWithToken = (loginToken, cb) => {
  let params = {
    resume: loginToken
  };

  return ddpClient.call("login", [params], cb)
}

/*
  登出
 */
ddpClient.logout = (cb) => {
  AsyncStorage.multiRemove(['userId', 'loginToken', 'loginTokenExpires']).
  then((res) => {
    ddpClient.call("logout", [], cb)
  });
}

export default ddpClient;