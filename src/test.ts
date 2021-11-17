import KeyValueStore from '.';

const kvs = new KeyValueStore();

(async () => {
  await kvs.newApiKey();
  await kvs.set('hello', 'world');

  const kvs2 = new KeyValueStore(kvs.apiKey);
  const value = await kvs2.get('hello');
  console.log(value);
})();
