const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.1.3:9092'],
});

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

async function init() {
  const producer = kafka.producer();

  try {
    console.log('Connecting to Producer');
    await producer.connect();
    console.log('Producer Connected');
    
    

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    const randomNumber = Math.floor(Math.random() * 2);
    const location = randomNumber == 0 ? 'North' : 'South';

    console.log('Producer Sending messages');
    await producer.send({
      topic: 'rider-updates',
      messages: [
        {
          partition: randomNumber,
          key: 'location-update',
          value: JSON.stringify({ name: randomName, location: location }),
        }
      ],
    });
    console.log('Producer message sent');
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    console.log('Disconnecting Producer');
    await producer.disconnect();
    console.log('Producer Disconnected');
  }
}

init();
