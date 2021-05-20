// import messaging from '@react-native-firebase/messaging';
// import { storage } from 'src/helpers/storage';

// export class FirebaseService {
//   private static instance: FirebaseService;

//   private constructor() {}

//   public static getInstance(): FirebaseService {
//     if (!FirebaseService.instance) {
//       FirebaseService.instance = new FirebaseService();
//     }
//     return FirebaseService.instance;
//   }

//   public async init() {
//     if (await FirebaseService.requestUserPermission()) {
//       await FirebaseService.getToken();
//     }
//   }

//   private static async requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//     return enabled;
//   }

//   private static async getToken(): Promise<string> {
//     const token = await messaging().getToken();
//     await storage.set('fcmToken', token);
//     return token;
//   }
// }
