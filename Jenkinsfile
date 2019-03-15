pipeline {
    agent any
    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo '> Checking out the source control ...'
                checkout scm
            }
        }
        
        stage('Stop Containers') {
            steps {
                echo '> Stop containers..'
                sh 'sudo docker-compose stop'
            }
        }
        
        stage('Build Containers') {
            steps {
                echo '> Stop containers..'
                sh 'sudo docker-compose build'
            }
        }
        
        stage('Up Containers') {
            steps {
                echo '> Stop containers..'
                sh 'sudo docker-compose up'
            }
        }
     }
}