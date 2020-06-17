#!/usr/bin/env groovy
@Library(['piper-lib-os']) _

//Setup the skeleton for Jenkins based Runs
node {
    stage('Prepare')   {
        deleteDir()
        checkout scm
        setupCommonPipelineEnvironment script:this
    }    

    stage('System Tests') {
        uiVeri5ExecuteTests script: this, testOptions: "conf.js"
        publishHTML target: [
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'target/report/screenshots/',
            reportFiles: "report.html",
            reportName: "UIVeri5 Test Report"
        ]        
    }
}