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
            sshagent(['miguel-google']) {
                echo '> Stop containers..'
                sh 'cd /home/macortesn/prueba-valiu/ && sudo docker-compose stop && sudo git pull origin master'
              }
            }
        }

        stage('Build Containers') {
            steps {
                echo '> Build containers..'
                sh 'cd /home/macortesn/prueba-valiu/ && sudo docker-compose build'
            }
        }

        stage('Up Containers') {
            steps {
                echo '> Up containers..'
                sh 'cd /home/macortesn/prueba-valiu/ && sudo docker-compose up -d'
            }
        }
     }
}
