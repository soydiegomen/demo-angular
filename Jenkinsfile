pipeline {
  agent any

  
  stages{
    stage('Informar inicio de deploy'){
      steps{
        echo '#inicio de deploy'
      }
    }

    stage('Publicar'){
      steps{
        echo '#Publicando los cambios'
      }
    }

    stage('Actualizar librerias'){
      steps{
        echo '#Actualizando librerias del proyecto'
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