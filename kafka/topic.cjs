const { Kafka } = require("kafkajs");
// the client ID lets kafka know who's producing the messages
const clientId = "mysql-kafka"
// we can define the list of brokers in the cluster
const brokers = ["localhost:9093"]
// this is the topic to which we want to write messages
const topic = "my-topic"

const produceMessage = async (preguntaInput) => {
    // initialize a new kafka client and initialize a producer from it
    const kafka = new Kafka({ clientId, brokers });

    const producer = kafka.producer();

    await producer.connect();

    let message = JSON.stringify(preguntaInput);
    console.log(message);

    await producer.send({
        topic: topic,
        messages: [
            { value: message },
        ],
    });

    await producer.disconnect();
}

module.exports.produceMessage = produceMessage