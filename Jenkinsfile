pipeline {
  agent any

  
  stages{
    stage('Deploy'){
      steps{
        echo '#Deploing'
      }
    }

    stage('Publish'){
      steps{
        echo '#publishing changes'
      }
    }

    stage('Update libraries'){
      steps{
        echo '#Updating libraries'
      }
    }
  }

  post {
    always {
        echo '#Always message'
    }
    failure {
        echo '#Something is wrong'
    }
  }
}