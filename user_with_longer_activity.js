function findLongestActiveUser(logs, k) { //top k users
    let map = {}; // user → {min, max}

    // 1. collect min & max times
    for (let entry of logs) {
        let user = entry.user_id;
        let time = entry.timestamp;

        if (!map[user]) {
            map[user] = { min: time, max: time };
        } else {
            if (time < map[user].min) map[user].min = time;
            if (time > map[user].max) map[user].max = time;
        }
    }

    // 2. find user with longest duration
    let bestUsersList = []
    while (k > 0){
        let bestUser = null;
        let bestDuration = -Infinity;
        
        for (let user in map) {
            if(!map[user]) continue;
            let duration = map[user].max - map[user].min;
            if (duration > bestDuration) {
                bestDuration = duration;
                bestUser = user;
            }
        }
        map[bestUser] = null;
        bestUsersList.push(bestUser)
        k--;
    }

    return bestUsersList;
}

let logs = [ {"user_id": "alice", "timestamp": 5}, {"user_id": "bob", "timestamp": 1}, {"user_id": "carol", "timestamp": 9}, {"user_id": "dave", "timestamp": 3}, {"user_id": "eve", "timestamp": 18}, {"user_id": "frank", "timestamp": 14}, {"user_id": "grace", "timestamp": 7}, {"user_id": "heidi", "timestamp": 11}, {"user_id": "alice", "timestamp": 25}, {"user_id": "bob", "timestamp": 30}, {"user_id": "carol", "timestamp": 22}, {"user_id": "dave", "timestamp": 19}, {"user_id": "eve", "timestamp": 27}, {"user_id": "frank", "timestamp": 21}, {"user_id": "grace", "timestamp": 17}, {"user_id": "heidi", "timestamp": 33}, {"user_id": "alice", "timestamp": 40}, {"user_id": "bob", "timestamp": 9}, {"user_id": "carol", "timestamp": 5}, {"user_id": "dave", "timestamp": 50}, {"user_id": "eve", "timestamp": 8}, {"user_id": "frank", "timestamp": 2}, {"user_id": "grace", "timestamp": 44}, {"user_id": "heidi", "timestamp": 4}, {"user_id": "alice", "timestamp": 38}, {"user_id": "bob", "timestamp": 47}, {"user_id": "carol", "timestamp": 16}, {"user_id": "dave", "timestamp": 6}, {"user_id": "eve", "timestamp": 42}, {"user_id": "frank", "timestamp": 34} ]

console.log(`Result ::`, findLongestActiveUser(logs,3));
