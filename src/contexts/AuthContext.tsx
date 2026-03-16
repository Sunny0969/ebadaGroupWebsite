import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  _id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

interface RegisterData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  password: string;
  industry?: string;
  address?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('authUser');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      console.log('📤 Logging in:', email);
      console.log('📤 API URL:', `${API_BASE_URL}/api/auth/login`);

      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).catch((fetchError) => {
        // Network error - server not running
        console.error('❌ Network Error:', fetchError);
        throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Please make sure the backend server is running. Open a terminal and run: cd backend && npm run dev`);
      });

      console.log('📥 Response status:', response.status);

      // Check if response is ok before parsing JSON
      let result;
      try {
        result = await response.json();
        console.log('📥 Response data:', result);
      } catch (jsonError) {
        console.error('❌ JSON Parse Error:', jsonError);
        throw new Error('Invalid response from server. Please check backend server logs.');
      }

      if (!response.ok) {
        throw new Error(result.message || result.error || 'Login failed');
      }

      if (result.success && result.data) {
        setToken(result.data.token);
        setUser(result.data.user);
        localStorage.setItem('authToken', result.data.token);
        localStorage.setItem('authUser', JSON.stringify(result.data.user));
      }
    } catch (error: any) {
      console.error('❌ Login error:', error);
      throw new Error(error.message || 'Login failed. Please check your credentials.');
    }
  };

  const register = async (data: RegisterData) => {
    try {
      console.log('📤 Registering user:', data.email);
      console.log('📤 API URL:', `${API_BASE_URL}/api/auth/register`);

      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).catch((fetchError) => {
        // Network error - server not running
        console.error('❌ Network Error:', fetchError);
        throw new Error(`Cannot connect to backend server at ${API_BASE_URL}. Please make sure the backend server is running. Open a terminal and run: cd backend && npm run dev`);
      });

      console.log('📥 Response status:', response.status);

      // Check if response is ok before parsing JSON
      let result;
      try {
        result = await response.json();
        console.log('📥 Response data:', result);
      } catch (jsonError) {
        console.error('❌ JSON Parse Error:', jsonError);
        throw new Error('Invalid response from server. Please check backend server logs.');
      }

      if (!response.ok) {
        throw new Error(result.message || result.error || 'Registration failed');
      }

      if (result.success && result.data) {
        setToken(result.data.token);
        setUser(result.data.user);
        localStorage.setItem('authToken', result.data.token);
        localStorage.setItem('authUser', JSON.stringify(result.data.user));
      }
    } catch (error: any) {
      console.error('❌ Registration error:', error);
      throw new Error(error.message || 'Registration failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        isAuthenticated: !!user && !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
