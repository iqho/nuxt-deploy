const { exec } = require('child_process');

exec('npm run start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting Nuxt app: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
