class PacketReceiver {
    constructor() {
        this.received = new Set(); 
        this.nextExpected = 1;     
    }

    ack(id) {
        this.received.add(id);

        // Move pointer forward while packets exist
        while (this.received.has(this.nextExpected)) {
            this.received.delete(this.nextExpected); // optional optimization
            this.nextExpected++;
        }

        return true;
    }

    nextLeastAck() {
        return this.nextExpected;
    }
}

const pr = new PacketReceiver();

pr.ack(3);
console.log(pr.nextLeastAck());  
pr.ack(1);
console.log(pr.nextLeastAck());  
pr.ack(2);
console.log(pr.nextLeastAck());  
pr.ack(5);
console.log(pr.nextLeastAck());  

