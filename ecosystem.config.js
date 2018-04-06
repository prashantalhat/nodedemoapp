module.exports = {
    apps: [{
        name: 'nodedemoapp',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-13-211-99-237.ap-southeast-2.compute.amazonaws.com',
            key: 'demonodejsapp.pem',
            ref: 'origin/master',
            repo: 'git@github.com:prashantalhat/nodedemoapp.git',
            path: '/home/ubuntu/nodedemoapp',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}