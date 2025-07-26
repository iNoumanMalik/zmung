// Simple script to start the development server
const { exec } = require('child_process');

console.log('Starting Zmung Client development server...');

// Run the development server
const devServer = exec('npm run dev');

// Forward stdout and stderr to the console
devServer.stdout.on('data', (data) => {
  console.log(data.toString());
});

devServer.stderr.on('data', (data) => {
  console.error(data.toString());
});

devServer.on('close', (code) => {
  console.log(`Development server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('Stopping development server...');
  devServer.kill();
  process.exit(0);
});