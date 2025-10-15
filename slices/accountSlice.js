import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const STORAGE_KEY = "user";

const initialState = {
  username: "Alt Shift F",

  personalLibrary: [],

  currentBook: null,
  chaptersOfCurrentBook: null,
  currentChaper: null,

  creationIdList: [],

  user: null,
  loading: false,
  error: null,
};

// 🔹 Đăng ký tài khoản
export const registerUser = createAsyncThunk(
  "account/registerUser",
  async ({ email, username, password, repeatPassword }, { rejectWithValue }) => {
    try {
      if (!email || !username || !password || !repeatPassword)
        return rejectWithValue("Vui lòng nhập đầy đủ thông tin!");
      if (password !== repeatPassword)
        return rejectWithValue("Mật khẩu nhập lại không khớp!");

      const newUser = {
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
        avatar: `https://i.pravatar.cc/150?u=${username}`,
        favoriteBooks: [],
      };

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      Alert.alert("Thành công", "Đăng ký thành công, hãy đăng nhập!");
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Đăng nhập
export const loginUser = createAsyncThunk(
  "account/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
      if (!storedUser) return rejectWithValue("Chưa có tài khoản, vui lòng đăng ký!");

      const user = JSON.parse(storedUser);
      if (
        (user.email === email || user.username === email) &&
        user.password === password
      ) {
        Alert.alert("Thành công", "Đăng nhập thành công!");
        return user;
      } else {
        return rejectWithValue("Sai email/tên người dùng hoặc mật khẩu!");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Load user khi mở lại app
export const loadUserFromStorage = createAsyncThunk(
  "account/loadUserFromStorage",
  async (_, { rejectWithValue }) => {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedUser) {
        return JSON.parse(storedUser);
      } else {
        return null;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Cập nhật thông tin user (VD: avatar, username)
export const updateUserInfo = createAsyncThunk(
  "account/updateUserInfo",
  async (updatedData, { rejectWithValue }) => {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
      if (!storedUser) return rejectWithValue("Không tìm thấy người dùng!");

      const user = JSON.parse(storedUser);
      const newUser = { ...user, ...updatedData };

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      Alert.alert("Thành công", "Cập nhật thông tin thành công!");
      return newUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Quên mật khẩu (giả lập)
export const forgotPassword = createAsyncThunk(
  "account/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_KEY);
      if (!storedUser) return rejectWithValue("Không tìm thấy tài khoản!");
      const user = JSON.parse(storedUser);

      if (user.email === email) {
        Alert.alert("Thành công", `Mật khẩu của bạn là: ${user.password}`);
        return true;
      } else {
        return rejectWithValue("Email không khớp với tài khoản đã đăng ký!");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// 🔹 Slice chính
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
});

export const { } = accountSlice.actions;
export default accountSlice.reducer;
