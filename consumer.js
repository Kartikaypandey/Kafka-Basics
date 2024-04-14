const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.1.3:9092'],
});

const group = process.argv[2];

async function init(){
    const consumer = kafka.consumer({ groupId: group });
    await consumer.connect();
    await consumer.subscribe({ topics: ['rider-updates'] , fromBeginning: true})

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`Topic: ${topic}  Partition: ${partition}   Message:` , message.value.toString());
        },
    })
}

init()