import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const CustomKeyboardScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleKeyPress = (value) => {
    if (value === 'delete') {
      setPhoneNumber(phoneNumber.slice(0, -1)); // Xóa ký tự cuối
    } else {
      setPhoneNumber(phoneNumber + value); // Thêm ký tự
    }
  };

  const handleContinue = () => {
    console.log('Số điện thoại:', phoneNumber); // In ra terminal
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề và ô nhập số */}
      <View style={styles.header}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
        </Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          editable={false} // Không cho phép nhập trực tiếp
          placeholder="Nhập số điện thoại của bạn"
        />
      </View>

      {/* Bàn phím số */}
      <View style={styles.keyboard}>
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['*', '0', 'delete'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.key}
                onPress={() => handleKeyPress(key === 'delete' ? 'delete' : key)}
              >
                <Text style={styles.keyText}>
                  {key === 'delete' ? '⌫' : key}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Nút tiếp tục */}
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: phoneNumber ? '#007AFF' : '#D1D1D6' },
        ]}
        onPress={handleContinue}
        disabled={!phoneNumber}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#6D6D6D',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    color: '#000',
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  key: {
    width: 70,
    height: 70,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  keyText: {
    fontSize: 24,
    color: '#000',
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomKeyboardScreen;
