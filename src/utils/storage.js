import { initialReels } from '../data/initialReels';

const STORAGE_KEY = 'piyush_portfolio_custom_reels_v1';
const CLOUD_SETTINGS_KEY = 'piyush_cloudinary_config_v1';

export const getCloudinaryConfig = () => {
  const saved = localStorage.getItem(CLOUD_SETTINGS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.cloudName || parsed.uploadPreset) {
        return {
          cloudName: parsed.cloudName || 'duwvyiocv',
          uploadPreset: parsed.uploadPreset || ''
        };
      }
    } catch {
      // ignore
    }
  }
  return {
    cloudName: 'duwvyiocv',
    uploadPreset: 'ml_default'
  };
};

export const saveCloudinaryConfig = (config) => {
  localStorage.setItem(CLOUD_SETTINGS_KEY, JSON.stringify(config));
};

/**
 * Returns Piyush's 3 static public reels + any owner-added custom reels on top.
 * Static reels are always shown first (they're the main portfolio pieces).
 */
export const getStoredReels = () => {
  const custom = localStorage.getItem(STORAGE_KEY);
  let customList = [];
  if (custom) {
    try {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed)) {
        customList = parsed;
      }
    } catch {
      // ignore
    }
  }
  // Custom reels on top, then the 3 static portfolio reels
  return [...customList, ...initialReels];
};

export const saveCustomReel = (newReel) => {
  const current = localStorage.getItem(STORAGE_KEY);
  let customList = [];
  if (current) {
    try {
      customList = JSON.parse(current) || [];
    } catch {
      customList = [];
    }
  }
  customList.unshift(newReel);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customList));
  return customList;
};

export const deleteCustomReel = (reelId) => {
  // Can only delete custom reels (owner-added), not the static public ones
  const current = localStorage.getItem(STORAGE_KEY);
  if (current) {
    try {
      let customList = JSON.parse(current) || [];
      customList = customList.filter(r => r.id !== reelId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customList));
      // Return merged list: custom + static
      return [...customList, ...initialReels];
    } catch {
      return [...initialReels];
    }
  }
  return [...initialReels];
};

/**
 * Direct unsigned upload to Cloudinary (no backend required!)
 */
export const uploadToCloudinary = async (file, cloudName, uploadPreset, onProgress) => {
  if (!cloudName || !uploadPreset) {
    throw new Error('Please enter your Cloud Name and Unsigned Upload Preset.');
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('resource_type', 'video');

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable && onProgress) {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress(percent);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response.secure_url || response.url);
        } catch {
          reject(new Error('Failed to parse Cloudinary response'));
        }
      } else {
        try {
          const errRes = JSON.parse(xhr.responseText);
          reject(new Error(errRes.error?.message || `Upload failed with status ${xhr.status}`));
        } catch {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      }
    };

    xhr.onerror = () => reject(new Error('Network error during video upload'));
    xhr.send(formData);
  });
};
