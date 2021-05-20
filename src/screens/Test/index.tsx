import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { BleManager } from "react-native-ble-plx";
import DeviceInfo from "react-native-device-info";

const manager = new BleManager();

const Test = () => {
  const [devices, setDevices] = useState<Set<string>>();

  useEffect(() => {
    const id = DeviceInfo.getUniqueId();
    console.log("id", id);
    const sub = manager.onStateChange((state) => {
      if (state === "PoweredOn") {
        scanAndConnect();
        sub.remove();
      }
    });
  });

  const scanAndConnect = () => {
    manager.startDeviceScan(
      null,
      { allowDuplicates: false },
      (error, device) => {
        console.log(device);
        if (error) {
          // Handle error (scanning will be stopped automatically)
          return;
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (
          device?.name === "TI BLE Sensor Tag" ||
          device?.name === "SensorTag"
        ) {
          // Stop scanning as it's not necessary if you are scanning for one device.
          manager.stopDeviceScan();

          // Proceed with connection.
        }
      }
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Text>1232</Text>
    </SafeAreaView>
  );
};

export default Test;
