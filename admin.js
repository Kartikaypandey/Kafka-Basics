const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.1.3:9092'],
});

// Creating Kafka Admin for taking care of
// topic, partition, replication creation

async function init() {
  // Creating Kafka Admin
  const admin = kafka.admin();
  console.log('Connecting to admin');
  await admin.connect(); // Add await here
  console.log('Connected to admin');

  // Creating Topics
  console.log('Creating Topic: [rider-updates]');
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log('Topic : [rider-updates] created');
  console.log("Disconnecting Admin..");
  await admin.disconnect();
}
init();
