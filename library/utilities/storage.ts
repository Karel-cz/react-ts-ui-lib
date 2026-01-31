export const storage = {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get(key: string, defaultValue: any = null) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  }
};
