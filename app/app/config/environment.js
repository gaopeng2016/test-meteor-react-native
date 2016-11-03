import {Platform} from 'react-native';

getEnvironmentName = () => {
  // Logic for figuring out platform

  return 'dev';
  // return 'stage';
  // return 'production';
}

Environments = {
  dev: {
    ddpOptions: {
      // Note: localhost for iOS, 10.0.2.2 for Android, 10.0.3.2 for Android Genymotion
      host : Platform.OS === 'ios' ? "localhost" : "10.0.3.2",
      port : 3000,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1'
    }
  },
  stage: {
    ddpOptions: {
      // host : "stage.app.com",
      // port : 80,
      // ssl  : false,
      // autoReconnect : true,
      // autoReconnectTimer : 500,
      // maintainCollections : true,
      // ddpVersion : '1'
    }
  },
  production: {
    ddpOptions: {
      // host : "app.com",
      // port : 443,
      // ssl  : true,
      // autoReconnect : true,
      // autoReconnectTimer : 500,
      // maintainCollections : true,
      // ddpVersion : '1'
    }
  }
}

module.exports = Environments[getEnvironmentName()]
