# IT-Dobler-website

## Getting started

1. Add hostname entry to `/etc/hosts` (windows: `c:\Windows\System32\drivers\etc\hosts`) in the form: \
   `127.0.0.1 it-dobler.localhost`
2. Generate a new keypair for HTTPS communication: `scripts/certs/generate-keypair.sh`
3. **Import certificate** to the correct Java (Adapt accordingly for Windows):
   ```
   cd /Users/yanicdobler/IT-Dobler/B2Team/developer-local-settings/config
   sudo /Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home/bin/keytool -importcert -file certs/it-dobler.localhost.pem -cacerts -keypass changeit -storepass changeit -noprompt -alias it-dobler-local

   // In case you need to delete the alias again.   
   sudo /Library/Java/JavaVirtualMachines/temurin-21.jdk/Contents/Home/bin/keytool -delete -cacerts -storepass changeit -alias it-dobler-local
   ```
