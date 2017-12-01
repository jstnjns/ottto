module.exports = {
  apps : [
    {
      name      : 'ottto',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy : {
    production : {
      user : 'pi',
      host : '192.168.1.5',
      ref  : 'origin/master',
      repo : 'git@github.com:jstnjns/ottto.git',
      path : '/var/www/ottto/server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : 'localhost',
      ref  : 'origin/master',
      repo : 'git@github.com:jstnjns/ottto.git',
      path : '/Users/justin/Development/projects/ottto/server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};