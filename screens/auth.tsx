import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MailIcon, LockIcon, UserIcon, EyeIcon, EyeOffIcon } from '../components/icons';

type AuthMode = 'login' | 'signup';

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const getBorderClass = (field: string) =>
    focusedField === field ? 'border-red-500' : 'border-gray-200';

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header Area */}
          <View className="items-center pt-12 pb-8 px-4">
            <View className="w-16 h-16 rounded-full bg-red-500 items-center justify-center mb-4">
              <UserIcon size={28} color="#FFFFFF" />
            </View>
            <Text className="text-2xl font-semibold text-gray-900 mb-1">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </Text>
            <Text className="text-sm text-gray-500">
              {mode === 'login'
                ? 'Sign in to continue browsing'
                : 'Join our marketplace today'}
            </Text>
          </View>

          {/* Mode Toggle */}
          <View className="flex-row mx-4 mb-6 bg-gray-50 rounded-full p-1">
            <Pressable
              onPress={() => setMode('login')}
              className={`flex-1 py-2.5 rounded-full items-center ${
                mode === 'login' ? 'bg-white border border-red-500' : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  mode === 'login' ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                Log In
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setMode('signup')}
              className={`flex-1 py-2.5 rounded-full items-center ${
                mode === 'signup' ? 'bg-white border border-red-500' : ''
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  mode === 'signup' ? 'text-red-500' : 'text-gray-500'
                }`}
              >
                Sign Up
              </Text>
            </Pressable>
          </View>

          {/* Form */}
          <View className="px-4">
            {/* Name (signup only) */}
            {mode === 'signup' && (
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </Text>
                <View
                  className={`flex-row items-center border rounded-lg px-3.5 py-3 ${getBorderClass('name')}`}
                >
                  <UserIcon size={16} color="#9CA3AF" />
                  <TextInput
                    placeholder="John Doe"
                    placeholderTextColor="#9CA3AF"
                    className="flex-1 ml-3 text-gray-700 text-base"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </View>
              </View>
            )}

            {/* Email */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1.5">
                Email
              </Text>
              <View
                className={`flex-row items-center border rounded-lg px-3.5 py-3 ${getBorderClass('email')}`}
              >
                <MailIcon size={16} color="#9CA3AF" />
                <TextInput
                  placeholder="you@example.com"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="flex-1 ml-3 text-gray-700 text-base"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Password */}
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1.5">
                Password
              </Text>
              <View
                className={`flex-row items-center border rounded-lg px-3.5 py-3 ${getBorderClass('password')}`}
              >
                <LockIcon size={16} color="#9CA3AF" />
                <TextInput
                  placeholder="••••••••"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  className="flex-1 ml-3 text-gray-700 text-base"
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOffIcon size={16} color="#9CA3AF" />
                  ) : (
                    <EyeIcon size={16} color="#9CA3AF" />
                  )}
                </Pressable>
              </View>
            </View>

            {/* Confirm Password (signup only) */}
            {mode === 'signup' && (
              <View className="mb-4">
                <Text className="text-sm font-medium text-gray-700 mb-1.5">
                  Confirm Password
                </Text>
                <View
                  className={`flex-row items-center border rounded-lg px-3.5 py-3 ${getBorderClass('confirm')}`}
                >
                  <LockIcon size={16} color="#9CA3AF" />
                  <TextInput
                    placeholder="••••••••"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showPassword}
                    className="flex-1 ml-3 text-gray-700 text-base"
                    onFocus={() => setFocusedField('confirm')}
                    onBlur={() => setFocusedField(null)}
                  />
                </View>
              </View>
            )}

            {/* Forgot Password (login only) */}
            {mode === 'login' && (
              <Pressable className="items-end mb-6">
                <Text className="text-sm text-red-500 font-medium">
                  Forgot Password?
                </Text>
              </Pressable>
            )}

            {/* Submit Button */}
            <Pressable className="bg-red-500 rounded-full py-3.5 items-center mt-2 mb-4">
              <Text className="text-white text-base font-semibold">
                {mode === 'login' ? 'Log In' : 'Create Account'}
              </Text>
            </Pressable>

            {/* Divider */}
            <View className="flex-row items-center my-6">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="mx-4 text-sm text-gray-400">or</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            {/* Social Login */}
            <Pressable className="flex-row items-center justify-center border border-gray-200 rounded-full py-3 mb-3">
              <Text className="text-sm font-medium text-gray-700">
                Continue with Google
              </Text>
            </Pressable>
            <Pressable className="flex-row items-center justify-center border border-gray-200 rounded-full py-3 mb-8">
              <Text className="text-sm font-medium text-gray-700">
                Continue with Apple
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
