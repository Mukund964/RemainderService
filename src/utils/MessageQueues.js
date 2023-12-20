const amqplib = require('amqplib');
const {EXCHANGE_NAME,MSG_BROKER_URL} = require('../config/serverConfig');

const createChannel = async() => {
    try {
        const connection = await amqplib.connect(MSG_BROKER_URL);
        const channel = await connection.createChannel()
        await Channel.assertExchange(EXCHANGE_NAME,'direct',false);
        return channel;
        
    } catch (error) {
        throw error;
    }
}

const subscribeMessage = async(channel,service,binding_Key) =>{
    try {
        const applicationQueue = await channel.assertQueue('QUEUE_NAME');
        channel.bindQueue(applicationQueue,EXCHANGE_NAME,binding_Key);
        channel.consume(applicationQueue.queue,msg => {
            console.log('Receivied data');
            console.log(msg.content.toString());
            channel.ack(msg);
        })
    } catch (error) {
        throw error;
    }
}

const publishMessage = async(channel, binding_Key,message) => {
    try {
        await channel.publishMessage(EXCHANGE_KEY,binding_Key,buffer.from(message));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChannel,
    subscribeMessage,
    publishMessage
}