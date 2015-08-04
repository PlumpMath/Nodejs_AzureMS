Node.js example to send data to an Azure Mobile Services Table.

# Table of Contents
1.  [Requirements](#requirements) - Required installations for this example.
2.  [Getting Started](#getting-started) - How to run this example.
3.  [Support](#support) - Have questions?  Run into an issue?  Ask here.

# Requirements
1.  Install [Visual Studio Community](http://visualstudio.com)
2.  Install [Node.js](https://nodejs.org/)
3.  Install [Node.js Tools for Visual Studio](https://www.visualstudio.com/en-us/features/node-js-vs.aspx)

# Getting Started
##### Setting up Azure Mobile Services
1.  Login to [Azure Portal](http://azure.microsoft.com).
2.  Create a `Mobile Services`.
3.  Click `Manage Keys` and copy `Application Key`.
4.  Create a `Table` under `Mobile Services > Data`.

##### Editting and Running this Example
1.  Download and unpack this repo.
2.  Install [Cylon](http://cylonjs.com/documentation/getting-started/): Open Node.js command prompt, browse to unpacked repo, and type: `npm install cylon`.
3.  Edit `config.js` file with [Mobile Services Name, Table Name, Application Key].
4.  Enter data in `app.js` under *postData() > user*.
5.  Run Example:  Open Node.js command prompt, browse to unpacked repo, and type: `node app.js`.

# Support
Please create an [issue ticket](https://github.com/jasonrwalters/Nodejs_AzureMS/issues) for questions and issues. Thank you.
