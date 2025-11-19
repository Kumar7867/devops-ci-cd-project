pipeline {
    agent any

    tools {
        nodejs "node16"   // The NodeJS version you configured in Jenkins
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/<your-username>/devops-ci-cd-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Basic Test') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Archive Artifact') {
            steps {
                sh 'zip -r app.zip .'
                archiveArtifacts artifacts: 'app.zip', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "CI stage completed successfully."
        }
        failure {
            echo "CI stage failed."
        }
    }
}

