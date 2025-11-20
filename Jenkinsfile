pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo "Pulling latest code from GitHub..."
                checkout scm
            }
        }

        stage('Validate HTML') {
            steps {
                echo "Validating HTML files"
                sh 'echo "No validation tool installed, so skipping real validation..."'
            }
        }

        stage('Build Artifact') {
            steps {
                echo "Packaging HTML files into artifact.zip"
                sh '''
                    rm -f artifact.zip
                    zip -r artifact.zip .
                '''
            }
        }

        stage('Archive Artifact') {
            steps {
                archiveArtifacts artifacts: 'artifact.zip', fingerprint: true
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo "Running Ansible playbook to deploy to EC2"
                sh 'ansible-playbook ~/devops-project/deploy.yml'
            }
        }
    }

    post {
        always {
            echo "Build finished!"
        }
        success {
            echo "Build successful!"
        }
        failure {
            echo "Build failed!"
        }
    }
}


