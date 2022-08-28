const environment = {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    '5fa1a06200a03eddb0d3ea343613a8b01d89e68e15f6b66def7065c96646c11ae5280054fd3f139b0ae50ef2e3a568852a17f8f3f7fca39533b2b1efdf9dfb6d',
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    '7b69ead527e7fd35af5b3c2fcfee7ed101929b15c0a8832e06546d84424e2740f3f737106a7480776e36ee28d17c47c820159037ce95743f9ddf8381eceb4b0b',
};

export default environment;
