import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    category: "Technology"
  },
  reducers: {
    setCategory: (state: any, action: PayloadAction<any>) => {
      state.category = action.payload;
      localStorage.setItem("category", action.payload);
    },
  },
});

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles: (state: any, action: PayloadAction<any>) => {
      state.articles = action.payload;
    }
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    setUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    logoutUser: (state: any) => {
      state.user = null;
    },
  },
});

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    addFavorite: (state: any, action: PayloadAction<any>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state: any, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((fav: any) => fav.id !== action.payload);
    },
  },
});

export const { setCategory } = preferencesSlice.actions;
export const { setArticles } = articleSlice.actions;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const { setUser, logoutUser } = authSlice.actions;



export const store = configureStore({
  reducer: { 
    articles: articleSlice.reducer,
    preferences: preferencesSlice.reducer,
    auth: authSlice.reducer,
  },
});
