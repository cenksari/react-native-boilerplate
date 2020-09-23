git clone https://github.com/cenksari/react-native-boilerplate.git

DELETE .git folder
RENAME downloaded folder to project name

react-native-rename-next "Breath Hub" -b app.breathhub.main1

DELETE android/app/src/main/java/com
CHECK BEFORE DELETE android/app/src/debug/java/com

yarn install

CHECK BEFORE react-native link

npx react-native run-android