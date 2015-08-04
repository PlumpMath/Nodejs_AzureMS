# Requirements
1.  Install [Visual Studio Community](http://visualstudio.com)
2.  Install [Node.js](https://nodejs.org/)
3.  Install [Node.js Tools for Visual Studio](https://www.visualstudio.com/en-us/features/node-js-vs.aspx)

# Getting Started
1.  Login to [Azure Portal](http://azure.microsoft.com).
2.  Create a `Mobile Services`.
3.  Click `Manage Keys` and copy `Application Key`.
4.  Create a `Table` under `Mobile Services > Data`.
5.  Download and unpack this repo.
6.  To install Cylon: Open Node.js command prompt, browse to unpacked repo, and type: `npm install cylon`.
7.  Edit `config.js` file with [Mobile Services Name, Table Name, Application Key].
8.  Enter data in `app.js` under *postData() > user*.
9.  To run repo example:  Open Node.js command prompt, browse to unpacked repo, and type: `node app.js`.
