---

title: How to Get Your Android Debug Key for Firebase Integration  
tags:  
- Firebase
- Android
- Flutter
categories:  
- Mobile  

---

# How to Get Your Android Debug Key for Firebase Integration

Whenever I need to restart my Flutter project, there's always a bit of anxiety about whether everything will work as it did before. Beyond just dealing with deprecated packages, one of the trickiest parts is ensuring that Firebase integration is set up correctly—particularly when working on a new machine or environment.

A critical step in this process is resetting the fingerprints (SHA1 and SHA256 keys) in your Firebase project. These keys are crucial because they help Firebase authenticate your app, allowing you to make secure API calls.

Here's a quick guide to help you retrieve your Android debug keys and set them up in Firebase.

## Step 1: Retrieve Your Android Debug Keys

The SHA1 and SHA256 keys are stored in the debug keystore that Android Studio uses for debugging purposes. You can retrieve these keys using the `keytool` command. Here’s how:

1. Open a terminal (or command prompt) on your machine.
2. Run the following command:

    ```bash
    keytool -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
    ```

    This command will prompt you to enter the keystore password.

3. If you’ve never changed the default keystore password, it’s likely set to `android`. 

    Simply enter `android` when prompted, and the command will display the SHA1 and SHA256 fingerprints.

### Troubleshooting: If `keytool` Command Is Not Recognized

If you receive a message that the `keytool` command is not recognized, it usually means that Java is not installed or the `keytool` utility isn't properly set up in your system's PATH.

- **Install Java:**  
  Ensure that you have Java installed on your machine. You can download and install the latest version of the Java Development Kit (JDK) from the [official Oracle website](https://www.oracle.com/java/technologies/javase-downloads.html).

- **Windows Users:**  
  If you're using Windows and the `keytool` command still doesn't work, you might need to execute the `keytool.bat` file directly. This file is typically located in the `bin` directory of your JDK installation. For example:

    ```bash
    {jdk-path}\bin\keytool.bat -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
    ```

    Replace `{jdk-path}` with the actual path to your JDK installation, such as `C:\Program Files\Java\jdk-XX.X.X\bin`.

## Step 2: Add Your Keys to Firebase

Once you have your SHA1 and SHA256 keys, follow these steps:

1. Log in to the [Firebase Console](https://console.firebase.google.com/).
2. Navigate to your project and select the Android app you’re working on.
3. In the settings, look for a section labeled "SHA certificate fingerprints."
4. Paste the SHA1 and SHA256 keys into their respective fields.

## Why Is This Important?

Each time you run your Flutter app on a different machine, the debug keystore might change, especially if the `.android` folder is newly created. Firebase uses these SHA1 and SHA256 keys to verify the authenticity of your app. If the keys don't match what’s registered in the Firebase console, API calls will fail, and features like Firebase Authentication or Firestore won’t work properly.

## Troubleshooting Tips

- **Forgot the keystore password?**  
  The default password is usually `android`. If that doesn’t work, you might be using a custom keystore, in which case you’ll need the password set at the time of creation.

- **Can’t find the keystore?**  
  Ensure that the file path in the command is correct. The `%USERPROFILE%\.android\debug.keystore` is typically where the debug keystore is located on Windows. On macOS or Linux, you might need to replace `%USERPROFILE%` with `$HOME`.

By following these steps, you should be able to restart your Flutter project with Firebase working seamlessly, just like before. Keep this guide handy for the next time you need to reset those keys, and happy coding!