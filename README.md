git clone https://github.com/cenksari/react-native-boilerplate.git

DELETE .git folder
RENAME downloaded folder to project name

react-native-rename-next "Your App Name" -b your.bundle.identifier

DELETE android/app/src/main/java/com
CHECK BEFORE DELETE android/app/src/debug/java/com

yarn install

RUN npx react-native run-android