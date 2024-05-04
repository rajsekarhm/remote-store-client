import { createClient } from "redis";
class Redis {
  startRedis($url) {
    this.client = createClient({
      legacyMode: false,
      socket: {
        connectTimeout: 10000,
      },
      url: $url,
    });
  }

  async setInfo(key, value) {
    this.client.set(JSON.stringify(key), JSON.stringify(value));
  }

  async getInfo(key) {
    return this.client.get(JSON.stringify(key));
  }

  async Mset(bindInput) {
    // [key,value]
    this.client.mSet(bindInput);
  }

  async Mget(keyAsArray) {
    return this.client.MGET(keyAsArray);
  }

  async deleteInfo(key) {
    this.client.del(key);
  }

  async getKeys() {
    return this.client.keys;
  }

  async setHashes(key, value) {
    this.client.hSet(key, value);
  }

  async getHashes(key) {
    return this.client.hGet(key);
  }
}

export { Redis };

//`rediss://default:**********************@usw1-obliging-elf-${port}.upstash.io:${port}`
