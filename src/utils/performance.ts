// Performance optimization utilities

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization helper
export const getOptimizedImageUrl = (
  src: string,
  width?: number,
  _quality: number = 80
): string => {
  // In production, this would integrate with a CDN or image optimization service
  // For now, return the original src
  if (width) {
    // Example: If using a service like Cloudinary, Imgix, etc.
    // return `${CDN_BASE_URL}${src}?w=${width}&q=${_quality}`;
  }
  return src;
};

// Cache management
export const cacheKey = (key: string): string => {
  return `ebada_${key}`;
};

export const getCachedData = <T>(key: string): T | null => {
  try {
    const cached = sessionStorage.getItem(cacheKey(key));
    if (cached) {
      const { data, expiry } = JSON.parse(cached);
      if (expiry && Date.now() > expiry) {
        sessionStorage.removeItem(cacheKey(key));
        return null;
      }
      return data as T;
    }
  } catch (e) {
    console.error('Error reading cache:', e);
  }
  return null;
};

export const setCachedData = <T>(key: string, data: T, ttl?: number): void => {
  try {
    const cacheData = {
      data,
      expiry: ttl ? Date.now() + ttl : null,
    };
    sessionStorage.setItem(cacheKey(key), JSON.stringify(cacheData));
  } catch (e) {
    console.error('Error writing cache:', e);
  }
};

// Resource hints for performance
export const addResourceHints = () => {
  // DNS prefetch for external domains
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
export const initPerformance = () => {
  addResourceHints();
  
  // Preload critical resources
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Preload critical images
      const criticalImages = [
        '/Images/Ebada-Group.png',
      ];
      preloadImages(criticalImages).catch(console.error);
    });
  }
};
