import axios from 'axios';

// Ref: https://keyvalue.immanuel.co/
class KeyValueStore {
  apiKey = '';

  constructor(apiKey = '') {
    this.apiKey = apiKey;
  }

  async newApiKey() {
    const r = await axios.get(
      'https://keyvalue.immanuel.co/api/KeyVal/GetAppKey'
    );
    this.apiKey = r.data;
  }

  async set(key: string, value: string) {
    if (this.apiKey === '') {
      throw new Error('apiKey is empty');
    }
    await axios.post(
      `https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${this.apiKey}/${key}/${value}`
    );
  }

  async get(key: string): Promise<string> {
    if (this.apiKey === '') {
      throw new Error('apiKey is empty');
    }
    const r = await axios.get(
      `https://keyvalue.immanuel.co/api/KeyVal/GetValue/${this.apiKey}/${key}`
    );
    return r.data;
  }
}

export default KeyValueStore;
