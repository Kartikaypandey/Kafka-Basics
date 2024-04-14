# Kafka Setup using Docker

This repository contains scripts (`admin.js`, `producer.js`, `consumer.js`) to interact with Kafka, along with instructions on setting up Kafka using Docker containers.

## Prerequisites

- Docker installed on your system. You can download and install Docker from [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/).

## Setup Kafka with Docker

1. Start Zookeeper Container and expose PORT 2181:

    ```bash
    docker run -p 2181:2181 zookeeper
    ```

2. Start Kafka Container, expose PORT 9092, and setup ENV variables:

    ```bash
    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
    ```

    Replace `<PRIVATE_IP>` with your server's private IP address.

## Usage

1. **admin.js**: Script to perform administrative tasks in Kafka.

2. **producer.js**: Script to produce messages to Kafka topics.

3. **consumer.js**: Script to consume messages from Kafka topics.

## Running the Scripts

1. Clone this repository:

    ```bash
    git clone https://github.com/Kartikaypandey/Kafka-Basics.git
    ```

2. Navigate to the cloned directory:

    ```bash
    cd Kafka-Basics
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the desired script:

    ```bash
    node admin.js
    ```

    ```bash
    node producer.js
    ```

    ```bash
    node consumer.js
    ```

    Replace `admin.js`, `producer.js`, or `consumer.js` with the respective script name you want to execute.

## License
